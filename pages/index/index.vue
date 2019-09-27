<template>
	<view class="body index-body">
		<div class="real-body">
			<div class="title">APP Name</div>
			<div class="amount">
				<image src="../../static/index-bg.png"></image>
				<div class="amount-text">
					<p>当日可抢额度</p>
					<p>16054.50</p>
				</div>
			</div>
			
			<div class="buttom-list">
				<button type="default">保证金(2000.00)</button>
				<button type="default">立即抢单</button>
			</div>
			
			<div class="my-info">
				<div class="my-info-title">
					<span>我的信息</span>
				</div>
				
				<div class="info-content">
					<div class="info-content-top">
						<div class="div-image">
							<div class="div-image-o"><image src="../../static/bank_icon.png"></image></div>
							<span>交通银行</span>
						</div>
						<div>
							<span class="has-card">持卡人：</span><span class="my-name">张满月</span>
						</div>
						
					</div>
					<div class="card-number">6222 0188 4511 4785 454</div>
					<div>
						<div class="div-image div-image-samll">
							<div class="div-image-o"><image src="../../static/ketixian_icon.png"></image></div>
							<div>
								<span>可提现额度：</span>
								<span class="has-amount">5000.00</span>
							</div>
							
						</div>
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
			};
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
			
			
			
						
			// if (accessToken != null) {
			// 	me.userIsLogin = true;
			// 	me.userInfo = userInfo;
			// 	console.log(userInfo);
			// 	
			// 	var serverUrl = me.serverUrl;
			// 	//获取用户信息
			// 	uni.request({
			// 		url: serverUrl + 'user-info',
			// 		header: {
			// 			"Authorization": me.userInfo.token,
			// 			"Accept":'application/json'
			// 		},
			// 		method: "GET",
			// 		success: (res) => {
			// 			console.log(res);
			// 		}
			// 	});
			// 	
			// 	
			// 	
			// } else {
			// 	me.userIsLogin = false;
			// 	me.userInfo = {};
			// 	uni.showModal({
			// 	    title: '未登录',
			// 	    content: '您未登录，需要登录后才能继续',
			// 		showCancel: false,
			// 	    success: (res) => {
			// 	        if (res.confirm) {
			// 				uni.reLaunch({
			// 				    url: '../registLogin/registLogin'
			// 				});
			// 	        }
			// 	    }
			// 	});
			// }
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
	
	.title{
		font-size: 40upx;
		text-align: center;
	}
	
	.amount{
		padding: 70upx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
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
		padding: 12upx;
		color: white;
		
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
		padding-top: 40upx;
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
		padding: 15upx;
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
