<template>
  <div class="show-qrcode" v-if="qrcodeUrl != ''">
    <div class="tip">长按二维码保存到手机</div>
    <div class="img-box">
      <img class="img" :src="qrcodeUrl" alt="" />
    </div>


    <van-button @click="reCreata" class="btn" type="primary">重新生成</van-button>
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
    reCreata(){
      this.$emit('reCreata')
    }
  },
};
</script>


<style lang="scss" scoped>
.show-qrcode {
  max-width: 80vw;
  // max-height: 80vw;
  margin: 10vh auto ;
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
  .btn{
    margin-top: 10px;
    width: 60%;
    border-radius: 5px;
  }
}
</style>