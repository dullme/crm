<template>
	<view class="body index-body">
		<div class="real-body">
			
			<div class="box-list">
				<div class="water">
					<span>姓名</span>
					<span>当日流水/佣金</span>
				</div>
				
				<div class="water" v-for="item in team_list">
					<span>{{ item.name }}</span>
					<span>{{ item.today_water }}/{{ item.brokerage_fee }}</span>
				</div>
			</div>
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				team_list:[]
			};
		},
		onLoad() {
			let accessToken = this.getGlobalAccessToken();
			if(accessToken != null){
				//获取用户信息
				uni.request({
					url: this.serverUrl + 'my-team',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							this.team_list=res.data.data;
								
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
