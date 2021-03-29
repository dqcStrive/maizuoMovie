module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.maoyan.com/ajax',
        changeOrigin: true,
        pathRewrite:{'/api':''}
      }
    }
  }
}
