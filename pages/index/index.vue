<template>
	<view class="body index-body">
		<div class="real-body">
			<div class="title">聚财通汇</div>

			<!-- <div v-if="userInfo.message" class="message" style="margin-left: -50upx;margin-right: -50upx;display: flex;align-items: center;padding: 20upx 30upx;">
				<image style="width: 30upx;height: 30upx;margin-right: 20upx;" src="../../static/notice_icon.png"></image>
				<marquee style="flex: 1;font-size: 30upx;color: #a3a4a5;">{{ userInfo.message }}</marquee>
			</div> -->

			<uni-notice-bar v-if="message_text" background-color="unset" speed="50" color="#a3a4a5" scrollable="true" single="true" :text="message_text"></uni-notice-bar>


			<div class="amount" :class="message_text ? 'message-amount' : ''">
				<image src="../../static/index-bg.png"></image>
				<div class="amount-text">
					<p>当日可抢额度</p>
					<p>{{ index_amount }}</p>
				</div>
			</div>

			<div class="buttom-list">
				<button @click="submitDeposit()">保证金<span v-if="deposit_amount > 0">({{ deposit_amount }})</span></button>
				<button class="grab" @click="grabOrder()">立即抢单</button>
			</div>

			<div class="my-info">
				<div class="my-info-title">
					<span>我的信息</span>
				</div>

				<div class="info-content">
					<div class="info-content-top">
						<div class="div-image">
							<div class="div-image-o"><image :src="userInfo.user_bank_image"></image></div>
							<span>{{ userInfo.bank_name }}</span>
						</div>
						<div>
							<span class="has-card">持卡人：</span><span class="my-name">{{ userInfo.name }}</span>
						</div>

					</div>
					<div class="card-number">{{ userInfo.bank_card ? userInfo.bank_card.replace(/(\d{4})(?=\d)/g,"$1"+" ") : '' }}</div>
					<div>
						<div class="div-image div-image-samll">
							<div class="div-image-o"><image src="../../static/ketixian_icon.png"></image></div>
							<div>
								<span>可提现额度：</span>
								<span class="has-amount">{{ withdraw_amount }}</span>
							</div>

						</div>
					</div>
				</div>

			</div>

		</div>
	</view>
</template>

