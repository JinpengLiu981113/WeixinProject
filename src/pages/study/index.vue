<template>
  <div>
    <div class="picker-area">
      <picker @change="bindPickerChange" :value="index" :range="array">
        <view class="picker">{{array[index]}} ▼</view>
      </picker>
    </div>
    <div class="card-area easy" v-show="easyDisplay">
      <div class="card add10" @click="gotoClass">
        <p>十以内加法</p>
        <p>知识点数:20</p>
        <p>学习单元数:30</p>
        <p>学习进度</p>
      </div>
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
  data () {
    return {
      index: 0,
      array: ['简单', '中等', '困难'],
      easyDisplay: true,
      mediumDisplay: false,
      hardDisplay: false
      // urls: []       // 链接
      // subjects: []   // 项目
    }
  },
  methods: {
    bindPickerChange (e) {
      this.index = e.target.value
      if (this.index === '0') {
        this.easyDisplay = true
        this.mediumDisplay = false
        this.hardDisplay = false
      } else if (this.index === '1') {
        this.easyDisplay = false
        this.mediumDisplay = true
        this.hardDisplay = false
      } else {
        this.easyDisplay = false
        this.mediumDisplay = false
        this.hardDisplay = true
      }
      console.log(this.easyDisplay)
      console.log(this.index === '1')
    },
    gotoClass () {
      mpvue.navigateTo({url: '/pages/class/main'})
    }
  }
}
</script>
