const app = getApp()

Page({
  data: {
    
  },

  onLoad() {
    console.log('主页加载完成')
  },

  // 打开WebView页面
  openWebView() {
    wx.navigateTo({
      url: '/pages/webview/webview'
    })
  },

  onShareAppMessage() {
    return {
      title: '痴呆风险预测与个体化血压管理',
      path: '/pages/index/index'
    }
  }
})
