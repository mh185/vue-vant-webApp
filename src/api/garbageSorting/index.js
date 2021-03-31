import request from '@/utils/request'

// 垃圾分类
export const getGarbage = (params) => request({
    url: 'rubbish/type',
    method: 'get',
    params: params
})