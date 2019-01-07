<template>
<div class="index_course" style="">
  <span class="abs_more_course" @click='toMoreCourse'>More</span>
  <div class="mask">
    <div class="title">
      热门课程<span style="color:red;font-size:12px;transform:translateY(-80%);display:inline-block">hot</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in course" :key="item.title">

        <el-card class="box-card">
          <img :src="item.img" alt="" style="width:100%;height: 7.2rem" class="hov_img" @click="toDetail(item.courseId)">
          <div class="course_title clearfix mgtb" @click="toDetail(item.courseId)">
            <div class="fl clearfix">{{item.courseName}}</div>
          </div>
          <hr style="color:#111">
          <div class="tutor mgtb">
            <div class="fl clearfix">讲师：{{item.teacherName}}</div>
            <div class="fr clearfix">更新至第{{item.count}}节</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <button></button>
  </div>

</div>
</template>
<script>
import {
  getHotCourses
} from '@/api/myAPI'
export default {
  name: "course",
  methods: {
    toDetail( index ) {
      this.$router.push( `/detail/${index}` )
    },
    toMoreCourse() {
      this.$router.push( {
        name: 'MoreCourse'
      } )
    }

  },
  async created() {
    const res = await getHotCourses()
    console.log( res )
    this.course = res.listData.slice( 2, 6 )
  },
  data() {
    return {
      course: []
    };
  }
};
</script>

<style lang="less">
.course_title:hover,
.hov_img:hover {
    cursor: pointer;
}

.index_course {
    box-sizing: border-box;
    width: 1180px;
    // width: 1180px;
    margin: 20px auto;
    background: rgba(255, 255, 255, .3);
    margin-bottom: 20px;
    background: #22272f;
    position: relative;
    .mask {
        padding-top: 20px;
        background: #fff;
        padding-left: 25px;
        padding-right: 25px;
        border-radius: 0 120px 0 0;
        transition: 1s all ease;
    }
    .abs_more_course {
        position: absolute;
        right: 0;
        top: 12px;
        transform: rotate(45deg);
        color: #fff;
        transition: 1s all ease;
        cursor: pointer;
        font-size: 21px;
    }
    .el-card {
        width: 15rem;
        // height: 15.5rem;
    }
}
.index_course:hover .mask {
    border-radius: 0 160px 0 0;
}
.index_course:hover .abs_more_course {
    font-weight: 700;
    text-shadow: 5px 5px 5px #888;
}

.index_course .title {
    // border-left: 4px solid #22272f;
    padding-left: 1%;
    margin-bottom: 20px;
    font-size: 1.5em;
}

.text {
    font-size: 14px;
}

.item {}

.fl {
    float: left;
}

.fr {
    float: right;
}

.clearfix:after,
.clearfix:before {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.box-card {
    display: inline-block;
    /* min-width: 440px; */
    margin-right: 15px;
    margin-block-end: 30px;
}

.mgtb {
    margin-top: 12px;
    margin-bottom: 12px;
}

.tutor {
    font-size: 14px;
    color: #aaa;
}

.el-card__body {
    padding-bottom: 28px;

}

.hov_img {
    transition: 0.5s all ease;
}

.hov_img:hover {

    transform: scale(0.95);

}
</style>
