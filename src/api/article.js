import request from '../utils/request'

export function getArticleMain(pageCurrent, pageSize, news_time) {
  return request({
    url: "/article/main",
    params: {
      pageCurrent: pageCurrent,
      pageSize: pageSize,
      news_time: news_time
    },
    method: "get",
  })
}