<template>
	<view class="body">
		<view class="form-group">
			<label>客户名称<span style="color: red;margin-left: 10upx;">*</span></label>
			<input type="text" placeholder="请输入客户名称" v-model="customerInfo.name"/>
		</view>
		
		<view class="form-group">
			<label>客户级别<span style="color: red;margin-left: 10upx;">*</span></label>
			<view class="box-picker">
				<picker :range="level" @change="levelSelect">
					<view class="uni-input">{{level[customerInfo.level]}}</view>
				</picker>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
		</view>
		
		<view class="form-group">
			<label>客户行业<span style="color: red;margin-left: 10upx;">*</span></label>
			<view class="box-picker">
				<picker :range="industry" @change="industrySelect">
					<view class="uni-input">{{industry[customerInfo.industry]}}</view>
				</picker>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
		</view>
		
		
		<view class="form-group">
			<label>客户来源<span style="color: red;margin-left: 10upx;">*</span></label>
			<view class="box-picker">
				<picker :range="source" @change="sourceSelect">
					<view class="uni-input">{{source[customerInfo.source]}}</view>
				</picker>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
		</view>
		
		<view class="form-group">
			<label>电话号码<span style="color: red;margin-left: 10upx;">*</span></label>
			<input type="text" placeholder="请输入电话号码" v-model="customerInfo.mobile"/>
		</view>
		
		<view class="form-group">
			<label>网站地址</label>
			<input type="text" placeholder="请输入网站地址" v-model="customerInfo.website"/>
		</view>
		
		<view class="form-group" v-if="this.id">
			<label>拜访状态</label>
			<span style="clolr:#222222">{{ status_name[customerInfo.status] }}</span>
		</view>
		
		<view class="form-group" v-if="this.id && customerInfo.status==0 && customerInfo.next_visit_time">
			<label>重访日期</label>
			<span style="clolr:#222222">{{ customerInfo.next_visit_time }}</span>
		</view>
		
		<!-- <view class="form-group">
			<label>重访日期</label>
			<view class="box-picker">
				<picker mode="date" :value="customerInfo.date" @change="bindDateChange">
					<view class="uni-input">{{customerInfo.date}}</view>
				</picker>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
		</view>
		
		<view class="form-group">
			<label>重访时间</label>
			<view class="box-picker">
				<picker mode="time" :value="customerInfo.time" @change="bindTimeChange">
					<view class="uni-input">{{customerInfo.time}}</view>
				</picker>
				<image src="../../static/icons/xiangqing@3x.png"></image>
			</view>
		</view> -->
		
		<view class="form-group">
			<label>区域</label>
			<input type="text" v-model="customerInfo.province"/>
		</view>
		
		<view class="form-group">
			<label>详细地址</label>
			<input type="text" placeholder="请输入详细地址" v-model="customerInfo.address"/>
		</view>
		
		<button class="form-button form-button-active" @click="formSubmit">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				token:'',
				id:'',
				customerInfo : {
					name:'',
					industry:'',
					mobile:'',
					website:'',
					date: currentDate,
					time: '12:00',
					address:'',
					level: 0,
					source: 0,
					industry: 0,
				},
				level: ['请选择','A级', 'B级', 'C级'],
				source: [],
				industry: [],
				status_name: ['待拜访', '已结束'],
			}
		},
		onLoad(options){
			this.token = this.getGlobalAccessToken();
			this.id = options.id;
			
			
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
						    this.source.push(res.data.data.source[i]);
						}
						
						for (let i in res.data.data.industry) {
						    this.industry.push(res.data.data.industry[i]);
						}
					}else{
						uni.showToast({
							title: res.data.message,
							image: "../../static/icons/warning.png"
						})
					}
				}
			});	
			
			
			if(this.id){
				uni.request({
					url: this.serverUrl + 'customer-info/' + this.id,
					header: {
						"Authorization": this.token,
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
			levelSelect(e){
				this.customerInfo.level = e.detail.value;
			},
			
			industrySelect(e){
				this.customerInfo.industry = e.detail.value;
			},
			
			sourceSelect(e){
				this.customerInfo.source = e.detail.value;
			},
			
			bindDateChange(e){
				this.customerInfo.date = e.detail.value;
			},
			
			bindTimeChange(e){
				this.customerInfo.time = e.detail.value;
			},
			
			formSubmit() {
				if(this.customerInfo.level == 0){
					uni.showToast({
						title: "请选择客户级别",
						image: "../../static/icons/warning.png"
					})
				}else if(this.customerInfo.industry == 0){
					uni.showToast({
						title: "请选择客户行业",
						image: "../../static/icons/warning.png"
					})
				}else if(this.customerInfo.source == 0){
					uni.showToast({
						title: "请选择客户来源",
						image: "../../static/icons/warning.png"
					})
				}else if(this.customerInfo.name == ''){
					uni.showToast({
						title: "请输入客户名称",
						image: "../../static/icons/warning.png"
					})
				}else if(this.customerInfo.mobile == ''){
					uni.showToast({
						title: "请输入电话号码",
						image: "../../static/icons/warning.png"
					})
				}else{
					let id = this.id ? this.id : '';
					
					uni.showLoading({
					    title: '加载中'
					});
					uni.request({
						url: this.serverUrl + 'customer/' + id,
						header: {
							"Authorization": this.token,
							"Accept":'application/json'
						},
						data: this.customerInfo,
						method: "POST",
						success: (res) => {
							uni.hideLoading();
							if(res.data.code == 200){
								let text = "更新成功";
								if(!this.id){
									text = "保存成功";
									this.customerInfo = {
										name:'',
										industry:'',
										mobile:'',
										website:'',
										date: this.getDate({format: true}),
										time: '12:00',
										address:'',
										level: 0,
										source: 0,
										industry: 0,
									}
								}								
								
								uni.showToast({
									title: text,
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
		background: #FFFFFF;
		height: 100%;
	}
	
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
	
	.form-group input, .form-group .box-picker, .form-group span{
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
