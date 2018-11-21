// pages/wode/resigned/resigned.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  resigned: function(e) {
    this.setData({
      user: {
        name: "",
        pwd1: "",
        pwd2: ""
      }
    })
    let name = e.detail.value.username;
    let pwd1 = e.detail.value.pwd1;
    let pwd2 = e.detail.value.pwd2;
    this.setData({
      user: {
        name: name,
        pwd1: pwd1,
        pwd2: pwd2
      }
    })
    if (name == "" || pwd1 == "" || pwd2 == "") {
      wx.showModal({
        title: '提示',
        content: '请输入正确的账号密码格式',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      // modalcnt: function() {
      //   wx.showModal({
      //     title: '提示',
      //     content: '这是一个模态弹窗',
      //     success: function (res) {
      //       if (res.confirm) {
      //         console.log('用户点击确定')
      //       } else if (res.cancel) {
      //         console.log('用户点击取消')
      //       }
      //     }
      //   })
      // } 
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})