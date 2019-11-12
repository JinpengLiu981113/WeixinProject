# 儿童趣味学习应用

本儿童趣味学习应用仍处于开发阶段

> 本儿童趣味学习应用是一个微信小程序
> 
> 使用美团开源的mpvue框架，基于vue.js进行前端开发，使用微信云开发进行后端开发
> 
> 使用https://latex.codecogs.com/[https://latex.codecogs.com/] 进行数学公式的生成以及渲染

本学习应用具有以下几个特色：
- 学前测试，掌握儿童学习阶段与知识水平
- 考练结合，儿童通过做选择题来进行知识点学习
- 同学比拼，儿童在学习之余可以和同学比赛，发现自己与同学不足之处
- 知识点回顾，首页具有知识点回顾卡片，帮助儿童快速记忆公式
- 社区提问，儿童在社区对问题进行提问，其他同学、家长等可进行回答
- 美观数学公式，数学公式使用latex生成并转为高清svg图像

页面说明
- 主页面：打卡签到，进行学习，测试，比赛的选择，公式记忆，定时学习(将来实现)等
- 公告页：新出炉的公告第一时间看到
- 学习页：根据自己的能力进行选择，巩固拓展兼顾，基本公式清晰罗列，公式尽收囊中
- 测试页：采用填空形式，空中只填数字，避免选择题瞎蒙，测出真实水平
- 错题本：错题收藏兼顾，错题查找(将来实现)，不同类别题目集中到一起，便于复习
- 社区：查看比赛成绩，在社区中进行提问，与大佬一起学习进步

### 数据库说明（database文件夹）
* Answer：社区回答
* Community：社区提问
* Knowledge：知识点
* Notice：公告
* QuestionBook：题目集合
* UserInfo：用户信息记录（包括签到和分数
* WrongBook：错题本

### 题目、知识点的数据库说明
* 一共12个章节，到时候看是分为3个难度（每个4章）还是6个年级（每个两章）
* Chapter1: 10以内加
* Chapter2: 10以内减
* Chapter3: 100以内加
* Chapter4: 100以内减
* Chapter5: 乘法口诀表
* Chapter6: 除法口诀表
* Chapter7: 100以内加减混合
* Chapter8: 100以内加减乘除混合
* Chapter9: 大数加减法（可能用到竖式计算）
* Chapter10: 大数乘除法（可能用到竖式计算）
* Chapter11: 大数加减乘除混合（可能用到竖式计算）
* Chapter12: 一元一次以及一元二次方程
