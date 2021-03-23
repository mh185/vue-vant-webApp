<template>
  <div v-if="this.newList">
    <ul>
      <li
        v-for="(item, index) in newList"
        :key="index"
        @click="newDetails(item.newsId)"
      >
        <div class="img" v-if="item.imgList">
          <img :src="item.imgList[0]" alt="" />
        </div>
        <div class="content">
          <p>{{ item.title }}</p>
          <p>{{ item.source }}</p>
          <p class="time">{{ item.postTime }}</p>
        </div>
      </li>
      <loading v-if="isLoading"></loading>
    </ul>
  </div>
</template>

<script>
import { getNewList } from "@/api/news/index";
import Loading from "@/components/Loading";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      newList: [],
      isLoading: true,
    };
  },
  methods: {
    // 获取新闻列表
    onChange(Id) {
      const params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
        typeId: Id,
        page: 1,
      };
      getNewList(params).then((res) => {
        this.newList = res.data;
        this.isLoading = false;
      });
    },
    // 跳转新闻详情
    newDetails(Id) {
      this.$router.push({ name: "newsDetails", params: { newsId: Id } });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  li {
    width: 100%;
    height: 6.4rem;
    margin: 0.64rem 0;
    padding: 0.32rem 0;
    border-bottom: 1px solid #333;
    .img {
      width: 40%;
      float: left;
      img {
        width: 6.4rem;
        height: 6.4rem;
      }
    }
    .content {
      width: 60%;
      height: 6.4rem;
      float: left;
      position: relative;
      p {
        font-size: 0.768rem;
      }
      .time {
        position: absolute;
        right: 0.32rem;
        bottom: 0.64rem;
      }
    }
  }
  .loading {
    width: 100%;
  }
}
</style>