<template>
  <div class="lab-container" v-if="refresh">
    <header>
      <el-button
        type="info"
        class="el-icon-arrow-left"
        style="padding:7px"
        @click="retrunCourse"
      >返回课程</el-button>
    </header>
    <section style="height:100%;display: flex;flex-direction: row">
      <section style="flex: 2" class="questions">
        <el-form
          :model="form"
          ref="form"
          label-width="80px"
          :rules="ruleForm"
          class="question-form animated fadeIn"
        >
          <el-form-item label="题目">
            <section class="question-title">{{tempDetail.cname}}</section>
          </el-form-item>
          <el-form-item label="描述">
            <section class="question-describe">{{tempDetail.cdescribe}}</section>
          </el-form-item>
          <el-form-item label="CTF链接" v-if="tempDetail.type === 2">
            <section class="question-describe">
              <a :href="ctfHref" target="_blank">{{ctfHref}}</a>
            </section>
          </el-form-item>
          <el-form-item label="答案" prop="answer">
            <el-input v-model="form.answer"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提 交</el-button>
          </el-form-item>
        </el-form>

        <el-form
          :model="form"
          label-width="80px"
          class="question-form animated fadeIn"
          v-if="isJudge"
        >
          <el-form-item label="校验结果">
            <section
              class="question-title"
              :style="{color: result==='答案错误'? 'red' : 'green'}"
            >{{result}}</section>
          </el-form-item>
        </el-form>
      </section>
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
    </section>
  </div>
</template>

<script>
import {
  getCourseDetail,
  getCourseTempList,
  startLab,
  stopLab,
  checkAnswer
} from "@/api/myAPI";
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
    const courseRes = await getCourseDetail(this.courseId);
    this.charpterList = courseRes.courseinfo.courseTempletes;
    this.refresh = true;
  },
  data() {
    return {
      courseId: "",
      tempId: "",
      tempDetail: {},
      labInfo: {},
      form: {},
      isJudge: false,
      result: {},
      ruleForm: {
        answer: [{ required: true, message: "答案不能为空", trigger: "blur" }]
      },
      charpterList: [],
      href: window.location.origin,
      refresh: false
    };
  },
  methods: {
    retrunCourse() {
      this.$router.push(`/detail/${this.courseId}`);
    },
    onSubmit() {
      this.$refs.form.validate(async v => {
        console.log(v);
        if (!v) {
          return;
        }
        try {
          const res = await checkAnswer(
            this.courseId,
            this.tempId,
            this.form.answer
          );
          this.result = "答案正确";
          this.isJudge = true;
        } catch (err) {
          // 答案错误
          console.log(err);
          this.result = "答案错误";
          this.isJudge = true;
        }
      });
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

        this.refresh = false;
        this.$nextTick(() => {
          this.refresh = true;
        });
      }
    }
  },
  computed: {
    ctfHref() {
      if (this.tempDetail.type === 2) {
        return this.href + this.tempDetail.relateUrl;
      }
    }
  },
  watch: {
    async $route(to, from) {
      if (to.params !== from.params) {
        const KEY = this.$route.params.key.split("|");
        this.courseId = KEY[0];
        this.tempId = KEY[1];

        // 获取模版详情
        let res = await getCourseTempList(this.tempId);
        console.log(res);
        this.tempDetail = res.courseTemplete;
        const courseRes = await getCourseDetail(this.courseId);
        this.charpterList = courseRes.courseinfo.courseTempletes;
        this.form = {};
        this.isJudge = false;
        this.result = "";
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
    color: #333;
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
  .questions {
    .question-form {
      background: #fff;
      border: 3px solid #444;
      border-radius: 25px;
      padding: 20px;
      width: 80%;
      margin: 20px auto;
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
}
</style>




