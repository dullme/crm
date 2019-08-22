<template>
	<view class="body">
		<view class="search-all">
			<view class="search">
				<image src="../../static/icons/faxian@2x.png"></image>
				<input type="text" confirm-type="search" @confirm="search"/>
			</view>
			<navigator url="../info/info">
				<image src="../../static/icons/tianjiakehu@3x.png"></image>
			</navigator>
		</view>
		
		<view class="user-card-list" v-if="customerList.length">

			<navigator :url="'../customer/customer?id='+item.id+'&name='+item.name+'&mobile='+item.mobile+'&user_name='+item.user.name" open-type="navigate" v-for="item in customerList">
				<view class="user-card">
					<view class="avatar">
						<image src="../../static/icons/lianxiren@3x.png"></image>
					</view>
					<view class="avatar-right">
						<view class="top-title">
							<span>{{ item.name }}</span>
							<span style="color: #22AC38;font-size: 28upx;" v-if="item.status == 1">{{ status_name[item.status] }}</span>
							<span style="color: #FF4657;font-size: 28upx;" v-if="item.status == 0">{{ status_name[item.status] }}</span>
						</view>
						<view class="bottom-title">
							<span>电话：{{ item.mobile }}</span>
							<span>{{ item.created_at.substr(0, 10) }}</span>
						</view>
					</view>
				</view>
			</navigator>

		</view>
		<view class="empty" v-if="empty">
			无结果
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token : '',
				customerList:{},
				status_name: ['待拜访', '已结束'],
				empty: false
			}
		},
		onLoad() {
			this.token = this.getGlobalAccessToken()
			if(this.token != null){
				uni.showLoading({
				    title: '加载中'
				});
				uni.request({
					url: this.serverUrl + 'customer-list',
					header: {
						"Authorization": this.token,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						uni.hideLoading();
						if(res.data.code == 200){
							this.customerList = res.data.data;
							this.empty = res.data.data.length ? false : true;
						}else if(res.data.code == 429){
							uni.showToast({
								title: res.data.message,
								image: "../../static/icons/warning.png"
							})
						}else{
							uni.showModal({
							    title: '未登录',
							    content: '您未登录，需要登录后才能继续',
								showCancel: false,
							    success: (res) => {
							        if (res.confirm) {
										uni.reLaunch({
										    url: '../registLogin/registLogin'
										});
							        }
							    }
							});
						}
					}
				});
			}
		},
		
		methods: {
			onPullDownRefresh() {
				this.searchCustomerList(' ');
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 500);
			},
			
			searchCustomerList(text){
				uni.showLoading({
				    title: '加载中'
				});
				uni.request({
					url: this.serverUrl + 'customer-list?search=' + text,
					header: {
						"Authorization": this.token,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						uni.hideLoading();
						if(res.data.code == 200){
							this.customerList = res.data.data;
							this.empty = res.data.data.length ? false : true;
						}else if(res.data.code == 429){
							uni.showToast({
								title: res.data.message,
								image: "../../static/icons/warning.png"
							})
						}else{
							uni.showModal({
							    title: '未登录',
							    content: '您未登录，需要登录后才能继续',
								showCancel: false,
							    success: (res) => {
							        if (res.confirm) {
										uni.reLaunch({
										    url: '../registLogin/registLogin'
										});
							        }
							    }
							});
						}
					}
				});
			},
			
			search(e){
				let text = e.detail.value ? e.detail.value :' ';
				this.searchCustomerList(text);
			}
		}
	}
</script>

<style>
	page{
		background: #FFFFFF;
		height: 100%;
	}
	
	.body{
		height: 100%;
	}
	
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
		padding-bottom: 100upx;
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
	
	.empty{
		display: flex;
		color: #D9D9D9;
		font-size: 60upx;
		text-align: center;
		justify-content: center;
		height: 100%;
		align-items: center;
	}
</style>
