<template>
  <div class="qr-code">
    <div class="lable" @click="uploadimg">
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

    <ImageBox  :imgURL="imgDataUrl" />

    <!-- <div class="img-box"><img src="@/assets/images/wx/WechatIMG75.jpeg" alt="" /></div> -->
  </div>
</template>

<script>
import TextQr from "./TextQr.vue";
import { dataURLtoBlob } from "@/utils/utils.js";
export default {
  data() {
    return {
      imgDataUrl: "",
    };
  },

  components: {
    TextQr,
    ImageBox:()=>import('@/components/ImageBox.vue')
  },

  mounted() {
    this.test();
  },

  methods: {
    test() {
      dataURLtoBlob("aaaaaa");
    },
    async uploadimg() {
      this.$wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          wx.getLocalImgData({
            localId: localIds[0], // 图片的localID
            success: function (res) {
              this.imgDataUrl = res.localData; // localData是图片的base64数据，可以用img标签显示
              console.log('--------------',res);
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
  height: 160px;
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
