<template>
  <div class="box">
    <goBack
      :title="this.title"
      ref="titleGo"
      @click="goBackChange"
      class="goBack"
    />
    <ul>
      <li v-for="(item, index) in List" :key="index">
        <p>{{ item.content }}</p>
      </li>
    </ul>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading"; //加载动画
import goBack from "@/components/goBack";
import { getHumorList } from "@/api/humor/index";
export default {
  components: {
    Loading,
    goBack,
  },
  data() {
    return {
      List: [],
      isLoading: true,
      title: "返回",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    goBackChange() {
      this.$refs.titleGo.upOneLevel();
    },
    getList() {
      const params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09"
      };
      getHumorList(params).then((res) => {
        this.List = res.data;
        this.isLoading = false;
      });
    },
    goBack() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  ul {
    margin-top: 3.2rem;
    background-color: #f7f8fa;
    li {
      p {
        margin-bottom: 1.28rem;
        text-indent: 2em;
        font-size: 1.152rem;
      }
    }
  }
  .goBack {
    position: fixed;
    top: 0;
  }
}
</style>