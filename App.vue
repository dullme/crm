<script>
	
	import { checkUpdater } from 'components/checkUpdater.js'
	export default {
		onLaunch: function () {
			checkUpdater(this.$current.id, '../update/index') 
			console.log('App Launch')
			// app打开时先检查是否有更新记录（更新记录会被保存在storage中）
			// 更新记录的内容为 { 更新标记, 安装包位置 }
		    
			// 如果存在更新记录，且更新标记（complete=true）则删除上次使用过的安装包，达到存储释放空间的目的
		    
		    // 如果存在更新记录，且更新标记（complete=false）则进行安装更新 - 2019年3月27日 新增强制更新内容
		
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary') //竖屏正方向锁定
		
			const updated = uni.getStorageSync('updated') // 尝试读取storage
		
			if (updated.completed === true) { // 如果上次刚更新过
				// 删除安装包及安装记录
				console.log('安装记录被删除，更新成功')
				uni.removeSavedFile({ 
					filePath: updated.packgePath,
					success: (res) => {
						uni.removeStorageSync('updated')
					}
				})
			} else if (updated.completed === false) {
				uni.removeStorageSync('updated')
				plus.runtime.install(updated.packgePath, { force: true })
				uni.setStorage({
					key: 'updated',
					data: {
						completed: true,
						packgePath: updated.packgePath
					},
					success: (res) => {
						console.log('成功安装上次的更新，应用需要重启才能继续完成')
					}
				})     				
				uni.showModal({
					title: '提示',
					content: '应用将重启以完成更新',
					showCancel: false,
					complete: () => {
						plus.runtime.restart()
					}
				})
			} else {
				// 检查更新，参数：{ 当前版本号，跳转到更新页面的url }
				checkUpdater(this.$current.id, '../update/index') 
			}
			// #endif
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	page{
		background: #19233C;
	}
	
	/*每个页面公共css */
	.body{
		background: #19233C;
		padding: 35upx;
	}
</style>
