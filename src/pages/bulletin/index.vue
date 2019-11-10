<template>
  <div class="container">
    <div class="title-div">
      <p class="title-para">{{title}}</p>
      <p class="time-para">发布时间:{{time}}</p>
      <div class="sep-div"></div>
    </div>
    <div v-html="content"></div>
  </div>
</template>

<style scoped>
.container{
  margin: 1em;
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
      content: '<p style="color: red;">你好</p>'
    }
  }
  // onload () {

  // }
}
</script>