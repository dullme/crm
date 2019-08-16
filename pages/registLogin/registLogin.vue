<template>
	<view class="body">
		<view class="header">
			<p class="title">客户管理系统</p>
			<p class="t-content">请输入手机号码登录</p>
		</view>
		
		<form @submit="formSubmit">
			<view class="input">
				<input name="username" type="text" value="" placeholder="请输入手机号" placeholder-class="graywords"/>
			</view>
			
			
			<view class="input input-last">
				<input name="password" type="text" value="" placeholder="请输入验证码" placeholder-class="graywords"/>
				<label class="code">获取验证码</label>
			</view>
			
			<button class="form-button form-button-active" form-type="submit">登录</button>
		</form>
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
