(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39188b80"],{4601:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"qr-code"},[a.imgDataUrl?e("ImageBox",{attrs:{imgURL:a.imgDataUrl},on:{closeImgBox:function(t){a.imgDataUrl=null}}}):e("div",{staticClass:"lable",on:{click:a.uploadimg}},[e("i",{staticClass:"iconfont iconzhaoshangxiaochengxu-tupian"}),e("div",{staticClass:"text"},[a._v("上传图片")])])],1)},c=[],i=e("1da1"),o=(e("96cf"),e("d3b7"),e("3ca3"),e("ddb0"),e("ad94")),s=(e("fa7d"),{data:function(){return{imgDataUrl:null}},components:{TextQr:o["a"],ImageBox:function(){return e.e("chunk-143fddfe").then(e.bind(null,"facb"))}},methods:{uploadimg:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.$wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var e=t.localIds;a.$wx.getLocalImgData({localId:e[0],success:function(t){var n=t.localData;a.imgDataUrl=e[0],a.$emit("changeImg",n)}})}});case 1:case"end":return t.stop()}}),t)})))()}}}),r=s,u=(e("ea8c"),e("2877")),l=Object(u["a"])(r,n,c,!1,null,"32c2a6a1",null);t["default"]=l.exports},"908b":function(a,t,e){},ea8c:function(a,t,e){"use strict";e("908b")}}]);
//# sourceMappingURL=chunk-39188b80.76c9f184.js.map