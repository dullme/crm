(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"6dfd":function(e,t,n){},"7e8d":function(e,t,n){"use strict";n.r(t);var o=n("92d6"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=a.a},"92d6":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("36bf"),r={onLaunch:function(){(0,a.checkUpdater)(this.$current.id,"../update/index"),console.log(e("App Launch"," at App.vue:7")),plus.screen.lockOrientation("portrait-primary");var t=o.getStorageSync("updated");!0===t.completed?(console.log(e("安装记录被删除，更新成功"," at App.vue:22")),o.removeSavedFile({filePath:t.packgePath,success:function(e){o.removeStorageSync("updated")}})):!1===t.completed?(o.removeStorageSync("updated"),plus.runtime.install(t.packgePath,{force:!0}),o.setStorage({key:"updated",data:{completed:!0,packgePath:t.packgePath},success:function(t){console.log(e("成功安装上次的更新，应用需要重启才能继续完成"," at App.vue:39"))}}),o.showModal({title:"提示",content:"应用将重启以完成更新",showCancel:!1,complete:function(){plus.runtime.restart()}})):(0,a.checkUpdater)(this.$current.id,"../update/index")},onShow:function(){console.log(e("App Show"," at App.vue:57"))},onHide:function(){console.log(e("App Hide"," at App.vue:60"))}};t.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])},a22e:function(e,t,n){"use strict";n.r(t);var o=n("7e8d");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("b491");var r,c,u=n("2877"),l=Object(u["a"])(o["default"],r,c,!1,null,null,null);t["default"]=l.exports},af25:function(e,t,n){"use strict";(function(e,t){n("d058"),n("921b");var o=r(n("66fd")),a=r(n("a22e"));r(n("08fa"));function r(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={id:3e3};o.default.prototype.$current=l,o.default.config.productionTip=!1,o.default.prototype.serverUrl="http://pay.s5388.xyz/api/",o.default.prototype.removeGlobalAccessToken=function(){e.removeStorageSync("globalAccessToken")},o.default.prototype.getGlobalAccessToken=function(t){var n=e.getStorageSync("globalAccessToken");if(null!=n&&""!=n&&void 0!=n){var o=Math.round(new Date/1e3)+n.expires_in;return o>Math.round(new Date/1e3)?n.token:(e.showModal({title:"重新登录",content:"您长时间未操作，请重新登录",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../registLogin/registLogin"})}}),null)}return e.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../registLogin/registLogin"})}}),null},a.default.mpType="app";var i=new o.default(c({},a.default));t(i).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},b491:function(e,t,n){"use strict";var o=n("6dfd"),a=n.n(o);a.a}},[["af25","common/runtime","common/vendor"]]]);