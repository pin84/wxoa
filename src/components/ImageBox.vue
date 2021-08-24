<template>
  <div :style="imgBoxStyle" class="img-box">
    <img :src="imgURL" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    imgBoxStyle: {
      type: Object,
      default: () => {
        return {
          width: "60vw",
          height: "60vw",
          border: "1px solid red",
        };
      },
    },
    imgURL: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.img-box {
  img {
    width: 100%;
  }
}
</style>