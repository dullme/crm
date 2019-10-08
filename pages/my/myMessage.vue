<template>
	<view class="body index-body">
		<div class="real-body">
			
			<div class="box-list" style="margin-bottom: 100upx;">
				
				<div class="message" v-for="item in message_list">
					<p style="margin-bottom: 20upx;display: flex;justify-content: space-between;align-items: center;">
						<span v-if="item.is_read == 0" style="line-height: 32upx;font-size: 22upx;color: #FFAB32;border:1px solid #FFAB32;border-radius: 6upx;padding: 0 10upx;margin-right: 10upx;">new</span>
						<span style="flex: 1;">{{ item.title }}</span>
						<span style="font-size: 22upx;color: #6A77A0;">{{ item.created_at.substr(11,5) }}</span>
					</p>
					<p style="color: #6A77A0;">{{ item.content }}</p>
				</div>
				
			</div>
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message_list:[]
			};
		},
		
		onLoad() {
			let accessToken = this.getGlobalAccessToken();
			if(accessToken != null){
				//获取用户信息
				uni.request({
					url: this.serverUrl + 'messages',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							this.message_list=res.data.data;
								
						} else if (res.data.code == 422) {
							uni.showToast({
								title: res.data.message,
								image: "../../static/icons/warning.png"
							})
						}
					}
				});
			}
		},

		methods: {
			
		}
	}
</script>

<style>
	page{
		background: #19233C;
	}
	
	.body{
		padding: 0;
		width: 100%;
		height: 100%;
		color: white;
		background: #19233C;
		color:#E9EAEB;
	}
	
	.real-body{
		margin-top: 60upx;
		padding: 0upx 50upx 0 50upx;
	}
	
	.box-list{
		font-size: 30upx;
	}
	
	.message{
		background-color: #2A3452;
		padding: 35upx;
		border-radius: 8upx;
		font-size: 26upx;
		margin-bottom: 20upx;
	}
	
</style>
