(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myMessage"],{"013a":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{message_list:[]}},onLoad:function(){var e=this,a=this.getGlobalAccessToken();null!=a&&t.request({url:this.serverUrl+"messages",header:{Authorization:a,Accept:"application/json"},method:"GET",success:function(a){200==a.data.code?e.message_list=a.data.data:422==a.data.code&&t.showToast({title:a.data.message,image:"../../static/icons/warning.png"})}})},methods:{}};e.default=a}).call(this,a("6e42")["default"])},"4e6b":function(t,e,a){"use strict";a.r(e);var n=a("013a"),s=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=s.a},"536b":function(t,e,a){},"6a63":function(t,e,a){"use strict";(function(t){a("d058"),a("921b");n(a("66fd"));var e=n(a("7b92"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"7b92":function(t,e,a){"use strict";a.r(e);var n=a("e03f"),s=a("4e6b");for(var u in s)"default"!==u&&function(t){a.d(e,t,function(){return s[t]})}(u);a("eb79");var o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},e03f:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.message_list,function(e,a){var n=e.created_at.substr(11,5);return{$orig:t.__get_orig(e),g0:n}}));t.$mp.data=Object.assign({},{$root:{l0:a}})},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},eb79:function(t,e,a){"use strict";var n=a("536b"),s=a.n(n);s.a}},[["6a63","common/runtime","common/vendor"]]]);