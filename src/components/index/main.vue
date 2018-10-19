<template>
    <div class="main">
        <div class="block">
        <el-carousel trigger="click" height="360px">
            <el-carousel-item v-for="item in img" :key="item"  style="text-align:center">
            <img :src=item alt="" style="height:100%;display:block;position:absolute;left:50%;transform:translateX(-50%)">
            </el-carousel-item>
        </el-carousel>
        </div>
        <Course></Course>
        <Footer></Footer>
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
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bgbp {
  -webkit-background-size: 100%;
  /* background-size: 100%; */
}
</style>

