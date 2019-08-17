<template>
	<view class="body">
		<view class="top-user-card">
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
		<view class="body-follow">
			<form >
				<view class="visit-form visit-form-first">
					<view class="form-group">
						<label>记录类型</label>
						<view class="box-picker">
							<picker :value="index" :range="array">
								<view class="uni-input">{{array[index]}}</view>
							</picker>
							<image src="../../static/icons/xiangqing@3x.png"></image>
						</view>
					</view>
					
					<view class="form-group">
						<label>重访日期</label>
						<view class="box-picker">
							<picker mode="date" :value="date" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
							<image src="../../static/icons/xiangqing@3x.png"></image>
						</view>
					</view>
					
					<view class="form-group">
						<label>重访时间</label>
						<view class="box-picker">
							<picker mode="time" :value="time" @change="bindTimeChange">
								<view class="uni-input">{{time}}</view>
							</picker>
							<image src="../../static/icons/xiangqing@3x.png"></image>
						</view>
					</view>
					
					
					<view class="form-group" style="border-bottom: 0;">
						<label>备注</label>
						<view class="box-picker">
							<view class="uni-textarea">
								<textarea />
							</view>
						</view>
					</view>
					
					<button class="form-button form-button-active" form-type="submit">盯一下</button>
					
				</view>
			</form>
			
			<view class="visit-form">
				<view class="user-card user-card-title" style="border: 0;">
					<span class="title">跟进记录</span>
				</view>
				
				<view class="user-card" v-for="i in 4">
					<view class="avatar">
						<image src="../../static/icons/lianxiren@3x.png"></image>
					</view>
					<view class="avatar-right">
						<view class="top-title">
							<span>李四</span>
							<span style="color: #FF4657;font-size: 28upx;">未成交</span>
						</view>
						<view class="bottom-title">
							<span>邮件联系</span>
							<span>2019-09-01</span>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				array: ['微信', '电话', '邮件'],
				index: 0,
				date: currentDate,
				time: '12:01'
			}
		},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
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
	
	.top-user-card{
		display: flex;
		margin-left: -35upx;
		margin-right: -35upx;
		padding: 66upx 35upx 26upx 35upx;
		background-color: #FFFFFF;
	}
	
	.top-user-card .avatar image{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		background-color: #F4F4F4;
		padding: 30upx;
		margin-right: 20upx;
	}
	
	.top-user-card .avatar-right{
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 15upx 0;
	}
	
	.top-user-card .top-title{
		font-size: 36upx;
		color: #222222;
		margin-bottom: 25upx;
		font-weight: 700;
	}
	
	.top-user-card .bottom-title{
		font-size: 28upx;
		color: #666666;
		display: flex;
	}
	
	.top-user-card .bottom-title span:first-child{
		margin-right: 30upx;
	}
	
	.visit-form{
		border-radius: 16upx;
		background-color: #FFFFFF;
		margin-top: 35upx;
		padding: 0 24upx;
	}
	
	.form-group{
		font-size: 30upx;
		color: #222222;
		display: flex;
		justify-content: space-between;
		padding: 40upx 0;
		border-bottom: 1px solid #EAEAEA;
	}
	
	.user-card{
		display: flex;
		padding: 38upx 0;
		border-top: 1px solid #EAEAEA;
	}
	
	.user-card-title{
		padding: 40upx 0;
	}
	
	.user-card .title{
		font-size: 32upx;
		color: #222222;
	}
	
	.user-card .avatar image{
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		background-color: #F4F4F4;
		padding: 20upx;
		margin-right: 20upx;
	}
	
	.user-card .avatar-right{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	
	.user-card .top-title{
		align-items:flex-start;
		font-size: 32upx;
		color: #222222;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20upx;
	}
	
	.user-card .bottom-title{
		font-size: 24upx;
		color: #666666;
		display: flex;
		justify-content: space-between;
	}
	
	.box-picker{
		width: 80%;
		display: flex;
		position: relative;
		justify-content: flex-end;
	}
	
	.box-picker picker{
		width: 100%;
		margin-right: 40upx;
	}
	
	.box-picker picker .uni-input{
		float: right;
	}
	
	.box-picker image{
		width: 30upx;
		height: 30upx;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		position: absolute;
	}
	
	.form-button {
		border:#2C405A;
		border-radius: 100upx;
		padding: 12upx 0;
		font-size: 30upx;
		background-color: #DDDDDD;
		color: #FFFFFF;
	}
	
	.form-button:after{
		width: 0;
		height: 0;
	}
	
	.form-button-active{
		background-color: #008EFF !important;
	}
	
	.visit-form-first{
		padding-bottom: 40upx;
	}
	
	.uni-textarea, .uni-textarea textarea{
		height: 180upx;
	}
	
	.content-by-mobile{
		display: flex;
	}
	
	.bottom-title image{
		width: 40upx;
		height: 40upx;
	}
</style>
