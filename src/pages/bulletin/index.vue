<template>
  <!-- 从数据库中提取消息的数据 -->
  <div class="container">
    <div class="title-div">
      <p class="title-para">{{title}}</p>
      <p class="time-para">发布时间:{{time}}</p>
      <!-- <p class="time-para">{{queryRes}}</p> -->
      <div class="sep-div"></div>
    </div>
    <div style="font-size: 0.9em; text-indent: 2em;" v-html="context"></div>
  </div>
</template>

<style scoped>
.container{
  margin: 1em;
  display: block;
  padding: 0;
}
.title-div{
  margin-bottom: 0.5em;
}
.title-para{
  line-height: 2em;
  font-size: 1.5em; 
  text-align: center;
}
.time-para{
  font-size: 0.5em; 
  text-align: right;
}
.sep-div{
  height: 1px; 
  border-bottom: 1px gray dashed;
}
</style>

<script>
export default {
  data () {
    return {
      title: '',
      time: '',
      context: ''
    }
  },
  onLoad () {
    wx.cloud.database().collection('Notice').get({
      success: res => {
        this.title = res.data[0].data.title
        this.time = JSON.stringify(res.data[0].data.date)
        this.context = res.data[0].data.context
      }
    })
  }
}
</script>