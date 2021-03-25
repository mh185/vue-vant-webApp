import request from '@/utils/request'

// 字典查询
export const getDictionary = (params) => request({
    url: 'convert/dictionary',
    method: 'get',
    params: params
})