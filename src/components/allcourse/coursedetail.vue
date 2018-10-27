<template lang="html">
  <div class="course_detail">
    <el-card class="box-card">
      <div class="course_img">
        <img :src="courseInfo.img" alt="">
      </div>
      <div class="course_description">

        <div class="content">
          {{courseInfo.content}}
        </div>
        <div class="num_of_learnt">
          <span style="color:#ffe400">{{courseInfo.num}}</span>人学过
        </div>
        <el-steps :active="active" finish-status="success" style="margin-top:30px" align-center>
          <el-step title="第一章"></el-step>
          <el-step title="第二章"></el-step>
          <el-step title="第三章"></el-step>
          <el-step title="第三章"></el-step>
          <el-step title="第三章"></el-step>
          <el-step title="第三章"></el-step>
          <el-step title="第三章"></el-step>

        </el-steps>
      </div>
    </el-card>
    <el-row>
      <el-col :span="19" style="border-right:1px solid #aaa">
        <div class="course_title">
          {{courseInfo.title}}
        </div>

        <el-card class="card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="实验列表" name="first">
              <div class="course_item clearfix">
                <i class="el-icon-circle-check-outline clearfix" style="float:left;color:#67c23a"></i>
                <div class="course_name">
                  <el-button style="float:right" type="primary" plain disabled>已经完成</el-button>
                  <div class="course_name_title">
                    第1节 SQL注入原理-手工注入access数据库
                  </div>
                </div>
              </div>
              <div class="course_item clearfix">
                <i class="el-icon-circle-check-outline clearfix" style="float:left"></i>
                <div class="course_name">
                  <el-button style="float:right" type="primary" @click="toLab">开始实验</el-button>
                  <div class="course_name_title">
                    第2节 SQL注入原理-手工联合查询注入技术
                  </div>
                </div>
              </div>
              <div class="course_item clearfix">
                <i class="el-icon-circle-check-outline clearfix" style="float:left"></i>
                <div class="course_name">
                  <el-button style="float:right" type="primary" @click="toLab">开始实验</el-button>
                  <div class="course_name_title">
                    第2节 SQL注入原理-手工联合查询注入技术
                  </div>
                </div>
              </div>
              <div class="course_item clearfix">
                <i class="el-icon-circle-check-outline clearfix" style="float:left"></i>
                <div class="course_name">
                  <el-button style="float:right" type="primary" @click="toLab">开始实验</el-button>
                  <div class="course_name_title">
                    第2节 SQL注入原理-手工联合查询注入技术
                  </div>
                </div>
              </div>
              <div class="course_item clearfix">
                <i class="el-icon-circle-check-outline clearfix" style="float:left"></i>
                <div class="course_name">
                  <el-button style="float:right" type="primary" @click="toLab">开始实验</el-button>
                  <div class="course_name_title">
                    第2节 SQL注入原理-手工联合查询注入技术
                  </div>
                </div>
              </div>
              <div class="course_item clearfix">
                <i class="el-icon-circle-check-outline clearfix" style="float:left"></i>
                <div class="course_name">
                  <el-button style="float:right" type="primary" @click="toLab">开始实验</el-button>
                  <div class="course_name_title">
                    第2节 SQL注入原理-手工联合查询注入技术
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="实验问答" name="second">Config</el-tab-pane>
            <el-tab-pane label="实验笔记" name="third">Role</el-tab-pane>
            <el-tab-pane label="实验评论" name="fourth">Task</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="5">
        <div class="course_tutor">
          <div class="course_tutor_head_protrait">
            <div class="course_tutor_head_protrait_title">
              <i class="el-icon-service" style="margin-right:5px;display:inline-block;color:#32a2e3"></i>授课教师
              <hr>
              <div class="course_tutor_main" style="text-align:center;margin-top:30px">
                <img src="http://www.shiyanbar.com/UploadImage/2016/2/22/20160222140452_36546.png" alt="" height="150" width="150" style="border-radius:50%">
                <div class="course_tutor_name" style="margin-top:10px">
                  灰原
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  methods: {
    toLab() {
      this.$router.push(`/lab/${this.key}`)
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {

  },
  data() {
    return {
      key: this.$route.params.id,
      courseInfo: {
        title: '计算机网络安全',
        img: 'http://www.shiyanbar.com/UploadImage/2017/7/31/157440978520619001.jpg',
        content: '《计算机网络安全》是信息安全、计算机网络等专业的一门必修课，通过学习网络安全基础、网络协议与分析、密码技术、防火墙、计算机病毒与木马、网络攻击与防范，掌握网络安全的一些重要概念、常用安全技术及方法，培养和训练学生的实际操作运用能力，使学生对计算机网络安全技术有一个全面的了解，逐步培养学生的辨证思维和分析解决问题的能力。',
        num: 6890,

      },
      activeName: 'first',
      active: 2,

    }
  }
}
</script>

<style lang="css">
.course_item .el-icon-circle-check-outline{
   line-height: 50px;
   font-size: 1.8em;
   margin-right: 5px;
   width: 3%
}
.course_item{
  height: 50px;
  margin-bottom: 10px
}
.course_name{
  background: #f2f2f2;
  height:50px;
  line-height: 40px;
  float:left;
  width: 96%;
  box-sizing: border-box;
  padding-left: 15px;
  padding-top:5px;
  padding-bottom: 5px;
  padding-right: 15px
}
.course_detail .el-step__title.is-process{
  color: #fff
}
.course_detail .card{
  width:100%;
  margin: 0 auto;
  border-top: 3px solid #0272b2;
  margin-top: 20px;
  padding:10px 20px 0;
  box-sizing: border-box;
}
.course_detail{
  width: 1180px;
  margin:0 auto;
  padding-top: 20px
}
.course_detail .el-card__body{
  padding: 0;

}
.course_detail .box-card{
  width:100%;
  background: #0272b2;

}
.course_detail .course_img{
  float: left;
  height: 230px
}
.course_detail .course_img img{
  display: block;
  height: 100%
}
.course_detail .course_description{
  float: right;
  width: 700px;
  padding-right: 15px;
  padding-top: 15px;
  color: #fff;
  font-family: 'microsoft yahei'
}
.course_detail .course_description .content{
  text-indent: 2em
}
.course_detail .course_description .num_of_learnt{
  text-align: right;
  font-size: 2em;
  padding-right: 15px
}
.course_detail .el-row{
  margin-bottom: 25px;
}
.course_detail .el-col{
  min-height: 500px;
  padding-right: 25px
}
.course_detail .course_title{
  font-size: 1.5em
}
.course_detail .el-col-5{
  padding-left: 10px;
  padding-right: 10px
}
.course_detail .course_tutor_head_protrait_title{
  font-size: 1.5em;

}
</style>
