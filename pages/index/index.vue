<template>
	<view class="body index-body">
		<navigator url="../info/info" class="box" style="background-color: #F0F8FF;">
			<view class="icon">
				<image src="../../static/icons/tianjia@3x.png" mode="aspectFit"></image>
			</view>
			<span style="color: #008EFF;">新客户</span>
		</navigator>
		<view class="box" style="background-color: #F7F7FF;" @tap="contacts">
			<view class="icon">
				<image src="../../static/icons/kehugenjin@3x.png"></image>
			</view>
			<span style="color: #6C6CDF;">联系人</span>
		</view>
		<view class="box" style="background-color: #FFFAF5;" @tap="contractManagement">
			<view class="icon">
				<image src="../../static/icons/hetongdengji@3x.png"></image>
			</view>
			<span style="color: #FFA604;">合同管理</span>
		</view>
		<view class="box" style="background-color: #FFF5F4;" @tap="paymentManagement">
			<view class="icon">
				<image src="../../static/icons/benqihuikuan@3x.png"></image>
			</view>
			<span style="color: #FF6758;">回款管理</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: false,
				userInfo: {}
			};
		},
		onLoad() {
			let me = this;
			var userInfo = me.getGlobalUser("globalUser");
			if (userInfo != null) {
				me.userIsLogin = true;
				me.userInfo = userInfo;
				console.log(userInfo);
				
				var serverUrl = me.serverUrl;
				//获取用户信息
				uni.request({
					url: serverUrl + 'user-info',
					header: {
						"Authorization": me.userInfo.token,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						console.log(res);
					}
				});
				
				
				
			} else {
				me.userIsLogin = false;
				me.userInfo = {};
				uni.showModal({
				    title: '未登录',
				    content: '您未登录，需要登录后才能继续',
					showCancel: false,
				    success: (res) => {
				        if (res.confirm) {
							uni.reLaunch({
							    url: '../registLogin/registLogin'
							});
				        }
				    }
				});
			}
		},
		methods: {
			contacts: function (e) {
				uni.showModal({
					title: "联系人",
					content: "联系人请从客户管理进入",
					showCancel: false,
					confirmText: "确定"
				})
			},
			
			contractManagement: function (e) {
				uni.showModal({
					title: "合同管理",
					content: "测试版，需根据具体情况录入模板",
					showCancel: false,
					confirmText: "确定"
				})
			},
			
			paymentManagement: function (e) {
				uni.showModal({
					title: "回款管理",
					content: "测试版，需根据具体情况录入模板",
					showCancel: false,
					confirmText: "确定"
				})
			},
		}
	}
</script>

<style>
	.index-body{
		margin-top: 60upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.box{
		width: 47%;
		margin-bottom: 6%;
		box-sizing: border-box;
		border-radius: 15upx;
		text-align: center;
		padding-top: 100upx;
		padding-bottom: 100upx;
	}
	
	.box .icon{
		text-align: center;
		margin: 0 auto;
		width: 80upx;
		height: 80upx;
	}
	
	.box .icon image{
		text-align: center;
		width: 80%;
		height: 80%;
	}

	
</style>
