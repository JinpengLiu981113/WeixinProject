<template>
  <div style="margin: 1%;">
    <div style="margin: 0.5em 0 0.5em 0; background-color: #efefef;">
      <p style="font-size: 1.5em; text-align: center; padding-bottom: 0.3em;">本次做题结果</p>
      <ul style="margin: 0 4em 0 4em; text-align: center; font-size: 0.9em;">
        <li class="res-li"><p>本次做题数:</p><p>{{totalNum}}</p></li>
        <li class="res-li"><p>正确数目:</p><p>{{correctNum}}</p></li>
        <li class="res-li"><p>错误数目:</p><p>{{wrongNum}}</p></li>
        <li class="res-li"><p>正确率:</p><p>{{correctRatio}}</p></li>
      </ul>
    </div>
    <div>
      <input style="width: 80%; height: 2em; line-height: 2em; border-radius: 0.2em; background-color: lightgreen;" type="button" value="下一单元" />
    </div>
    <div style="margin: 0.5em 0 0.5em 0; background-color: #efefef;">
      <p style="font-size: 1.5em; text-align: center; padding-bottom: 0.3em;">本次做题反馈</p>
      <!-- <p>{{arrow}}</p> -->
      <ul>
        <li class="ans-li">
          <div class="ans-bar"></div>
          <p>123</p>
          <img />
        </li>
        <li class="ans-li">
          <div class="ans-bar"></div>
          <p>456</p>
          <img />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.res-li {
  display: flex;
  justify-content: space-between;
  padding: 0.2em 0 0.2em 0;
}
.ans-bar {
  height: 1px;
  border-top: 1px gray dashed;
}
</style>

<script>
export default {
  data () {
    return {
      totalNum: 10,
      correctNum: 5,
      wrongNum: 5,
      correctRatio: '50%'
      // display: false,
      // arrow: ''
    }
  }
}
</script>