<template>
	<view class="body">
		
		<view class="body-follow">
			<view class="visit-form visit-form-first">
				<view class="form-group">
					<label>记录类型</label>
					<view class="box-picker">
						<picker mode="selector" :range="type" @change="typeSelect">
							<view class="uni-input">{{type[follow.type]}}</view>
						</picker>
						<image src="../../static/icons/xiangqing@3x.png"></image>
					</view>
				</view>
				
				<view class="form-group">
					<label>重访日期</label>
					<view class="box-picker">
						<picker mode="date" @change="bindDateChange">
							<view class="uni-input">{{follow.date}}</view>
						</picker>
						<image src="../../static/icons/xiangqing@3x.png"></image>
					</view>
				</view>
				
				<view class="form-group">
					<label>重访时间</label>
					<view class="box-picker">
						<picker mode="time" @change="bindTimeChange">
							<view class="uni-input">{{follow.time}}</view>
						</picker>
						<image src="../../static/icons/xiangqing@3x.png"></image>
					</view>
				</view>
				
				
				<view class="form-group" style="border-bottom: 0;">
					<view class="box-picker">
						<view class="uni-textarea">
							<textarea placeholder="备注" v-model="follow.remark"/>
						</view>
					</view>
				</view>
				
				<button class="form-button form-button-active" @click="formSubmit">保存修改</button>
				
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
				token : '',
				type: [],
				follow:{
					id:'',
					date: currentDate,
					time: '12:00',
					type: 0,
					remark:''
				}
			}
		},
		onLoad(options){
			this.token = this.getGlobalAccessToken();
			this.follow.id = options.id;
			
			if(this.token != null){
				uni.request({
					url: this.serverUrl + 'customer-industry-and-source',
					header: {
						"Authorization": this.token,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						if(res.data.code == 200){
							for (let i in res.data.data.source) {
							    this.type.push(res.data.data.source[i]);
							}
						}else{
							uni.showToast({
								title: res.data.message,
								image: "../../static/icons/warning.png"
							})
						}
					}
				});
					
					
				uni.request({
					url: this.serverUrl + 'follow/' + this.follow.id,
					header: {
						"Authorization": this.token,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						if(res.data.code == 200){
							this.follow = res.data.data;
						}else{
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
			typeSelect(e){
				this.follow.type = e.detail.value;
			},
			bindDateChange(e){
				this.follow.date = e.detail.value;
			},
			
			bindTimeChange(e){
				this.follow.time = e.detail.value;
			},
			
			formSubmit() {
				if(this.follow.type == 0){
					uni.showToast({
						title: "请选择类型",
						image: "../../static/icons/warning.png"
					})
				}else{
					uni.showLoading({
					    title: '加载中'
					});
					uni.request({
						url: this.serverUrl + 'follow-edit',
						header: {
							"Authorization": this.token,
							"Accept":'application/json'
						},
						data: this.follow,
						method: "POST",
						success: (res) => {
							uni.hideLoading();
							if(res.data.code == 200){
								uni.showToast({
									title: "保存成功",
									image: "../../static/icons/success.png"
								})
							}else if(res.data.code == 422){
								uni.showToast({
									title: res.data.message,
									image: "../../static/icons/warning.png"
								})
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
		height: 100%;
	}
	
	.body{
		background-color: #F4F4F4;
		padding-top: 0;
	}
	
	.top-user-card{
		display: flex;
		margin-left: -35upx;
		margin-right: -35upx;
		padding: 66upx 35upx 0 35upx;
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
	
	.end-button{
		border: 1px solid #22AC38;
		border-radius: 100upx;
		background-color: #FFFFFF;
		color: #22AC38;
		font-size: 24upx;
		line-height: unset;
		padding: 0 10upx;
	}
	
	.user-card-title{
		display: flex;
		justify-content: space-between;
	}
	
	.user-card-title image{
		width: 40upx;
		height: 40upx;
	}
</style>
