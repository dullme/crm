(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/grab"],{"084d":function(t,a,e){"use strict";e.r(a);var n=e("9d6f"),o=e("df0f");for(var s in o)"default"!==s&&function(t){e.d(a,t,function(){return o[t]})}(s);e("f79a");var i=e("2877"),c=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=c.exports},"08e2":function(t,a,e){"use strict";(function(t,e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{grab:[],images:[]}},onShow:function(){this.getGrab()},methods:{getGrab:function(){var a=this,e=this.getGlobalAccessToken();null!=e&&t.request({url:this.serverUrl+"grab",header:{Authorization:e,Accept:"application/json"},method:"GET",success:function(e){200==e.data.code?a.grab=e.data.data:422==e.data.code?t.showModal({title:"等待对方确认",content:e.data.message,showCancel:!0,success:function(a){a.confirm&&t.navigateTo({url:"../my/myTransaction"})}}):429==e.data.code?t.showToast({title:e.data.message,image:"../../static/icons/warning.png"}):t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(a){a.confirm&&t.reLaunch({url:"../registLogin/registLogin"})}})}})},removeImage:function(a){var n=this;t.showModal({title:"删除",content:"确定删除图片？",showCancel:!0,confirmText:"确定",success:function(t){t.confirm?n.images.splice(a,1):t.cancel&&console.log(e("用户点击取消"," at pages/my/grab.vue:132"))}})},uploadImage:function(){var a=this;t.chooseImage({success:function(n){var o=n.tempFilePaths,s=a.getGlobalAccessToken();t.uploadFile({url:a.serverUrl+"upload",filePath:o[0],name:"file",header:{Authorization:s,Accept:"application/json"},formData:{type:"1"},success:function(t){var n=JSON.parse(t.data);console.log(e(n.data," at pages/my/grab.vue:157")),a.images.push(n.data)}})}})},submit:function(){var a=this,e=this.getGlobalAccessToken(),n=this,o=n.serverUrl;t.request({url:o+"save-grab",header:{Authorization:e,Accept:"application/json"},data:{id:n.grab.id,images:n.images},method:"POST",success:function(e){200==e.data.code?(a.images=[],a.grab=[],t.showToast({title:e.data.message,image:"../../static/icons/success.png"}),setTimeout(function(){t.navigateTo({url:"../my/myTransaction"})},1e3)):422==e.data.code&&t.showToast({title:e.data.message,image:"../../static/icons/warning.png"})}})}}};a.default=n}).call(this,e("6e42")["default"],e("0de9")["default"])},"2f27":function(t,a,e){},"9d6f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},a157:function(t,a,e){"use strict";(function(t){e("d058"),e("921b");n(e("66fd"));var a=n(e("084d"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},df0f:function(t,a,e){"use strict";e.r(a);var n=e("08e2"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=o.a},f79a:function(t,a,e){"use strict";var n=e("2f27"),o=e.n(n);o.a}},[["a157","common/runtime","common/vendor"]]]);