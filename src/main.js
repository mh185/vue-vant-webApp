import Vue from 'vue'
import Vant from 'vant';
import axios from 'axios'

import '@/utils/flexible'  // 引入flexible 适配方案
import 'vant/lib/index.css';  // 引入vant
Vue.use(Vant);

import { VueJsonp } from 'vue-jsonp'  //解决跨域
Vue.use(VueJsonp)

import "@/style/index.css" // 全局css样式
import App from './App'

import router from './router'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
