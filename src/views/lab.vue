<template lang="html">
  <div class="lab_container" v-if="refresh">
    <!-- :style="{height:`${innerHeight}px`}" -->
    <header>
        <el-button type="info" class="el-icon-arrow-left" style="padding:7px" @click="retrunCourse">返回课程</el-button>
        <!-- <el-button type="success" class="el-icon-caret-right
" style="padding:7px" v-if="!isStart" @click="toggleLab">开始实验</el-button> -->
        <!-- <el-button type="danger" class="el-icon-circle-close-outline
" style="padding:7px" v-if="isStart" @click="toggleLab">终止</el-button> -->
<el-button type="success" style="padding:7px" @click="handle('START')" v-if="!isStarted">开始实验</el-button>
      <el-button type="danger" style="padding:7px" @click="handle('STOP')" v-else>结束实验</el-button>
        <!-- <div class="lab_left_time">
          剩余时间<span>{{hour}}</span>时<span>{{minute}}</span>分<span>{{second}}</span>秒
        </div> -->
    </header>
    <el-row class="lab_body" >
      <div style="background: rgba(0,0,0,.7);height:100%;width:100%;position:absolute;" class="lab_body_mask">
        
        <el-col class="lab_main_container" style="display:flex; justify-content: center;align-items: center"
        v-loading="isLoading"
        element-loading-text="部署中，可能需要半分钟到一分钟左右">
          <!-- <div style="width: 80%;border: 15px solid #aaa;border-radius: 15px;height: 65%">
            <Console  />
          </div> -->
          <el-card :body-style="{ padding: '20px' }" style="width: 600px" v-if="isStarted">
          <div slot="header">
            <span>
              <span class="el-icon-success"></span> 实验环境已经开启
            </span>
          </div>
          <div>
            <div>IP: {{BASE_URL}}</div>
            <div>port: {{port}}</div>
            <div>相对路径: {{tempDetail.relateUrl}}</div>
            <div>用户名: {{username}}</div>
            <div>密码: {{password}}</div>
            <div>
              <span style="font-size: .9em">
                <b>特别说明：</b>
                <br>请学生通过自己喜欢的ssh连接工具连接
              </span>
            </div>
          </div>
        </el-card>
        </el-col>
        <el-col class="lab_info">
          <div :body-style="{ padding: '20px' }" style="height: 100%">
            
            <el-tabs v-model="tabname"
              type="card"
              style="height: 80%">
              <el-tab-pane
                label="实验要求"
                name="实验要求" :style="{overflow:'scroll',whiteSpace: 'pre-line', padding: '10px', height: autoHeight}">  
                {{instruction}}
              </el-tab-pane>
              <el-tab-pane
                label="实验报告"
                name="实验报告">
                <el-row>
                  <froala :tag="'textarea'" :config="config" v-model="model"></froala>
                </el-row>
                <el-row style="margin-top: 20px">
                  <el-col :span="24" style="text-align: center">
                    <el-button type="success" @click="submitReport">发 布</el-button>
                     <el-button type="danger" >保 存</el-button>
                  </el-col >
                </el-row>
                
              </el-tab-pane>
              <el-tab-pane
                label="实验章节"
                name="实验章节">
                <section style="flex: 1" class="charpter">
                  <el-card :body-style="{ padding: '20px' }" style="height: 100%;border-radius: 0;">
                    <div slot="header">
                      <span>章节列表</span>
                    </div>
                    <!-- card body -->
                    <section
                      v-for="item in charpterList"
                      :key="item.id"
                      @click="toggleCharpter(item.id)"
                      :class="item.id!=tempId?'charpter-item':'charpter-item-current'"
                    >
                      <span :class="item.id!=tempId?'el-icon-minus':'el-icon-plus'"></span>
                      <span>{{item.cname}}</span>
                    </section>
                  </el-card>
                </section>
              </el-tab-pane>
            </el-tabs>
            
            
          </div>
        </el-col>
      <!-- <el-col :span="16">
        <Console/>
      </el-col> -->
      <!-- <el-col :span="24" class="lab_info" style="position:relative;">
        <el-row style="margin-left:30px;margin-right:30px">
          <el-col :span="16">
          <froala :tag="'textarea'" :config="config" v-model="model"></froala>
        </el-col>
        <el-col :span="8">
          <div style="text-align:center;color:#333;font-size: 32px;margin-top:15%">
            相关操作
          </div>
          <el-row style="margin-top:30px;text-align:center">
              <el-button  style="background:#22272f;width:80%;" type="success" @click="submitReport">提交</el-button>
          </el-row>
        </el-col>
        </el-row>
      </el-col> -->
      </div>

    </el-row>
  </div>
