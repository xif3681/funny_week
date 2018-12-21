// pages/show/show.js
//获取应用实例
var app = getApp
// var listData = require('../../utils/data.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    works:[],
    award:[],
    description:[],
    files:[],
    industry:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 将listDataItem的值给了list
    // that.setData({
    //   // list: that.data.listDataItem
    // });
    var id = getApp().id;//将上个页面的参数传递到了这个页面
    // console.log(id);
    wx.request({
      url: 'http://172.18.8.69:10004/weixin/works/getById/'+id, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json'
      },
      success:function(res) {
        var lists = res.data
        var works = res.data.works
        var award = res.data.award
        var descriptions = res.data.descriptions
        var files = res.data.files
        var industry = res.data.industry
        for (let i = 0; i < files.length;i++){
          files[i].fileKey = `http://siidsv-vdc3.siid.com.cn:8080/${files[i].fileKey}`
        }
        that.setData({
          lists:lists,
          works:works,
          award:award,
          descriptions:descriptions,
          files:files,
          industry:industry
        })
        console.log('lists',lists)
        console.log('works',works)
        console.log('award',award)
        console.log('descriptions',descriptions)
        console.log('files',files)
        console.log('industry',industry)
      }
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
    var that = this;
    //将上个页面的参数id传递到了这个页面
    var id = getApp().id;
    that.setData({
      id:id,   
    })
    console.log(id)
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