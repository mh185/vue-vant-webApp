import request from '@/utils/request'

// 获取笑话列表
export const getHumorList = (params) => request({
    url: `/jokes/list/random`,
    method: 'get',
    params: params
})