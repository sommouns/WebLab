<template>
  <div class="main">
    <div class="block">
      <el-carousel trigger="click" height="360px">
        <el-carousel-item v-for="item in img" :key="item" style="text-align:center">
          <img
            :src="item"
            alt
            style="height:100%;display:block;position:absolute;left:50%;transform:translateX(-50%)"
          >
        </el-carousel-item>
      </el-carousel>
    </div>
    <Course></Course>
    <div class="aboutus clearfix animate-box">
      <img src="@/assets/left-fix.jpg" alt class="animate" data-ani style="height: 200px;margin-top:40px">
      <div class="fl aboutus_info">
        <h1>热门赛事</h1>
        <p>
          <a href="https://www.linkedbyx.com/home" style="color: black"><span style="color:red">[HOT]</span>西湖论剑----举办方：杭州安恒信息技术股份有限公司</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Course from "@/components/index/course";
import Footer from "@/components/index/footer";
export default {
  name: "index",
  components: {
    Course,
    Footer
  },
  data() {
    return {
      img: [
        "https://img.shiyanbar.net/UploadImage/2018/8/3/160776500728471501.jpg",
        "https://img.shiyanbar.net/UploadImage/2018/6/12/160303425689630101.jpg"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  .el-carousel {
  }
  .aboutus {
    height: 250px;
    width: 1200px;
    margin: 20px auto 0;
    img {
      float: left;
      margin-right: 30px;
    }
    h1 {
      margin-top: 25px;
    }
    .fr {
      float: right;
    }
    .aboutus_info {
      width: 650px;
    }
    .fl {
      float: left;
    }
  }

  .bgbp {
    -webkit-background-size: 100%;
    /* background-size: 100%; */
  }
}
</style>
