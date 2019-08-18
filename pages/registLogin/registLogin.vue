<template>
	<view class="body">
		<view class="header">
			<p class="title">客户管理系统</p>
			<p class="t-content">请输入手机号码登录</p>
		</view>
		
		<form @submit="formSubmit">
			<view class="input">
				<input name="mobile" type="number" value="" placeholder="请输入手机号" v-model="mobile" placeholder-class="graywords"/>
			</view>
			
			
			<view class="input input-last">
				<input name="code" type="number" value="" placeholder="请输入验证码" v-model="code" placeholder-class="graywords"/>
				<label class="code" @click="send">
					<span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
					<span v-if="!sendMsgDisabled">发送验证码</span>
				</label>
			</view>
			
			<button class="form-button" :class="[!!mobile && !!code ? ' form-button-active':'']" form-type="submit">登录</button>
		</form>
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				mobile : '',
				code : '',
				time: 60,
				sendMsgDisabled:false
				
			}
		},
		methods: {
			send(){
				let me = this;
				if(!me.mobile){
					uni.showToast({
						title: "请输入手机号",
						image: "../../static/icons/warning.png"
					})
				}else{
					if(!me.sendMsgDisabled){
						// 发起注册/登录的请求
						var serverUrl = me.serverUrl;
						uni.request({
							url: serverUrl + 'send-sms',
							data: {
								"mobile": me.mobile,
							},
							method: "POST",
							success: (res) => {
								console.log(res);
								
								if (res.data.code == 200) {
									me.sendMsgDisabled = true;
									me.countDown();//倒计时
								} else if (res.data.code == 422) {
									me.sendMsgDisabled = false;
									uni.showToast({
										title: res.data.message,
										duration: 2000,
										image: "../../static/icons/warning.png"
									})
								}
							}
						});
					}
				}
			},
			
			countDown(){
				let me = this;
				let interval = window.setInterval(function() {
					if ((me.time--) <= 0) {
						me.time = 60;
						me.sendMsgDisabled = false;
						window.clearInterval(interval);
					}
				}, 1000);
			},
			
			formSubmit(){
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'login-sms',
					data: {
						"mobile": me.mobile,
						"code":me.code
					},
					method: "POST",
					success: (res) => {
						console.log(res);
						
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							uni.setStorageSync("globalUser", res.data.data);
							// 切换页面跳转，使用tab切换的api
							// 切换页面跳转，使用tab切换的api
							uni.switchTab({
								url: "../index/index"
							});
								
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
.body {
	padding: 160upx 50upx;
}

.header .title{
	font-size: 1.5em;
	font-weight: 500;
}


.header .t-content{
	margin-top: 10upx;
	font-size: .8em;
	color: #666666;
}

.input {
	background-color: #F6F6F6;
	border-radius: 100upx;
	padding: 29upx 40upx;
	font-size: 28upx;
	margin-top: 100upx;
}

.input-last{
	display: flex;
	justify-content: space-between;
	margin-top: 50upx;
	position: relative;
}

.graywords {
	color: #AAAAAA;
}

.form-button {
	border:#2C405A;
	margin-top: 30upx;
	border-radius: 100upx;
	padding: 12upx 0;
	font-size: 30upx;
	background-color: #DDDDDD;
	color: #FFFFFF;
	margin-top: 80upx;
}

.form-button:after{
	width: 0;
	height: 0;
}

.code{
	color: #008EFF;
	line-height: 40upx;
	vertical-align:middle; 
	text-align:center;
	right: 50upx;
	top: 50%;
	transform: translateY(-50%);
	position: absolute;
}

.form-button-active{
	background-color: #008EFF !important;
}

</style>
