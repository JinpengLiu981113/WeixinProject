Page({
  data: {
    easyDisplay: true,
    mediumDisplay: false,
    hardDisplay: false,
    unit:1,
    num1:1,
    num2:2,
    num3:3,
  },
  gotoeasy: function () {
    this.setData({
      easyDisplay: true,
      mediumDisplay: false,
      hardDisplay: false
    });
  },
  gotomedium: function () {
    this.setData({
      easyDisplay: false,
      mediumDisplay: true,
      hardDisplay: false
    });
  },
  gotohigh: function () {
    this.setData({
      easyDisplay: false,
      mediumDisplay: false,
      hardDisplay: true
    });
  },
})
