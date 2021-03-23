<template>
  <div class="box">
    <p @click="btnClear">返回</p>
    <img class="img" :src="this.url" alt="" />
    <p class="title">{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      url: "",
    };
  },
  created() {
    this.content = this.$route.params.content;
    this.url = this.$route.params.urlImg;
  },
  methods: {
    btnClear() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  .img {
    width: 100%;
  }
  .title{
      font-size: 1.024rem;
  }
}
</style>