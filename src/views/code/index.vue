<template>
  <div class="box">
    <goBack
      :title="this.title"
      ref="titleGo"
      @click="goBackChange"
      class="goBack"
    />
    <div class="content">
      <p class="heander">输入内容转换成二维码</p>
      <div>
        <van-field
          class="input"
          v-model="content"
          rows="1"
          autosize
          label="内容"
          type="textarea"
          placeholder="请输入内容"
        />
      </div>
      <van-button class="btn" plain type="info" @click="setCode"
        >生成二维码</van-button
      >
      <img v-if="imgUrl" class="imgUrl" :src="this.imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
import goBack from "@/components/goBack";
import { getCode } from "@/api/code";
export default {
  components: {
    goBack,
  },
  data() {
    return {
      title: "生成二维码",
      content: "",
      imgUrl: "",
    };
  },
  methods: {
    setCode() {
      if (this.content == "") {
        this.$notify({
          message: "请先输入需要生成二维码得内容",
          color: "#fff",
          background: "#07C160",
        });
      } else {
        let params = {
          app_id: "lz1miieqqcogeoon",
          app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
          content: this.content,
          type: 0,
        };
        getCode(params).then((res) => {
          this.imgUrl = res.data.qrCodeUrl;
        });
      }
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
  .content {
    .heander {
      font-size: 0.896rem;
      text-align: center;
      padding: 0.64rem 0;
    }
    .input {
      margin-bottom: 0.64rem;
    }
    .btn {
      display: block;
      margin: 0.64rem auto;
    }
    .imgUrl {
      width: 100%;
    }
  }
}
</style>