(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registLogin-registLogin"],{"4e11":function(t,e,a){"use strict";a.r(e);var n=a("8a6d"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},6490:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-3822ba64]{background:#fff;height:100%}.body[data-v-3822ba64]{padding:%?160?% %?50?%}.header .title[data-v-3822ba64]{font-size:1.5em;font-weight:500}.header .t-content[data-v-3822ba64]{margin-top:%?10?%;font-size:.8em;color:#666}.input[data-v-3822ba64]{background-color:#f6f6f6;border-radius:%?100?%;padding:%?29?% %?40?%;font-size:%?28?%;margin-top:%?100?%}.input-last[data-v-3822ba64]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:%?50?%;position:relative}.graywords[data-v-3822ba64]{color:#aaa}.form-button[data-v-3822ba64]{border:#2c405a;margin-top:%?30?%;border-radius:%?100?%;padding:%?12?% 0;font-size:%?30?%;background-color:#ddd;color:#fff;margin-top:%?80?%}.form-button[data-v-3822ba64]:after{width:0;height:0}.code[data-v-3822ba64]{color:#008eff;line-height:%?40?%;vertical-align:middle;text-align:center;right:%?50?%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:absolute}.form-button-active[data-v-3822ba64]{background-color:#008eff!important}body.?%PAGE?%[data-v-3822ba64]{background:#fff}",""])},6659:function(t,e,a){"use strict";var n=a("ce76"),i=a.n(n);i.a},"8a6d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mobile:"",code:"",time:60,sendMsgDisabled:!1}},methods:{send:function(){var t=this;if(t.mobile){if(!t.sendMsgDisabled){var e=t.serverUrl;uni.request({url:e+"send-sms",data:{mobile:t.mobile},method:"POST",success:function(e){console.log(e),200==e.data.code?(t.sendMsgDisabled=!0,t.countDown()):422==e.data.code&&(t.sendMsgDisabled=!1,uni.showToast({title:e.data.message,duration:2e3,image:"../../static/icons/warning.png"}))}})}}else uni.showToast({title:"请输入手机号",image:"../../static/icons/warning.png"})},countDown:function(){var t=this,e=window.setInterval(function(){t.time--<=0&&(t.time=60,t.sendMsgDisabled=!1,window.clearInterval(e))},1e3)},formSubmit:function(){var t=this,e=t.serverUrl;uni.request({url:e+"login-sms",data:{mobile:t.mobile,code:t.code},method:"POST",success:function(t){console.log(t),200==t.data.code?(uni.setStorageSync("globalAccessToken",{auth_id:t.data.data.auth_id,expires_in:t.data.data.expires_in,token:t.data.data.token,expires_at:Math.round(new Date/1e3)+t.data.data.expires_in}),uni.switchTab({url:"../index/index"})):422==t.data.code&&uni.showToast({title:t.data.message,image:"../../static/icons/warning.png"})}})}}};e.default=n},b1e2:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"header"},[a("p",{staticClass:"title"},[t._v("客户管理系统")]),a("p",{staticClass:"t-content"},[t._v("请输入手机号码登录")])]),a("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[a("v-uni-view",{staticClass:"input"},[a("v-uni-input",{attrs:{name:"mobile",type:"number",value:"",placeholder:"请输入手机号","placeholder-class":"graywords"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),a("v-uni-view",{staticClass:"input input-last"},[a("v-uni-input",{attrs:{name:"code",type:"number",value:"",placeholder:"请输入验证码","placeholder-class":"graywords"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),a("v-uni-label",{staticClass:"code",on:{click:function(e){e=t.$handleEvent(e),t.send(e)}}},[t.sendMsgDisabled?a("span",[t._v(t._s(t.time+"秒后获取"))]):t._e(),t.sendMsgDisabled?t._e():a("span",[t._v("发送验证码")])])],1),a("v-uni-button",{staticClass:"form-button",class:[t.mobile&&t.code?" form-button-active":""],attrs:{"form-type":"submit"}},[t._v("登录")])],1)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},b6ed:function(t,e,a){"use strict";a.r(e);var n=a("b1e2"),i=a("4e11");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("6659");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"3822ba64",null);e["default"]=r.exports},ce76:function(t,e,a){var n=a("6490");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("e24ffb82",n,!0,{sourceMap:!1,shadowMode:!1})}}]);