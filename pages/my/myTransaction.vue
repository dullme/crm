<template>
	<view class="body index-body">
		<div class="real-body">
		
			<div class="box-list" style="margin-bottom: 100upx;">
				
				<div class="tr-pic" v-for="item in transaction_list">
					<div class="tr-pic-title">订单号：{{ item.order_no }}</div>
					<div class="tr-pic-body">
						<div>
							<span class="tr-pic-body-left">订单状态：</span>
							<span v-if="item.status == 4" class="color-red">{{ getStatus(item.status) }}</span>
							<span v-else :class="item.status == 3 ? 'color-white' :'color-blue'">{{ getStatus(item.status) }}</span>
							<navigator :url="'../my/complaint?type=1&id='+item.id+'&order_no='+item.order_no+'&status='+item.status+'&withdraw_amount='+item.withdraw_amount+'&bankcard='+item.bankcard+'&brokerage_fee='+item.brokerage_fee" v-if="item.status==2" class="complaint">
								投诉
							</navigator>
						</div>
						
						<div>
							<span class="tr-pic-body-left">交易金额：</span>
							<span class="color-white">{{  item.withdraw_amount }}</span>
						</div>

						<div>
							<span class="tr-pic-body-left">银行卡号：</span>
							<span class="color-white">{{  item.bankcard }}</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">收益：</span>
							<span class="color-white">{{ item.brokerage_fee }}</span>
						</div>
					</div>
				</div>
				
				<div style="text-align:center;padding: 40upx;font-size: 24upx;color: #6A77A0;">仅能查看近{{ display_days }}天的记录</div>
				
			</div>
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				transaction_list:[],
				display_days:''
			};
		},
		
		onLoad() {
			this.getTransactionList();
		},
		
		onPullDownRefresh() {
			this.getTransactionList();
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 100);
		},

		methods: {
			
			getTransactionList(){
				let accessToken = this.getGlobalAccessToken();
				if(accessToken != null){
					//获取用户信息
					uni.request({
						url: this.serverUrl + 'transaction-list',
						header: {
							"Authorization": accessToken,
							"Accept":'application/json'
						},
						method: "GET",
						success: (res) => {
							// 获取真实数据之前，务必判断状态是否为200
							if (res.data.code == 200) {
								this.transaction_list=res.data.data.transaction_list;
								this.display_days = res.data.data.display_days
									
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
			
			getStatus(status){				
				if(status == 1){
					return "等待您出款"
				}
				
				if(status == 2){
					return "等待对方确认"
				}
				
				if(status == 3){
					return "交易成功"
				}
				
				if(status == 4){
					return "交易取消"
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
	
	.color-red{
		color:#F65D6B !important;
	}
	
	.color-blue{
		color:#40BCFF !important;
	}
		
	.complaint{
		color: #FFAB32;
		border: 1px solid #FFAB32;
		padding: 10upx 20upx;
		border-radius: 10upx;
		font-size: 20upx;
		float: right;
	}
	
	.tr-pic-body-left{
		display: inline-block;
		min-width: 160upx;
	}
</style>
