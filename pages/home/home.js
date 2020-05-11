// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中',
      duration:3000,
      icon:'loading',
      //imag:'/assest/icon/icon.jpg'
      mask: true,
      success:function(){
        console.log('展示弹框成功')
      },
      fail: function () {
        console.log('展示弹框失败')
      },
      complete: function(){
        console.log('完成函数调用')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      //showCancel:false,
      cancelText:'退出',
      cancelColor:'red',
      success: function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确认按钮')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    setTimeout(() => {
      //必须手动hideLoading才会让Loading消失
      wx.hideLoading()
    },1000)
  },
  handleShowaAtion(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success: function(res){
        console.log(res)
      }
    })
  },
  onShareAppMessage: function(options){
    return {
      title: '你好啊',
      path: '/pages/about/about',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589191298091&di=a835cedacbf704b02c4c612bdb9f2913&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'
    }
  }
})