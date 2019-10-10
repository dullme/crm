<template>
	<view class="body index-body">
		<div class="message" style="display: flex;align-items: center;background-color: #13182A;padding: 20upx 50upx;">
			<image style="width: 30upx;height: 30upx;margin-right: 20upx;" src="../../static/notice_icon.png"></image>
			<marquee style="flex: 1;font-size: 30upx;color: #6A77A0;">{{ message }}</marquee>
		</div>
		
		
		<div class="real-body">
			<div style="background-color: #2A3452;padding: 0 30upx;border-radius: 10upx;">
				
				<div @click="showOrHide(index)" class="help" v-for="(item,index) in help_list">
					<div style="padding: 30upx 0;display: flex;align-items: center;justify-content: space-between;">
						<div style="display: flex;align-items: center;">
							<div>{{ item.title }}</div>
						</div>
						
						<image style="width: 30upx;height: 30upx;" :src="item.display ?'../../static/jump_top.png' : '../../static/jump_down.png'"></image>
					</div>
					<div class="content" v-if="item.display" style=";padding: 0 0 30upx 0;color: #6A77A0;">
						{{ item.content }}
					</div>
				</div>
				
				
			</div>
			
			
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				help_list:[],
				message:"",
			};
		},
		
		onLoad() {
			this.getHelpList();
		},

		methods: {
			showOrHide(index){
				
				if(this.help_list[index].display){
					this.help_list[index].display = false;
				}else{
					this.help_list[index].display = true;
				}
			},
			
			getHelpList(){
				let accessToken = this.getGlobalAccessToken();
				if(accessToken != null){
					//获取用户信息
					uni.request({
						url: this.serverUrl + 'help-list',
						header: {
							"Authorization": accessToken,
							"Accept":'application/json'
						},
						method: "GET",
						success: (res) => {
							if(res.data.code == 200){
								this.help_list = res.data.data.helps;
								this.message = res.data.data.message;
							}
						}
					});
				}
			},

			back: function (e) {
				uni.navigateBack()
			},
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
		margin-top: 30upx;
		padding: 0upx 40upx 0 40upx;
	}
	
	.help{
		font-size: 30upx;
		border-bottom: 1px solid #323D5E;
		
	}
	
	.help:last-child{
		border-bottom: 0;
		
	}
</style>
