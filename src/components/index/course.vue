<template>
<div class="index_course" style="">
  <span class="abs_more_course" @click='toMoreCourse'>More</span>
  <div class="mask">
    <div class="title">
      热门课程<span style="color:red;font-size:12px;transform:translateY(-80%);display:inline-block">hot</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in course" :key="item.title">
        
        <el-card class="box-card">
          <img :src="item.src" alt="" style="width:100%" class="hov_img" @click="toDetail(index)">
          <div class="course_title clearfix mgtb" @click="toDetail(index)">
            <div class="fl clearfix">{{item.title}}</div>
            <div class="fr clearfix">{{item.rate}}</div>
          </div>
          <hr style="color:#111">
          <div class="tutor mgtb">
            <div class="fl clearfix">讲师：{{item.tutor}}</div>
            <div class="fr clearfix">更新至第{{item.progress}}节</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <button></button>
  </div>

</div>
</template>
<script>
export default {
  name: "course",
  methods: {
    toDetail( index ) {
      this.$router.push( `/detail/${index}` )
    },
    toMoreCourse() {
      this.$router.push({name: 'MoreCourse'})
    }

  },

  data() {
    return {
      course: [ {
          src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
          title: "Excel统计分析",
          rate: "初级",
          tutor: "西普专家",
          progress: 5
        },
        {
          src: "https://img.shiyanbar.net/UploadImage/2018/9/20/161211229369056601.jpg",
          title: "CMS提权",
          rate: "初级",
          tutor: "孙老师",
          progress: 5
        },
        {
          src: "http://www.shiyanbar.com/UploadImage/2017/6/30/157160219643995701.jpg",
          title: "web渗透实训",
          rate: "初级",
          tutor: "西普专家",
          progress: 5
        },
        {
          src: "https://img.shiyanbar.net/UploadImage/2017/7/31/157440978520619001.jpg",
          title: "kafka环境搭建",
          rate: "初级",
          tutor: "西普专家",
          progress: 5
        }
      ]
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
        cursor:pointer;
        font-size: 21px
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
