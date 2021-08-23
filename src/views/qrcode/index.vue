<template>
  <div class="qr-code">
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
    <TextQr v-if="curBtnIndex == 0"  @inputText='inputText' />
    <ImageQr  v-if="curBtnIndex == 1" />
    <van-button class="create-btn" type="warning" @click="createQRCode">生成二维码</van-button>

    <ShowQRCode v-if="qrcodeUrl != ''"  :qrcodeUrl="qrcodeUrl" />

    <!-- <Support  /> -->
  </div>
</template>

<script>
import TextQr from "./TextQr.vue";
import QRCode from "qrcode";
import Support from './Support'
export default {
  data() {
    return {
      inputContent:'',
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

  created(){
    this.initPage()
  },

  methods: {
    initPage(){
      this.$store.commit('isShowNav',false)
    },
    createQRCode() {
      QRCode.toDataURL(this.inputContent, (err, url) => {
        this.qrcodeUrl = url;
      });
    },
    changeType(index) {
      this.curBtnIndex = index;
      this.qrcodeUrl = ''
    },
    inputText(text){
      this.inputContent = text
    }
  },

  destroyed(){
     this.$store.commit('isShowNav',true)
  }
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
  .create-btn{
    margin-bottom: 10px;
  }
}
</style>
