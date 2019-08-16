<template>
	<view class="index-body">
		<view class="box" style="background-color: #F0F8FF;">
			<view class="icon">
				<image src="../../static/icons/tianjia@3x.png" mode="aspectFit"></image>
			</view>
			<span style="color: #008EFF;">新客户</span>
		</view>
		<view class="box" style="background-color: #F7F7FF;">
			<view class="icon">
				<image src="../../static/icons/kehugenjin@3x.png"></image>
			</view>
			<span style="color: #6C6CDF;">客户管理</span>
		</view>
		<view class="box" style="background-color: #FFFAF5;">
			<view class="icon">
				<image src="../../static/icons/hetongdengji@3x.png"></image>
			</view>
			<span style="color: #FFA604;">合同管理</span>
		</view>
		<view class="box" style="background-color: #FFF5F4;">
			<view class="icon">
				<image src="../../static/icons/benqihuikuan@3x.png"></image>
			</view>
			<span style="color: #FF6758;">回款管理</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.index-body{
		display: flex;
		flex-wrap: wrap;
		padding: 100upx 40upx 0 40upx;
		justify-content: space-between;
	}
	
	.box{
		width: 47%;
		margin-bottom: 6%;
		box-sizing: border-box;
		border-radius: 15upx;
		text-align: center;
		padding-top: 100upx;
		padding-bottom: 100upx;
	}
	
	.box .icon{
		text-align: center;
		margin: 0 auto;
		width: 80upx;
		height: 80upx;
	}
	
	.box .icon image{
		text-align: center;
		width: 80%;
		height: 80%;
	}

	
</style>
