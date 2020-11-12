import request from '../utils/request'

export function getJwt(loginForm) {
  return request({
    url: "/authentication",
    method: "post",
    data: loginForm
  })
}
export function test() {
  return request({
    url: "/hello",
    method: "get",
  })
}