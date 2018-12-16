<template>
<div class="std-info" style="width:100%;margin-left:50px" v-loading="isLoading" element-loading-text="拼命加载中">
  <el-row>
    <el-col :span="4">
      <div class="head">
        <img :src="stdinfo.studentinfo.img" alt="" style="width:100%;margin-top:3rem;margin-left:1rem">
      </div>
    </el-col>
    <el-col :span="19" offset=1 style="padding-top:3rem;">
      <div class="id">姓名：{{stdinfo.studentinfo.realname}}</div>
      <div class="id">学号：{{stdinfo.studentinfo.number}}</div>
      <div class="id">班级：{{stdinfo.studentinfo.classname}}</div>
      <div class="id">学校：{{stdinfo.studentinfo.college}}</div>
      <div class="id">地址：{{stdinfo.studentinfo.location}}</div>
      <div class="id">个性签名：{{stdinfo.studentinfo.tdescribe}}</div>
    </el-col>
  </el-row>

  <hr>
  <el-row>
    <h2 class="mt">我的课程</h2>
    <div class="student_course" style="margin-top:25px">
      <el-row style="min-height:400px">
        <el-col :span="5" v-for="(item, index) in course" :key="item.title" :offset="index % 4 > 0 ? 1 : 0" style="margin-bottom:20px">
          <el-card :body-style="{ padding: '0px' }" style="">
            <img :src="item.img" class="image course_to_detail coures-cover" @click="toCourseDetail(item.courseId)" >
            <div style="padding: 14px;" @click="toCourseDetail(item.courseId)" class="course_to_detail">
              <span>{{item.courseName}}</span>
              <div class="bottom clearfix">
                <p class="time">已经学习到第{{item.state}}章</p>
                <p class="time">授课教师： {{item.teacherName}}</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="block" style="text-align:center;">
        <el-pagination layout="prev, pager, next" :total="paginationTotal" :current-page="currentPage" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
  </el-row>

</div>
</template>
<script>
import {
  getStudentInfo,
  getStudentJoinedCourse
} from '@/api/myAPI'

export default {
  async created() {
    this.user = JSON.parse( localStorage.getItem( 'user' ) )
    const res = await getStudentInfo()
    if ( res.meta.message === "ok" ) {
      const data = res.data
      this.stdinfo = data
    }
    console.log( res )
    const res2 = await getStudentJoinedCourse(1)
    console.log(res2)
    this.course = res2.data.pageResult.listData
    console.log(this.course)
    this.totalCourse = res2.data.pageResult.totalPage * 10
    this.isLoading = false
  },
  methods: {
    async handleCurrentChange( val ) {
      this.isLoading = true
      const res2 = await getStudentJoinedCourse(val)
      this.course = res2.data.pageResult.listData
      this.isLoading = false
    },
    toCourseDetail( key ) {
      console.log( key )
      this.$router.replace( '/detail/' + key )
    }
  },
  computed: {
    paginationTotal() {
      return this.totalCourse
    },
  },
  data() {
    return {
      isLoading: true,
      currentPage: 1,
      curCourse: [],
      stdinfo: {},
      course: [],
      totalCourse: 0
    }
  }
}
</script>

<style lang="less">
.std-info {
    hr {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media (min-width: 1600px) {
      .coures-cover{
        height: 12rem
      }
    }
    @media (max-width: 1600px) {
      .coures-cover{
        height: 8rem
      }
    }
    
}
.std-info .box-card {
    margin-bottom: 3px;
}

.std-info .report_title {
    color: #000;
}

.std-info .report_title span {
    display: inline-block;
    font-size: 0.9em;
    color: #aaa;
    float: right;
}
.std-info .mt{
  font-weight: 400
}
.std-info .text {
    font-size: 14px;
}

.std-info .item {
    margin-bottom: 18px;
}

.std-info .clearfix:after,
.std-info .clearfix:before {
    display: table;
    content: "";
}

.std-info .clearfix:after {
    clear: both;
}

.std-info .box-card {
    width: 100%;
}

.std-info .course_sub_title,
.std-info .course_title {
    float: left;
}

.std-info .course_sub_title {
    margin-left: 5px;
    color: #aaa;
}

.std-info .course_date {
    float: right;
}

.std-info .id {
    font-size: 'microsoft yahei';
    font-size: 1.2rem;
    margin-top: .3rem;
}

.std-info {
    padding-left: 15px;
    padding-right: 15px;
}
.student_course {
    position: relative;
    width: 100%;
    .course_to_detail {
        cursor: pointer;
    }

    .time {
        font-size: 13px;
        color: #999;
        line-height: 1.5em
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:after,
    .clearfix:before {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }
}
</style>
