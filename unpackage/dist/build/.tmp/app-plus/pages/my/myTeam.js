(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myTeam"],{"7d8c":function(t,e,n){"use strict";n.r(e);var a=n("9ca1"),c=n("85c0");for(var u in c)"default"!==u&&function(t){n.d(e,t,function(){return c[t]})}(u);n("a2b8");var o=n("2877"),i=Object(o["a"])(c["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"85c0":function(t,e,n){"use strict";n.r(e);var a=n("e229"),c=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=c.a},"95ce":function(t,e,n){"use strict";(function(t){n("d058"),n("921b");a(n("66fd"));var e=a(n("7d8c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9ca1":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c})},a2b8:function(t,e,n){"use strict";var a=n("fc72"),c=n.n(a);c.a},e229:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{team_list:[]}},onLoad:function(){var e=this,n=this.getGlobalAccessToken();null!=n&&t.request({url:this.serverUrl+"my-team",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(n){200==n.data.code?e.team_list=n.data.data:422==n.data.code&&t.showToast({title:n.data.message,image:"../../static/icons/warning.png"})}})},methods:{back:function(e){t.navigateBack()}}};e.default=n}).call(this,n("6e42")["default"])},fc72:function(t,e,n){}},[["95ce","common/runtime","common/vendor"]]]);