import request from '@/utils/request'

//生成二维码
export const getCode = (params) => request({
    url: 'qrcode/create/single',
    method: 'get',
    params: params
})