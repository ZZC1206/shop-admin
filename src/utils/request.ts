import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { store } from '@/store'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const user = store.state.user
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理借口响应错误，譬如 token 过期无效，服务端异常等
  if (response.data.status && response.data.status !== 200) {
    ElMessage.error(response.data.msg || '请求失败')
    // 手动返回 Promise 异常
    return Promise.reject(response.data)
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default async <T = any>(config: AxiosRequestConfig) => {
  const res = await request(config)
  return (res.data.data || res.data) as T
}
