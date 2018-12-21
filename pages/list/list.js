// pages/list/list.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    items:[],
    totalPage:'',
    page:'',
    keywork:'',
    addTime:''
  },
  //点击搜索按钮，输入关键字查询
  formFind: function(e){
    var that = this;
    // page
    var keywork = e.detail.value.keywork;
    console.log(keywork)
    wx.request({
      url: 'http://172.18.8.69:10004/weixin/works?keywork=${queryStr}&page=${page}&pageSize=${pageSize}',
      header: {
        'content-type': 'application/json'
      },
      data: {
        page: '',
        pageSize: '',
        keywork: keywork,
      },
      success: function (res) {
        var list = res.data
        var items = res.data.items
        var page = res.data.page
        // 共多少页
        var totalPage = res.data.total / res.data.size
        //用for循环将图片前面添加一个地址（es6语法）
        for (let i = 0; i < items.length; i++) {
          items[i].topImage = `http://siidsv-vdc3.siid.com.cn:8080/${items[i].topImage}`
        };
        // 判断计算一共多少页信息
        if (list.total % list.size == 0) {
          totalPage = list.total % list.size;
        } else if (list.total % list.size != 0) {
          totalPage = Math.ceil(list.total / list.size)
        };
        that.setData({
          list: list,
          items: items,
          totalPage: totalPage,
          page: page,
          keywork: keywork
        });
        console.log(list)
        console.log(items)
        console.log(page)
      }
    })
  },
  //点击进入上一页
  toUp: function (page, keywork) {//传入全局page, keywork值
    var that = this;
    // 获取当前页面值
    console.log(this.data.page)
    // 获取到当前搜索栏的keyword
    console.log(this.data.keywork)
    // 因为是调转向上一页，所以当前页数减1
    var page = this.data.page - 1
    //搜索栏关键字
    var keywork = this.data.keywork
    wx.request({
      url: 'http://172.18.8.69:10004/weixin/works?keywork=${queryStr}&page=${page}&pageSize=${pageSize}',
      header: {
        'content-type': 'application/json'
      },
      data: {
        page: page,
        pageSize: '',
        keywork: keywork,
      },
      success: function (res) {
        var list = res.data
        var items = res.data.items
        var page = res.data.page
        // 共多少页
        var totalPage = res.data.total / res.data.size
        //用for循环将图片前面添加一个地址（es6语法）
        for (let i = 0; i < items.length; i++) {
          items[i].topImage = `http://siidsv-vdc3.siid.com.cn:8080/${items[i].topImage}`
        };
        // 判断计算一共多少页信息
        if (list.total % list.size == 0) {
          totalPage = list.total % list.size;
        } else if (list.total % list.size != 0) {
          totalPage = Math.ceil(list.total / list.size)
        };
        that.setData({
          list: list,
          items: items,
          totalPage: totalPage,
          page: page,
          keywork: keywork
        });
        console.log(list)
        console.log(items)
        console.log(page)
      }
    })
  },
  //点击进入需要的页码页面
  formSubmit: function (e) {
    var that = this;
      // page
    var page = e.detail.value.page;
    // var app = getApp()
    // app.pagenow=page

    console.log(page)
    wx.request({
      url: 'http://172.18.8.69:10004/weixin/works?keywork=${queryStr}&page=${page}&pageSize=${pageSize}',
      header: {
        'content-type': 'application/json'
      },
      data: {
        page: page,
        pageSize: '',
        keywork: "",
      },
      success: function (res) {
        var list = res.data
        var items = res.data.items
        var page = res.data.page
        // 共多少页
        var totalPage = res.data.total / res.data.size
        //用for循环将图片前面添加一个地址（es6语法）
        for (let i = 0; i < items.length; i++) {
          items[i].topImage = `http://siidsv-vdc3.siid.com.cn:8080/${items[i].topImage}`
        };
        // 判断计算一共多少页信息
        if (list.total % list.size == 0) {
          totalPage = list.total % list.size;
        } else if (list.total % list.size != 0) {
          totalPage = Math.ceil(list.total / list.size)
        };
        that.setData({
          list: list,
          items: items,
          totalPage: totalPage,
          page: page
        });
        console.log(list)
        console.log(items)
        console.log(page)
      }
    })
  },

  //点击进入下一页
  toNext: function (page, keywork) {//传入全局page, keywork值
    var that = this;
    // 获取当前页码
    console.log(this.data.page)
    // 获取到当前搜索栏的keyword
    console.log(this.data.keywork)
    // 因为是调转向下一页，所以当前页数加1
    var page = this.data.page+1
    var keywork = this.data.keywork
    wx.request({
      url: 'http://172.18.8.69:10004/weixin/works?keywork=${queryStr}&page=${page}&pageSize=${pageSize}',
      header: {
        'content-type': 'application/json'
      },
      data: {
        page: page,
        pageSize: '',
        keywork: keywork,
      },
      success: function (res) {
        var list = res.data
        var items = res.data.items
        var page = res.data.page
        // 共多少页
        var totalPage = res.data.total / res.data.size
        //用for循环将图片前面添加一个地址（es6语法）
        for (let i = 0; i < items.length; i++) {
          items[i].topImage = `http://siidsv-vdc3.siid.com.cn:8080/${items[i].topImage}`
        };
        // 判断计算一共多少页信息
        if (list.total % list.size == 0) {
          totalPage = list.total % list.size;
        } else if (list.total % list.size != 0) {
          totalPage = Math.ceil(list.total / list.size)
        };
        that.setData({
          list: list,
          items: items,
          totalPage: totalPage,
          page: page
        });
        console.log(list)
        console.log(items)
      }
    })
  },

  // 进入详情页面
  toShow: function(e){
    var app = getApp();
    // 获取到页面传过来的item的id
    app.id= e.currentTarget.id
    console.log(app.id);
    //调转进入详情页
    wx.navigateTo({
      url: '../show/show?id={{id}}'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://172.18.8.69:10004/weixin/works?keywork=${queryStr}&page=${page}&pageSize=${pageSize}', 
      header: {
        'content-type': 'application/json'
      },
      data: {
        page:'',
        pageSize:'',
        keywork:"",
        addTime:''
      },
      success:function(res) {
        var list = res.data
        var items = res.data.items
        var page = res.data.page
        var addTime = res.data.items.addTime
        // 共多少页
        var totalPage = res.data.total / res.data.size
        //用for循环将图片前面添加一个地址（es6语法）
        for(let i = 0;i < items.length; i++) {
          items[i].topImage = `http://siidsv-vdc3.siid.com.cn:8080/${items[i].topImage}`
        };
        // 判断计算一共多少页信息
        if(list.total%list.size==0){
          totalPage = list.total % list.size;
        } else if (list.total % list.size != 0){
          totalPage = Math.ceil(list.total / list.size)
        };
        that.setData({
          list: list,
          items: items,
          totalPage: totalPage,
          page: page,
          addTime: addTime
        });
        console.log(list)
        console.log(items)
        console.log(page)
        console.log(res.data.items.addTime)
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