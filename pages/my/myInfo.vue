<template>
	<view class="body index-body">
		<div class="real-body">
			<div class="my-box-card">
				<image src="../../static/avatar.png"></image>
				<div style="flex: 1;">
					<div style="display: flex;align-items: center; justify-content: space-between;">
						<span>{{ name ? name : username }}</span>
					</div>
					<p class="my-code">推荐码：{{ invitation_code }}</p>
				</div>
			</div>
			
			<div class="memu-list">
				
				<div>
					<span>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</span>	
					<span>{{ username }}</span>
				</div>
				
				<div>
					<span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>		
					<input style="flex: 1;" type="text" v-model="name"/>
					<button v-on:click="updateName()">修改</button>
				</div>
				
				<div>
					<span>登录密码：</span>
					<input style="flex: 1;" type="text" v-model="password" placeholder="******"/>
					<button v-on:click="updatePassword()">修改</button>
				</div>
				
				<div>
					<span>开户银行：</span>
					<picker style="flex: 1;" :value="index" :range="bankname_list" @change="banknameSelect">
						<view class="uni-input">
							{{bankname_list[index]}}  
						</view>
					</picker>
					
					<button v-on:click="updateBankname()">修改</button>
				</div>
				
				<div>
					<span>银行卡号：</span>
					<input style="flex: 1;" type="text" v-model="bankcard"/>
					<button v-on:click="updateBankcard()">修改</button>
				</div>
			</div>
			
			<div class="message">
				<p>温馨提示：</p>
				<p>为了保护您的资金安全，登陆密码/银行卡信息任其一项修改后24小时内无法参与任何交易，如再次修改，则顺延24小时。</p>
			</div>
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				name:'',
				invitation_code:'',
				bankname:'',
				bankcard:'',
				password:'',
				index:0,
				bankname_list: [],
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
							this.bankname_list = res.data.data.bankname_list
							this.username = res.data.data.username;
							this.name = res.data.data.name ? res.data.data.name : '';
							this.invitation_code = res.data.data.invitation_code;
							this.bankcard = res.data.data.bank_card ? res.data.data.bank_card : '';
							this.bankname = res.data.data.bank_name ? res.data.data.bank_name : '';
							this.findIndex()
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
			banknameSelect(e){
				this.index = e.detail.value;
			},
			
			findIndex(){
				this.bankname_list.forEach((value, key)=>{
					if(this.bankname == value){
						this.index = key
					}
				})
			},
			
			updateName(){
				let accessToken = this.getGlobalAccessToken();
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'update-name',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					data: {
						"name": me.name,
					},
					method: "POST",
					success: (res) => {						
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
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
			},
			
			updatePassword(){
				let accessToken = this.getGlobalAccessToken();
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'update-password',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					data: {
						"password": me.password,
					},
					method: "POST",
					success: (res) => {						
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							this.password = '';
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
					
			},
			updateBankname(){
				let accessToken = this.getGlobalAccessToken();
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'update-bankname',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					data: {
						"bankname": this.bankname_list[this.index],
					},
					method: "POST",
					success: (res) => {						
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
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
			},
			updateBankcard(){
				let accessToken = this.getGlobalAccessToken();
				let me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + 'update-bankcard',
					header: {
						"Authorization": accessToken,
						"Accept":'application/json'
					},
					data: {
						"bankcard": me.bankcard,
					},
					method: "POST",
					success: (res) => {						
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
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
			},
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
</style>
