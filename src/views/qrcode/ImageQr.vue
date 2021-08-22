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
    <TextQr  />
  </div>
</template>

<script>
import TextQr from "./TextQr.vue";
export default {
  data() {
    return {
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
  },

  methods: {
    changeType(index) {
      this.curBtnIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.qr-code {
  padding: 10px;
  .btn-box {
    display: flex;
    justify-content: center;
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
}
</style>
