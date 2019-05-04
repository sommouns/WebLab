<template>
  <div class="lab-container">
    <header>
      <el-button
        type="info"
        class="el-icon-arrow-left"
        style="padding:7px"
        @click="retrunCourse"
      >返回课程</el-button>
      <el-button
        type="success"
        style="padding:7px"
        @click="handle('START')"
        v-if="!isStarted"
      >开始实验</el-button>
      <el-button
        type="danger"
        style="padding:7px"
        @click="handle('STOP')"
        v-else
      >结束实验</el-button>
    </header>
    <section>
      <iframe :src="url" frameborder="0" style="width: 100%"></iframe>
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
      isStarted: false
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
            message: "已经开始了实验，请点击结束实验，并重新开启",
            type: "error",
            showClose: true
          });
        } else {
          // 一般情况
          console.log(1);
          this.BASE_URL = res.hostIP;
          console.log(res["containerPort"]["8080/tcp"][0]);
          this.port = res["containerPort"]["8080/tcp"][0].HostPort;
          this.labInfo = res;
          let href =
            "http://" +
            this.BASE_URL +
            ":" +
            this.port +
            this.tempDetail.relateUrl;
          window.open(href, "_blank", "width=1300, height=900");
        }

        this.isStarted = true;
      } else if (method === "STOP") {
        let res = await stopLab(this.courseId, this.tempId);
        this.labInfo = {};
        this.isStarted = false;
      }
    }
  },
  computed: {
    url() {
      return (
        "http://" + this.BASE_URL + ":" + this.port + this.tempDetail.relateUrl
      );
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




