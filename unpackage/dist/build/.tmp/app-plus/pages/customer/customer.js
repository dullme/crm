(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customer/customer"],{"01dd":function(t,n,e){"use strict";e.r(n);var o=e("e0f8"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=a.a},"23d3":function(t,n,e){"use strict";var o=e("c271"),a=e.n(o);a.a},"479b":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"8b04":function(t,n,e){"use strict";e.r(n);var o=e("479b"),a=e("01dd");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("23d3");var i=e("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports},c271:function(t,n,e){},e0f8:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{token:"",id:"",name:"",mobile:"",user_name:""}},onLoad:function(t){this.token=this.getGlobalAccessToken(),this.id=t.id,this.name=t.name,this.mobile=t.mobile,this.user_name=t.user_name},methods:{call:function(){var n=this;t.showModal({title:"拨打电话",content:"拨打电话给 "+this.mobile,showCancel:!0,confirmText:"确定",success:function(o){o.confirm?(console.log(e("用户点击确定"," at pages/customer/customer.vue:111")),t.request({url:n.serverUrl+"call-mobile/"+n.id,header:{Authorization:n.token,Accept:"application/json"},method:"GET",success:function(n){t.hideLoading(),200==n.data.code?t.showToast({title:n.data.data,image:"../../static/icons/success.png"}):401==n.data.code?t.showToast({title:n.data.message,image:"../../static/icons/warning.png"}):422==n.data.code?t.showToast({title:n.data.message,image:"../../static/icons/warning.png"}):429==n.data.code?t.showToast({title:n.data.message,image:"../../static/icons/warning.png"}):t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(n){n.confirm&&t.reLaunch({url:"../registLogin/registLogin"})}})}})):o.cancel&&console.log(e("用户点击取消"," at pages/customer/customer.vue:162"))}})},operationalRecords:function(n){t.showModal({title:"操作记录",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})},enclosure:function(n){t.showModal({title:"附件",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})},relevantTeams:function(n){t.showModal({title:"相关团队",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})},businessOpportunity:function(n){t.showModal({title:"商机",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})},contractInformation:function(n){t.showModal({title:"合同信息",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})},paymentInformation:function(n){t.showModal({title:"回款信息",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})}}};n.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["5640","common/runtime","common/vendor"]]]);