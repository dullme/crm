(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/update/index"],{"4b08":function(t,s,e){},"6d6c":function(t,s,e){"use strict";e.r(s);var a=e("feef"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);s["default"]=i.a},"7bb9":function(t,s,e){"use strict";var a=e("4b08"),i=e.n(a);i.a},"95d0":function(t,s,e){"use strict";e.r(s);var a=e("afc6"),i=e("6d6c");for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);e("7bb9");var o=e("2877"),l=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=l.exports},afc6:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c},i=[];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})},cc22:function(t,s,e){"use strict";(function(t){e("d058"),e("921b");a(e("66fd"));var s=a(e("95d0"));function a(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("6e42")["createPage"])},feef:function(t,s,e){"use strict";(function(t,e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={components:{},data:function(){return{info:"正在加载",Minfo:"未知",Mtip:"",updateInfo:"无",latest:null,packgeSize:null,packgePath:null,downloadTask:null,downloadProgress:0,buttonLoading:!1,installed:!1,startProgress:!1,currentIsLatest:!0}},onReady:function(){this.getLatest();var s=t.getStorageSync("updated");s.packgePath&&(this.packgePath=s.packgePath)},onShow:function(){!0===this.installed&&this.packgePath&&(this.installed=!1,this.haveDownloaded())},onUnload:function(){this.downloadTask&&(this.closeTask(),this.showToast("更新被取消"))},onPullDownRefresh:function(){this.getLatest(),t.stopPullDownRefresh()},methods:{showToast:function(s){t.showToast({title:s,duration:3e3,icon:"none"})},installPackge:function(){plus.runtime.install(this.packgePath,{force:!0}),this.installed=!0,t.setStorage({key:"updated",data:{completed:!0,packgePath:this.packgePath},success:function(t){console.log(e("成功保存更新记录"," at pages/update/index.vue:112"))}}),this.packgePath.match(RegExp(/.wgt/))&&(this.installed=!1,t.showModal({title:"提示",content:"应用将重启以完成更新",showCancel:!1,complete:function(){plus.runtime.restart()}}))},haveDownloaded:function(){var s=this;t.showModal({title:"更新尚未完成",content:"您已下载更新包，但是还没有完成安装，请问是否要继续安装更新包呢？",success:function(t){t.confirm?s.installPackge():t.cancel&&s.showToast("更新被取消")}})},getLatest:function(){var s=this;this.info="正在加载",this.Minfo="未知",this.updateInfo="无",this.buttonLoading=!0,this.latest=null,t.request({url:this.serverUrl+"version/info",method:"GET",success:function(t){if(200===t.data.code){var e=t.data.data;s.latest=e.info,s.buttonLoading=!1,s.checkLatest()}}})},checkLatest:function(){this.latest.id?this.$current.id!=this.latest.id?(this.currentIsLatest=!1,this.Mtip="发现新版本",this.info=this.latest.name+" "+this.latest.number,this.updateInfo=this.latest.info,this.packgeSize=(this.latest.packgeSize/1048576).toFixed(2)+"MB",this.setMinfo(this.latest.type)):(this.showToast("当前是最新版了"),this.currentIsLatest=!0,this.Mtip="当前是最新版",this.info=this.latest.name+" "+this.latest.number,this.updateInfo=this.latest.info,this.setMinfo(this.latest.type)):this.Mtip="未找到发行版本"},setMinfo:function(t){switch(t){case"base":this.Minfo="结构版";break;case"alpha":this.Minfo="内测版";break;case"beta":this.Minfo="公测版";break;case"rc":this.Minfo="终测版";break;case"release":this.Minfo="正式版";break;default:this.Minfo="未知"}},closeTask:function(){this.downloadTask.abort(),this.downloadTask=null,this.startProgress=!1},createTask:function(s){var e=this;this.packgePath?this.haveDownloaded():(this.downloadProgress=0,this.startProgress=!0,this.downloadTask=t.downloadFile({url:s,success:function(s){200===s.statusCode&&t.saveFile({tempFilePath:s.tempFilePath,success:function(t){e.packgePath=t.savedFilePath,e.installPackge(),e.closeTask()}})}}),this.downloadTask.onProgressUpdate(function(t){e.downloadProgress=t.progress}))},handleUpdate:function(){"android"===plus.os.name.toLowerCase()?this.latest.androidLink&&"#"!==this.latest.androidLink?this.createTask(this.latest.androidLink):this.showToast("未找到下载地址"):this.latest.iosLink&&"#"!==this.latest.iosLink?this.latest.iosLink.match(RegExp(/.wgt/))?this.createTask(this.latest.iosLink):plus.runtime.openURL(this.latest.iosLink):this.showToast("未找到ios商店地址")}}};s.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["cc22","common/runtime","common/vendor"]]]);