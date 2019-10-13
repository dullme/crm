import Vue from 'vue'
import App from './App'

const currentVersion = {
    id: 2001
}

Vue.prototype.$current = currentVersion

Vue.config.productionTip = false

Vue.prototype.serverUrl = "http://crm-api.dullme.com/api/";			// 生产环境
// Vue.prototype.serverUrl = "http://crm-api.test/api/";		// 开发环境

Vue.prototype.removeGlobalAccessToken = function() {
	uni.removeStorageSync("globalAccessToken");
}

Vue.prototype.getGlobalAccessToken = function(key) {
	var accessToken = uni.getStorageSync("globalAccessToken");
	if (accessToken != null && accessToken != "" && accessToken != undefined) {
		
		let expires_at = Math.round(new Date() / 1000) + accessToken.expires_in; //token 过期时间（秒）
				
		if(expires_at > Math.round(new Date() / 1000)){
			return accessToken.token;
		}else{
			uni.showModal({
			    title: '重新登录',
			    content: '您长时间未操作，请重新登录',
				showCancel: false,
			    success: (res) => {
			        if (res.confirm) {
						uni.reLaunch({
						    url: '../registLogin/registLogin'
						});
			        }
			    }
			});

			return null;
		}
				
	} else {
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
		
		return null;
	}
}


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
