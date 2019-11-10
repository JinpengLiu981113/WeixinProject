<template>
  <view class="container">
    <view class="heading">Unit {{unit}} of 5</view>
    <view v-for="exam in exams" style="width: 100%">
      <view class="color-bar"></view>
      <view class="version">
        <p class="text-part">{{ exam }}</p>
        <input class="input-part" type="text" />
      </view>
    </view>
    <view class="color-bar"></view>
    <button class="next-unit-button" @click="checkResults">下一题</button>
  </view>
</template>

<style scoped>
.container {
  min-height: 100%;
  overflow: hidden;
  overflow-y: hidden;
  padding: 0;
}
.heading {
  height: 40rpx;
  width: 100%;
  font-size: 40rpx;
  font-weight: blod;
  text-align: center;
  padding: 20rpx;
}
.color-bar{
  height: 20rpx;
  background: #eee;
  width: 100%;
}
.version {
  width: 100%;
  height: 2em;
  padding: 1em;
  font-size: 24rpx;
  text-align: center;
  display: flex;
  justify-content: center;
}
.version .text-part{
  font-size: 1.2em;
  font-weight: 700;
  line-height: 2em;
}
.version .input-part{
  border: 1px #dddddd solid;
  width: 10%;
  margin-left: 1em;
}
.next-unit-button{
   width: 100%;
   background: #ff8800;
   border-radius: 1em;
}
</style>

<script>
export default {
  data () {
    return {
      unit: 0,
      exams: [
        '1 + 1 =',
        '2 + 2 =',
        '3 + 3 =',
        '4 + 4 =',
        '1 + 3 =',
        '1 + 5 =',
        '5 + 3 =',
        '6 + 4 =',
        '7 + 3 =',
        '2 + 5 ='
      ]
    }
  },
  methods: {
    checkResults () {
      mpvue.navigateTo({url: '/pages/result/main'})
    }
  }
}
</script>
