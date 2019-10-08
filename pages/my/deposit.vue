<template>
	<view class="body index-body">
		<div class="real-body">
			
			<div class="memu-list">
				
				<div>
					<span>银行卡号：</span>
					<span style="flex: 1;">{{ bankcard }}</span>
					<button>复制</button>
				</div>
				
				<div>
					<span>开户银行：</span>
					<span style="flex: 1;">{{ bankname }}</span>
					<button>复制</button>
				</div>
				
				<div>
					<span>收&nbsp;&nbsp;款&nbsp;&nbsp;人：</span>	
					<span style="flex: 1;">{{ name }}</span>
				</div>
				
				<div>
					<span>汇款金额：</span>		
					<input style="flex: 1;" type="text" v-model="amount"/>
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
			
			<button class="form-button form-button-active" @click="submit()">缴纳保证金</button>
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				amount:'',
				bankname:'',
				bankcard:'',
				name:'',
				images:[]
			};
		},
		onLoad() {
			let accessToken = this.getGlobalAccessToken();
			if(accessToken != null){
				//获取用户信息
				uni.request({
					url: this.serverUrl + 'user-info',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						if(res.data.code == 200){
							this.name = res.data.data.admin_name;
							this.bankcard = res.data.data.admin_bankcard;
							this.bankname = res.data.data.admin_bankname;
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
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						let accessToken = this.getGlobalAccessToken();
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
				            }
				        });
				    }
				});
			},
			
			submit(){
				let accessToken = this.getGlobalAccessToken();
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'save-deposit',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					data: {
						"amount": me.amount,
						"images": me.images,
					},
					method: "POST",
					success: (res) => {						
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							this.images = [];
							uni.showToast({
								title: res.data.message,
								image: "../../static/icons/success.png"
							})
								
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
		margin-top: 100upx;
		border-radius: 100upx;
		padding: 12upx;
		color: white;
		background-image: linear-gradient(141deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
	}
</style>
