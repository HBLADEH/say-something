module.exports = {
  css: {
    loaderOptions: {
      sass: {},
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    host: 'localhost', // target host
    port: 8888,
    open: true,
    proxy: {
      '/api': {
        target: "http://localhost:8888/",
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        //ws: true, // proxy websockets
        pathRewrite: {
          "^/api": '/',
          //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        }
      }
    }
  }
}