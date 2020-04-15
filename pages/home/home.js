Page({
  data:{
    name:'CandyZcl',
    age:'18',
    students:[
      { id: 110, name: 'kobe', age: 30},
      { id: 111, name: 'cury', age: 28}
    ],
    counter:0
  },
  handleBtnClick(){
    //错误写法：界面不会发生刷新
    //this.data.counter += 1

    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})