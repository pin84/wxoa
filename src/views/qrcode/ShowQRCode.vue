<template>
  <div class="show-qrcode">
    <img class="img" :src="qrcodeUrl" alt="" />

    <van-button @click="saveQRCode" class="btn" round type="primary"
      >下载二维码</van-button
    >
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
    saveQRCode() {
      wx.uploadImage({
        localId: "", // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
          var serverId = res.serverId; // 返回图片的服务器端ID
          this.$wx.downloadImage({
            serverId: res.serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
              var localId = res.localId; // 返回图片下载后的本地ID

              console.log('--本地ID-',localId);
            },
          });
        },
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.show-qrcode {
  max-width: 80vw;
  max-height: 80vw;
  margin: 0 auto;
  border: 1px solid red;

  .img {
    width: 100%;
  }
  .btn {
    width: 80%;
    margin-top: 10px;
  }
}
</style>