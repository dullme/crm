(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/complaint"],{1450:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{id:"",order_no:"",status:"",withdraw_amount:"",bankcard:"",handing_fee:"",content:"",type:"",message:""}},onLoad:function(t){this.type=t.type,this.id=t.id,this.order_no=t.order_no,this.status=t.status,this.withdraw_amount=t.withdraw_amount,this.bankcard=t.bankcard,this.handing_fee=t.handing_fee,this.getMessage()},methods:{getStatus:function(t){if(1==this.type){if(1==t)return"等待您出款";if(2==t)return"等待对方确认";if(3==t)return"成功"}else{if(0==t)return"等待接单";if(1==t)return"等待对方出款";if(2==t)return"对方已出款";if(3==t)return"完成"}},getMessage:function(){var e=this,n=this.getGlobalAccessToken(),a=this,i=a.serverUrl;t.request({url:i+"complaint-message",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(t){e.message=t.data.data}})},submit:function(){var e=this;t.showModal({title:"确定要投诉",content:this.message,showCancel:!0,confirmText:"确定",success:function(a){if(a.confirm){var i=e.getGlobalAccessToken(),s=e,o=s.serverUrl;t.request({url:o+"complaint",header:{Authorization:i,Accept:"application/json"},data:{id:s.id,content:s.content},method:"POST",success:function(e){200==e.data.code?(t.showToast({title:e.data.message,image:"../../static/icons/success.png"}),setTimeout(function(){t.navigateBack()},1e3)):422==e.data.code&&t.showToast({title:e.data.message,image:"../../static/icons/warning.png"})}})}else a.cancel&&console.log(n("用户点击取消"," at pages/my/complaint.vue:178"))}})},back:function(e){t.navigateBack()}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"29f0":function(t,e,n){},"315c":function(t,e,n){"use strict";(function(t){n("d058"),n("921b");a(n("66fd"));var e=a(n("b277"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7f84":function(t,e,n){"use strict";n.r(e);var a=n("1450"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},b19a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getStatus(t.status));t.$mp.data=Object.assign({},{$root:{m0:n}})},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},b277:function(t,e,n){"use strict";n.r(e);var a=n("b19a"),i=n("7f84");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("cf58");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},cf58:function(t,e,n){"use strict";var a=n("29f0"),i=n.n(a);i.a}},[["315c","common/runtime","common/vendor"]]]);