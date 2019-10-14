<template>
  <view class="container" style="padding-top: 10%;">
	  <view v-if="userInfo" class="userinfo">
		  <image v-if="userInfo.avatarUrl" class="userinfo-avatar" src="userInfo.avatarUrl" background-size="cover"></image>
		  <text class="userinfo-nickname">{{ userInfo.nickName }}</text>
	  </view>
    <view wx:else class="userinfo" style="margin-bottom:50rpx;">
		  <image class="userinfo-avatar" src="/static/images/nologin.png" background-size="cover"></image>
		  <button class="weui-btn mini-btn" plain="true" size="mini" open-type="getUserInfo" bindgetuserinfo="onGotUserInfo">点击登录账户</button>
	  </view>
    <view class="asset">
      <view class='item' bindtap='goAsset'>
        <view>{{ranking}}</view>
        <view>排名</view>
      </view>
      <view class='item right' bindtap='goAsset'>
        <view>{{score}}</view>
        <view>总积分</view>
      </view>
      <view class='item right' bindtap='goScore'>
        <view>{{score_sign_continuous}}</view>
        <view>签到天数</view>
      </view>
    </view>
    <view style="height:10rpx;background: #eee;width:100%;"></view>
    <view class="my-item">
      <navigator url="/pages/easy/easy" hover-class="navigator-hover">我的答题</navigator>
    </view>
    <view class='order-shortcut'>
      <view class='item' bindtap='goanswer' data-type="0">
        <image class="icon" src="/static/images/answer.png" background-size="cover"></image>
        <view class='text'>答题</view>
      </view>
      <view class='item' bindtap='goOrder' data-type="1">
        <image class="icon" src="/static/images/wrong.png" background-size="cover"></image>
        <view class='text'>错题记录</view>
      </view>
      <view class='item' bindtap='goOrder' data-type="2">
        <image class="icon" src="/static/images/star2.png" background-size="cover"></image>
        <view class='text'>我的收藏</view>
      </view>
    </view>
    <view style="height:10rpx;background: #eee;width:100%;"></view>
    <view class="my-item">
      <navigator url="/pages/community/main" hover-class="navigator-hover">我的社区</navigator>
    </view>
    <view class="my-item">
      <navigator url="/pages/asset/index" hover-class="navigator-hover">我的公告</navigator>
    </view>
    <view class="my-item">
      <navigator url="/pages/sign/index" hover-class="navigator-hover">每日签到</navigator>
    </view>  
    <view v-if="userMobile" class="my-item" style="border:none;padding-right:150rpx;width:auto;">
      {{userMobile}}
    </view>
    <view style="height:20rpx;background: #eee;width:100%;"></view>
    <view class="my-item" bindtap="aboutUs">
      关于我们
    </view>
    <view class="my-item" open-type="getPhoneNumber" bindtap="getPhoneNumber">
      绑定手机号码
    </view>
    <view style="height:20rpx;background: #eee;width:100%;"></view>
    <view v-show="userInfo" class="my-item" style="color:red;font-weight:bold;">
      <button style="position:absolute;left:-125rpx;width:1000rpx;color:red;" bindtap="loginOut">退出登录</button>
    </view>
    <view style="height:20rpx;background: #eee;width:100%;"></view>
    <view class="version">Powered by EastWorld v {{version}}</view>
    <view style="height:20rpx;background: #eee;width:100%;"></view>
  </view>
</template>

<style scoped>
.container{
  min-height: 100%;
  overflow: hidden;
  overflow-y: hidden;
}

.userinfo {
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 750prx;
  height:auto;
}
.userinfo-avatar {
	width: 160rpx;
	height: 160rpx;
}
.userinfo-nickname {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  font-size: 14px;
}

.asset {
  display: flex;
  border-top: 1px solid #eee;
  padding-top:20rpx;
  padding-bottom:20rpx;
}
.asset .item {
  display: flex;
  flex-direction: column;
  width:250rpx;
  text-align: center;
  font-size: 13px;
  line-height: 20px;
  color:#333;
}
.asset .right {
  border-left: 1px solid #eee;
}

.version {
  width:100%;
  height: 40rpx;
	line-height: 40rpx;
	font-size: 24rpx;
	text-align: center;  
  padding: 40rpx;
}

