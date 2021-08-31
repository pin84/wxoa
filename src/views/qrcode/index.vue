<template>
  <div class="qr-code">
    <div v-if="isShowQrcode">
      <h1>生成二维码</h1>
      <div class="btn-box">
        <van-button
          class="btn"
          :class="{ active: index == curBtnIndex }"
          v-for="(btn, index) in btnList"
          :key="index"
          size="small"
          @click="changeType(index)"
          >{{ btn.text }}</van-button
        >
      </div>
      <TextQr v-if="curBtnIndex == 0" @inputText="inputText" />
      <ImageQr v-if="curBtnIndex == 1" @changeImg="changeImg" />
      <van-button class="create-btn" type="warning" @click="createQRCode"
        >生成二维码</van-button
      >
    </div>

    <ShowQRCode v-else :qrcodeUrl="qrcodeUrl" @reCreata="reCreata" />
  </div>
</template>

<script>
import TextQr from "./TextQr.vue";
import QRCode from "qrcode";
import axios from "axios";
import { Dialog } from 'vant';
export default {
  data() {
    return {
      isShowQrcode:true,
      imgDataUrl: '', //图片的base64数据
      inputContent: "",
      qrcodeUrl: "",
      curBtnIndex: 0,
      btnList: [
        {
          text: "文字",
        },
        {
          text: "图片",
        },
      ],
    };
  },

  components: {
    TextQr,
    ShowQRCode: () => import("./ShowQRCode.vue"),
    ImageQr: () => import("./ImageQr.vue"),
  },

  created() {
    this.initPage();
  },

  methods: {
    reCreata(){
      this.imgDataUrl = ''
      this.inputContent = ''
      this.isShowQrcode = true
    },
    changeImg(imgDataUrl) {
      this.imgDataUrl = imgDataUrl;
    },
    initPage() {
      this.$store.commit("isShowNav", false);
    },
    async createQRCode() {
      if(this.imgDataUrl == '' && this.inputContent== '' ){
        Dialog({ message: '请输入内容或选择图片' });
        return 
      }

      let str = "";
      if (this.curBtnIndex) {
        let blob = await this.$base64ToBlob(this.imgDataUrl);
        let ts = new Date().getTime() + "";
        let myFile = new File([blob], ts, {
          type: blob.type,
        });
        console.log('--myFile--',myFile);
        let formData = this.$fileAppenToFormData(myFile);
        // let res  =await axios.post('http://localhost:3000/wx/upload',formData,{headers: {'Content-Type': 'multipart/form-data'}})
        // str = res.data.data;

        let res = await this.$post(this.$api.uploadImg, formData);
        str = res.data;
      } else {
        str = this.inputContent;
      }

      QRCode.toDataURL(str, (err, url) => {
        this.qrcodeUrl = url;
      });
      this.isShowQrcode = false
    },
    changeType(index) {
      this.curBtnIndex = index;
      this.qrcodeUrl = "";
      this.inputContent = "";
    },
    inputText(text) {
      this.inputContent = text;
    },
  },

  destroyed() {
    this.$store.commit("isShowNav", true);
  },
};
</script>

<style lang="scss" scoped>
.qr-code {
  padding: 10px;
  .btn-box {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    .btn {
      width: 40%;
      font-size: 12px;
      font-weight: 600;
      &.active {
        background-color: #07c160;
        color: #fff;
      }
    }
  }
  .create-btn {
    margin: 10px;
  }
}
</style>
