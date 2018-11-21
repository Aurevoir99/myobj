// pages/coming/com-details/com-details.js

var comingdata = require("../../../utils/details-data.js")
Page({

   /**
    * 页面的初始数据
    */
   data: {

   }, 
   

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      // console.log(options.id)
      // var that=this
      // wx.request({
      //    url: 'http://192.168.2.141:9999/v2/movie/su  bject/' + options.id,
      //   
      
      var detailsdata = comingdata
      console.log(detailsdata)
      this.setData({
         detailsDa: detailsdata
      })

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