<template>
	<view class="body">
		<form>
			<view class="form-group">
				<label>客户名称</label>
				<input type="text" v-model="customerInfo.name"/>
			</view>
			
			<view class="form-group">
				<label>客户级别</label>
				<view class="box-picker">
					<picker :value="level_index" :range="level">
						<view class="uni-input">{{level[level_index]}}</view>
					</picker>
					<image src="../../static/icons/xiangqing@3x.png"></image>
				</view>
			</view>
			
			<view class="form-group">
				<label>客户行业</label>
				<input type="text" v-model="customerInfo.industry"/>
			</view>
			
			<view class="form-group">
				<label>客户来源</label>
				<view class="box-picker">
					<picker :value="source_index" :range="source">
						<view class="uni-input">{{source[source_index]}}</view>
					</picker>
					<image src="../../static/icons/xiangqing@3x.png"></image>
				</view>
			</view>
			
			<view class="form-group">
				<label>成交状态</label>
				<view class="box-picker">
					<picker :value="status_index" :range="status">
						<view class="uni-input">{{status[status_index]}}</view>
					</picker>
					<image src="../../static/icons/xiangqing@3x.png"></image>
				</view>
			</view>
			
			<view class="form-group">
				<label>电话号码</label>
				<input type="text" v-model="customerInfo.mobile"/>
			</view>
			
			<view class="form-group">
				<label>网站地址</label>
				<input type="text" v-model="customerInfo.website"/>
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
			
			<view class="form-group">
				<label>区域</label>
				<input type="text" v-model="customerInfo.province"/>
			</view>
			
			<view class="form-group">
				<label>详细地址</label>
				<input type="text" v-model="customerInfo.address"/>
			</view>
			
			<button class="form-button form-button-active" form-type="submit">保存</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customerInfo : {},
				level: ['A级', 'B级', 'C级'],
				level_index: 0,
				source: ['微信', '电话', '邮件'],
				source_index: 0,
				status: ['未成交', '已成交'],
				status_index: 0,
			}
		},
		onLoad(options){
			if(options.id){
				let accessToken = this.getGlobalAccessToken();
				console.log(accessToken);
				uni.request({
					url: this.serverUrl + 'customer-info/' + options.id,
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					method: "GET",
					success: (res) => {
						if(res.data.code == 200){
							this.customerInfo = res.data.data
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
	
	.box-picker{
		width: 80%;
		display: flex;
		position: relative;
		justify-content: flex-end;
	}
	
	.box-picker picker{
		width: 100%;
		margin-right: 40upx;
	}
	
	.box-picker image{
		width: 30upx;
		height: 30upx;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		position: absolute;
	}
</style>
