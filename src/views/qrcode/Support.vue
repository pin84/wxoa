<template>
  <div class="support">
    <hr />
    <div class="fz_12">如果你觉得对你有帮助，
      <br />
      那就请我喝一杯奶茶吧 ^v^ </div>
    <div class="qrcode-box">
      <img src="@/assets/images/wx/WechatIMG75.jpeg" alt="">
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$w : 40vw;
.support{
  display: flex;
  flex-direction: column;
  align-items: center;
  .qrcode-box{
    width: $w;
    height: $w;
    img{
      width: 100%;
    }
  }
}
</style>
