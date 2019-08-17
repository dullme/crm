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
					<view class="content-by-mobile">
						<image src="../../static/icons/mobile.png"></image>
						<span>：13888888888</span>
					</view>
				</view>
			</view>
		</view>
		<view class="box-list">
			<navigator url="../info/info" class="box">
				<view class="icon">
					<image src="../../static/icons/shenfenxuanze@3x.png"></image>
				</view>
				<span>基本信息</span>
			</navigator>
			
			<navigator url="../follow/follow" open-type="navigate">
				<view class="box">
					<view class="icon">
						<image src="../../static/icons/genjinjilu@3x.png"></image>
					</view>
					<span>跟进记录</span>
				</view>
			</navigator>
			
			
			<view class="box" @tap="contractInformation">
				<view class="icon">
					<image src="../../static/icons/hetong1@3x.png"></image>
				</view>
				<span>合同信息</span>
			</view>
			
			<view class="box" @tap="paymentInformation">
				<view class="icon">
					<image src="../../static/icons/huikuanjilu@3x.png"></image>
				</view>
				<span>回款信息</span>
			</view>
		</view>
		<view class="line"></view>
		<view class="list-button">
			<view class="button-box" @tap="operationalRecords">
				<view class="box-left">
					<span>操作记录</span>
				</view>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
			<view class="button-box" @tap="enclosure">
				<view class="box-left">
					<span>附件</span>
				</view>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
			<view class="button-box" @tap="relevantTeams">
				<view class="box-left">
					<span>相关团队</span>
				</view>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
			<view class="button-box" @tap="businessOpportunity">
				<view class="box-left">
					<span>商机</span>
					<span class="tag">new</span>
				</view>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				operationalRecords: function (e) {
					uni.showModal({
						title: "操作记录",
						content: "测试版，需根据具体情况录入模板",
						showCancel: false,
						confirmText: "确定"
					})
				},
				
				enclosure: function (e) {
					uni.showModal({
						title: "附件",
						content: "测试版，需根据具体情况录入模板",
						showCancel: false,
						confirmText: "确定"
					})
				},
				
				relevantTeams: function (e) {
					uni.showModal({
						title: "相关团队",
						content: "测试版，需根据具体情况录入模板",
						showCancel: false,
						confirmText: "确定"
					})
				},
				
				businessOpportunity: function (e) {
					uni.showModal({
						title: "商机",
						content: "测试版，需根据具体情况录入模板",
						showCancel: false,
						confirmText: "确定"
					})
				},
				
				contractInformation: function (e) {
					uni.showModal({
						title: "合同信息",
						content: "测试版，需根据具体情况录入模板",
						showCancel: false,
						confirmText: "确定"
					})
				},
				
				paymentInformation: function (e) {
					uni.showModal({
						title: "回款信息",
						content: "测试版，需根据具体情况录入模板",
						showCancel: false,
						confirmText: "确定"
					})
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.user-card{
		display: flex;
		padding-top: 26upx;
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
	
	.content-by-mobile{
		display: flex;
	}
	
	.bottom-title{
		font-size: 28upx;
		color: #666666;
		display: flex;
	}
	
	.bottom-title span:first-child{
		margin-right: 30upx;
	}
	
	.bottom-title image{
		width: 40upx;
		height: 40upx;
	}
	
	.box-list {
		display: flex;
		padding: 80upx 20upx;
		justify-content: space-between;
	}
	
	.box{
		box-sizing: border-box;
		border-radius: 15upx;
		text-align: center;
	}
	
	.box span{
		color: #666666;
		font-size: 28upx;
	}
	
	.box .icon{
		text-align: center;
		margin: 0 auto;
		width: 90upx;
		height: 65upx;
	}
	
	.box .icon image{
		text-align: center;
		width: 80%;
		height: 80%;
	}
	
	.line{
		height: 20upx;
		background-color: #F4F4F4;
		margin-left: -40upx;
		margin-right: -40upx;
	}
	
	.button-box {
		color: #666666;
		display: flex;
		justify-content: space-between;
		padding: 60upx 0;
		border-bottom: 1px solid #EAEAEA;
		position: relative;
	}
	
	.button-box .box-left{
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
	
	.button-box .box-left span:first-child{
		font-size: 30upx;
	}
	
	.button-box .box-left .tag{
		font-size: 24upx;
		padding: 0 20upx;
		background-color: #FF4444;
		border-radius: 100upx;
		color: #FFFFFF;
	}
	
	.button-box image{
		width: 30upx;
		height: 30upx;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		position: absolute;
	}
</style>
