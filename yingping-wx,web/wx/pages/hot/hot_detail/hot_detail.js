// pages/hot/hot_detail/hot_detail.js
var details = require("../../../utils/data3.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // buy:function(){
  //   wx.navigateTo({
  //     url: '{{mydetail.details.schedule_url}}'
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    console.log(details)
    this.setData({mydetail:details})
    // var that = this
    // wx.request({
    //   url: 'http://192.168.2.141:9999/v2/movie/subject/' + options.id,
    //   success: function(data) {
    //     var datas = JSON.parse(data.data)
    //     console.log(datas)
    //     that.setData({mydata:datas})
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})