<template>
  <div class="box">
    <div class="box-left">
      <van-sidebar v-model="activeKey" class="box-left-content">
        <van-sidebar-item
          v-for="(item, index) in typeList"
          :key="index"
          :title="item.typeName"
          @click="onChange(item.typeId)"
        />
      </van-sidebar>
    </div>
    <div class="box-right">
      <newList ref="newlist" />
    </div>
  </div>
</template>

<script>
import { getNewType } from "@/api/news/index";
import newList from "@/views/news/newList"; //新闻列表
import Loading from "@/components/Loading"; //加载动画
export default {
  components: {
    Loading,
    newList,
  },
  data() {
    return {
      activeKey: 0,
      typeList: [],
    };
  },
  created() {
    this.getTypeList();
  },
  methods: {
    onChange(Id) {
      this.$refs.newlist.onChange(Id); // 调用子组件onChange方法
    },
    //获取类型列表
    getTypeList() {
      const params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
      };
      getNewType(params).then((res) => {
        this.typeList = res.data;
        this.$refs.newlist.onChange(this.typeList[0].typeId);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  .box-left {
    width: 20%;
    position: absolute;
    top: 0;
    left: 0;
    padding-bottom: 3.84rem;
    .box-left-content {
      width: 100%;
    }
  }
  .box-right {
    width: 80%;
    position: absolute;
    top: 0;
    right: 0;
    padding-bottom: 3.84rem;
  }
}
</style>