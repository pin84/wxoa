import wx from 'weixin-js-sdk'
import { get } from '@/plugins/axios'


async function wxconfig() {

  // let url = encodeURIComponent(window.location.href.split('#')[0])
  let url = window.location.href.split('#')[0]

  let res = await get('wx/sign', { signUrl:url })
  // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  // appId: '', // 必填，公众号的唯一标识
  // timestamp: , // 必填，生成签名的时间戳
  // nonceStr: '', // 必填，生成签名的随机串
  // signature: '',// 必填，签名
  // jsApiList: [] 
  
  let {appId,noncestr,signature,timestamp} = res.data
  // console.log(res);
  let obj = {
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId, // 必填，公众号的唯一标识
    timestamp, // 必填，生成签名的时间戳
    nonceStr:noncestr, // 必填，生成签名的随机串
    signature,// 必填，签名
    jsApiList: [
      'scanQRCode',
      'chooseImage',
      'uploadImage',
      'downloadImage',
      'getLocalImgData'
    ] // 必填，需要使用的JS接口列表
  }

  // console.log('--前端，签名的obj --',obj);

  wx.config(obj);

}


export default wxconfig