<script>
	import uniNoticeBar from '../../components/uni-notice-bar/uni-notice-bar.vue'


	export default {
		components: {
			uniNoticeBar
		},
		data() {
			return {
				userInfo: {},
				message_text:'',
				deposit_amount:0,
				deposit:0,
				withdraw_amount:0,
				index_amount:0,
				deposit_enough_message:'',
			};
		},
		onShow() {

			this.getUserInfo();

		},

		onPullDownRefresh() {
			this.getUserInfo();
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 100);
		},

		methods: {

			getUserInfo(){
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
								this.message_text = res.data.data.message

								if(!this.userInfo.bank_card || !this.userInfo.bank_name || !this.userInfo.name){
									uni.showModal({
									    title: '完善个人信息',
									    content: '请完善银行信息',
										showCancel: false,
									    success: (res) => {
									        if (res.confirm) {
												uni.navigateTo({
													url: '../my/myInfo'
												});
									        }
									    }
									});
								}

							}else if(res.data.code == 429){
								uni.showToast({
									title: res.data.message,
									image: "../../static/icons/warning.png"
								})
							} else {
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

								return null;
							}
						}
					});
				}


				uni.request({
					url: this.serverUrl + 'deposit-count',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						if(res.data.code == 200){
							this.deposit_amount = res.data.data.deposit_amount;
							this.deposit_enough_message = res.data.data.deposit_enough_message
							this.deposit = res.data.data.deposit;
							this.withdraw_amount = res.data.data.withdraw_amount;
							this.index_amount = res.data.data.index_amount;
						}

					}
				});

			},

			submitDeposit(){
				if(this.deposit_amount >= this.deposit){
					uni.showModal({
						title: "保证金",
						content: this.deposit_enough_message,
						showCancel: false,
						confirmText: "确定"
					})
				}else{
					uni.navigateTo({
						url:"../my/deposit"
					})
				}
			},

			grabOrder(){
				let accessToken = this.getGlobalAccessToken();
				uni.request({
					url: this.serverUrl + 'grab-order',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							uni.showModal({
								title: "抢单成功",
								content: res.data.message,
								showCancel: false,
								confirmText: "确定",
								success:res => {
									if (res.confirm) {
										uni.switchTab({
											url:"../my/grab"
										})
									}

								}
							})

						} else if (res.data.code == 422) {

							uni.showModal({
								title: "抢单失败",
								content: res.data.message,
								showCancel: false,
								confirmText: "确定"
							})
						}
					}
				});
			},

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
	page{
		background: #19233C;
		height: 100%;
	}

	.body{
		padding: 0;
		width: 100%;
		height: 100%;
		color: white;
		background: #19233C url('../../static/bg.png') no-repeat fixed bottom center;
		background-size:100%;
	}

	.real-body{
		padding: 50upx 50upx 0 50upx;
		background: url('../../static/bg-top.png') no-repeat fixed top center;
		background-size:100%;
	}

	.real-body .uni-noticebar{
		margin-left: -50upx;
		margin-right: -50upx;
	}

	.title{
		font-size: 40upx;
		text-align: center;
	}

	.amount{
		padding: 50upx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.message-amount{
		padding: 0 0 50upx 0;
	}


	.amount image{
		width: 360upx;
		height: 360upx;
		z-index: 1;
	}

	.amount .amount-text{
		z-index: 2;
		position: absolute;
		text-align: center;
	}

	.amount .amount-text p:first-child{
		color: #475474;
		font-size: 25upx;
		margin-bottom: 10upx;
	}

	.amount .amount-text p:last-child{
		font-size: 40upx;
		font-weight: 800;
	}

	.buttom-list{
		display: flex;
		justify-content: space-between;
	}

	.buttom-list button{
		flex: 1;
		font-size: 30upx;
		border-radius: 100upx;
		color: white;
		padding: 5upx;
		text-align: center;

	}

	.buttom-list button:first-child{
		margin-right: 20upx;
		background-image: linear-gradient(141deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
	}

	.buttom-list button:last-child{
		margin-left: 20upx;
		background-image: linear-gradient(141deg, #FFC253 30%, #FFB249 61%, #FFAB45 100%);
	}

	.my-info{
		padding-top: 20upx;
	}

	.my-info-title:before{
		content: " ";
		padding: 0 4upx;
		height: 32upx;
		background-color: #007AFF;
		border-radius: 0 10upx 10upx 0;
		margin-right: 20upx;
		background-image: linear-gradient(180deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
	}

	.my-info-title{
		display: inline-flex;
		align-items: center;
		margin-top: 55upx;
		margin-bottom: 35upx;
		font-size: 32upx;
		color:#E9EAEB !important;
	}

	.info-content{
		background-color: #283451;
		border-radius: 20upx;
		display: flex;
		flex-flow: column;
		padding: 30upx 40upx;
	}

	.info-content .info-content-top{
		font-size: 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.div-image{
		display: flex;
		align-items: center;
	}

	.has-card, .div-image span{
		color:#475474;
	}

	.div-image-o{
		display: flex;
		border-radius: 100upx;
		width: 50upx;
		height: 50upx;
		background-color: #FFFFFF;
		padding: 15upx;
		margin-right: 15upx;
	}

	.div-image image{
		width: 100%;
		height: 100%;
	}

	.card-number{
		text-align: center;
		padding: 20upx 0;
		color:#E9EAEB !important;
	}

	.div-image-samll .div-image-o{
		width: 40upx;
		height: 40upx;
		margin-right: 22upx;
		background-color: #161F37;
	}

	.div-image-samll{
		font-size: 30upx;
	}

	.has-amount, .my-name{
		color:#E9EAEB !important;
	}


</style>
