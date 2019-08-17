<template>
	<view class="body">
		<form>
			<view class="form-group">
				<label>客户名称</label>
				<input type="text" value="上海久活网络"/>
			</view>
			
			<view class="form-group">
				<label>客户级别</label>
				<input type="text" value="A级"/>
			</view>
			
			<view class="form-group">
				<label>客户行业</label>
				<input type="text" value="通讯"/>
			</view>
			
			<view class="form-group">
				<label>客户来源</label>
				<input type="text" value="微信"/>
			</view>
			
			<view class="form-group">
				<label>成交状态</label>
				<input type="text" value="未成交"/>
			</view>
			
			<view class="form-group">
				<label>电话号码</label>
				<input type="text" value="13888888888"/>
			</view>
			
			<view class="form-group">
				<label>网站地址</label>
				<input type="text" value="https://www.baidu.com"/>
			</view>
			
			<view class="form-group">
				<label>重访时间</label>
				<input type="text" value="2019-08-10"/>
			</view>
			
			<view class="form-group">
				<label>区域</label>
				<input type="text" value="上海市普陀区"/>
			</view>
			
			<view class="form-group">
				<label>详细地址</label>
				<input type="text" value="新存路666号"/>
			</view>
			
			<button class="form-button form-button-active" form-type="submit">保存</button>
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
	.form-group{
		color: #666666;
		font-size: 28upx;
		display: flex;
		padding: 40upx 0;
		border-top: 1px solid #EAEAEA;
	}
	
	.form-group label{
		width: 30%;
	}
	
	.form-group input{
		width: 70%;
		color: #222222;
		font-size: 28upx;
	}
	
	.form-button {
		margin: 40upx 0;
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
</style>
