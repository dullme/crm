(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/deposit"],{"19a8":function(a,e,t){"use strict";t.r(e);var n=t("4149"),o=t.n(n);for(var s in n)"default"!==s&&function(a){t.d(e,a,function(){return n[a]})}(s);e["default"]=o.a},2432:function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement;a._self._c},o=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return o})},3189:function(a,e,t){"use strict";(function(a){t("d058"),t("921b");n(t("66fd"));var e=n(t("e8b2"));function n(a){return a&&a.__esModule?a:{default:a}}a(e.default)}).call(this,t("6e42")["createPage"])},4149:function(a,e,t){"use strict";(function(a,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:"",bankname:"",bankcard:"",name:"",images:[]}},onLoad:function(){var e=this,t=this.getGlobalAccessToken();null!=t&&a.request({url:this.serverUrl+"user-info",header:{Authorization:t,Accept:"application/json"},method:"GET",success:function(t){200==t.data.code?(e.name=t.data.data.admin_name,e.bankcard=t.data.data.admin_bankcard,e.bankname=t.data.data.admin_bankname):429==t.data.code?a.showToast({title:t.data.message,image:"../../static/icons/warning.png"}):a.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(e){e.confirm&&a.reLaunch({url:"../registLogin/registLogin"})}})}})},methods:{removeImage:function(e){var n=this;a.showModal({title:"删除",content:"确定删除图片？",showCancel:!0,confirmText:"确定",success:function(a){a.confirm?n.images.splice(e,1):a.cancel&&console.log(t("用户点击取消"," at pages/my/deposit.vue:112"))}})},uploadImage:function(){var e=this;a.chooseImage({success:function(n){var o=n.tempFilePaths,s=e.getGlobalAccessToken();a.uploadFile({url:e.serverUrl+"upload",filePath:o[0],name:"file",header:{Authorization:s,Accept:"application/json"},formData:{type:"1"},success:function(a){var n=JSON.parse(a.data);console.log(t(n.data," at pages/my/deposit.vue:137")),e.images.push(n.data)}})}})},submit:function(){var e=this,t=this.getGlobalAccessToken(),n=this,o=n.serverUrl;a.request({url:o+"save-deposit",header:{Authorization:t,Accept:"application/json"},data:{amount:n.amount,images:n.images},method:"POST",success:function(t){200==t.data.code?(e.images=[],e.amount=0,a.showModal({title:"提交成功",content:t.data.message,showCancel:!1,confirmText:"确定"})):422==t.data.code&&a.showModal({title:"提交失败",content:t.data.message,showCancel:!1,confirmText:"确定"})}})}}};e.default=n}).call(this,t("6e42")["default"],t("0de9")["default"])},"6d5b":function(a,e,t){},a3a4:function(a,e,t){"use strict";var n=t("6d5b"),o=t.n(n);o.a},e8b2:function(a,e,t){"use strict";t.r(e);var n=t("2432"),o=t("19a8");for(var s in o)"default"!==s&&function(a){t.d(e,a,function(){return o[a]})}(s);t("a3a4");var c=t("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports}},[["3189","common/runtime","common/vendor"]]]);