import axios from 'axios'
import {
  Notify
} from 'vant';

const service = axios.create({
  baseURL: "https://www.mxnzp.com/api",
  timeout: 300000
})
service.interceptors.response.use(
  response => {
    const res = response.data
    const {
      responseType
    } = response.config
    if(res.code == 1){
        return res
    }
  },
  error => {
    console.log('err', error) // for debug
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
      Notify({
        message: '连接超时,请稍后重试！',
        type: 'warning',
      });
    } else {
      Notify({
        message: error.message,
        type: 'warning',
      });
    }
    return Promise.reject(error)
  }
)
export default service
