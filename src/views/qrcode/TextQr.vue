<template>
  <textarea
    v-model="text"
    @input="inputText"
    placeholder="请输入文本或网址"
    class="textarea"
  />
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      text: "",
      maxNumber: 500,
    };
  },

  methods: {
    inputText() {
      let len = this.text.length;
      if (len > this.maxNumber) {
        Dialog({
          message: `最多只能输入${this.maxNumber}个字符,超出的部分已被截去。`,
        });
        this.text = this.text.slice(0, this.maxNumber);
        return;
      }
      this.$emit("inputText", this.text);
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  height: 140px;
  // border-color: gray;
  border: 1px solid gray;
  resize: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
}
</style>
