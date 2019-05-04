<template lang="html">
  <div class="course_detail animated fadeIn"> 
    <el-card class="box-card" style="position:relative">
      <div class="course_img">
        <img :src="courseInfo.img" alt="" style="width: 25rem"> 
      </div>
      <div class="course_description">
        <div class="content">
          {{courseInfo.cdescribe}}
        </div>
        <div class="num_of_learnt" style="position:absolute;bottom:3rem;right:3rem;">
          <span style="color:#ffe400">{{courseInfo.count}}</span>人学过
        </div>
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
              <div v-for="item in courseInfo.courseTempletes" :key="item.id">
                <div class="course_item clearfix" v-if="item.isexped !== null">
                  <i class="el-icon-circle-check-outline" style="float:left;color:#67c23a"></i>
                  <div class="course_name">
                    <el-button style="float:right" type="success" plain @click="toLab(item)">已经完成</el-button>
                    <div class="course_name_title">
                      {{item.cname}}
                    </div>
                  </div>
                </div>
                <div class="course_item clearfix" v-else>  
                  <i class="el-icon-circle-check-outline" style="float:left;color:#eee"></i>
                  <div class="course_name">
                    <el-button style="float:right" type="primary" plain @click="toLab(item)">开始实验</el-button>
                    <div class="course_name_title">
                      {{item.cname}}  
                    </div>
                  </div>
                </div>
  
              </div>
            </el-tab-pane>
            <el-tab-pane label="参加学生" name="fifth" v-if="usertype">
              <CourseStudentList :stdList="stdList" :stdLength="stdList.length" />
            </el-tab-pane>
            <el-tab-pane label="实验修改" name="sixth" v-if="usertype">
              <ModifyCourse :initInfo="courseInfo" />
            </el-tab-pane>
            <el-tab-pane label="其他操作" name="seventh" v-if="usertype" style="text-align:center">
              <br />
              <el-button type="danger" @click="deadline" v-if="!this.courseInfo.state">暂停报名</el-button>
              <el-button type="danger" @click="deleteCourse">删除课程</el-button><br><br>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="course_tutor" v-if="courseInfo.teacher">
          <div slot="header" class="clearfix course_tutor_header">
            <span>授课教师</span>
          </div>
          <div class="text item">
            <img src="https://s1.ax1x.com/2018/12/10/FJVvnS.png" alt="" height="150" width="150" style="border-radius:50%;min-height: 150px;min-width: 150px;border: 1px solid #888;">
            <div class="course_tutor_name" style="margin-top:10px" v-html="courseTeacher.tname">
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getCourseDetail,
  deleteCourse,
  getTeacherInfo,
  getStdList,
  stopEnlist,
  joinCourse,
  getUserInformation_api,
  getCourseTempList
} from "@/api/myAPI";

import { userMixin } from "@/utils/mixin";

import CourseStudentList from "@/components/allcourse/studentList.vue";

import ModifyCourse from "@/components/allcourse/modifyCourse.vue";

import { getToken } from "@/utils/localStorage";
import { type } from 'os';

