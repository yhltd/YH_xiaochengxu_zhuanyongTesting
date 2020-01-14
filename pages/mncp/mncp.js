// pages/mncp/mncp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '\n'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  mncp_bt: function () {
    var that = this;
    var text;
    var text1;
    var app = this.createNonceStr()
    var app1 = this.createNonceStrte()
    // wx.showToast({
    //   title: '0' ,
    // })
    console.log('结果' +app)

    that.setData({
      text: app,
       text1: app1
    })
   
 

  },
  //生成随机数
  createNonceStr: function () {
    // wx.showToast({
    //   title: '1',
    // })
    var str = "",
      range = 20,//min
      // arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    arr = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'];

    // 随机产生
    if (true) {
      range = Math.round(Math.random() * (36 - 20)) + 20;
    }
 
    // for (var i = 0; i < range; i++) {
      for (var i = 0; i < 6; i++) {
      var pos = Math.round(Math.random() * (arr.length - 1));
        if (str.length>0)
      str +="，"+ arr[pos];
      else 
          str += arr[pos];
    }
  
    return str;
  },
  //生成随机数
  createNonceStrte: function () {
   
    var str = "",
      range = 20, 
  
      arr = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

    // 随机产生
    if (true) {
      range = Math.round(Math.random() * (36 - 20)) + 20;
    } 
   
    for (var i = 0; i < 1; i++) {
      var pos = Math.round(Math.random() * (arr.length - 1));
      if (str.length > 0)
        str += "，" + arr[pos];
      else
        str += arr[pos];
    }
 
    return str;
  }




})