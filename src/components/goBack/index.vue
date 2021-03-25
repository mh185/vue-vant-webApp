<template>
  <div class="top">
    <img src="@/assets/goBack.png" alt="" @click="upOneLevel()"/>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    upOneLevel() {
      this.$router.back(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 3.2rem;
  position: fixed;
  top: 0;
  background-color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  img {
    width: 1.28rem;
    height: 1.28rem;
    position: absolute;
    left: 0.64rem;
    top: 1rem;
  }
  .title {
    font-size: 0.768rem;
    line-height: 3.2rem;
  }
}
</style>