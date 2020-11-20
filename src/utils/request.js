import axios from 'axios'
import { message } from 'ant-design-vue'
let baseURL = "/api/"
const service = axios.create({
  baseURL: baseURL,
  timeout: 500,
})

service.interceptors.request.use(config => {
  // Do something before request is sent
  // 如果有 jwt 则携带 jwt
  let jwt = window.localStorage.getItem("JWTHeaderName")
  if (jwt) {
    config.headers.common.JWTHeaderName = jwt
  }
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

service.interceptors.response.use(response => {
  // Do something before response is sent
  const res = response.data
  console.log(res);
  if (res.code != 200) {
    message.error(res.message)
    // return Promise.reject(new Error(res.message || "Error"))
  } else {
    message.success(res.message)
    return response;
  }
}, error => {
  // Do something with response error
  console.log("err" + error);
  return Promise.reject(error);
});

export default service