export default {
  mixins: [userMixin],

  components: {
    CourseStudentList,

    ModifyCourse
  },

  methods: {
    async toLab(item) {
      console.log(item)
      let {courseTemplete} = await getCourseTempList(item.id)
      console.log(courseTemplete)
      if (courseTemplete.type === 1) {
        this.$router.push(`/webview/${this.courseId}|${courseTemplete.id}`)
      } else if (courseTemplete.type === 0) {
        this.$router.push(`/lab/${this.courseId}|${courseTemplete.id}`);        
      }
    },

    next() {
      if (this.active++ > 2) this.active = 0;
    },

    handleClick(tab, event) {},

    deadline() {
      this.$confirm("是否要暂停该课程的报名", "提示", {
        confirmButtonText: "确定",

        cancelButtonText: "取消",

        type: "warning"
      })

        .then(async () => {
          const res = await stopEnlist(this.courseId);

          console.log(res);

          this.$message({
            type: "success",

            message: "暂停!"
          });

          this.courseInfo.state = !this.courseInfo.state;
        })

        .catch(() => {
          this.$message({
            type: "info",

            message: "已取消暂停"
          });
        });
    },

    deleteCourse() {
      this.$confirm("是否要删除该课程", "提示", {
        confirmButtonText: "确定",

        cancelButtonText: "取消",

        type: "warning"
      })

        .then(async () => {
          this.$message({
            type: "success",

            message: "删除成功!"
          });

          const res = await deleteCourse(this.courseId);

          this.$router.push("/");
        })

        .catch(() => {
          this.$message({
            type: "info",

            message: "已取消删除"
          });
        });
    }
  },

  async created() {
    setTimeout(async () => {
      console.log(this.isLogin);
      if (this.isLogin) {
        console.log("login_");

        this.courseId = this.$route.params.id;

        const res = await getCourseDetail(this.courseId);

        this.courseTeacher = res.courseinfo.teacher;

        this.courseInfo = res.courseinfo;

        if (this.userInfo.usertype === 1) {
          //教师验证是否是自己的课程

          const MeteacherInfo = await getTeacherInfo();

          const Mid = MeteacherInfo.data.teacherinfo.id || "";

          console.log(Mid, this.courseInfo.tchId);

          if (this.courseInfo.tchId === Mid) {
            this.usertype = 1;

            const stdList = await getStdList(this.courseId);

            this.stdList = stdList.listData;
          } else {
            this.courseInfo = res.courseinfo;
          }

          this.active = this.courseInfo.state;
        } else {
          if (this.courseInfo.isjoined) {
            this.usertype = 0;

            this.isLoading = false;

            return;
          } else if (!this.courseInfo.isjoined && !this.courseInfo.state) {
            this.$confirm("尚未报名该课程，是否报名", "提示", {
              confirmButtonText: "报名",

              cancelButtonText: "返回首页",

              type: "warning"
            })

              .then(async () => {
                const res3 = await joinCourse(this.courseId);

                console.log(res3);

                this.$router.push({
                  path: `/detail/${this.courseId}`
                });

                this.$message({
                  type: "success",

                  message: "报名成功!"
                });
              })

              .catch(() => {
                this.$router.push({
                  path: "/"
                });
              });
          }
        }
      } else {
        console.log(this.isLogin);

        this.$confirm("请先登录", "提示", {
          confirmButtonText: "前往登录",

          cancelButtonText: "返回首页",

          type: "warning"
        })

          .then(() => {
            this.$router.push("/login");
          })

          .catch(() => {
            this.$router.push("/");
          });
      }

      this.isLoading = false;
    }, 100);
  },

  mounted() {},

  data() {
    return {
      isLoading: true,

      courseInfo: {},

      activeName: "first",

      active: 2,

      usertype: 0,

      courseId: "",

      stdList: [],

      courseTeacher: null
    };
  }
};
</script>

<style lang="less">
.course_tutor {
  .el-card__header {
    background: rgb(34, 39, 47);

    color: #f2f2f2;

    font-size: 20px;

    padding: 10px 20px;
  }

  .el-card__body {
    text-align: center;

    .text {
      padding: 20px 0;
    }
  }
}

.course_item .el-icon-circle-check-outline {
  line-height: 50px;

  font-size: 1.8em;

  margin-right: 5px;

  width: 3%;
}

.course_item {
  height: 50px;

  margin-bottom: 10px;
}

.course_name {
  height: 50px;

  line-height: 40px;

  float: left;

  width: 96%;

  box-sizing: border-box;

  padding-left: 15px;

  padding-top: 5px;

  padding-bottom: 5px;

  padding-right: 15px;
}

.course_detail .el-step__title.is-process {
  color: #fff;
}

.course_detail .card {
  width: 100%;

  margin: 0 auto;

  border-top: 3px solid #22272f;

  margin-top: 20px;

  padding: 10px 20px 0;

  box-sizing: border-box;
}

.course_detail {
  width: 1180px !important;

  margin: 0 auto !important;

  background: #fff !important;

  box-sizing: border-box;

  position: static !important;
}

.course_detail .el-card__body {
  padding: 0;
}

.course_detail .box-card {
  width: 100%;

  background: #22272f;
}

.course_detail .course_img {
  float: left;

  height: 230px;
}

.course_detail .course_img img {
  display: block;

  height: 100%;
}

.course_detail .course_description {
  float: right;

  width: 700px;

  padding-right: 15px;

  padding-top: 15px;

  color: #fff;

  font-family: "microsoft yahei";
}

.course_detail .course_description .content {
  text-indent: 2em;
}

.course_detail .course_description .num_of_learnt {
  text-align: right;

  font-size: 2em;

  padding-right: 15px;
}

.course_detail .el-row {
  margin-bottom: 25px;
}

.course_detail .el-col {
  min-height: 500px;

  padding-right: 25px;
}

.course_detail .course_title {
  font-size: 1.5em;
}

.course_detail .el-col-5 {
  padding-left: 10px;

  padding-right: 10px;
}

.course_detail .course_tutor_head_protrait_title {
  font-size: 1.5em;
}
</style>
