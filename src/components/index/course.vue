<template>
<div class="index_course" style="">
  <div class="title">
    热门课程<span style="color:red;font-size:12px;transform:translateY(-80%);display:inline-block">hot</span>
  </div>
  <el-row :gutter="20">
    <el-col :span="6" v-for="(item,index) in course" :key="item.title">
      <el-card class="box-card">
        <img :src="item.src" alt="" @mouseover="mixin" style="width:100%" class="hov_img" @click="toDetail(index)">
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
</template>
<script>
export default {
  name: "course",
  methods: {
    mixins( e ) {
      console.log( e.target.getElementsByTagName( "img" )[ 0 ] );
    },
    rescure( e ) {
      console.log( e.target );
    },
    toDetail( index ) {
      if ( this.$store.state.user.type ) {
        console.log( this.$store.state.user )
        this.$router.push( `/detail/${index}` )
      } else {
        this.$router.push( `/login` )
      }
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

<style>
.hov_img:hover,
.course_title:hover {
  cursor: pointer;
}

.index_course {
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  background: rgba(255, 255, 255, .3);
  border: 3px solid rgba(255, 255, 255, .7);
  border-radius: 25px;
  margin-bottom: 20px
}



.index_course .title {
  border-left: 4px solid #72c2c3;
  padding-left: 1%;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix:before,
.clearfix:after {
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
