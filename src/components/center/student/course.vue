<template lang="html">
  <div class="student_course" style="padding-top:25px;padding-left:25px;margin-left:20px">
    <el-row style="min-height:450px">
      <el-col :span="5" v-for="(item, index) in curCourse" :key="item.title" :offset="index % 4 > 0 ? 1 : 0" style="margin-bottom:20px">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.img" class="image course_to_detail" @click="toCourseDetail(index)">
          <div style="padding: 14px;" @click="toCourseDetail(index)" class="course_to_detail">
            <span >{{item.title}}</span>
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
</template>

<script>
export default {
  created() {
    this.curCourse = this.course.slice( ( 1 - 1 ) * 8, ( 1 - 1 ) * 8 + 8 )
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
      currentDate: new Date(),
      currentPage: 1,
      curCourse: [],
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
    };
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
