<template>
<div class="std-info" style="width:100%;margin-left:50px">
  <el-row>
    <el-col :span="4">
      <div class="head">
        <img src="http://img0.imgtn.bdimg.com/it/u=1285245409,4077430671&fm=11&gp=0.jpg" alt="" style="width:100%">
      </div>
    </el-col>
    <el-col :span="19" offset="1" style="padding-top:20px">
      <div class="id">账号：{{user.id}}</div>
      <div class="id">姓名：{{stdinfo.name}}</div>
      <div class="id">学号：{{stdinfo.stdId}}</div>
      <div class="id">班级：{{stdinfo.class}}</div>
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
export default {
  created() {
    this.user = JSON.parse( localStorage.getItem( 'user' ) )
    this.curCourse = this.course.slice( ( 1 - 1 ) * 8, ( 1 - 1 ) * 8 + 8 )
  },
  methods: {
    handleCurrentChangeLab( val ) {
      // console.log(`当前页: ${val}`);
      this.curLab = this.lab.slice( ( val - 1 ) * 5, ( val - 1 ) * 5 + 5 )
    },
    handleCurrentChangeReport( val ) {
      this.curReport = this.report.slice( ( val - 1 ) * 5, ( val - 1 ) * 5 + 5 )
    },
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
    paginationTotalLab() {
      return Math.ceil( this.lab.length / 5 ) * 10
    },
    paginationTotalReport() {
      return Math.ceil( this.report.length / 5 ) * 10
    },
    paginationTotal() {
      return Math.ceil( this.course.length / 8 ) * 10
    },
  },
  data() {
    return {
      currentPageLab: 1,
      currentPageReport: 1,
      currentPage: 1,
      curCourse: [],
      user: {},
      stdinfo: {
        name: '谢贝贝',
        stdId: '201731960119',
        class: '计算机171'
      },
      curLab: [],
      curReport: [],
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
    padding-top: 30px;
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
