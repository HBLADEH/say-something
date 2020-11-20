import request from '../utils/request'

export function getArticleMain() {
  return request({
    url: "/article/main",
    method: "get",
  })
}