</template>

<script>
import VueFroala from "vue-froala-wysiwyg";
import Console from "@/components/Console.vue";
import {
  getTarTemp,
  submitMyReport,
  getCourseDetail,
  getCourseTempList,
  startLab,
  stopLab,
  checkAnswer
} from "@/api/myAPI";
export default {
  async created() {
    this.innerHeight = window.innerHeight;

    // 获取课程id和模版id
    const KEY = this.$route.params.key.split("|");
    this.courseId = KEY[0];
    this.tempId = KEY[1];

    const res2 = await getTarTemp(this.tempId);
    this.instruction = res2.courseTemplete.cdescribe;

    // 获取模版详情
    let res = await getCourseTempList(this.tempId);
    console.log(res);
    this.tempDetail = res.courseTemplete;
    const courseRes = await getCourseDetail(this.courseId);
    this.charpterList = courseRes.courseinfo.courseTempletes;
    this.refresh = true;
  },
  components: {
    Console
  },
  mounted() {
    // const content = document.querySelector( '.el-tabs__content' )
    // content.height = this.innerHeight - 80 + 'px'
    var cutDown = window.setInterval(() => {
      this.leftTime -= 1000;
      if (this.leftTime <= 0) {
        window.clearInterval(cutDown);
      }
    }, 1000);
  },
  data() {
    var inn = window.innerHeight * 0.5;
    return {
      charpterList: [],
      tabname: "实验要求",
      courseId: "",
      instruction: "",
      tempId: "",
      isStart: false,
      unikey: this.$route.params.key,
      showInfo: true,
      innerHeight: 0,
      activeName: "instruct",
      leftTime: 3600000,
      config: {
        // imageUploadURL: 'http://upload.qiniu.com/',
        // fileUploadURL: 'http://upload.qiniu.com/',
        // videoUploadURL: 'http://upload.qiniu.com/',
        height: inn,
        language: "zh_cn",
        toolbarButtons: [
          "fullscreen",
          "bold",
          "italic",
          "underline",
          "fontFamily",
          "fontSize",
          "color",
          "inlineStyle",
          "|",
          "align",
          "-",
          "insertLink",
          "insertImage",
          "|",
          "selectAll",
          "clearFormatting",
          "|",
          "html",
          "|",
          "undo",
          "redo",
          "myButton",
          "toolsButton",
          "insertAudio",
          "wirisEditor",
          "wirisChemistry"
        ],
        events: {
          "froalaEditor.initialized": function() {
            console.log("initialized");
          }
        }
      },
      model: "",
      refresh: true,
      tempDetail: {},
      BASE_URL: "http://111.231.138.158",
      port: "32855",
      labInfo: {},
      isStarted: false,
      isLoading: false,
      username: "",
      password: ""
    };
  },
  methods: {
    toggleLab() {
      this.isStart = !this.isStart;
    },
    async submitReport() {
      const payload = {
        content: this.model,
        courseId: Number(this.courseId), //当前操作课程ID
        courseTemplete: {
          id: Number(this.tempId) //当前模板的ID
        }
      };
      const res = await submitMyReport(payload);
      this.$message({
        message: "提交成功",
        type: "success"
      });
      this.model = "";
    },
    retrunCourse() {
      this.$router.push(`/detail/${this.courseId}`);
    },
    closeInfo() {
      const tips = document.getElementById("tips");
      console.log(tips);

      this.showInfo = false;
    },
    openInfo() {
      const tips = document.getElementById("tips");
      console.log(tips);
      this.showInfo = true;
    },
    async toggleCharpter(id) {
      let tempRes = await getCourseTempList(id);

      console.log(tempRes);
      let courseTemplate = tempRes.courseTemplete;
      let type = "";
      console.log(courseTemplate.type);
      if (courseTemplate.type === 0) {
        type = "lab";
      } else if (courseTemplate.type === 1) {
        type = "webview";
      } else {
        type = "questions";
      }
      if (id === this.tempId) {
        return;
      } else {
        this.$router.push(`/${type}/${this.courseId}|${id}`);
        const KEY = this.$route.params.key.split("|");
        this.courseId = KEY[0];
        this.tempId = KEY[1];

        // 获取模版详情
        let res = await getCourseTempList(this.tempId);
        console.log(res);
        this.tempDetail = res.courseTemplete;
        const courseRes = await getCourseDetail(this.courseId);
        this.charpterList = courseRes.courseinfo.courseTempletes;
      }
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
          this.username = res[0].username;
          this.password = res[0].password;
          this.BASE_URL = res[0].hostIP;
          console.log(res[0].containerPort);
          if (res[0]["containerPort"]["8080/tcp"]) {
            this.port = res[0]["containerPort"]["8080/tcp"][0].HostPort;
          } else if (res[0]["containerPort"]["80/tcp"]) {
            this.port = res[0]["containerPort"]["80/tcp"][0].HostPort;
          } else if (res[0]["containerPort"]["8000/tcp"]) {
            this.port = res[0]["containerPort"]["22/tcp"][0].HostPort;
          } else if (res[0]["containerPort"]["22/tcp"]) {
            this.port = res[0]["containerPort"]["22/tcp"][0].HostPort;
          } else {
            this.$message({
              message: "实验开启失败",
              type: "error"
            });
          }

          this.labInfo = res;

          this.isLoading = false;
          this.isStarted = true;
        }
      } else if (method === "STOP") {
        let res = await stopLab(this.courseId, this.tempId);
        this.labInfo = {};
        this.isStarted = false;
      }
    }
  },
  computed: {
    autoHeight() {
      const innerHeight = window.innerHeight;
      const tabHeight = (innerHeight - 81) * 0.95;
      return tabHeight + "px";
    }
  },
  watch: {
    async $route(to, from) {
      if (to.params !== from.params) {
        this.refresh = false;
        this.innerHeight = window.innerHeight;

        // 获取课程id和模版id
        const KEY = this.$route.params.key.split("|");
        this.courseId = KEY[0];
        this.tempId = KEY[1];

        const res2 = await getTarTemp(this.tempId);
        this.instruction = res2.courseTemplete.cdescribe;

        // 获取模版详情
        let res = await getCourseTempList(this.tempId);
        console.log(res);
        this.tempDetail = res.courseTemplete;
        const courseRes = await getCourseDetail(this.courseId);
        this.charpterList = courseRes.courseinfo.courseTempletes;
        this.refresh = true;
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

.lab_container {
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
    .el-tabs.el-tabs--card.el-tabs--top {
      height: 100%;
    }
    .el-tabs__content {
      height: 93%;
      .el-tab-pane {
        height: 100%;
      }
    }
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
    flex: 1;
    width: 100%;
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    background: url("/static/lab_bg.jpg") no-repeat;
    background-size: cover;
    .lab_body_mask {
      display: flex;
      flex-direction: row;
      .lab_main_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 7;
      }
      .lab_info {
        flex: 4;
        color: #333;
      }
    }
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
.charpter {
  .charpter-item {
    line-height: 2em;
  }
  .charpter-item:hover {
    width: 100%;
    cursor: pointer;
    background: #333;
    color: #fff;
  }
  .charpter-item-current {
    line-height: 2em;
    width: 100%;
    cursor: pointer;
    background: #333;
    color: #fff;
  }
}
</style>
