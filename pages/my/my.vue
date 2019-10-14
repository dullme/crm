<template>
	<view class="body index-body">
		<div class="real-body">
			<div class="my-box-card">
				<image src="../../static/avatar.png"></image>
				<div style="flex: 1;">
					<div style="display: flex;align-items: center; justify-content: space-between;">
						<span>{{ userInfo.name ? userInfo.name : userInfo.username }}</span>
						<div @click="toMessage()">
							<image style="width: 40upx;height: 40upx;" src="../../static/message.png"></image>
							<span :class="message?'has-message':''" ></span>
						</div>
						
					</div>
					<p class="my-code" @click="copy(userInfo.invitation_code)">推荐码：{{ userInfo.invitation_code }}</p>
				</div>
			</div>
			
			<div class="memu-list">
				<navigator url="myTeam" open-type="navigate">
					<div class="memu-pic">
						<div class="left-pic">
							<image src="../../static/mine_team.png"></image>
							<span>我的团队</span>
						</div>
						<image src="../../static/pointer.png"></image>
					</div>
				</navigator>
				
				<navigator url="myTransaction" open-type="navigate">
					<div class="memu-pic">
						<div class="left-pic">
							<image src="../../static/mine_jiaoyi.png"></image>
							<span>我的交易</span>
						</div>
						<image src="../../static/pointer.png"></image>
					</div>
				</navigator>
				
				<navigator url="withdraw" open-type="navigate">
					<div class="memu-pic">
						<div class="left-pic">
							<image src="../../static/mine_tixian.png"></image>
							<span>申请提现</span>
						</div>
						<image src="../../static/pointer.png"></image>
					</div>
				</navigator>
				
				<navigator url="myWithdraw" open-type="navigate">
					<div class="memu-pic">
						<div class="left-pic">
							<image src="../../static/mine_jilu.png"></image>
							<span>提现记录</span>
						</div>
						<image src="../../static/pointer.png"></image>
					</div>
				</navigator>
				
				<navigator url="myInfo" open-type="navigate">
					<div class="memu-pic">
						<div class="left-pic">
							<image src="../../static/mine_xinxi.png"></image>
							<span>我的信息</span>
						</div>
						<image src="../../static/pointer.png"></image>
					</div>
				</navigator>
				
				<navigator url="myComplaint" open-type="navigate">
					<div class="memu-pic">
						<div class="left-pic">
							<image src="../../static/mine_tousu.png"></image>
							<span>我的投诉</span>
						</div>
						<image src="../../static/pointer.png"></image>
					</div>
				</navigator>
				
				<navigator url="../update/index" open-type="navigate">
					<div class="memu-pic">
						<div class="left-pic">
							<image src="../../static/mine_tixian.png"></image>
							<span>更新</span>
						</div>
						<image src="../../static/pointer.png"></image>
					</div>
				</navigator>
				
				<div @click="exit()">
					<div class="memu-pic" style="border-bottom: 0;">
						<div class="left-pic">
							<image src="../../static/mine_tixian.png"></image>
							<span>注销</span>
						</div>
						<image src="../../static/pointer.png"></image>
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
				userInfo: {},
				message:0
			};
		},
		onShow() {
			let accessToken = this.getGlobalAccessToken();
			uni.request({
				url: this.serverUrl + 'message-count',
				header: {
					"Authorization": accessToken,
					"Accept":'application/json'
				},
				method: "GET",
				success: (res) => {
					this.message = res.data.data;
				}
			});
		},
		
		onLoad() {
			let accessToken = this.getGlobalAccessToken();
			if(accessToken != null){
				//获取用户信息
				uni.request({
					url: this.serverUrl + 'user-info',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						if(res.data.code == 200){
							this.userInfo = res.data.data;
						}else if(res.data.code == 429){
							uni.showToast({
								title: res.data.message,
								image: "../../static/icons/warning.png"
							})
						}else{
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
					}
				});
			}
		},
		methods: {
			exit(){
				
				uni.showModal({
				    title: '注销',
				    content: '确定退出登录',
					showCancel: true,
				    success: (res) => {
				        if (res.confirm) {
							this.removeGlobalAccessToken();
							uni.reLaunch({
							    url: '../registLogin/registLogin'
							});
				        }
				    }
				});
				
			
			},
			copy(text){
				uni.setClipboardData({
				    data: text,
				    success: function () {
				        console.log('success');
				    }
				});
			},
			toMessage(){
				uni.navigateTo({
					url: "../my/myMessage"
				})
			}
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
		margin-top: 40upx;
		margin-bottom: 200upx;
		padding: 0upx 50upx 0 50upx;
		background-size:100%;
	}
	
	.my-box-card{
		display: flex;
		align-items: center;
		background-image: linear-gradient(149deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
		border-radius: 10upx;
		padding: 50upx 40upx;
	}
		
	.my-box-card > image{
		width: 130upx;
		height: 130upx;
		border-radius: 130upx;
		margin-right: 25upx;
	}
	
	.my-code{
		margin-top: 10upx;
		font-size: 30upx;
		color: #B1EAFF;
	}
	
	.has-message:before{
		content: "●";
		color: #F65D6B;
		font-size: 30upx;
		position: absolute;
		margin-left: -26upx;
		margin-top: -10upx;
	}
	
	.memu-list{
		border-radius: 10upx;
		background-color: #2A3452;
		margin-top: 25upx;
	}
	
	.memu-pic{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 35upx 0;
		border-bottom: 1px solid #323D5E;
	}

	
	.memu-list navigator, .memu-list > div{
		padding: 0 40upx;
	}
	
	.left-pic{
		display: flex;
		align-items: center;
		font-size: 30upx;
	}
	
	
	.left-pic > image{
		width: 40upx;
		height: 40upx;
		margin-right: 20upx;
	}
	
	.memu-pic > image{
		width: 25upx;
		height: 25upx;
	}
	
</style>
