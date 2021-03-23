import request from '@/utils/request'

//获取天气
export const getWeather = (params,cityName) => request({
    url: `/weather/current/` + cityName,
    method: 'get',
    params: params
})

//获取城市
export const getCity = (params) => request({
    url: 'ip/self',
    method: 'get',
    params: params
})

//名言
export const getTitle = (params) => request({
    url: 'daily_word/recommend',
    method: 'get',
    params: params
})