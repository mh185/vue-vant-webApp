<template>
  <div class="box">
    <goBack
      :title="this.title"
      ref="titleGo"
      @click="goBackChange"
      class="goBack"
    />
    <div class="content">
      <van-search
        v-model="value"
        show-action
        label="查询"
        placeholder="请输入需要查询得垃圾"
        @search="onSearch"
        class="search"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
      <div class="bottom">
        <div class="title">
          <span v-if="aim"
            >物品:{{ aim.goodsName }},分类:{{ aim.goodsType }}</span
          >
        </div>
        <div class="classify" v-if="aim">
          <p>其他分类</p>
          <ul>
            <li v-for="(item, index) in recommendList" :key="index">
              {{ item.goodsName }}:{{ item.goodsType }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goBack from "@/components/goBack";
import { getGarbage } from "@/api/garbageSorting";
export default {
  components: {
    goBack,
  },
  data() {
    return {
      title: "垃圾分类查询",
      value: "",
      aim: "",
      recommendList: [],
    };
  },
  methods: {
    onSearch() {
      let params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
        name: this.value,
      };
      getGarbage(params).then((res) => {
        if (res.code == 1) {
          const { aim, recommendList } = res.data;
          this.aim = aim;
          this.recommendList = recommendList;
        }
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
    .bottom {
      .title {
        text-align: center;
      }
      .classify {
        margin-top: 1.28rem;
        p {
          text-align: center;
          margin-bottom: 0.64rem;
        }
        ul {
          li {
            margin-top: 0.32rem;
            font-size: 1.152rem;
          }
        }
      }
    }
  }
}
</style>