(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fe75d88"],{"3c7b":function(t,n,e){"use strict";e("d092")},4601:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"qr-code"},[e("div",{staticClass:"lable",on:{click:t.uploadimg}},[e("i",{staticClass:"iconfont iconzhaoshangxiaochengxu-tupian"}),e("div",{staticClass:"text"},[t._v("上传图片")])]),e("ImageBox",{attrs:{imgURL:t.imgDataUrl}})],1)},c=[],r=e("1da1"),o=(e("96cf"),e("d3b7"),e("3ca3"),e("ddb0"),e("ad94")),i=(e("b0c0"),function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n,e){var a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return a=t.sent,t.next=5,a.blob();case 5:return c=t.sent,console.log("------blob----",c),t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()),s={data:function(){return{imgDataUrl:""}},components:{TextQr:o["a"],ImageBox:function(){return e.e("chunk-6a8bccf3").then(e.bind(null,"facb"))}},mounted:function(){this.test()},methods:{test:function(){i("aaaaaa")},uploadimg:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){var n=t.localIds;wx.getLocalImgData({localId:n[0],success:function(t){this.imgDataUrl=t.localData,console.log("--------------",t)}})}});case 1:case"end":return n.stop()}}),n)})))()}}},u=s,l=(e("3c7b"),e("2877")),f=Object(l["a"])(u,a,c,!1,null,"b8d99ad2",null);n["default"]=f.exports},b0c0:function(t,n,e){var a=e("83ab"),c=e("9bf2").f,r=Function.prototype,o=r.toString,i=/^\s*function ([^ (]*)/,s="name";a&&!(s in r)&&c(r,s,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},d092:function(t,n,e){}}]);
//# sourceMappingURL=chunk-5fe75d88.39c2ab0d.js.map