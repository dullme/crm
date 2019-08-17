<template>
	<view class="body">
		<view class="search-all">
			<view class="search">
				<image src="../../static/icons/faxian@2x.png"></image>
				<input type="text" />
			</view>
			<navigator url="../info/info">
				<image src="../../static/icons/tianjiakehu@3x.png"></image>
			</navigator>
		</view>
		
		<view class="user-card-list">
			
			<navigator url="../customer/customer" open-type="navigate">
				<view class="user-card" v-for="i in 20">
					<view class="avatar">
						<image src="../../static/icons/lianxiren@3x.png"></image>
					</view>
					<view class="avatar-right">
						<view class="top-title">
							<span>李四</span>
							<span style="color: #FF4657;font-size: 28upx;">未成交</span>
						</view>
						<view class="bottom-title">
							<span>电话：18888888888</span>
							<span>2019-09-01</span>
						</view>
					</view>
				</view>
			</navigator>
			
			
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
	.search-all{
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	
	.search-all navigator > image{
		width: 50upx;
		height: 50upx;
		right: 14upx;
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
	}
	
	.search{
		display: flex;
		width: 80%;
		background-color: #F4F4F4;
		border-radius: 100upx;
		padding: 12upx 30upx;
		position: relative;
	}

	.search image{
		width: 30upx;
		height: 30upx;
		margin-right: 20upx;
		line-height: 70upx;
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
	}
	
	.search input{
		margin-left: 50upx;
		width: 100%;
	}
	
	.user-card-list{
		margin-top: 40upx;
	}
	
	.user-card{
		display: flex;
		padding: 38upx 0;
		border-top: 1px solid #EAEAEA;
	}
	
	.user-card .avatar image{
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		background-color: #F4F4F4;
		padding: 20upx;
		margin-right: 20upx;
	}
	
	.avatar-right{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	
	.top-title{
		align-items:flex-start;
		font-size: 32upx;
		color: #222222;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20upx;
	}
	
	.bottom-title{
		font-size: 24upx;
		color: #666666;
		display: flex;
		justify-content: space-between;
	}
</style>
