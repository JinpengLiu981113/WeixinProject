<template>
  <div>
    <div>
      <p>本次做题结果</p>
      <ul>
        <li>
          <p>
            <span>本次做题数:</span>
            <span>{{totalNum}}</span>
          </p>
        </li>
        <li>
          <p>
            <span>正确数目:</span>
            <span>{{correctNum}}</span>
          </p>
        </li>
        <li>
          <p>
            <span>错误数目:</span>
            <span>{{wrongNum}}</span>
          </p>
        </li>
        <li>
          <p>
            <span>正确率:</span>
            <span>{{correctRatio}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div>
      <input type="button" value="下一单元" />
    </div>
    <div>
      <p>本次做题反馈</p>
      <ul>
        <li>
          <p></p>
          <img />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  data () {
    return {
      totalNum: 10,
      correctNum: 5,
      wrongNum: 5,
      correctRatio: '50%'
    }
  }
}
</script>