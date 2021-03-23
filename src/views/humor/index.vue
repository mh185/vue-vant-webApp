<template>
  <div class="box">
    <p @click="goBack()">返回</p>
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
import { getHumorList } from "@/api/humor/index";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      List: [],
      isLoading: true,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      const params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
        page: 2
      };
      getHumorList(params).then((res) => {
        this.List = res.data.list;
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
    li {
      p {
        margin-bottom: 1.28rem;
        text-indent: 2em;
        font-size: 1.152rem;
      }
    }
  }
}
</style>