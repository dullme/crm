import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Vue.prototype.serverUrl = "http://crm-api.test/";			// 生产环境
Vue.prototype.serverUrl = "http://crm-api.test/api/";		// 开发环境

Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync("globalUser");
	if (userInfo != null && userInfo != "" && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
