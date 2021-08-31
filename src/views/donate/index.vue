<template>
  <div class="support">
    <div class="qrcode-box">
      <img src="@/assets/images/wx/WechatIMG75.jpeg" alt="" />
    </div>
    <div class="fz_12">
      如果你觉得对你有帮助，
      <br />
      那就请我喝一杯奶茶吧 ^v^
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("isShowNav", false);
  },
  destroyed() {
    this.$store.commit("isShowNav", true);
  },
};
</script>

<style lang="scss" scoped>
$w: 60vw;
.support {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 15vh;
  box-sizing: border-box;
  .qrcode-box {
    width: $w;
    height: $w;
    margin-top: 10px;
    img {
      width: 100%;
    }
  }
}
</style>
