const app = getApp()

Page({
  data: {
    webviewUrl: '',
    loading: true
  },

  onLoad(options) {
    // 构建WebView URL
    // 注意：这里需要替换为你实际部署的域名
    const baseUrl = app.globalData.serverUrl || 'https://your-domain.com'
    const webviewUrl = `${baseUrl}/index.html`
    
    this.setData({
      webviewUrl: webviewUrl
    })

    console.log('WebView URL:', webviewUrl)
  },

  // WebView加载完成
  onWebViewLoad(e) {
    console.log('WebView加载完成', e)
    this.setData({
      loading: false
    })
  },

  // WebView加载错误
  onWebViewError(e) {
    console.error('WebView加载错误', e)
    this.setData({
      loading: false
    })
    
    wx.showModal({
      title: '加载失败',
      content: '无法加载健康管理系统，请检查网络连接或联系开发者。',
      showCancel: false,
      success: () => {
        wx.navigateBack()
      }
    })
  },

  // 接收WebView消息
  onWebViewMessage(e) {
    console.log('收到WebView消息', e.detail.data)
  },

  onShareAppMessage() {
    return {
      title: '痴呆风险预测与个体化血压管理',
      path: '/pages/index/index'
    }
  }
})
