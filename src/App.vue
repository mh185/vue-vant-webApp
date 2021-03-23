<template>
  <div id="app">
    <keep-alive><router-view v-if="$route.meta.keepAlive" /></keep-alive> <!-- 需要缓存 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view> <!-- 不需要缓存 -->
    <navigation v-if="tabType"></navigation>
  </div>
</template>

<script>
import Navigation from "@/components/navigation"; //底部导航
export default {
  components: {
    Navigation,
  },
  name: "App",
  data() {
    return {
      tabType: true
    }
  },
  watch: {
    $route(e) {
      if (
        e.path == "/" ||
        e.path == "/humor" ||
        e.path == "/news" 
      ) {
        this.tabType = true;
      } else {
        this.tabType = false;
      }
    },
  },
};
</script>
