import Axios from 'axios'

const request = Axios.create({
  baseURL: process.env.url_api,
  timeout: 800
})
//请求配置
request.interceptors.request.use(config => {
  console.info(config)
  return config
}, error => {
  return Promise.reject(error)
})
//接口返回配置 这里可以配置http请求的返回状态码
request.interceptors.response.use(reponse => {
  return reponse
}, error => {
  return Promise.reject(error)
})
export default function(method, url, data) {
  console.info(method, url, data)
  switch (method) {
    case 'post':
      return request.post(url, data);
      break;
    case 'get':
      return request.get(url, {
        params: data
      });
      break
    case 'put':
      return request.put(url, data);
      break
    case 'delete':
      return request.delete(url, {
        params: data
      });
      break
    default:
      return false
      break
  }
}
