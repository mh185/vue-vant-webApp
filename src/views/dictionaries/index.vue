<template>
  <div class="box">
    <goBack :title="this.title" ref="titleGo" @click="goBackChange" />
    <div class="content">
      <van-search
        v-model="value"
        show-action
        label="字典"
        placeholder="请输入汉字"
        @search="onSearch"
        class="search"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
      <div class="synopsis">
        <span v-if="this.pinyin">拼音: {{ pinyin }}</span>
        <span v-if="this.radicals">偏旁: {{ radicals }}</span>
        <span v-if="this.traditional">繁体: {{ traditional }}</span>
        <span v-if="this.strokes">笔画: {{ strokes }}</span>
      </div>
      <div class="meaning" v-html="this.explanation"></div>
    </div>
  </div>
</template>

<script>
import { getDictionary } from "@/api/dictionaries"; // 字典查询接口
import goBack from "@/components/goBack";
export default {
  components: {
    goBack,
  },
  data() {
    return {
      title: "汉语字典",
      value: "",
      explanation: "",
      pinyin: "",
      radicals: "",
      traditional: "",
      strokes: "",
    };
  },
  methods: {
    goBackChange() {
      this.$refs.titleGo.upOneLevel();
    },
    onSearch() {
      let params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
        content: this.value,
      };
      getDictionary(params).then((res) => {
        const {
          explanation,
          pinyin,
          radicals,
          traditional,
          strokes,
        } = res.data[0];
        this.explanation = explanation;
        this.pinyin = pinyin;
        this.radicals = radicals;
        this.traditional = traditional;
        this.strokes = strokes;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #f7f8fa;
  .search {
    margin-top: 0.64rem;
  }
  .content {
    .synopsis {
      margin-top: 0.64rem;
      span {
        font-size: 1.28rem;
        margin-left: 1.28rem;
      }
    }
    .meaning {
      width: 80%;
      margin: 0 auto;
      font-size: 1.024rem;
      margin-top: 0.64rem;
    }
  }
}
</style>