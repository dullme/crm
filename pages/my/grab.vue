<template>
	<view class="body index-body">
		<div class="real-body" v-if="grab.id">
						
			<div class="memu-list">
				
				<div>
					<span>银行卡号：</span>
					<span style="flex: 1;">{{ grab.bankcard }}</span>
					<button @click="copy(grab.bankcard)">复制</button>
				</div>
				
				<div>
					<span>开户银行：</span>
					<span style="flex: 1;">{{ grab.bankname }}</span>
					<button @click="copy(grab.bankname)">复制</button>
				</div>
				
				<div>
					<span>收&nbsp;&nbsp;款&nbsp;&nbsp;人：</span>	
					<span style="flex: 1;">{{ grab.name }}</span>
					<button @click="copy(grab.name)">复制</button>
				</div>
				
				<div>
					<span>汇款金额：</span>		
					<span style="flex: 1;">{{ grab.withdraw_amount }}</span>
					<button @click="copy(grab.withdraw_amount)">复制</button>
				</div>
				
				<div>
					<span>汇&nbsp;&nbsp;款&nbsp;&nbsp;人：</span>		
					<input type="text" v-model="remitter"/>
					
				</div>
				
				<div style="display: flex;flex-flow: column;align-items: start;">
					<span>汇款回执单：</span>
					<div style="display: flex;padding-top: 40upx;flex-wrap:wrap">
						<div style="border-radius: 6upx;margin-bottom: 20upx;border-radius: 6upx;width: 160upx;height: 160upx;margin-right: 20upx;" v-for="(item, index) in images">
							<image @click="removeImage(index)" style="border-radius: 6upx;width: 100%;height: 100%;" :src="item"></image>
						</div>
						<div style="margin-bottom: 20upx;border-radius: 6upx;border: 1px solid #6A77A0;width: 160upx;height: 160upx;display: flex;flex-flow: column;justify-content: center;align-items: center;" @click="uploadImage()">
							<image style="width: 60upx;height: 60upx;" src="../../static/icons/upload.png"></image>
							<span style="font-size: 24upx;margin-top: 20upx;color: #6A77A0;">上传照片</span>
						</div>
					</div>
				</div>
				
			</div>
			
			<view v-if="time_up == false" class="count-down" style="display: flex;justify-content: center;padding: 40upx;font-size: 24upx;align-items: center;color: #475474;">
				<span style="margin-right: 5upx;">剩余</span>
				<uni-count-down color="#475474" splitor-color="#475474" background-color="#19233C" border-color="#19233C" :show-day="false" :second="grab.time_up_seconds" @timeup="timeup"/>
				<span style="margin-left: 5upx;">后自动取消</span>
			</view>
			<view v-else class="count-down" style="display: flex;justify-content: center;padding: 40upx;font-size: 24upx;align-items: center;color: #475474;">
				已{{ grab.time_out_at ? '于 ' + grab.time_out_at.substr(0,10) + '' : '' }}自动取消
			</view>
			
			<button v-if="time_up == false" class="form-button form-button-active" @click="submit()">我已付款</button>
			<button v-else class="form-button form-button-active form-button-canel">已取消</button>
			
			
		</div>
		
		
		<div class="real-body" v-else style="display: flex;justify-content: center;align-items: center;height: 100%;color: #6A77A0;">
			暂无待处理的订单
		</div>
		
	</view>
</template>

