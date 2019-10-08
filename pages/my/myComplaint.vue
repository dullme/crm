<template>
	<view class="body index-body">
		<div class="real-body">
			
			<div class="box-list" style="margin-bottom: 100upx;">
				
				<div class="tr-pic" v-for="item in complaint_list">
					<div class="tr-pic-title">订单号：{{  item.withdraw.order_no }}</div>
					<div class="tr-pic-body">
						<div>
							<span class="tr-pic-body-left">投诉类型：</span>
							<span style="margin-top: 20upx;">{{ item.type==1?'交易':'提现' }}</span>
						</div>
						<div>
							<span class="tr-pic-body-left">投诉状态：</span>
							<span :class="item.status == 2 ? 'color-white' : 'color-blue'">{{ getStatus(item.status) }}</span>
						</div>
						
						<div v-if="item.replay" style="display: flex;flex-flow: column;align-items: flex-start;">
							<span>回复内容：</span>		
							<span style="margin-top: 20upx;color: #FFFFFF;">{{ item.replay }}</span>
						</div>
				
						<div style="display: flex;flex-flow: column;align-items: flex-start;">
							<span>投诉内容：</span>		
							<span style="margin-top: 20upx;">{{ item.content }}</span>
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
				complaint_list:[]
			};
		},
		
		onLoad() {
			let accessToken = this.getGlobalAccessToken();
			if(accessToken != null){
				//获取用户信息
				uni.request({
					url: this.serverUrl + 'complaint-list',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							this.complaint_list=res.data.data;
								
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
			
			getStatus(status){
				if(status == 0){
					return "待受理"
				}
				
				if(status == 1){
					return "客服处理中"
				}
				
				if(status == 2){
					return "处理完毕"
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
</style>
