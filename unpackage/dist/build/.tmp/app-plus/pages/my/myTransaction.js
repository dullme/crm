(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myTransaction"],{"01a6":function(t,a,n){"use strict";n.r(a);var e=n("fdac"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(a,t,function(){return e[t]})}(s);a["default"]=i.a},"3dbc":function(t,a,n){"use strict";var e=n("5aba"),i=n.n(e);i.a},"5aba":function(t,a,n){},"5f3a":function(t,a,n){"use strict";(function(t){n("d058"),n("921b");e(n("66fd"));var a=e(n("dd62"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("6e42")["createPage"])},aa4e:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=(t._self._c,t.__map(t.transaction_list,function(a,n){var e=t.getStatus(a.status),i=t.getStatus(a.status);return{$orig:t.__get_orig(a),m0:e,m1:i}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return i})},dd62:function(t,a,n){"use strict";n.r(a);var e=n("aa4e"),i=n("01a6");for(var s in i)"default"!==s&&function(t){n.d(a,t,function(){return i[t]})}(s);n("3dbc");var o=n("2877"),u=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=u.exports},fdac:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{transaction_list:[],display_days:""}},onLoad:function(){this.getTransactionList()},onPullDownRefresh:function(){this.getTransactionList(),setTimeout(function(){t.stopPullDownRefresh()},100)},methods:{getTransactionList:function(){var a=this,n=this.getGlobalAccessToken();null!=n&&t.request({url:this.serverUrl+"transaction-list",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(n){200==n.data.code?(a.transaction_list=n.data.data.transaction_list,a.display_days=n.data.data.display_days):422==n.data.code&&t.showToast({title:n.data.message,image:"../../static/icons/warning.png"})}})},getStatus:function(t){return 1==t?"等待您出款":2==t?"等待对方确认":3==t?"交易成功":4==t?"交易取消":void 0},back:function(a){t.navigateBack()}}};a.default=n}).call(this,n("6e42")["default"])}},[["5f3a","common/runtime","common/vendor"]]]);