<script>
	
	import uniCountDown from '../../components/uni-countdown/uni-countdown.vue'
	
	export default {
		
		components: {
			uniCountDown
		},
		
		data() {
			return {
				grab:[],
				images:[],
				time_up: false,
				remitter:'',
				image_uploading:false,
			};
		},
		onShow() {
			this.getGrab()
		},
		methods: {
			timeup() {
				this.time_up = true;
				uni.showToast({
					title: "已自动取消",
					image: "../../static/icons/warning.png"
				})
				console.log('时间到');
			},
			
			copy(text){
				uni.setClipboardData({
				    data: text,
				    success: function () {
				        console.log('success');
				    }
				});
			},
			
			getGrab(){
				let accessToken = this.getGlobalAccessToken();
				if(accessToken != null){
					//获取用户信息
					uni.request({
						url: this.serverUrl + 'grab',
						header: {
							"Authorization": accessToken,
							"Accept":'application/json'
						},
						method: "GET",
						success: (res) => {
							if(res.data.code == 200){
								this.grab = res.data.data
							}else if(res.data.code == 422){
								uni.showModal({
								    title: '等待对方确认',
								    content: res.data.message,
									showCancel: true,
								    success: (res) => {
								        if (res.confirm) {
											uni.navigateTo({
												url: "../my/myTransaction"
											})
								        }
								    }
								});
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
			
			removeImage(index){
				uni.showModal({
					title: "删除",
					content: "确定删除图片？",
					showCancel: true,
					confirmText: "确定",
					success:res => {
						if (res.confirm) {
							this.images.splice(index, 1)
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
						
					}
				})
			},
			
			uploadImage(){
				if(this.time_up){
					uni.showToast({
						title: "已自动取消",
						image: "../../static/icons/warning.png"
					})
				}else{
					uni.chooseImage({
					    success: (chooseImageRes) => {
					        const tempFilePaths = chooseImageRes.tempFilePaths;
							let accessToken = this.getGlobalAccessToken();
							this.image_uploading = true;
							uni.showLoading({
							    title: '图片上传中'
							});
					        uni.uploadFile({
					            url: this.serverUrl+'upload',
					            filePath: tempFilePaths[0],
					            name: 'file',
								header: {
									"Authorization": accessToken,
									"Accept":'application/json'
								},
					            formData: {
					                'type': '1'
					            },
					            success: (uploadFileRes) => {
									let data =JSON.parse(uploadFileRes.data)
									console.log(data.data)
									this.images.push(data.data)
									setTimeout(function () {
									    uni.hideLoading();
									}, 500);
									this.image_uploading = false;
					            }
					        });
					    }
					});
				}
				
				
			},
			
			submit(){
				if(this.image_uploading){
					uni.showToast({
						title: '图片未上传完成',
						image: "../../static/icons/success.png"
					})
				}else{
					if(this.time_up){
						uni.showToast({
							title: "已自动取消",
							image: "../../static/icons/warning.png"
						})
					}else{
						let accessToken = this.getGlobalAccessToken();
						let me = this;
						var serverUrl = me.serverUrl;
						uni.request({
							url: serverUrl + 'save-grab',
							header: {
								"Authorization": accessToken,
								"Accept":'application/json'
							},
							data: {
								"id": me.grab.id,
								"remitter": me.remitter,
								"images": me.images,
							},
							method: "POST",
							success: (res) => {						
								// 获取真实数据之前，务必判断状态是否为200
								if (res.data.code == 200) {
									this.images=[];
									this.grab = [];
									uni.showToast({
										title: res.data.message,
										image: "../../static/icons/success.png"
									})
									
									setTimeout(()=>{
										uni.navigateTo({
											url: "../my/myTransaction"
										})
									}, 1000)
										
								} else if (res.data.code == 422) {
									uni.showToast({
										title: res.data.message,
										image: "../../static/icons/warning.png"
									})
								}
							}
						});
					}
				}
				
				
				
				
			}
		}
	}
</script>

<style>
	page{
		background: #19233C;
		height: 100%;
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
		background-size:100%;
	}
	
	.my-box-card{
		display: flex;
		align-items: center;
		background-image: linear-gradient(149deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
		border-radius: 10upx;
		padding: 50upx 40upx;
	}
		
	.my-box-card > image{
		width: 130upx;
		height: 130upx;
		border-radius: 130upx;
		margin-right: 25upx;
	}
	
	.my-code{
		margin-top: 10upx;
		font-size: 30upx;
		color: #B1EAFF;
	}
	
	.has-message:before{
		content: "●";
		color: #F65D6B;
		font-size: 18upx;
		position: absolute;
		margin-left: -21upx;
		margin-top: -5upx;
	}
	
	.memu-list{
		border-radius: 10upx;
		background-color: #2A3452;
		margin-top: 25upx;
		padding: 0 40upx;
		font-size: 30upx;
		color: #FFFFFF;
	}
	
	.memu-list > div{
		display: flex;
		padding: 35upx 0;
		align-items: center;
		border-bottom: 1px solid #323D5E;
	}
	
	
	.memu-list > div > span:first-child{
		color: #6A77A0;
	}
	
	.memu-list > div > button{
		border: 1px solid #40BCFF;
		background-color: unset;
		color: #40BCFF;
		font-size: 20upx;
		padding: 5upx 15upx;
		line-height: 40upx;
	}
	
	.memu-pic{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 35upx 0;
		border-bottom: 1px solid #323D5E;
	}
	
	
	.left-pic{
		display: flex;
		align-items: center;
		font-size: 30upx;
	}
	
	
	.left-pic > image{
		width: 40upx;
		height: 40upx;
		margin-right: 20upx;
	}
	
	.memu-pic > image{
		width: 25upx;
		height: 25upx;
	}
	
	.message{
		margin-top: 50upx;
		color: #404B70;
		font-size: 20upx;
	}
	
	.form-button{
		border-radius: 100upx;
		padding: 12upx;
		color: white;
		background-image: linear-gradient(141deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
	}
	
	.form-button-canel{
		color: #6A77A0 !important;
		background-color: #2a3452 !important;
		background-image: unset !important;
	}
</style>
