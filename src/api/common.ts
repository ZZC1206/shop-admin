import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from './types/common'

// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })

  // return request({
  //   method: 'GET',
  //   url: '/login/info'
  // })

  // return request.get<{
  //   data: {
  //     logo: string,
  //     logo_square: string,
  //     site_name: string,
  //     silde: string[]
  //   }
  // }>('/login/info')

  // return request.get <ResponseData<{
  //     logo: string
  //     logo_square: string
  //     site_name: string
  //     silde: string[]
  //   }>>('/login/info')

  // return request.get <ResponseData<{
  //     logo: string
  //     logo_square: string
  //     site_name: string
  //     silde: string[]
  // }>>('/login/info').then(res => {
  //   return res.data
  // })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/admin/captcha_pro',
    params: {
      stamp: Date.now() // 加上时间戳，避免缓存问题
    },
    responseType: 'blob' // 请求获取图片数据
  })
}

export const login = (data: {
  account: string,
  pwd: string,
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/admin/login',
    data
  })
}