.my-item{
    width: 100%;
    background: url(https://cdn.it120.cc/images/weappshop/arrow-right.png) no-repeat 750rpx center;
    background-size: 16rpx auto,750rpx auto;
    border-bottom: 1px solid #eee;
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 100rpx;
    font-size:14px;
}

.about{
    width: 100%;
    background: url(https://cdn.it120.cc/images/weappshop/arrow-right.png) no-repeat 750rpx center;
    background-size: 16rpx auto,750rpx auto;
    margin: 20rpx 0; 
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 100rpx;
}

.order-shortcut {
  display: flex;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
}
.order-shortcut .item {
  display: flex;
  flex-direction: column;
  width: 150rpx;
  text-align: center;
}
.order-shortcut .item .icon {
  width: 67rpx;
  height: 67rpx;
  margin-left: 45rpx;
}
.order-shortcut .item .text {
  font-size: 12px;
}
.to-authorize{
  border: none;
  padding: 0rpx;
  margin: 0rpx;
  background: none;
  border: none;
  height: auto;
  line-height: auto;
}
/* 绑定手机号 */
.bind-phone-number{
  margin: 20rpx;
  width: 100%;
}
</style>

<script>
export default {
  data () {
    return {
      ranking: 0,
      score: 0,
      score_sign_continuous: 0,
      userInfo: 0
    }
  }
}
//   onShow () {
//     const _this = this
//     this.version = CONFIG.version
//     this.vipLevel = app.globalData.vipLevel
//     AUTH.checkHasLogined().then(isLogined => {
//       if (isLogined) {
//         _this.setData({
//           userInfo: wx.getStorageSync('userInfo')
//         })
//         _this.getUserApiInfo()
//         _this.getUserAmount()
//       }
//     })
//   },
//   onGotUserInfo (e) {
//     if (!e.detail.userInfo) {
//       wx.showToast({
//         title: '您已取消登录',
//         icon: 'none',
//       })
//       return
//     }
//     if (app.globalData.isConnected) {
//       wx.setStorageSync('userInfo', e.detail.userInfo)
//       AUTH.login(this);
//     } else {
//       wx.showToast({
//         title: '当前无网络',
//         icon: 'none',
//       })
//     }
//   },
//   aboutUs: function () {
//     wx.showModal({
//       title: '关于我们',
//       content: '华中科技大学软件工程课程作业！',
//       showCancel: true
//     })
//   },
//   loginOut() {
//     AUTH.loginOut()
//     wx.reLaunch({
//       url: '/pages/my/index'
//     })
//   },
//   getPhoneNumber: function (e) {
//     if (!e.detail.errMsg || e.detail.errMsg != "getPhoneNumber:ok") {
//       wx.showModal({
//         title: '提示',
//         content: '无法获取手机号码:' + e.detail.errMsg,
//         showCancel: false
//       })
//       return;
//     }
//     var that = this;
//     WXAPI.bindMobile({
//       token: wx.getStorageSync('token'),
//       encryptedData: e.detail.encryptedData,
//       iv: e.detail.iv
//     }).then(function (res) {
//       if (res.code === 10002) {
//         app.goLoginPageTimeOut()
//         return
//       }
//       if (res.code == 0) {
//         wx.showToast({
//           title: '绑定成功',
//           icon: 'success',
//           duration: 2000
//         })
//         that.getUserApiInfo();
//       } else {
//         wx.showModal({
//           title: '提示',
//           content: '绑定失败',
//           showCancel: false
//         })
//       }
//     })
//   },
//   getUserApiInfo: function () {
//     var that = this;
//     WXAPI.userDetail(wx.getStorageSync('token')).then(function (res) {
//       if (res.code == 0) {
//         let _data = {}
//         _data.apiUserInfoMap = res.data
//         if (res.data.base.mobile) {
//           _data.userMobile = res.data.base.mobile
//         }
//         that.setData(_data);
//       }
//     })
//   },
//   getUserAmount: function () {
//     var that = this;
//     WXAPI.userAmount(wx.getStorageSync('token')).then(function (res) {
//       if (res.code == 0) {
//         that.setData({
//           balance: res.data.balance.toFixed(2),
//           freeze: res.data.freeze.toFixed(2),
//           score: res.data.score
//         });
//       }
//     })
//   },
//   goanswer: function () {
//     wx.navigateTo({
//       url: "/pages/panel/index"
//     })
//   },
//   goScore: function () {
//     wx.navigateTo({
//       url: "/pages/score/index"
//     })
//   },
//   goOrder: function (e) {
//     wx.navigateTo({
//       url: "/pages/star/star"
//     })
//   }
// }
</script>