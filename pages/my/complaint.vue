<template>
	<view class="body index-body">
		<div class="real-body">
			
			<div class="box-list" style="margin-bottom: 50upx;">
				
				<div class="tr-pic">
					<div class="tr-pic-title">订单号：{{ order_no }}</div>
					<div class="tr-pic-body">
						<div>
							<span class="tr-pic-body-left">订单状态：</span>
							<span class="color-blue">{{ getStatus(status) }}</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">交易金额：</span>
							<span class="color-white">{{ withdraw_amount }}</span>
						</div>
				
						<div>
							<span class="tr-pic-body-left">银行卡号：</span>
							<span class="color-white">{{ bankcard }}</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">{{  type==1 ? '收益' : '平台手续费' }}：</span>
							<span class="color-white">{{ type==1 ? brokerage_fee:operation_fee }}</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">类型：</span>
							<span class="color-white">{{ type==1?'交易':'提现' }}</span>
						</div>
					</div>
				</div>	
				
			</div>
			
			
			<div class="memu-list">
				
				
				<div style="display: flex;flex-flow: column;align-items: flex-start;">
					<span>投诉内容：</span>		
					<textarea style="padding: 30upx 0;" auto-height v-model="content"/>
				</div>
				
				
			</div>
			
			<button class="form-button form-button-active" @click="submit()">投诉</button>
			
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				order_no:'',
				status:'',
				withdraw_amount:'',
				bankcard:'',
				operation_fee:'',
				brokerage_fee:'',
				content:'',
				type:'',
				message:''
			};
		},
		
		onLoad(options) {
			this.type = options.type;
			this.id = options.id;
			this.order_no = options.order_no;
			this.status = options.status;
			this.withdraw_amount = options.withdraw_amount;
			this.bankcard = options.bankcard;
			this.brokerage_fee = options.brokerage_fee;
			this.operation_fee = options.operation_fee;
			this.getMessage();
		},

		methods: {
			getStatus(status){
				if(this.type==1){
					if(status == 1){
						return "等待您出款"
					}
					
					if(status == 2){
						return "等待对方确认"
					}
					
					if(status == 3){
						return "交易完成"
					}
					
					if(status == 4){
						return "交易取消"
					}
				}else{
					if(status == 0){
						return "等待接单"
					}
					
					if(status == 1){
						return "等待对方出款"
					}
					
					if(status == 2){
						return "对方已出款"
					}
					
					if(status == 3){
						return "交易完成"
					}
					
					if(status == 4){
						return "交易取消"
					}
				}
			},
			
			getMessage(){
				let accessToken = this.getGlobalAccessToken();
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'complaint-message',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						this.message = res.data.data
					}
				});
			},
			
			submit(){
				uni.showModal({
					title: "确定要投诉",
					content: this.message,
					showCancel: true,
					confirmText: "确定",
					success:res => {
						if (res.confirm) {
							let accessToken = this.getGlobalAccessToken();
							let me = this;
							var serverUrl = me.serverUrl;
							uni.request({
								url: serverUrl + 'complaint',
								header: {
									"Authorization": accessToken,
									"Accept":'application/json'
								},
								data: {
									"id": me.id,
									"content": me.content,
								},
								method: "POST",
								success: (res) => {						
									// 获取真实数据之前，务必判断状态是否为200
									if (res.data.code == 200) {							
										uni.showToast({
											title: res.data.message,
											image: "../../static/icons/success.png"
										})
										
										setTimeout(()=>{
											uni.navigateBack()
										}, 1000)
										
									} else if (res.data.code == 422) {
										uni.showToast({
											title: res.data.message,
											image: "../../static/icons/warning.png"
										})
									}
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
				
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
		margin-top: 60upx;
		padding: 0upx 50upx 0 50upx;
	}
	
	.box-list{
		font-size: 30upx;
	}
	
	.tr-pic{
		margin-bottom: 20upx;
		padding: 0 50upx;
		border-radius: 10upx;
		background-color: #2A3452;
	}
	
	.tr-pic-title{
		font-size: 30upx;
		color: #6A77A0;
		padding: 30upx 0;
		border-bottom: 1px solid #323D5E;
	}
	
	.tr-pic-body{
		color: #6A77A0;
		padding: 30upx 0;
	}
	
	.tr-pic-body > div{
		margin-bottom: 20upx;
	}
	
	.tr-pic-body > div:last-child{
		margin-bottom: 0;
	}
	
	.color-white{
		color:#FFFFFF !important;
	}
	
	.color-blue{
		color:#40BCFF !important;
	}
		
	.complaint, .confirm{
		padding: 10upx 20upx;
		border-radius: 10upx;
		font-size: 20upx;
		float: right;
		margin-left: 20upx;
	}
	
	.complaint{
		color: #FFAB32;
		border: 1px solid #FFAB32;
	}
	
	.confirm{
		color: #40BCFF;
		border: 1px solid #40BCFF;
	}
	
	.tr-pic-body-left{
		display: inline-block;
		min-width: 160upx;
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
	
	.form-button{
		margin-top: 80upx;
		margin-bottom:100upx;
		border-radius: 100upx;
		padding: 12upx;
		color: white;
		background-image: linear-gradient(141deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
	}
</style>
