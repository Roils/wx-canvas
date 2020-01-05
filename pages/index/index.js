//index.js
//获取应用实例
let ctx
Page({
  data: {
    pen: {
      linewidth: 15,
      color: 'red'
    }
  },
  onLoad: function (options) {
    ctx = wx.createCanvasContext('mycanvas')
    ctx.setStrokeStyle(this.data.pen.color)
    ctx.setLineWidth(this.data.pen.linewidth);
    ctx.setLineCap('round');
    ctx.lineJoin = 'round';
    console.log(ctx)
  },
  touchStart: function (e) {
    ctx.moveTo(e.touches[0].x, e.touches[0].y)
    console.log(e.touches[0].x, e.touches[0].y)
  },
  touchMove: function (e) {
    let x = e.touches[0].x
    let y = e.touches[0].y
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.draw(true);
    ctx.moveTo(x,y)
  }
})
