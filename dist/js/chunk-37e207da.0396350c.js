(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37e207da"],{4601:function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"qr-code"},[a.imgDataUrl?n("ImageBox",{attrs:{imgURL:a.imgDataUrl},on:{closeImgBox:function(t){a.imgDataUrl=null}}}):n("div",{staticClass:"lable",on:{click:a.uploadimg}},[n("i",{staticClass:"iconfont iconzhaoshangxiaochengxu-tupian"}),n("div",{staticClass:"text"},[a._v("上传图片")])])],1)},c=[],i=n("1da1"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("ad94")),s=(n("fa7d"),{data:function(){return{imgDataUrl:null}},components:{TextQr:o["a"],ImageBox:function(){return n.e("chunk-143fddfe").then(n.bind(null,"facb"))}},methods:{uploadimg:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.$wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){var n=t.localIds;a.$wx.getLocalImgData({localId:n[0],success:function(t){var e=t.localData;a.imgDataUrl=n[0],a.$emit("changeImg",e)}})}});case 1:case"end":return t.stop()}}),t)})))()}}}),r=s,u=(n("a5cf"),n("2877")),l=Object(u["a"])(r,e,c,!1,null,"f16111b8",null);t["default"]=l.exports},a5cf:function(a,t,n){"use strict";n("a62a")},a62a:function(a,t,n){}}]);
//# sourceMappingURL=chunk-37e207da.0396350c.js.map