<template>
  <div class="box">
    <goBack
      :title="this.title"
      ref="titleGo"
      @click="goBackChange"
      class="goBack"
    />
    <div class="content">
      <img :src="this.img" alt="" class="imgTitle" />
      <div v-html="this.content" class="content"></div>
      <img
        class="images"
        v-for="(item, index) in images"
        :src="item.imgSrc"
        :key="index"
        alt=""
      />
      <div class="bottom">
        <span>{{ source }}</span>
        <span>{{ ptime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import goBack from "@/components/goBack"; // 顶部返回
import { getNewDetails } from "@/api/news";
export default {
  components: {
    goBack,
  },
  data() {
    return {
      Id: "",
      content: "",
      img: "",
      images: [],
      title: "",
      source: "",
      ptime: "",
    };
  },
  created() {
    this.Id = this.$route.params.newsId;
    this.getDetails();
  },
  methods: {
    getDetails() {
      const params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
        newsId: this.Id,
      };
      getNewDetails(params).then((res) => {
        const { content, cover, images, ptime, source, title } = res.data;
        this.content = content; // 内容
        this.img = cover; // 首图
        this.images = images; // 图片数组
        this.title = title; // 标题
        this.source = source; // 发布方
        this.ptime = ptime; // 时间
      });
    },
    goBackChange() {
      this.$refs.titleGo.upOneLevel();
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  background-color: #f7f8fa;
  .content {
    font-size: 0.896rem;
    .imgTitle {
      width: 100%;
      margin-top: 3.2rem;
    }
    .images {
      width: 100%;
    }
  }
  .bottom {
    text-align: center;
    padding: 0.64rem 0;
    span {
      margin-left: 0.64rem;
    }
  }
  .goBack {
    position: fixed;
    top: 0;
  }
}
</style>