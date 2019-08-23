<template>
	<view class="body">
		<view class="top-user-card">
			<view class="avatar">
				<image src="../../static/icons/lianxiren@3x.png"></image>
			</view>
			<view class="avatar-right">
				<view class="top-title">
					<span>{{ name }}</span>
				</view>
				<view class="bottom-title">
					<span>负责人：{{ user_name }}</span>
					<view class="content-by-mobile" @click="call">
						<image src="../../static/icons/mobile.png"></image>
						<span>：{{ mobile }}</span>
					</view>
				</view>
				<view class="bottom-title" style="margin-top: 30upx;margin-bottom: 20upx;display: flex;justify-content: space-between;">
					<span>状态：{{ status_name[customer.status] }}</span>
					<span class="end-button" v-if="customer.status != 1" @click="customerEnd">结束拜访</span>
				</view>
			</view>
		</view>	
		
		<view class="body-follow">
			<view class="visit-form visit-form-first" v-if="customer.status != 1">
				<view class="form-group">
					<label>记录类型</label>
					<view class="box-picker">
						<picker mode="selector" :range="type" @change="typeSelect">
							<view class="uni-input">{{type[type_index]}}</view>
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
					<view class="box-picker">
						<view class="uni-textarea">
							<textarea placeholder="备注" v-model="remark"/>
						</view>
					</view>
				</view>
				
				<button class="form-button form-button-active" @click="formSubmit">盯一下</button>
				
			</view>
			
			<view class="visit-form">
				<view class="user-card user-card-title" style="border: 0;">
					<span class="title">跟进记录</span>
					<view v-if="follow_list.length > 1" @click="orderBy">
						<image src="../../static/icons/down.png" v-if="order==1"></image>
						<image src="../../static/icons/up.png" v-if="order==0"></image>
					</view>
				</view>
				
				<view v-if="follow_list.length">
					
						<view class="user-card" v-for="item in follow_list">
							<view class="avatar">
								<image src="../../static/icons/lianxiren@3x.png"></image>
							</view>
							<view class="avatar-right">
								<view class="top-title">
									<navigator :url="'../followEdit/followEdit?id='+item.id" >
										<span>{{ user_name }}</span>
									</navigator>
									<view class="radio-img" v-if="item.record_url">
										<image :src="radio_status==0 ? '../../static/icons/play.png':'../../static/icons/stop.png'" @click="playVoice(item.id, item.record_url)"></image>
									</view>

								</view>
								<view class="bottom-title">
									<span>{{ type[item.type] ? type[item.type] : '电话'}}</span>
									<span>{{ item.visited_at }}</span>
								</view>
							</view>
						</view>
				</view>
				<view v-else style="padding-bottom: 40upx;min-height: 200upx;display: flex;align-items: center;justify-content: center;color: #D9D9D9;font-size: 35upx;">
					暂无记录
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	var innerAudioContext = uni.createInnerAudioContext();
	
	export default {
		
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				token : '',
				id : '',
				name : '',
				mobile : '',
				user_name : '',
				status : '',
				type: [],
				status_name: ['待拜访', '已结束'],
				type_index: 0,
				date: currentDate,
				time: '12:00',
				remark: '',
				follow_list : {},
				customer : {},
				order:1,
				radio_id: 0,
				voicePath: '',
				startTime: 0,
				duration: 0,
				radio_status:0,
			}
		},
		onLoad(options){
			this.token = this.getGlobalAccessToken();
			this.id = options.id;
			this.name = options.name;
			this.mobile = options.mobile;
			this.user_name = options.user_name;
			this.status = options.status;
			
			if(this.token != null){
				this.searchFollow()
			}
			
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
			
		 },
		methods: {
			typeSelect(e){
				this.type_index = e.detail.value;
			},
			
			bindDateChange(e){
				this.date = e.detail.value;
			},
			
			bindTimeChange(e){
				this.time = e.detail.value;
			},
			
			call(){
				uni.showModal({
					title: "拨打电话",
					content: "拨打电话给 " + this.mobile,
					showCancel: true,
					confirmText: "确定",
					success:res => {
						 if (res.confirm) {
							console.log('用户点击确定');
							uni.request({
								url: this.serverUrl + 'call-mobile/' + this.id,
								header: {
									"Authorization": this.token,
									"Accept":'application/json'
								},
								method: "GET",
								success: (res) => {
									uni.hideLoading();
									if(res.data.code == 200){
										uni.showToast({
											title: res.data.data,
											image: "../../static/icons/success.png"
										})
									}else if(res.data.code == 401){
										uni.showToast({
											title: res.data.message,
											image: "../../static/icons/warning.png"
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
							
							
							
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
						
					}
				})
			},
			
			customerEnd(){
				if(this.customer != 1){
					uni.showModal({
						title: "结束拜访",
						content: "结束拜访后无法再次开启",
						showCancel: true,
						confirmText: "确定",
						success:res => {
							 if (res.confirm) {
								console.log('用户点击确定');
								uni.showLoading({
								    title: '加载中'
								});
								uni.request({
									url: this.serverUrl + 'customer-end/' + this.id,
									header: {
										"Authorization": this.token,
										"Accept":'application/json'
									},
									method: "GET",
									success: (res) => {
										uni.hideLoading();
										if(res.data.code == 200){
											this.customer.status = 1;
											uni.showToast({
												title: "已结束",
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
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
							
						}
					})
				}		
			},
			
			orderBy(){
				this.order = this.order ? 0 : 1;
				this.searchFollow()
			},
			
			searchFollow(){
				uni.request({
					url: this.serverUrl + 'follow-list/' + this.id + '/' + this.order,
					header: {
						"Authorization": this.token,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						if(res.data.code == 200){
							this.follow_list = res.data.data.follows
							this.customer = res.data.data.customer
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
			},
			
			formSubmit() {
				if(this.type_index == 0){
					uni.showToast({
						title: "请选择类型",
						image: "../../static/icons/warning.png"
					})
				}else{
					uni.showLoading({
					    title: '加载中'
					});
					uni.request({
						url: this.serverUrl + 'follow',
						header: {
							"Authorization": this.token,
							"Accept":'application/json'
						},
						data: {
							"customer_id" : this.id,
							"type" : this.type_index,
							"date" : this.date,
							"time" : this.time,
							"remark" : this.remark,
							"order" : this.order,
						},
						method: "POST",
						success: (res) => {
							uni.hideLoading();
							if(res.data.code == 200){
								this.follow_list.unshift(res.data.data);
								this.type_index = 0;
								this.remark = '';
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
			
			playVoice(radio_id, record_url) {
				if(radio_id != this.radio_id){
					this.radio_id = radio_id;
					this.voicePath = record_url;
				}
				
				
				if(this.radio_status == 0){
					console.log('播放录音');
					if (this.voicePath) {  
						innerAudioContext.src = this.voicePath; 
						if(this.startTime + 1 <= this.duration){
							innerAudioContext.seek(this.startTime);
						}
						
						innerAudioContext.play();
						this.radio_status = 1;
					}  
				}else{
					console.log('播放暂停');
					this.startTime = innerAudioContext.currentTime;
					this.duration = innerAudioContext.duration
					innerAudioContext.pause();
					this.radio_status = 0;
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
	
	.radio-img image{
		width: 40upx;
		height: 40upx;
	}

</style>
