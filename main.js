import Vue from 'vue'
import App from './App'
import md5 from './js_sdk/js-md5/build/md5.min.js'

const currentVersion = {
    id: 3000
}

Vue.prototype.$current = currentVersion

Vue.config.productionTip = false

// Vue.prototype.serverUrl = function(url){
// 	var key = '5e876530';
// 	var Timestamp = Math.round(new Date().getTime()/1000).toString()
// 	var host = 'http://jquery.chinahongniangzi.com';
	
// 	return  host + '/' + Timestamp + '/' + md5(key+Timestamp+url) + url;
// };			// 生产环境
Vue.prototype.serverUrl = "http://pay.s5388.xyz/api/";			// 生产环境
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
