<template>
  <!-- 需要的数据：用户排名数据（用户信息），问题数据，可能要再加一个回答页面？ -->
  <div>
    <div class="outer-div">
      <div class="ranking-div">
        <p class="ranking-title">比赛排名</p>
        <!-- <div><img></div>
        <div><img></div>
        <div><img></div> -->
        <div class="table-div">
          <table class="ranking-table">
            <thead class="table-head">
              <tr class="table-row">
                <th class="table-cell">排名</th>
                <th class="table-cell-middle">用户名</th>
                <th class="table-cell">分数</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr class="table-row">
                <td class="table-body-cell">1</td>
                <td class="table-body-cell-middle">123</td>
                <td class="table-body-cell">8000</td>
              </tr>
              <tr class="table-row">
                <td class="table-body-cell">1</td>
                <td class="table-body-cell-middle">123</td>
                <td class="table-body-cell">8000</td>
              </tr>
              <tr class="table-row">
                <td class="table-body-cell">1</td>
                <td class="table-body-cell-middle">123</td>
                <td class="table-body-cell">8000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="button-div">
          <input class="page-button first-page-button" type="button" value="首页">
          <input class="page-button previous-page-button" type="button" value="上一页">
          <input class="page-button next-page-button" type="button" value="下一页">
          <input class="page-button last-page-button" type="button" value="末页">
        </div>
      </div>
        <!-- <div class="gen-table">
          <div class="gen-tr">
            <div class="gen-td">
                <div class="time">
                  10:00
                </div>
            </div>
            <div class="gen-td">
              aaa
            </div>
            <div class="gen-td">
              aaa
            </div>
            <div class="gen-td">
              aaa
            </div>
          </div>
          <div class="gen-tr">
            <div class="gen-td">
              <div class="schedule-name">赛事名称赛事名称赛事名称</div>
            </div>
            <div class="gen-td">
              aaa
            </div>
            <div class="gen-td">
              aaa
            </div>
            <div class="gen-td">
              aaa
            </div>
          </div>
        </div>
      </div>  -->

      <div class="question-div">
        <p class="question-title">社区提问</p>
        <div class="question-list-div">
          <ul class="question-list">
            <li class="question-unit" @click="gotoAnswer">
              <!-- <img> -->
              <p class="question-user-name">456</p>
              <p class="question-type">简单</p>
              <p class="question-content">为什么1+1=2？</p>
            </li>
            <li class="question-unit">
              <!-- <img> -->
              <p class="question-user-name">456</p>
              <p class="question-type">困难</p>
              <p class="question-content">为什么x^2-1=0的解是两个？</p>
            </li>
            <li class="question-unit">
              <!-- <img> -->
              <p class="question-user-name">456</p>
              <p class="question-type">建议</p>
              <p class="question-content">建议加大题目难度。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <input class="ask-question-button" type="button" value="我要提问" @click="gotoAsking">
  </div>
</template>

<style scoped>
.outer-div{
  margin: 1em;
}
.ranking-div{
  padding-bottom: 1em;
  border-bottom: 1px black solid;
}
.ranking-title{
  font-size: 1.5em;
}
.table-div{
  margin: 1em 0 1em 0;
}
.ranking-table{
  border: 1.5px #efefef solid;
}
.table-head{
  background-color: #efefef;
}
.table-row{
  display: flex;
}
.table-cell{
  width: 20%;
  text-align: center;
  border: 1px solid #8f8f8f;
}
.table-cell-middle{
  width: 60%;
  text-align: center;
  border: 1px solid #8f8f8f;
}
.table-body-cell{
  height: 2em;
  line-height: 2em;
  width: 20%;
  text-align: center;
  border: 1px solid #8f8f8f;
}
.table-body-cell-middle{
  width: 60%;
  text-align: center;
  border: 1px solid #8f8f8f;
  height: 2em;
  line-height: 2em;
}
.button-div{
  display: flex;
  justify-content: center;
}
.page-button{
  font-size: 0.8em;
  line-height: inherit;
}
.question-div{
  padding-top: 1em;
  padding-bottom: 2em;
}
.question-title{
  font-size: 1.5em;
}
.question-list-div{
  margin: 1em 0 1em 0;
}
.question-unit{
  border: 1px #efefef solid;
  border-radius: 5px;
  padding: 0.5em;
  background-color: #efefef;
  margin: 0.5em 0 0.5em 0;
}
.question-user-name{
  font-size: 0.8em;
  text-indent: 0.8em;
}
.question-type{
  text-align: right;
  padding-right: 0.5em;
}
.question-content{
  width: 80%;
  border-top: 1px dashed #888;
  padding-left: 20%;
  /* text-indent: 5%; */
}
.ask-question-button{
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: 0;
  background-color: #e64340;
  color: #ffffff;
}
</style>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    gotoAnswer () {
      mpvue.navigateTo({url: '/pages/Answer/main'})
    },
    gotoAsking () {
      mpvue.navigateTo({url: '/pages/comment/main'})
    }
  }
}
</script>