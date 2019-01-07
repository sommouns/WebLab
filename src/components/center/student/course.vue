<template lang="html">
  <div class="student_course" style="margin-top:25px">
      <el-row style="min-height:300px;width:70rem;margin: 0 auto">
        <el-col :span="5"  v-for="(item, index) in course" :key="item.title" :offset="index % 4 > 0 ? 1 : 0" style="margin-bottom:20px;height:14rem">
          <el-card :body-style="{ padding: '0px' }" style="">
            <img :src="item.img" class="image course_to_detail coures-cover" @click="toCourseDetail(item.courseId)" style="height: 7.5rem;">
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
</template>

<script>
import {
  getStudentJoinedCourse
} from '@/api/myAPI'

export default {
  async created() {
    const res2 = await getStudentJoinedCourse( 1 )
    this.course = res2.data.pageResult.listData
    this.course = this.course.slice( 1 )
    this.totalCourse = res2.data.pageResult.totalPage * 10
    this.isLoading = false
  },
  methods: {
    async handleCurrentChange( val ) {
      this.isLoading = true
      const res2 = await getStudentJoinedCourse( val )
      this.course = res2.data.pageResult.listData
      this.course = this.course.slice( 1 )
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
.student_course {
    position: relative;
    width: 100%;
    .course_to_detail {
        cursor: pointer;
    }
    @media (min-width: 1600px) {
        .coures-cover {
            height: 12rem;
        }
    }
    @media (max-width: 1600px) {
        .coures-cover {
            height: 8rem;
        }
    }
    .time {
        font-size: 13px;
        color: #999;
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
