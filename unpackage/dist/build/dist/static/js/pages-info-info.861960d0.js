(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-info-info"],{1919:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("客户名称"),i("span",{staticStyle:{color:"red","margin-left":"10upx"}},[t._v("*")])]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入客户名称"},model:{value:t.customerInfo.name,callback:function(e){t.$set(t.customerInfo,"name",e)},expression:"customerInfo.name"}})],1),i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("客户级别"),i("span",{staticStyle:{color:"red","margin-left":"10upx"}},[t._v("*")])]),i("v-uni-view",{staticClass:"box-picker"},[i("v-uni-picker",{attrs:{range:t.level},on:{change:function(e){e=t.$handleEvent(e),t.levelSelect(e)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.level[t.customerInfo.level]))])],1),i("v-uni-image",{attrs:{src:"../../static/icons/xiangqing@3x.png"}})],1)],1),i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("客户行业"),i("span",{staticStyle:{color:"red","margin-left":"10upx"}},[t._v("*")])]),i("v-uni-view",{staticClass:"box-picker"},[i("v-uni-picker",{attrs:{range:t.industry},on:{change:function(e){e=t.$handleEvent(e),t.industrySelect(e)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.industry[t.customerInfo.industry]))])],1),i("v-uni-image",{attrs:{src:"../../static/icons/xiangqing@3x.png"}})],1)],1),i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("客户来源"),i("span",{staticStyle:{color:"red","margin-left":"10upx"}},[t._v("*")])]),i("v-uni-view",{staticClass:"box-picker"},[i("v-uni-picker",{attrs:{range:t.source},on:{change:function(e){e=t.$handleEvent(e),t.sourceSelect(e)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.source[t.customerInfo.source]))])],1),i("v-uni-image",{attrs:{src:"../../static/icons/xiangqing@3x.png"}})],1)],1),i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("电话号码"),i("span",{staticStyle:{color:"red","margin-left":"10upx"}},[t._v("*")])]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入电话号码"},model:{value:t.customerInfo.mobile,callback:function(e){t.$set(t.customerInfo,"mobile",e)},expression:"customerInfo.mobile"}})],1),i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("网站地址")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入网站地址"},model:{value:t.customerInfo.website,callback:function(e){t.$set(t.customerInfo,"website",e)},expression:"customerInfo.website"}})],1),this.id?i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("拜访状态")]),i("span",{staticStyle:{clolr:"#222222"}},[t._v(t._s(t.status_name[t.customerInfo.status]))])],1):t._e(),this.id&&0==t.customerInfo.status&&t.customerInfo.next_visit_time?i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("重访日期")]),i("span",{staticStyle:{clolr:"#222222"}},[t._v(t._s(t.customerInfo.next_visit_time))])],1):t._e(),i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("区域")]),i("v-uni-input",{attrs:{type:"text"},model:{value:t.customerInfo.province,callback:function(e){t.$set(t.customerInfo,"province",e)},expression:"customerInfo.province"}})],1),i("v-uni-view",{staticClass:"form-group"},[i("v-uni-label",[t._v("详细地址")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入详细地址"},model:{value:t.customerInfo.address,callback:function(e){t.$set(t.customerInfo,"address",e)},expression:"customerInfo.address"}})],1),i("v-uni-button",{staticClass:"form-button form-button-active",on:{click:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[t._v("保存")])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},6322:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-0ffe8ba5]{background:#fff;height:100%}.form-group[data-v-0ffe8ba5]{color:#666;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?40?% 0;border-top:1px solid #eaeaea}.form-group uni-label[data-v-0ffe8ba5]{width:30%}.form-group .box-picker[data-v-0ffe8ba5],.form-group span[data-v-0ffe8ba5],.form-group uni-input[data-v-0ffe8ba5]{width:70%;color:#222;font-size:%?28?%}.form-button[data-v-0ffe8ba5]{margin:%?40?% 0;border:#2c405a;border-radius:%?100?%;padding:%?12?% 0;font-size:%?30?%;background-color:#ddd;color:#fff}.form-button[data-v-0ffe8ba5]:after{width:0;height:0}.form-button-active[data-v-0ffe8ba5]{background-color:#008eff!important}.box-picker[data-v-0ffe8ba5]{width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.box-picker uni-picker[data-v-0ffe8ba5]{width:100%;margin-right:%?40?%}.box-picker uni-image[data-v-0ffe8ba5]{width:%?30?%;height:%?30?%;top:50%;right:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:absolute}body.?%PAGE?%[data-v-0ffe8ba5]{background:#fff}",""])},"96e5":function(t,e,i){"use strict";i.r(e);var n=i("db98"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"97c2":function(t,e,i){"use strict";i.r(e);var n=i("1919"),a=i("96e5");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("b33f");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"0ffe8ba5",null);e["default"]=r.exports},b33f:function(t,e,i){"use strict";var n=i("dbfc"),a=i.n(n);a.a},db98:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7f7f");var a=n(i("bd86")),s={data:function(){var t=this.getDate({format:!0});return{token:"",id:"",customerInfo:(0,a.default)({name:"",industry:"",mobile:"",website:"",date:t,time:"12:00",address:"",level:0,source:0},"industry",0),level:["请选择","A级","B级","C级"],source:[],industry:[],status_name:["待拜访","已结束"]}},onLoad:function(t){var e=this;this.token=this.getGlobalAccessToken(),this.id=t.id,uni.request({url:this.serverUrl+"customer-industry-and-source",header:{Authorization:this.token,Accept:"application/json"},method:"GET",success:function(t){if(200==t.data.code){for(var i in t.data.data.source)e.source.push(t.data.data.source[i]);for(var n in t.data.data.industry)e.industry.push(t.data.data.industry[n])}else uni.showToast({title:t.data.message,image:"../../static/icons/warning.png"})}}),this.id&&uni.request({url:this.serverUrl+"customer-info/"+this.id,header:{Authorization:this.token,Accept:"application/json"},method:"GET",success:function(t){200==t.data.code?e.customerInfo=t.data.data:uni.showToast({title:t.data.message,image:"../../static/icons/warning.png"})}})},methods:{levelSelect:function(t){this.customerInfo.level=t.detail.value},industrySelect:function(t){this.customerInfo.industry=t.detail.value},sourceSelect:function(t){this.customerInfo.source=t.detail.value},bindDateChange:function(t){this.customerInfo.date=t.detail.value},bindTimeChange:function(t){this.customerInfo.time=t.detail.value},formSubmit:function(){var t=this;if(0==this.customerInfo.level)uni.showToast({title:"请选择客户级别",image:"../../static/icons/warning.png"});else if(0==this.customerInfo.industry)uni.showToast({title:"请选择客户行业",image:"../../static/icons/warning.png"});else if(0==this.customerInfo.source)uni.showToast({title:"请选择客户来源",image:"../../static/icons/warning.png"});else if(""==this.customerInfo.name)uni.showToast({title:"请输入客户名称",image:"../../static/icons/warning.png"});else if(""==this.customerInfo.mobile)uni.showToast({title:"请输入电话号码",image:"../../static/icons/warning.png"});else{var e=this.id?this.id:"";uni.showLoading({title:"加载中"}),uni.request({url:this.serverUrl+"customer/"+e,header:{Authorization:this.token,Accept:"application/json"},data:this.customerInfo,method:"POST",success:function(e){if(uni.hideLoading(),200==e.data.code){var i="更新成功";t.id||(i="保存成功",t.customerInfo=(0,a.default)({name:"",industry:"",mobile:"",website:"",date:t.getDate({format:!0}),time:"12:00",address:"",level:0,source:0},"industry",0)),uni.showToast({title:i,image:"../../static/icons/success.png"})}else 422==e.data.code?uni.showToast({title:e.data.message,image:"../../static/icons/warning.png"}):429==e.data.code?uni.showToast({title:e.data.message,image:"../../static/icons/warning.png"}):uni.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&uni.reLaunch({url:"../registLogin/registLogin"})}})}})}},getDate:function(t){var e=new Date,i=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)}}};e.default=s},dbfc:function(t,e,i){var n=i("6322");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("fb215606",n,!0,{sourceMap:!1,shadowMode:!1})}}]);