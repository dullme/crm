<template>
	<view class="body">
		<div class="real-body">
			<div class="header">注册</div>
			<form @submit="formSubmit">
				
				<div class="input">
					<image src="../../static/icons/home.png"></image>
					
					<input name="username" type="number" value="" placeholder="请设置用户名" v-model="username" placeholder-class="graywords"/>
				</div>
				
				<div class="input">
					<image src="../../static/icons/home.png"></image>
					
					<input name="password" type="number" value="" placeholder="请输入登录密码" v-model="password" placeholder-class="graywords"/>
				</div>
				
				<div class="input">
					<image src="../../static/icons/home.png"></image>
					
					<input name="mobile" type="number" value="" placeholder="请输入邀请码" v-model="mobile" placeholder-class="graywords"/>
				</div>
				
				<div class="input">
					<image src="../../static/icons/home.png"></image>
					
					<input name="mobile" type="number" value="" placeholder="请输入验证码" v-model="mobile" placeholder-class="graywords"/>
				</div>
				
				<!-- <view class="input">
					<input name="mobile" type="number" value="" placeholder="请输入手机号" v-model="mobile" placeholder-class="graywords"/>
				</view>
				
				
				<view class="input input-last">
					<input name="code" type="number" value="" placeholder="请输入验证码" v-model="code" placeholder-class="graywords"/>
					<label class="code" @click="send">
						<span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
						<span v-if="!sendMsgDisabled">发送验证码</span>
					</label>
				</view> -->
				
				<button class="form-button" :class="[!!mobile && !!code ? ' form-button-active':'']" form-type="submit">马上注册</button>
			</form>
			
			<navigator url="../registLogin/registLogin" class="register">
				<span>已有账号？马上</span>
				<span>登录</span>
			</navigator>
		</div>
		
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
							uni.setStorageSync("globalAccessToken", {
								"auth_id" : res.data.data.auth_id,
								"expires_in" : res.data.data.expires_in,
								"token" : res.data.data.token,
								"expires_at" : Math.round(new Date() / 1000) + res.data.data.expires_in
							});
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
	page{
		background: #19233C;
		height: 100%;
	}
	
	.body{
		padding: 0;
		width: 100%;
		height: 100%;
		color: white;
		background: #19233C url('../../static/bg.png') no-repeat fixed bottom center;
		background-size:100%;
	}
	
	.real-body{
		padding: 70upx;
		background: url('../../static/bg-top.png') no-repeat fixed top center;
		background-size:100%;
	}
	
	.header{
		display: flex;
		justify-content: center;
		padding-bottom: 100upx;
		font-size: 45upx;
		color: #E9EAEB;
	}

	.input{
		display: flex;
		padding: 10upx 0;
		border-bottom: 1upx solid #323E5C;
		margin-bottom: 50upx;
		align-items: center;
	}
	
	.input input{
		height: 80upx;
	}
	
	.input image{
		width: 50upx;
		height: 50upx;
		margin-right: 20upx;
	}

	.form-button{
		margin-top: 120upx;
		border-radius: 100upx;
		padding: 12upx;
		color: white;
		background-image: linear-gradient(141deg, #00B9EA 30%, #0099F0 61%, #0084F4 100%);
	}
	
	.graywords{
		color: #475474;
	}
	
	.register{
		margin-top: 70upx;
		display: flex;
		justify-content: center;
	}
	
	.register span:first-child{
		color: #475474;
		font-size: 30upx;
		margin-right: 10upx;
	}
	
	.register span:last-child{
		color: #E9EAEB;
		font-size: 30upx;
	}
</style>
