<template>
  <div class="qr-code">
    <div v-if="qrcodeUrl == '' ">
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

    <ShowQRCode v-else :qrcodeUrl="qrcodeUrl" @reCreata="qrcodeUrl = '' "/>

    <!-- <Support  /> -->
  </div>
</template>

<script>
import TextQr from "./TextQr.vue";
import QRCode from "qrcode";
import Support from "./Support";
import axios from "axios";
export default {
  data() {
    return {
      imgDataUrl: null, //图片的base64数据
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
    Support,
    ShowQRCode: () => import("./ShowQRCode.vue"),
    ImageQr: () => import("./ImageQr.vue"),
  },

  created() {
    this.initPage();
  },

  methods: {
    changeImg(imgDataUrl) {
      this.imgDataUrl = imgDataUrl;
    },
    initPage() {
      this.$store.commit("isShowNav", false);
    },
    async createQRCode() {
      if (this.curBtnIndex) {
        // let blob = await this.$dataURLtoBlob(this.imgDataUrl);
        let blob = await this.$base64ToBlob(this.imgDataUrl);


        let ts = new Date().getTime() + "";
        let myFile = new File([blob], ts, {
          type: blob.type,
        });
        console.log('---myFile---',myFile);
        let formData = this.$fileAppenToFormData(myFile);
        // let res = await axios.post("http://data.lzhs.top/wx/upload", formData);
        let res = await this.$post(this.$api.uploadImg, formData);

        QRCode.toDataURL(res.data, (err, url) => {
          this.qrcodeUrl = url;
        });
      } else {
        QRCode.toDataURL(this.inputContent, (err, url) => {
          this.qrcodeUrl = url;
        });
      }
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
