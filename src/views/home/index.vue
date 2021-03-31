<template>
  <div class="box">
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in bannerList"
          :key="index"
          @click="bannerBtn(item.copyright, item.url)"
          ><img :src="item.url" alt=""
        /></van-swipe-item>
      </van-swipe>
      <div class="weatherList">
        <img
          v-if="this.weatherList.weather == '晴'"
          class="xuanzhuan"
          src="@/assets/weather/clearDay.png"
          alt=""
        />
        <img
          v-if="this.weatherList.weather == '多云'"
          src="@/assets/weather/cloudy.png"
          alt=""
        />
        <img
          v-if="this.weatherList.weather == '雨'"
          src="@/assets/weather/rainyDay.png"
          alt=""
        />
        <img
          v-if="this.weatherList.weather == '阴'"
          src="@/assets/weather/overcastSky.png"
          alt=""
        />
        <p>{{ weatherList.address }}</p>
        <p class="temp">{{ weatherList.temp }}</p>
      </div>
    </div>
    <van-notice-bar
      left-icon="volume-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
    <div class="content">
      <ul>
        <li v-for="(item, index) in List" :key="index" @click="btn(item.id)">
          <img :src="item.url" alt="" srcset="" />
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
    <!-- <div class="history">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
        历史与今
      </van-divider>
      <div class="img-content">
        <ul>
          <li>
            <div class="img"></div>
            <div class="content"></div>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="famous-saying">
      <p>{{ title }}</p>
      <p v-if="this.title == ''">{{ titleTwo }}</p>
      <img @click="copy" src="@/assets/copyWhite.png" alt="" />
    </div>
  </div>
</template>

<script>
import { copyText } from "@/utils/index";
import { getWeather, getCity, getTitle } from "@/api/home/home";
export default {
  data() {
    return {
      title: "",
      active: "",
      titleTwo: "莫等闲，白了少年头，空悲切！！！",
      List: [
        {
          id: "/humor",
          url: require("@/assets/content/laugh.png"),
          title: "笑话",
        },
        {
          id: "/dictionaries",
          url: require("@/assets/content/dictionaries.png"),
          title: "字典",
        },
        {
          id: "/garbageSorting",
          url: require("@/assets/content/type.png"),
          title: "垃圾分类",
        },
        {
          id: '/code',
          url: require("@/assets/content/code.png"),
          title: "生成二维码",
        },
        {
          url: require("@/assets/content/btn5.png"),
          title: "标签",
        },
        {
          url: require("@/assets/content/btn6.png"),
          title: "标签",
        },
        {
          url: require("@/assets/content/btn7.png"),
          title: "标签",
        },
        {
          url: require("@/assets/content/btn8.png"),
          title: "标签",
        }
      ],
      bannerList: [
        {
          id: 1,
          url: require("@/assets/banner/banner1.jpg"),
        },
      ],
      weatherList: [],
    };
  },
  created() {
    this.city();
    this.gettitle();
    this.getBannerList();
  },
  methods: {
    //复制
    copy() {
      copyText(this.title != "" ? this.title : this.titleTwo);
      this.$notify({
        message: "复制成功",
        color: "#fff",
        background: "#07C160",
      });
    },
    // 获取banner
    getBannerList() {
      let url = "https://api.asilu.com/bg/";
      this.$jsonp(url).then((res) => {
        //用$jsonp请求解决跨域
        this.bannerList = res.images;
      });
    },
    // 点击banner
    bannerBtn(copyright, url) {
      this.$router.push({
        name: `bannerContent`,
        params: { content: copyright, urlImg: url },
      });
    },
    btn(url) {
      this.$router.push({ path: url });
    },
    // 名言
    gettitle() {
      const params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
        count: 1,
      };
      getTitle(params).then((res) => {
        this.title = res.data[0].content; //拿第一条数据
      });
    },
    // 获取城市
    city() {
      const params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
      };
      getCity(params).then((res) => {
        this.weather(res.data.city); //获取城市 传入实参
      });
    },
    // 天气
    weather(cityName) {
      const params = {
        app_id: "lz1miieqqcogeoon",
        app_secret: "NlgvWC9RZTFKZ0xLOXF3bHYxVmlkZz09",
      };
      getWeather(params, cityName).then((res) => {
        this.weatherList = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes round_animate {
  to {
    transform: rotate(1turn);
  }
}
.box {
  .famous-saying {
    width: 100%;
    position: relative;
    background: #333;
    color: rgba(255, 255, 255, 0.7);
    p {
      width: 85%;
      font-size: 0.896rem;
      margin: 0 auto;
      text-indent: 2em;
    }
    img {
      width: 1.28rem;
      height: 1.28rem;
      position: absolute;
      right: 3%;
      bottom: 0;
    }
  }
  .banner {
    position: relative;
    .weatherList {
      width: 20%;
      height: 9.6rem;
      position: absolute;
      right: 0;
      top: 0;
      font-size: 0.768rem;
      text-align: center;
      color: #fff;
      margin-top: 0.32rem;
      img {
        width: 3.2rem;
        height: 3.2rem;
      }
      .xuanzhuan {
        -webkit-animation: round_animate 5s linear infinite;
        animation: round_animate 5s linear infinite;
      }
      .temp {
        font-size: 1.28rem;
      }
    }
  }
  .content {
    width: 95%;
    height: 10.24rem;
    margin: .32rem auto;
    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      overflow: hidden;
      overflow-x: scroll;
      li {
        width: 25%;
        text-align: center;
        img {
          width: 3.2rem;
          height: 3.2rem;
        }
        p {
          height: 1.28rem;
          font-size: 0.768rem;
          text-align: center;
        }
      }
    }
  }
  // .history {
  //   .img-content {
  //     width: 100%;
  //     height: 9.6rem;
  //     margin-bottom: 0.96rem;
  //     background-color: red;
  //     overflow: hidden;
  //     overflow-y: scroll;
  //     ul {
  //       li {
  //         margin-bottom: .32rem;
  //         height: 6.4rem;
  //         background-color: yellow;
  //         .img {
  //           width: 40%;
  //           display: inline-block;
  //         }
  //         .content {
  //           display: inline-block;
  //           width: 60%;
  //         }
  //       }
  //     }
  //   }
  // }
}
@media screen and (max-width: 500px) {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0.25rem;
    line-height: 9.6rem;
    text-align: center;
    img {
      display: block;
      width: 100%;
      height: 12.8rem;
    }
  }
}
@media screen and (min-width: 500px) {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0.25rem;
    line-height: 300px;
    text-align: center;
  }
}
</style>