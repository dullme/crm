(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-follow-follow"],{"426e":function(t,i,a){"use strict";var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("6b54"),a("87b3");var s=e(a("e814"));a("7f7f");var n=uni.createInnerAudioContext(),o={data:function(){var t=this.getDate({format:!0});return{token:"",id:"",name:"",mobile:"",user_name:"",status:"",type:[],status_name:["待拜访","已结束"],type_index:0,date:t,time:"12:00",remark:"",follow_list:{},customer:{},order:1,radio_id:0,voicePath:"",startTime:0,duration:0,radio_status:0,currentTime:0,showTime:""}},onLoad:function(t){var i=this;this.token=this.getGlobalAccessToken(),this.id=t.id,this.name=t.name,this.mobile=t.mobile,this.user_name=t.user_name,this.status=t.status,null!=this.token&&this.searchFollow(),uni.request({url:this.serverUrl+"customer-industry-and-source",header:{Authorization:this.token,Accept:"application/json"},method:"GET",success:function(t){if(200==t.data.code)for(var a in t.data.data.source)i.type.push(t.data.data.source[a]);else uni.showToast({title:t.data.message,image:"../../static/icons/warning.png"})}})},methods:{onPullDownRefresh:function(){window.location.reload(),setTimeout(function(){uni.stopPullDownRefresh()},500)},typeSelect:function(t){this.type_index=t.detail.value},bindDateChange:function(t){this.date=t.detail.value},bindTimeChange:function(t){this.time=t.detail.value},call:function(){var t=this;uni.showModal({title:"拨打电话",content:"拨打电话给 "+this.mobile,showCancel:!0,confirmText:"确定",success:function(i){i.confirm?(console.log("用户点击确定"),uni.request({url:t.serverUrl+"call-mobile/"+t.id,header:{Authorization:t.token,Accept:"application/json"},method:"GET",success:function(t){uni.hideLoading(),200==t.data.code?uni.showToast({title:t.data.data,image:"../../static/icons/success.png"}):401==t.data.code?uni.showToast({title:t.data.message,image:"../../static/icons/warning.png"}):422==t.data.code?uni.showToast({title:t.data.message,image:"../../static/icons/warning.png"}):429==t.data.code?uni.showToast({title:t.data.message,image:"../../static/icons/warning.png"}):uni.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&uni.reLaunch({url:"../registLogin/registLogin"})}})}})):i.cancel&&console.log("用户点击取消")}})},customerEnd:function(){var t=this;1!=this.customer&&uni.showModal({title:"结束拜访",content:"结束拜访后无法再次开启",showCancel:!0,confirmText:"确定",success:function(i){i.confirm?(console.log("用户点击确定"),uni.showLoading({title:"加载中"}),uni.request({url:t.serverUrl+"customer-end/"+t.id,header:{Authorization:t.token,Accept:"application/json"},method:"GET",success:function(i){uni.hideLoading(),200==i.data.code?(t.customer.status=1,uni.showToast({title:"已结束",image:"../../static/icons/success.png"})):422==i.data.code?uni.showToast({title:i.data.message,image:"../../static/icons/warning.png"}):429==i.data.code?uni.showToast({title:i.data.message,image:"../../static/icons/warning.png"}):uni.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&uni.reLaunch({url:"../registLogin/registLogin"})}})}})):i.cancel&&console.log("用户点击取消")}})},orderBy:function(){this.order=this.order?0:1,this.searchFollow()},searchFollow:function(){var t=this;uni.request({url:this.serverUrl+"follow-list/"+this.id+"/"+this.order,header:{Authorization:this.token,Accept:"application/json"},method:"GET",success:function(i){200==i.data.code?(t.follow_list=i.data.data.follows,t.customer=i.data.data.customer):422==i.data.code?uni.showToast({title:i.data.message,image:"../../static/icons/warning.png"}):429==i.data.code?uni.showToast({title:i.data.message,image:"../../static/icons/warning.png"}):uni.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&uni.reLaunch({url:"../registLogin/registLogin"})}})}})},formSubmit:function(){var t=this;0==this.type_index?uni.showToast({title:"请选择类型",image:"../../static/icons/warning.png"}):(uni.showLoading({title:"加载中"}),uni.request({url:this.serverUrl+"follow",header:{Authorization:this.token,Accept:"application/json"},data:{customer_id:this.id,type:this.type_index,date:this.date,time:this.time,remark:this.remark,order:this.order},method:"POST",success:function(i){uni.hideLoading(),200==i.data.code?(t.follow_list.unshift(i.data.data),t.type_index=0,t.remark="",uni.showToast({title:"保存成功",image:"../../static/icons/success.png"})):422==i.data.code?uni.showToast({title:i.data.message,image:"../../static/icons/warning.png"}):429==i.data.code?uni.showToast({title:i.data.message,image:"../../static/icons/warning.png"}):uni.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&uni.reLaunch({url:"../registLogin/registLogin"})}})}}))},playVoice:function(t,i){var a=this;t!=this.radio_id&&(this.radio_id=t,this.voicePath=i,this.startTime=0,this.duration=0,this.radio_status=0,this.currentTime=0,this.showTime=""),0==this.radio_status?(console.log("播放录音"),this.voicePath&&(n.src=this.voicePath,this.startTime+1<=this.duration&&n.seek(this.startTime),n.play(),this.radio_status=1)):(console.log("播放暂停"),this.startTime=n.currentTime,n.pause(),this.radio_status=0),n.onEnded(function(){a.radio_status=0,a.showTime=""}),n.onCanplay(function(){a.duration=n.duration}),n.onTimeUpdate(function(){a.currentTime=n.currentTime;var t=(0,s.default)(a.currentTime);t>0&&(a.showTime=t.toString()+"s")})},getDate:function(t){var i=new Date,a=i.getFullYear(),e=i.getMonth()+1,s=i.getDate()+1;return"start"===t?a-=60:"end"===t&&(a+=2),e=e>9?e:"0"+e,s=s>9?s:"0"+s,"".concat(a,"-").concat(e,"-").concat(s)}}};i.default=o},"517d":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,"uni-page-body[data-v-262812a7]{background-color:#f4f4f4;height:100%}.body[data-v-262812a7]{background-color:#f4f4f4;padding-top:0}.top-user-card[data-v-262812a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:%?-35?%;margin-right:%?-35?%;padding:%?66?% %?35?% 0 %?35?%;background-color:#fff}.top-user-card .avatar uni-image[data-v-262812a7]{width:%?80?%;height:%?80?%;border-radius:50%;background-color:#f4f4f4;padding:%?30?%;margin-right:%?20?%}.top-user-card .avatar-right[data-v-262812a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:%?15?% 0}.top-user-card .top-title[data-v-262812a7]{font-size:%?36?%;color:#222;margin-bottom:%?25?%;font-weight:700}.top-user-card .bottom-title[data-v-262812a7]{font-size:%?28?%;color:#666;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.top-user-card .bottom-title span[data-v-262812a7]:first-child{margin-right:%?30?%}.visit-form[data-v-262812a7]{border-radius:%?16?%;background-color:#fff;margin-top:%?35?%;padding:0 %?24?%}.form-group[data-v-262812a7]{font-size:%?30?%;color:#222;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?40?% 0;border-bottom:1px solid #eaeaea}.user-card[data-v-262812a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?38?% 0;border-top:1px solid #eaeaea}.user-card-title[data-v-262812a7]{padding:%?40?% 0}.user-card .title[data-v-262812a7]{font-size:%?32?%;color:#222}.user-card .avatar uni-image[data-v-262812a7]{width:%?60?%;height:%?60?%;border-radius:50%;background-color:#f4f4f4;padding:%?20?%;margin-right:%?20?%}.user-card .avatar-right[data-v-262812a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}.user-card .top-title[data-v-262812a7]{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;font-size:%?32?%;color:#222;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:%?20?%}.user-card .bottom-title[data-v-262812a7]{font-size:%?24?%;color:#666;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.box-picker[data-v-262812a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.box-picker uni-picker[data-v-262812a7]{width:100%;margin-right:%?40?%}.box-picker uni-picker .uni-input[data-v-262812a7]{float:right}.box-picker uni-image[data-v-262812a7]{width:%?30?%;height:%?30?%;top:50%;right:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:absolute}.form-button[data-v-262812a7]{border:#2c405a;border-radius:%?100?%;padding:%?12?% 0;font-size:%?30?%;background-color:#ddd;color:#fff}.form-button[data-v-262812a7]:after{width:0;height:0}.form-button-active[data-v-262812a7]{background-color:#008eff!important}.visit-form-first[data-v-262812a7]{padding-bottom:%?40?%}.uni-textarea[data-v-262812a7],.uni-textarea uni-textarea[data-v-262812a7]{height:%?180?%}.content-by-mobile[data-v-262812a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.bottom-title uni-image[data-v-262812a7]{width:%?40?%;height:%?40?%}.end-button[data-v-262812a7]{border:1px solid #22ac38;border-radius:%?100?%;background-color:#fff;color:#22ac38;font-size:%?24?%;line-height:unset;padding:0 %?10?%}.user-card-title[data-v-262812a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.user-card-title uni-image[data-v-262812a7]{width:%?40?%;height:%?40?%}.radio-img uni-image[data-v-262812a7]{width:%?40?%;height:%?40?%}body.?%PAGE?%[data-v-262812a7]{background-color:#f4f4f4}",""])},"63de":function(t,i,a){var e=a("517d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("3ff4bbc8",e,!0,{sourceMap:!1,shadowMode:!1})},b1fd:function(t,i,a){"use strict";a.r(i);var e=a("b286"),s=a("e06f");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("e121");var o=a("2877"),r=Object(o["a"])(s["default"],e["a"],e["b"],!1,null,"262812a7",null);i["default"]=r.exports},b286:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"top-user-card"},[a("v-uni-view",{staticClass:"avatar"},[a("v-uni-image",{attrs:{src:"../../static/icons/lianxiren@3x.png"}})],1),a("v-uni-view",{staticClass:"avatar-right"},[a("v-uni-view",{staticClass:"top-title"},[a("span",[t._v(t._s(t.name))])]),a("v-uni-view",{staticClass:"bottom-title"},[a("span",[t._v("负责人："+t._s(t.user_name))]),a("v-uni-view",{staticClass:"content-by-mobile",on:{click:function(i){i=t.$handleEvent(i),t.call(i)}}},[a("v-uni-image",{attrs:{src:"../../static/icons/mobile.png"}}),a("span",[t._v("："+t._s(t.mobile))])],1)],1),a("v-uni-view",{staticClass:"bottom-title",staticStyle:{"margin-top":"30upx","margin-bottom":"20upx",display:"flex","justify-content":"space-between"}},[a("span",[t._v("状态："+t._s(t.status_name[t.customer.status]))]),1!=t.customer.status?a("span",{staticClass:"end-button",on:{click:function(i){i=t.$handleEvent(i),t.customerEnd(i)}}},[t._v("结束拜访")]):t._e()])],1)],1),a("v-uni-view",{staticClass:"body-follow"},[1!=t.customer.status?a("v-uni-view",{staticClass:"visit-form visit-form-first"},[a("v-uni-view",{staticClass:"form-group"},[a("v-uni-label",[t._v("记录类型")]),a("v-uni-view",{staticClass:"box-picker"},[a("v-uni-picker",{attrs:{mode:"selector",range:t.type},on:{change:function(i){i=t.$handleEvent(i),t.typeSelect(i)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.type[t.type_index]))])],1),a("v-uni-image",{attrs:{src:"../../static/icons/xiangqing@3x.png"}})],1)],1),a("v-uni-view",{staticClass:"form-group"},[a("v-uni-label",[t._v("重访日期")]),a("v-uni-view",{staticClass:"box-picker"},[a("v-uni-picker",{attrs:{mode:"date",value:t.date},on:{change:function(i){i=t.$handleEvent(i),t.bindDateChange(i)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date))])],1),a("v-uni-image",{attrs:{src:"../../static/icons/xiangqing@3x.png"}})],1)],1),a("v-uni-view",{staticClass:"form-group"},[a("v-uni-label",[t._v("重访时间")]),a("v-uni-view",{staticClass:"box-picker"},[a("v-uni-picker",{attrs:{mode:"time",value:t.time},on:{change:function(i){i=t.$handleEvent(i),t.bindTimeChange(i)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.time))])],1),a("v-uni-image",{attrs:{src:"../../static/icons/xiangqing@3x.png"}})],1)],1),a("v-uni-view",{staticClass:"form-group",staticStyle:{"border-bottom":"0"}},[a("v-uni-view",{staticClass:"box-picker"},[a("v-uni-view",{staticClass:"uni-textarea"},[a("v-uni-textarea",{attrs:{placeholder:"备注"},model:{value:t.remark,callback:function(i){t.remark=i},expression:"remark"}})],1)],1)],1),a("v-uni-button",{staticClass:"form-button form-button-active",on:{click:function(i){i=t.$handleEvent(i),t.formSubmit(i)}}},[t._v("盯一下")])],1):t._e(),a("v-uni-view",{staticClass:"visit-form"},[a("v-uni-view",{staticClass:"user-card user-card-title",staticStyle:{border:"0"}},[a("span",{staticClass:"title"},[t._v("跟进记录")]),t.follow_list.length>1?a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.orderBy(i)}}},[1==t.order?a("v-uni-image",{attrs:{src:"../../static/icons/down.png"}}):t._e(),0==t.order?a("v-uni-image",{attrs:{src:"../../static/icons/up.png"}}):t._e()],1):t._e()],1),t.follow_list.length?a("v-uni-view",t._l(t.follow_list,function(i){return a("v-uni-view",{staticClass:"user-card"},[a("v-uni-view",{staticClass:"avatar"},[a("v-uni-image",{attrs:{src:"../../static/icons/lianxiren@3x.png"}})],1),a("v-uni-view",{staticClass:"avatar-right"},[a("v-uni-view",{staticClass:"top-title"},[a("v-uni-navigator",{attrs:{url:"../followEdit/followEdit?id="+i.id}},[a("span",[t._v(t._s(t.user_name))])]),i.record_url?a("v-uni-view",{staticClass:"radio-img",staticStyle:{position:"relative"},on:{click:function(a){a=t.$handleEvent(a),t.playVoice(i.id,i.record_url)}}},[t.radio_id==i.id?a("span",{staticStyle:{position:"absolute",top:"0",right:"60upx"}},[t._v(t._s(t.showTime))]):t._e(),0==t.radio_status?a("v-uni-image",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../../static/icons/play.png"}}):a("v-uni-image",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:1==t.radio_status&&t.radio_id==i.id?"../../static/icons/stop.png":"../../static/icons/play.png"}})],1):t._e()],1),a("v-uni-view",{staticClass:"bottom-title"},[a("span",[t._v(t._s(t.type[i.type]?t.type[i.type]:"电话"))]),a("span",[t._v(t._s(i.visited_at))])]),a("v-uni-view",{staticClass:"bottom-title",staticStyle:{"margin-top":"30upx",display:"flex","justify-content":"space-between"}},[a("span",[t._v("备注：\n\t\t\t\t\t\t\t\t\t"+t._s(i.remark?i.remark.substr(0,20):"无")),i.remark&&i.remark.length>20?a("span",[t._v("...")]):t._e()])])],1)],1)}),1):a("v-uni-view",{staticStyle:{"padding-bottom":"40upx","min-height":"200upx",display:"flex","align-items":"center","justify-content":"center",color:"#D9D9D9","font-size":"35upx"}},[t._v("暂无记录")])],1)],1)],1)},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},e06f:function(t,i,a){"use strict";a.r(i);var e=a("426e"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a},e121:function(t,i,a){"use strict";var e=a("63de"),s=a.n(e);s.a}}]);