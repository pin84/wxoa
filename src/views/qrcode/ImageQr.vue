<template>
  <div class="qr-code">
    <div v-if="!imgDataUrl" class="lable" @click="uploadimg">
      <i class="iconfont iconzhaoshangxiaochengxu-tupian"></i>
      <div class="text">上传图片</div>
    </div>
    <!-- <input
      v-show="false"
      type="file"
      id="fileUpload"
      name="Filedata"
      class="uploadfile x-uploadfile"
      data-nc-upload=""
      uptype="nc-imgs"
      accept=".jpg,.jpeg,.gif,.png"
      title=""
      multiple=""
    /> -->
    <ImageBox v-else @closeImgBox="imgDataUrl = null" :imgURL="imgDataUrl" />
  </div>
</template>

<script>
import TextQr from "./TextQr.vue";
import { dataURLtoBlob } from "@/utils/utils.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      imgDataUrl: null,
    };
  },

  components: {
    TextQr,
    ImageBox: () => import("@/components/ImageBox.vue"),
  },

  methods: {
    async uploadimg() {
      this.$wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          console.log("---localIds-", localIds);
          Toast.loading({
            message: "加载中...",
            forbidClick: true,
          });
          this.$wx.getLocalImgData({
            localId: localIds[0], // 图片的localID
            success: (res) => {
              console.log('--getLocalImgData-----');
              let imageBase64 = this.$base64RULHandler(res.localData);
              // console.log("------imageBase64 URL---", imageBase64);
              this.imgDataUrl = imageBase64
              this.$emit("changeImg", imageBase64);
              Toast.clear();
            },
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.qr-code {
  width: 100%;
  height: 170px;
  margin: 0 auto;
  border: 1px dashed #f1f1f1;
  box-sizing: border-box;
  border-radius: 10px;
  .lable {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .iconfont {
      font-size: 48px;
      color: #ccc;
    }
    .text {
      color: gray;
    }
  }
}
</style>
