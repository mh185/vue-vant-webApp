import request from '@/utils/request'

//获取新闻分类
export const getNewType = (params) => request({
    url: 'news/types',
    method: 'get',
    params: params
})

//根据新闻类型获取新闻列表
export const getNewList = (params) => request({
    url: 'news/list',
    method: 'get',
    params: params
})

//获取新闻详情
export const getNewDetails = (params) => request({
    url: 'news/details',
    method: 'get',
    params: params
})