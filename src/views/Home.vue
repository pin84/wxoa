<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <van-button type="primary" @click="sendRequest">主要按钮</van-button>
    <hr />
    <van-button type="primary" @click="test">test</van-button>
    <hr />
    <!-- <div class="box">
      <LoginForm />
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      radio: "1",
    };
  },
  components: {
    HelloWorld,
    LoginForm: () => import("@/components/LoginForm.vue"),
  },

  methods: {
    test(){
      this.$router.push('/qrcode')
    },
    async sendRequest() {
      this.$wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          console.log(result);
        },
      });

      // console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 320px;
}
</style>