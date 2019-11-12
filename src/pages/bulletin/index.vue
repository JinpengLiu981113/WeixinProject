<template>
  <!-- 从数据库中提取消息的数据 -->
  <div class="container">
    <div class="title-div">
      <p class="title-para">{{title}}</p>
      <p class="time-para">发布时间:{{time}}</p>
      <!-- <p class="time-para">{{queryRes}}</p> -->
      <div class="sep-div"></div>
    </div>
    <div v-html="content"></div>
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
      title: 'abcdef',
      time: '2017.0.0.1',
      content: '<p style="color: red;">你好</p>',
      queryRes: ''
    }
  },
  onLoad () {
    wx.cloud.init()
    wx.cloud.database().collection('Answer').get({
      success: res => {
        this.setData({
          queryRes: JSON.stringify(res.data, null, 2)
        })
        console.log('数据库查询成功: ', res)
      },
      fail: err => {
        console.error('数据库查询失败：', err)
      }
    })
  }
}
</script>