(function(e){function t(t){for(var n,o,c=t[0],s=t[1],i=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"197785d6","chunk-21437215":"2e51aacc","chunk-71c7c9ec":"a3920d66","chunk-5ee45214":"e9a509af","chunk-6df22e8a":"3fd577a6","chunk-6a8bccf3":"64222067"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-21437215":1,"chunk-71c7c9ec":1,"chunk-5ee45214":1,"chunk-6df22e8a":1,"chunk-6a8bccf3":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-21437215":"9d5ef80d","chunk-71c7c9ec":"92a6b207","chunk-5ee45214":"81d68239","chunk-6df22e8a":"910f8cda","chunk-6a8bccf3":"9ca18498"}[e]+".css",a=s.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){i=p[c],l=i.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],f.parentNode.removeChild(f),r(u)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var f=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02e6":function(e,t,r){},"034f":function(e,t,r){"use strict";r("85ec")},1:function(e,t){},"1ea3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.$store.state.v1.isShowNav?r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1):e._e(),r("router-view")],1)},u=[],c=r("1da1"),s=(r("96cf"),r("ac1f"),r("1276"),r("18a0")),i=r.n(s),l=(r("d3b7"),r("bc3a")),p=r.n(l),f=(r("4328"),"production");n="development"==f?"http://localhost:3000":"http://data.lzhs.top",console.log("----baseURL---",n);var h=p.a.create({baseURL:n,timeout:5e3});function v(e,t){return h.get(e,{params:t})}function d(){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,n,o,a,u,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=window.location.href.split("#")[0],e.next=3,v("wx/sign",{signUrl:t});case 3:r=e.sent,n=r.data,o=n.appId,a=n.noncestr,u=n.signature,c=n.timestamp,s={debug:!0,appId:o,timestamp:c,nonceStr:a,signature:u,jsApiList:["scanQRCode","chooseImage","uploadImage","downloadImage","getLocalImgData"]},i.a.config(s);case 7:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}h.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h.interceptors.response.use((function(e){var t=e.data;return t}),(function(e){return Promise.reject(e)}));var g=d,b={data:function(){return{}},created:function(){this.initPage()},mounted:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:case"end":return e.stop()}}),e)})))()},methods:{initPage:function(){}}},_=b,k=(r("034f"),r("2877")),w=Object(k["a"])(_,a,u,!1,null,null,null),y=w.exports,j=(r("3ca3"),r("ddb0"),r("8c4f")),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("van-button",{attrs:{type:"primary"},on:{click:e.sendRequest}},[e._v("主要按钮")]),r("hr"),r("van-button",{attrs:{type:"primary"},on:{click:e.test}},[e._v("test")]),r("hr")],1)},E=[],O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},C=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],S={name:"HelloWorld",props:{msg:String}},P=S,$=(r("7def"),Object(k["a"])(P,O,C,!1,null,"1935ec24",null)),R=$.exports,L={name:"Home",data:function(){return{radio:"1"}},components:{HelloWorld:R,LoginForm:function(){return r.e("chunk-21437215").then(r.bind(null,"61b1"))}},methods:{test:function(){this.$router.push("/qrcode")},sendRequest:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$wx.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(e){var t=e.resultStr;console.log(t)}});case 1:case"end":return t.stop()}}),t)})))()}}},N=L,T=(r("c17f"),Object(k["a"])(N,x,E,!1,null,"13fd0694",null)),q=T.exports;o["a"].use(j["a"]);var A=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/qrcode",name:"qrcode",component:function(){return r.e("chunk-71c7c9ec").then(r.bind(null,"ea23"))}}],I=new j["a"]({mode:"hash",base:"/",routes:A}),H=I,D=r("2f62");o["a"].use(D["a"]);var F={state:{isShowNav:!0},mutations:{isShowNav:function(e,t){e.isShowNav=t}},actions:{},modules:{}},M=new D["a"].Store({modules:{v1:F}}),U=(r("73ec"),r("02e6"),r("b970")),B=(r("157a"),{getinfo:"user/getinfo"});o["a"].use(U["a"]),o["a"].prototype.$api=B,o["a"].prototype.$get=v,o["a"].prototype.$wx=i.a,o["a"].config.productionTip=!1,new o["a"]({router:H,store:M,render:function(e){return e(y)}}).$mount("#app")},"73ec":function(e,t,r){},"7def":function(e,t,r){"use strict";r("8e33")},"85ec":function(e,t,r){},"8e33":function(e,t,r){},c17f:function(e,t,r){"use strict";r("1ea3")}});
//# sourceMappingURL=app.c21a0c3f.js.map