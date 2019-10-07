<template>
	<view class="body">
		<div class="real-body">
			<div class="header">注册</div>
			<form @submit="formSubmit">
				
				<div class="input">
					<image src="../../static/icons/user_name.png"></image>
					
					<input name="username" type="text" value="" placeholder="请设置用户名" v-model="username" placeholder-class="graywords"/>
				</div>
				
				<div class="input">
					<image src="../../static/icons/password.png"></image>
					
					<input name="password" type="text" value="" placeholder="请输入登录密码" v-model="password" placeholder-class="graywords"/>
				</div>
				
				<div class="input">
					<image src="../../static/icons/yaoqingma_icon.png"></image>
					
					<input name="mobile" type="text" value="" placeholder="请输入邀请码" v-model="invitation_code" placeholder-class="graywords"/>
				</div>
				
				<div class="input" style="display: flex;justify-content: space-between;">
					<image src="../../static/icons/yzm_icon.png"></image>
					
					<input style="flex: 1;" name="code" type="text" value="" placeholder="请输入验证码" v-model="code" placeholder-class="graywords"/>
					<div style="width: 200upx;display: flex;" v-on:click="captcha()">
						<image style="width: 100%;margin-right: 0;" :src="captcha_img"></image>
					</div>
					
				</div>
				
				<button class="form-button form-button-active" form-type="submit">马上注册</button>
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
				captcha_img:"",
				code:"",
				key:"",
				username:"",
				password:"",
				invitation_code:""
				
			}
		},
		
		onLoad() {
			this.captcha();
		},
		
		methods: {
			captcha(){
				var serverUrl = this.serverUrl;
				uni.request({
					url: serverUrl + 'captcha',
					method: "GET",
					success: (res) => {
						this.captcha_img = res.data.data.img
						this.key = res.data.data.key
					}
				});
			},
			
		
			formSubmit(){
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'register',
					data: {
						"username": me.username,
						"code":me.code,
						"invitation_code":me.invitation_code,
						"password":me.password,
						"key":me.key
					},
					method: "POST",
					success: (res) => {
						console.log(res);
						
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							uni.showToast({
								title: res.data.message,
								image: "../../static/icons/success.png"
							})
							
							setTimeout(()=>{
								uni.navigateTo({
									url: "../registLogin/registLogin"
								})
							}, 1000)
								
						} else if (res.data.code == 422) {
							this.captcha();
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
