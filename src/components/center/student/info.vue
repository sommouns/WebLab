<template>
<div class="std-info" style="width:100%;margin-left:50px" v-loading="isLoading" element-loading-text="拼命加载中">
  <el-row>
    <el-col :span="4">
      <div class="head">
        <img :src="stdinfo.studentinfo.img" alt="" style="width:100%;margin-top:3rem;margin-left:1rem">
      </div>
    </el-col>
    <el-col :span="19" offset=1 style="padding-top:20px">
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
    <h2>其他信息</h2>
    <div class="student_course" style="margin-top:25px">
      <el-row style="min-height:400px">
        <el-col :span="5" v-for="(item, index) in curCourse" :key="item.title" :offset="index % 4 > 0 ? 1 : 0" style="margin-bottom:20px">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" class="image course_to_detail" @click="toCourseDetail(index)">
            <div style="padding: 14px;" @click="toCourseDetail(index)" class="course_to_detail">
              <span>{{item.title}}</span>
              <div class="bottom clearfix">
                <time class="time">已经学习到第8章</time>
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
  getStudentInfo
} from '@/api/myAPI'
export default {
  async created() {
    this.user = JSON.parse( localStorage.getItem( 'user' ) )
    this.curCourse = this.course.slice( ( 1 - 1 ) * 8, ( 1 - 1 ) * 8 + 8 )
    const res = await getStudentInfo()
    if ( res.meta.message === "ok" ) {
      const data = res.data
      this.stdinfo = data
    }
    console.log( res )
    setTimeout( () => {
      this.isLoading = false
    }, 500 )
  },
  methods: {
    handleCurrentChange( val ) {
      // console.log(`当前页: ${val}`);
      this.curCourse = this.course.slice( ( val - 1 ) * 8, ( val - 1 ) * 8 + 8 )
    },
    toCourseDetail( key ) {
      console.log( key )
      this.$router.replace( '/detail/' + key )
    }
  },
  computed: {
    paginationTotal() {
      return Math.ceil( this.course.length / 8 ) * 10
    },
  },
  data() {
    return {
      isLoading: true,
      currentPage: 1,
      curCourse: [],
      stdinfo: {},
      course: [ {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全11',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
        {
          title: '计算机网络安全11',
          img: 'https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg'
        },
      ]
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
    line-height: 2em;
    font-size: 'microsoft yahei';
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
