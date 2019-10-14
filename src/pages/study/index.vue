<template>
  <div>
    <!-- 难度选择页面结构 -->
    <div class="picker-area">
      <picker @change="bindPickerChange" :value="index" :range="array">
        <view class="picker">{{array[index]}} ▼</view>
      </picker>
    </div>
    <!-- 简单难度页面结构 -->
    <div class="card-area easy" v-show="easyDisplay">
      <!-- 10以内加法内容 -->
      <div class="card add10" @click="gotoClass">
        <p>十以内加法</p>
        <p>知识点数:20</p>
        <p>学习单元数:30</p>
        <p>学习进度</p>
      </div>
      <!-- 10以内减法内容 -->
      <div class="card sub10">
        <p>十以内减法</p>
        <p>知识点数:50</p>
        <p>学习单元数:30</p>
        <p>学习进度</p>
      </div>
      <!-- <div class="card add100">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="card sub100">
        <p></p>
        <p></p>
        <p></p>
      </div> -->
    </div>
    <!-- 中等难度页面结构 -->
    <div class="card-area medium" v-show="mediumDisplay">
      <!-- <div class="card mul10">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="card div10">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="card mul20">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="card div100">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="card div100">
        <p></p>
        <p></p>
        <p></p>
      </div> -->
    </div>
    <!-- 困难难度页面结构 -->
    <div class="card-area hard" v-show="hardDisplay">
      <!-- <div class="card add10">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="card sub10">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="card add100">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="card sub100">
        <p></p>
        <p></p>
        <p></p>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.picker-area {
  justify-content: center;
  display: flex;
  margin: 1%;
  /* width: 10%; */
  /* height: 2%; */
}
.picker-area .picker {
  border: 1px black solid;
  text-align: center;
  width: 4em;
  /* height: 2em; */
}
.card-area{
  /* display: flex; */
  flex-direction: column;
  /* justify-content: center; */

}
.card{
  /* display: flex; */
  /* justify-content: center; */
  /* width: 90%; */
  flex-direction: column;
  margin: 3%;
  height: 5.5em;
  text-align: center;
  /* padding: 1%; */
  /* border: 1px black solid; */
  /* border-radius: 1em; */
  background-color: dodgerblue;
}
</style>

<script>
export default {
  // 学习选择界面显示数据
  data () {
    return {
      index: 0,
      array: ['简单', '中等', '困难'], // 难度选择列表
      easyDisplay: true, // 选择简单难度
      mediumDisplay: false, // 选择中等难度
      hardDisplay: false // 选择困难难度
      // urls: []       // 链接
      // subjects: []   // 项目
    }
  },
  // 页面控制函数列表
  methods: {
    // 选择难度的控制函数
    bindPickerChange (e) {
      this.index = e.target.value
      if (this.index === '0') { // 简单难度控制函数
        this.easyDisplay = true
        this.mediumDisplay = false
        this.hardDisplay = false
      } else if (this.index === '1') { // 中等难度控制函数
        this.easyDisplay = false
        this.mediumDisplay = true
        this.hardDisplay = false
      } else { // 困难难度控制函数
        this.easyDisplay = false
        this.mediumDisplay = false
        this.hardDisplay = true
      }
      console.log(this.easyDisplay)
      console.log(this.index === '1')
    },
    // 跳转到学习页面控制函数
    gotoClass () {
      mpvue.navigateTo({url: '/pages/class/main'})
    }
  }
}
</script>
