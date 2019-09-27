<template>
	<view class="body index-body">
		<div class="real-body">
		
			<div class="box-list">
				
				<div class="tr-pic">
					<div class="tr-pic-title">订单号：201910005262</div>
					<div class="tr-pic-body">
						<div>
							<span class="tr-pic-body-left">订单状态：</span>
							<span class="color-blue">等待对方确认</span>
							<span class="complaint">投诉</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">交易金额：</span>
							<span class="color-white">8000.00</span>
						</div>

						<div>
							<span class="tr-pic-body-left">银行卡号：</span>
							<span class="color-white">6211555200005320875</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">收益：</span>
							<span class="color-white">48.00</span>
						</div>
					</div>
				</div>
				
				
				<div class="tr-pic">
					<div class="tr-pic-title">订单号：201910005262</div>
					<div class="tr-pic-body">
						<div>
							<span class="tr-pic-body-left">订单状态：</span>
							<span class="color-white">成功</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">交易金额：</span>
							<span class="color-white">8000.00</span>
						</div>
				
						<div>
							<span class="tr-pic-body-left">银行卡号：</span>
							<span class="color-white">6211555200005320875</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">收益：</span>
							<span class="color-white">48.00</span>
						</div>
					</div>
				</div>
				
				<div class="tr-pic">
					<div class="tr-pic-title">订单号：201910005262</div>
					<div class="tr-pic-body">
						<div>
							<span class="tr-pic-body-left">订单状态：</span>
							<span class="color-white">成功</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">交易金额：</span>
							<span class="color-white">8000.00</span>
						</div>
				
						<div>
							<span class="tr-pic-body-left">银行卡号：</span>
							<span class="color-white">6211555200005320875</span>
						</div>
						
						<div>
							<span class="tr-pic-body-left">收益：</span>
							<span class="color-white">48.00</span>
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
				
			};
		},

		methods: {
		
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
