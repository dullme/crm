(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1558:function(t,e,n){"use strict";(function(t){n("d058"),n("921b");o(n("66fd"));var e=o(n("79a4"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4fef":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.userInfo.bank_card.replace(/(\d{4})(?=\d)/g,"$1 "));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},5557:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/uni-notice-bar/uni-notice-bar").then(n.bind(null,"5b5c"))},a={components:{uniNoticeBar:o},data:function(){return{userInfo:{},message_text:"",deposit_amount:0,deposit:0,withdraw_amount:0,index_amount:0,deposit_enough_message:""}},onShow:function(){this.getUserInfo()},onPullDownRefresh:function(){this.getUserInfo(),setTimeout(function(){t.stopPullDownRefresh()},100)},methods:{getUserInfo:function(){var e=this,n=this.getGlobalAccessToken();null!=n&&t.request({url:this.serverUrl+"user-info",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(n){if(200==n.data.code)e.userInfo=n.data.data,e.message_text=n.data.data.message,e.userInfo.bank_card&&e.userInfo.bank_name&&e.userInfo.name||t.showModal({title:"完善个人信息",content:"请完善银行信息",showCancel:!1,success:function(e){e.confirm&&t.navigateTo({url:"../my/myInfo"})}});else{if(429!=n.data.code)return t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(e){e.confirm&&t.reLaunch({url:"../registLogin/registLogin"})}}),null;t.showToast({title:n.data.message,image:"../../static/icons/warning.png"})}}}),t.request({url:this.serverUrl+"deposit-count",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(t){200==t.data.code&&(e.deposit_amount=t.data.data.deposit_amount,e.deposit_enough_message=t.data.data.deposit_enough_message,e.deposit=t.data.data.deposit,e.withdraw_amount=t.data.data.withdraw_amount,e.index_amount=t.data.data.index_amount)}})},submitDeposit:function(){this.deposit_amount>=this.deposit?t.showModal({title:"保证金",content:this.deposit_enough_message,showCancel:!1,confirmText:"确定"}):t.navigateTo({url:"../my/deposit"})},grabOrder:function(){var e=this.getGlobalAccessToken();t.request({url:this.serverUrl+"grab-order",header:{Authorization:e,Accept:"application/json"},method:"GET",success:function(e){200==e.data.code?t.showModal({title:"抢单成功",content:e.data.message,showCancel:!1,confirmText:"确定",success:function(e){e.confirm&&t.switchTab({url:"../my/grab"})}}):422==e.data.code&&t.showModal({title:"抢单失败",content:e.data.message,showCancel:!1,confirmText:"确定"})}})},contacts:function(e){t.showModal({title:"联系人",content:"联系人请从客户管理进入",showCancel:!1,confirmText:"确定"})},contractManagement:function(e){t.showModal({title:"合同管理",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})},paymentManagement:function(e){t.showModal({title:"回款管理",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})}}};e.default=a}).call(this,n("6e42")["default"])},"57d7":function(t,e,n){"use strict";n.r(e);var o=n("5557"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},"79a4":function(t,e,n){"use strict";n.r(e);var o=n("4fef"),a=n("57d7");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("bce7");var i=n("2877"),c=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},bce7:function(t,e,n){"use strict";var o=n("c3c5"),a=n.n(o);a.a},c3c5:function(t,e,n){}},[["1558","common/runtime","common/vendor"]]]);