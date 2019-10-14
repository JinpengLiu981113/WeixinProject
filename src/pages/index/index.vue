<template>
  <div @click="clickHandle">
    <!-- 改成模板使用 -->
    <!--default模式-->
    <div class="regular-mode" :style="{'left': leftStart}">
      <!-- 设置区域 -->
      <div class="settings-area">
        <!-- 设置按钮 -->
        <img class="settings-img" src="/static/images/settings.png" mode="aspectFit" @click="openSettings" />
      </div>
      <!-- 显示排名区域 -->
      <div class="ranking-area">
        <!-- 显示排名按钮 -->
        <img class="ranking-img" src="/static/images/leaderboard-80.png" mode="aspectFit" @click="openRanking" />
      </div>
      <!-- 排名区 -->
      <div class="bulletin-area" @click="openNews">
        <img class="bulletin-img" src="/static/images/horn.png" mode="aspectFit" />
        <p class="today-news">今日公告:{{ news }}</p>
      </div>
      <!-- 显示学习时间 -->
      <div class="infomation-area">
        <p style="line-height: 3em; text-align: center;">已经学习</p>
        <p style="text-align: center;">
          <span style="font-size: 3em; color: red;">xxx</span>
          <span style="font-size: 0.8em;">天</span>
        </p>
      </div>
      <!-- 学前测试 -->
      <div class="test-area" @click="openTest">
        <img src="/static/images/th.jpg"/>
        <div style="position: absolute; height: 4em; margin: 0.5em 0 0.5em 0; text-align: center; width: 100%;">
          <p class="text1">对自己满怀信心？</p>
          <p class="text2">何不来测试一下自己的水平？</p>
        </div>
      </div>
      <!-- 功能区 -->
      <div class="choose-area">
        <!-- 参加学习按钮 -->
        <div class="choice" @click="gotoStudy">
          <img src="/static/images/teacher.png" mode="aspectFit" />
          <p class="choice-text text1">学习</p>
        </div>
        <!-- 参加答题按钮 -->
        <div class="choice" @click="gotoExercise">
          <img src="/static/images/test.png" mode="aspectFit" />
          <p class="choice-text text2">答题</p>
        </div>
        <!-- 参加比赛按钮 -->
        <div class="choice" @click="gotoContest">
          <img src="/static/images/match.png" mode="aspectFit" />
          <p class="choice-text text3">比赛</p>
        </div>
      </div>
      <!-- 公式助记区域 -->
      <div class="memory-area">
        <div class="formula">
          <p style="text-indent: 1em;">公式助记</p>
          <p style="text-align: center; padding:1em; font-size: 1.2em; ">{{ formula }}</p>
          <div class="button-area">
            <input class="memory-button" type="button" value="查看公式" />
            <input class="memory-button" type="button" value="换一个" style="background-color: #11dd00;"/>
          </div>
        </div>
        <!-- <div class="remember" style="display: none;">
          <p>你真聪明</p>
        </div> -->
      </div>
    </div>
    <!-- 设置区域 -->
    <div class="settings-mode" v-show="settingsDisplay" style="width: 70%; position: absolute;">
      <!-- <img class="settings" src="" mode="aspectFit" /> -->
      <input type="button" value="设置时间" />
    </div>
    <!-- <div class="ranking-mode" v-show="rankingShow">
    </div> -->
  </div>
</template>

<style scoped>
.settings-area .settings-img {
  width: 24px;
  height: 24px;
  left: 3%;
  position: absolute;
  z-index: 5;
}
.ranking-area .ranking-img {
  width: 24px;
  height: 24px;
  right: 3%;
  position: absolute;
  z-index: 5;
}
.regular-mode{
  /* left: 70%; settings mode */
  /* left: -70%; ranking mode */
  width: 100%;
  position: absolute;
}
.bulletin-area {
  width: 70%;
  /* left: 5%; */
  /* height: 20px; */
  margin: 2% 15% 2% 15%;
  display: flex;
  justify-content: left;
  /* top: 5px; */
  /* border: 1px gray dashed;
  border-radius: 5px; */
}
.bulletin-area .bulletin-img {
  width: 16px;
  height: 16px;
  /* position: absolute; */
}
.bulletin-area .today-news {
  /* left: 7%; */
  /* text-indent: 2em; */
  /* position: absolute; */
  color: red;
  font-size: 12px;
}
.infomation-area {
  /* width: 90%; */
  /* left: 5%; */
  width: 100%;
  height: 8em;
  border-top: 1px #dddddd dashed;
  /* top: 35px; */
}
.test-area {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4em;
}
.test-area img{
  width: 100%;
  height: 4em;
  position: absolute;
}
.test-area .text1{
  /* position: absolute;
  padding: 0.5em; */
  /* padding: 1%; */
}
.test-area .text2{
  /* position: absolute;
  padding: 0.5em; */
  /* top:  */
  padding: 1%;
}
.choose-area {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
  height: 5em;
}
.choose-area .choice {
  width: 64px;
  height: 80px;
}
.choose-area .choice img {
  width: 100%;
  height: 3.5em;
}
.choose-area .choice .choice-text {
  text-align: center;
  font-size: 1.2em;
}
.memory-area {
  /* position: absolute; */
  width: 100%;
  border-top: 1px #cccccc dashed;
  height: 3em;
  /* height: 80px; */
  /* top: 410px; */
}
.memory-area .button-area {
  display: flex;
  justify-content: space-around;
}
.memory-area .button-area .memory-button{
  line-height: 1.5em;
  font-size: 0.8em;
  height: 1.5em;

}
</style>

<script>
// import card from "@/components/card";

export default {
  data () {
    return {
      news: 'Hello miniprograme', // 消息显示
      formula: '(x+1)(x-1)=x^2-1', // 公式助记区的公式
      settingsDisplay: false, // 是否显示设置区
      rankingDisplay: false, // 是否显示排名区域
      leftStart: '0', // 控制default界面位置
      openLeft: false // 是否已经打开左侧设置区
    }
  },

  // components: {
  //   card
  // },

  methods: {
    // 打开设置区方法
    openSettings () {
      if (this.openLeft) {
        // 关闭设置区
        this.settingsDisplay = false
        this.leftStart = '0'
        this.openLeft = false
      } else {
        // 打开设置区，把default
        this.settingsDisplay = true
        this.leftStart = '70%'
        this.openLeft = true
      }
    },
    // 连接到学习界面
    gotoStudy () {
      mpvue.navigateTo({url: '/pages/study/main'})
    },
    // 连接到练习界面
    gotoExercise () {
      mpvue.navigateTo({url: '/pages/class/main'})
    }
    // gotoContest () {
    //   mpvue.navigateTo("/pages/contest/main");
    // },
    // gotoTest () {
    //   mpvue.navigateTo("/pages/test/main");
    // }
  }

  // created() {
  //   // let app = getApp()
  // }
}
</script>


