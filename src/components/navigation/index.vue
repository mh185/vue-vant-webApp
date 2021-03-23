<template>
  <div>
    <van-tabbar v-model="active" active-color="#30A3F8">
      <van-tabbar-item
        v-for="(item, index) in tabMapOptions"
        :key="index"
        :to="item.path"
        :icon="item.icon"
        >{{ item.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      active: "",
      tabMapOptions: [
        { path: "/", name: "首页", icon: "home-o" },
        { path: "/news", name: "新闻", icon: "home-o" },
        { path: "/humor", name: "搞笑", icon: "home-o" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.van-tabbar {
  border-top: 1px solid #eee;
  height: 55px;
  .van-tabbar-item__icon img {
    width: 22px;
    height: 22px;
  }
}

.active_tab img {
  width: 22px;
  height: 22px;
}
</style>