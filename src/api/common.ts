import request from '@/utils/request'
import { ILoginInfo } from './types/common'

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
