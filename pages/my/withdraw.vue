<template>
	<view class="body index-body">
		<div class="real-body">
			
			<div class="memu-list">
				
				<div>
					<span>到账银行卡：</span>
					<span>{{ bankname }}({{ bankcard.substr(bankcard.length-4,4) }})</span>
				</div>
				
				<div style="flex-flow: column;align-items: flex-start;">
					<span>提现金额：</span>
					<input @change="gethandlingFee()" style="margin-top: 40upx;height: 120upx;line-height: 100upx; font-size: 100upx;" type="number" v-model="withdraw_amount" placeholder="0.00" placeholder-style="color:#4E5A7D">
				</div>
				
				<div>
					<span>可用额度：</span>	
					<span style="color: #40BCFF;">{{ amount }}</span>
				</div>
				
				<div>
					<span>平台运营手续费：</span>		
					<span>{{ fee }}</span>
				</div>
				
			</div>
			
			<button class="form-button form-button-active" @click="submit()">提现</button>
			
			<navigator url="depositWithdraw" style="font-size: 30upx; float: right;color: #6A77A0;margin-right: 20upx;margin-top: 100upx;">保证金提现</navigator>
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				withdraw_amount:'',
				amount:'',
				bankcard:'',
				bankname:'',
				operationFee:'',
				fee:0
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
							this.amount = res.data.data.amount;
							this.bankcard = res.data.data.bank_card;
							this.bankname = res.data.data.bank_name;
							this.operationFee = res.data.data.admin_operation_fee;
							this.getOperationFee();
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
		
		watch: {
			withdraw_amount:{
				handler() {
					this.getOperationFee();
				}
			}
		},
		
		methods: {
			getOperationFee(){
				this.fee = (this.operationFee / 100 * this.withdraw_amount).toFixed(2);
			},
			
			submit(){
				let accessToken = this.getGlobalAccessToken();
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'withdraw',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					data: {
						"withdraw_amount": me.withdraw_amount,
					},
					method: "POST",
					success: (res) => {						
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							this.withdraw_amount='';
							this.amount = res.data.data;
							
							uni.showToast({
								title: res.data.message,
								image: "../../static/icons/success.png"
							})
							
							setTimeout(()=>{
								uni.navigateTo({
									url: "../my/myWithdraw"
								})
							}, 1000)
								
						} else if (res.data.code == 422) {
							uni.showModal({
								title: "提现失败",
								content: res.data.message,
								showCancel: false,
								confirmText: "确定"
							})
							
						}
					}
				});
				
				
				
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
		margin-top: 60upx;
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
		font-size: 18upx;
		position: absolute;
		margin-left: -21upx;
		margin-top: -5upx;
	}
	
	.memu-list{
		border-radius: 10upx;
		background-color: #2A3452;
		margin-top: 25upx;
		padding: 0 40upx;
		font-size: 30upx;
		color: #FFFFFF;
	}
	
	.memu-list > div{
		display: flex;
		padding: 35upx 0;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #323D5E;
	}
	
	
	.memu-list > div > span:first-child{
		color: #6A77A0;
	}
	
	.memu-list > div > button{
		border: 1px solid #40BCFF;
		background-color: unset;
		color: #40BCFF;
		font-size: 20upx;
	}
	
	.memu-pic{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 35upx 0;
		border-bottom: 1px solid #323D5E;
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
	
	.message{
		margin-top: 50upx;
		color: #404B70;
		font-size: 20upx;
	}
	
	.form-button{
		margin-top: 100upx;
		border-radius: 100upx;
		padding: 12upx;
		color: white;
		background-image: linear-gradient(141deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
	}
</style>
