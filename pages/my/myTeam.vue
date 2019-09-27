<template>
	<view class="body index-body">
		<div class="real-body">
			
			<div class="box-list">
				<div class="water">
					<span>姓名</span>
					<span>当日流水/佣金</span>
				</div>
				
				<div class="water">
					<span>张三</span>
					<span>4800.00/4.80/佣金</span>
				</div>
				<div class="water">
					<span>张三</span>
					<span>4800.00/4.80/佣金</span>
				</div>
				<div class="water">
					<span>张三</span>
					<span>4800.00/4.80/佣金</span>
				</div>
				<div class="water">
					<span>张三</span>
					<span>4800.00/4.80/佣金</span>
				</div>
				<div class="water">
					<span>张三</span>
					<span>4800.00/4.80/佣金</span>
				</div>
				<div class="water">
					<span>张三</span>
					<span>4800.00/4.80/佣金</span>
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
		border-radius: 10upx;
		padding: 0 50upx;
		background-color: #2A3452;
		font-size: 30upx;
	}
	
	.water{
		display: flex;
		justify-content: space-between;
		padding: 30upx 0;
		border-bottom: 1px solid #323D5E;
	}
	
	.water:first-child{
		background-color: #334475;
		margin-left: -50upx;
		margin-right: -50upx;
		padding-left: 50upx;
		padding-right: 50upx;
		border-radius: 10upx 10upx 0 0;
	}
	
	.water:last-child{
		border-bottom:unset;
	}
</style>
