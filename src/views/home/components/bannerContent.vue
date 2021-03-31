<template>
  <div class="box">
    <goBack
      :title="this.title"
      ref="titleGo"
      @click="goBackChange"
      class="goBack"
    />
    <div class="content">
      <img class="img" :src="this.url" alt="" />
      <p class="title">{{ content }}</p>
    </div>
  </div>
</template>

<script>
import goBack from "@/components/goBack";
export default {
  components: {
    goBack,
  },
  data() {
    return {
      title: "返回",
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
    goBackChange() {
      this.$refs.titleGo.upOneLevel();
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  .content {
    background-color: #f7f8fa;
    .img {
      width: 100%;
      margin-top: .64rem;
    }
    .title {
      font-size: 1.024rem;
    }
  }
  .goBack {
    position: fixed;
    top: 0;
  }
}
</style>