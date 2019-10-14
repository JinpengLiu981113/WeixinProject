<template>
<div>
<view class="page">
  <view class="page__bd">
    <view class="weui-tab">
      <view class="weui-navbar" style="display: flex; justify-content: space-around;">
        <view class="weui-navbar__item weui-bar__item_on" id="0" style="width: 100%;text-align:center;">
          <button bindtap="gotoeasy">简单</button>
        </view>
        <view class="weui-navbar__item weui-bar__item_on" id="1" style="width: 100%;text-align:center;">
          <button bindtap="gotomedium">中级</button>
        </view>
        <view class="weui-navbar__item weui-bar__item_on" id="2" style="width: 100%;text-align:center;">
          <button bindtap="gotohigh">高级</button>
        </view>
        <view class="weui-navbar__slider" style="left: 21px; transform: translateX(0px); -webkit-transform: translateX(0px);"></view>
      </view>
      <view style="height:20rpx;background: #eee;width:100%;"></view>
      <view class="weui-tab__panel">
        <view class="weui-tab__content">
          <view class="weui-cells weui-cells_after-title">
            <form bindsubmit="getCounponByPwd">
              <view class="weui-cell weui-cell_input weui-cell_vcode" style="display: flex;/*justify-content:*//*flex-direction: row*/justify-content: center; margin: 2%;">
                <view class="weui-cell__bd" style="width: 100%;border: 1px #dddddd solid;">
                  <input class="weui-input" name="pwd" placeholder="请输入你想查找的题目" style="padding-top: 12px; padding-left:3%" selection-start="-1" selection-end="-1" cursor="-1"></input>
                </view>
                <view class="weui-cell__ft" style="width: 20%;">
                  <button class="weui-btn duihuang-btn" form-type="submit" type="default" role="button" aria-disabled="false" style="padding: 0;">搜索</button>
                </view>
              </view>
            </form>
          </view>
        </view>
      </view>
    </view>
  </view>
</view>
<view style="height:20rpx;background: #eee;width:100%;"></view>
<view wx:if="{{easyDisplay}}">
  <view class="my-item">
    <navigator url="/pages/panel/index" hover-class="navigator-hover">难度:简单 章节:{{unit}} 题号:{{num1}}</navigator>
  </view>
  <view class="my-item">
    <navigator url="/pages/panel/index" hover-class="navigator-hover">难度:简单 章节:{{unit}} 题号:{{num2}}</navigator>
  </view>
  <view class="my-item">
    <navigator url="/pages/panel/index" hover-class="navigator-hover">难度:简单 章节:{{unit}} 题号:{{num3}}</navigator>
  </view>
</view>
<view wx:if="{{mediumDisplay}}">
  <view class="my-item">
    <navigator url="/pages/easy/easy" hover-class="navigator-hover">难度:中级 章节:{{unit}} 题号:{{num1}}</navigator>
  </view>
  <view class="my-item">
    <navigator url="/pages/easy/easy" hover-class="navigator-hover">难度:中级 章节:{{unit}} 题号:{{num2}}</navigator>
  </view>
  <view class="my-item">
    <navigator url="/pages/easy/easy" hover-class="navigator-hover">难度:中级 章节:{{unit}} 题号:{{num3}}</navigator>
  </view>
</view>
<view wx:if="{{hardDisplay}}">
  <view class="my-item">
    <navigator url="/pages/easy/easy" hover-class="navigator-hover">难度:高级 章节:{{unit}} 题号:{{num1}}</navigator>
  </view>
  <view class="my-item">
    <navigator url="/pages/easy/easy" hover-class="navigator-hover">难度:高级 章节:{{unit}} 题号:{{num2}}</navigator>
  </view>
  <view class="my-item">
    <navigator url="/pages/easy/easy" hover-class="navigator-hover">难度:高级 章节:{{unit}} 题号:{{num3}}</navigator>
  </view>
</view>
</div>
</template>

<style scoped>
.my-item{
  width: 100%;
  background: url(https://cdn.it120.cc/images/weappshop/arrow-right.png) no-repeat 700rpx ;
  background-size: 16rpx auto,750rpx auto;
  border-bottom: 1px solid #eee;
  height: 80rpx;
  line-height: 80rpx;
  padding-left: 10rpx;
  font-size:14px;
  padding: 30rpx;
}
</style>

<script>
export default {
  data () {
    return {
      easyDisplay: true,
      mediumDisplay: false,
      hardDisplay: false,
      unit: 1,
      num1: 1,
      num2: 2,
      num3: 3,
    }
  },
  method: {
    gotoeasy: function () {
      this.easyDisplay = true
      this.mediumDisplay = false
      this.hardDisplay = false
    },
    gotomedium: function () {
      this.easyDisplay = false
      this.mediumDisplay = true
      this.hardDisplay = false
    },
    gotohigh: function () {
      this.easyDisplay = false
      this.mediumDisplay = false
      this.hardDisplay = true
    }
  }
}
</script>