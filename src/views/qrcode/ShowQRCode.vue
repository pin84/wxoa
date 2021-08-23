<template>
  <div class="show-qrcode" v-if="qrcodeUrl != ''">
    <div class="img-box">
      <img class="img" :src="qrcodeUrl" alt="" />
    </div>
    <div class="tip">长按二维码保存到手机</div>
  </div>
</template>

<script>
export default {
  props: {
    qrcodeUrl: {
      type: String,
      default: () => "",
    },
  },

  methods: {
 
  },
};
</script>


<style lang="scss" scoped>
.show-qrcode {
  max-width: 80vw;
  max-height: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  .tip{
    color:gray;
    font-size: 12px;
    flex: 0 0 20px;
  }
  .img-box {
    width: 90%;
    .img {
      width: 100%;
    }
  }

}
</style>