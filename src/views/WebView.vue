<template>
  <div class="lab-container" v-loading="isLoading" element-loading-text="部署中，可能需要半分钟到一分钟左右">
    <header>
      <el-button
        type="info"
        class="el-icon-arrow-left"
        style="padding:7px"
        @click="retrunCourse"
      >返回课程</el-button>
      <el-button type="success" style="padding:7px" @click="handle('START')" v-if="!isStarted">开始实验</el-button>
      <el-button type="danger" style="padding:7px" @click="handle('STOP')" v-else>结束实验</el-button>
    </header>
    <section style="height:100%;display: flex; justify-content: center; align-items: center">
      <el-card :body-style="{ padding: '20px' }" style="width: 600px" v-if="isStarted">
        <div slot="header">
          <span><span class="el-icon-success"></span> 实验环境已经开启</span>
        </div>
        <div>
          <div>IP: {{this.BASE_URL}}</div>
          <div>port: {{this.port}}</div>
          <div>
            <span style="font-size: .9em">
              <b>特别说明：</b>
              <br>推荐使用谷歌V8引擎以上的浏览器（Chrome、360极速浏览器高速模式等）
              <br>如没有自动打开页面，请手动在地址栏输入IP+port 例如（3.3.3.3:8080）
              <br>或者浏览器设置中打开拦截的页面
            </span>
          </div>
        </div>
        <!-- card body -->
      </el-card>
      
    </section>
  </div>
</template>

<script>
import { getCourseTempList, startLab, stopLab } from "@/api/myAPI";
export default {
  name: "webview",
  async created() {
    // 获取课程id和模版id
    const KEY = this.$route.params.key.split("|");
    this.courseId = KEY[0];
    this.tempId = KEY[1];

    // 获取模版详情
    let res = await getCourseTempList(this.tempId);
    console.log(res);
    this.tempDetail = res.courseTemplete;
  },
  data() {
    return {
      courseId: "",
      tempId: "",
      tempDetail: {},
      BASE_URL: "http://111.231.138.158",
      port: "32855",
      labInfo: {},
      isStarted: false,
      isLoading: false,

      url: ""
    };
  },
  methods: {
    retrunCourse() {
      this.$router.push(`/detail/${this.courseId}`);
    },
    async handle(method) {
      if (method === "START") {
        let res = await startLab(this.courseId, this.tempId);
        console.log(res);
        // 已经开始实验
        if (!res && typeof res != "undefined" && res != 0) {
          this.$message({
            message: "已经开始了实验",
            type: "error",
            showClose: true
          });
        this.isStarted = true;

        } else {
          // 一般情况
          console.log(1);
          this.isLoading = true;

          this.BASE_URL = res[0].hostIP;
          console.log(res[0].containerPort);
          if (res[0]["containerPort"]["8080/tcp"]) {
            this.port = res[0]["containerPort"]["8080/tcp"][0].HostPort;
          } else if (res[0]["containerPort"]["80/tcp"]) {
            this.port = res[0]["containerPort"]["80/tcp"][0].HostPort;
          }
          
          this.labInfo = res;
          let href =
            "http://" +
            this.BASE_URL +
            ":" +
            this.port +
            this.tempDetail.relateUrl;
          setTimeout(() => {
            this.isLoading = false;
            window.open(href, "_blank", "width=1300, height=900");
            this.isStarted = true
          }, 40000);
        }

      } else if (method === "STOP") {
        let res = await stopLab(this.courseId, this.tempId);
        this.labInfo = {};
        this.isStarted = false;
      }
    }
  }
};
</script>

<style lang="less">
body,
html {
  height: 100%;
  width: 100%;
}

.lab-container {
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  height: 100%;
  width: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  .lab_info {
    background: #fff;
    color: #aaa;
  }
  .el-tabs__header {
    margin-bottom: 0;
  }
  .pd_pane {
    box-sizing: border-box;
    padding: 20px 25px;
    color: #333;
  }
  header {
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 25px;
    box-sizing: border-box;
    .el-icon-circle-close-outline:before {
      margin-right: 5px;
    }
    .lab_left_time {
      float: right;
      color: #fff;
      line-height: 30px;
      vertical-align: bottom;
      span {
        font-size: 1.5em;
        color: #ffffcc;
      }
    }
  }
  .lab_body {
    // flex: 1;
    width: 100%;
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    background: url("/static/lab_bg.jpg") no-repeat;
    background-size: cover;
    .el-col-16 {
      height: 100%;
      background: #eee;
    }
  }
  .abs_tips {
    position: absolute;
    top: 5%;
    right: 3%;
    transition: 1.5s all ease;
    .box-card {
      width: 380px;
      position: relative;

      .el-tab-pane {
        max-height: 20rem;
        // overflow: scroll;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .abs_open_info {
        position: absolute;
        font-size: 18px;
        right: 0;
        top: 0;
        border: 1px solid #aaa;
      }
    }
    .show_info:hover {
      transform: translateY(2px) scale(1.2);
    }
  }
  .el-tabs__nav {
    width: 100%;
    .el-tabs__item {
      width: 33.3%;
      text-align: center;
    }
  }
}
</style>




