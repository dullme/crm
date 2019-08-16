<template>
	<view class="body">
		<view class="user-card">
			<view class="avatar">
				<image src="../../static/icons/lianxiren@3x.png"></image>
			</view>
			<view class="avatar-right">
				<view class="top-title">
					<span>上海久话网络通信科技有限公司</span>
				</view>
				<view class="bottom-title">
					<span>负责人：李四</span>
					<span>手机：13888888888</span>
				</view>
			</view>
		</view>
		<view class="body-follow">
			<view class="visit-form"></view>
			<view class="visit-form"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-color: #F4F4F4;
	}
	
	.body{
		background-color: #F4F4F4;
		padding-top: 0;
	}
	
	.user-card{
		display: flex;
		margin-left: -40upx;
		margin-right: -40upx;
		padding: 66upx 40upx 26upx 40upx;
		background-color: #FFFFFF;
	}
	
	.user-card .avatar image{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		background-color: #F4F4F4;
		padding: 30upx;
		margin-right: 20upx;
	}
	
	.avatar-right{
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 15upx 0;
	}
	
	.top-title{
		font-size: 36upx;
		color: #222222;
		margin-bottom: 25upx;
		font-weight: 700;
	}
	
	.bottom-title{
		font-size: 28upx;
		color: #666666;
		display: flex;
	}
	
	.bottom-title span:first-child{
		margin-right: 30upx;
	}
	
	.visit-form{
		min-height: 500upx;
		border-radius: 16upx;
		background-color: #FFFFFF;
		margin-top: 40upx;
	}
</style>
