<template>
  <div
    class="std-info animated fadeIn"
    style="width:100%;margin-left:50px"
    v-loading="isLoading"
    element-loading-text="拼命加载中"
  >
    <el-row>
      <el-col :span="4">
        <div class="head">
          <img :src="stdinfo.img"  class="head_img">
        </div>
      </el-col>
      <el-col :span="19" style="padding-top:3rem;margin-left:3rem;">
        <el-form ref="form" :model="stdinfo" label-width="90px" label-position="left">
          <el-form-item label="姓名：" style="width: 13em;">
            <el-input v-model="stdinfo.realname" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="学号：" style="width: 22em;">
            <el-input v-model="stdinfo.number" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="班级：" style="width: 22em;">
            <el-input v-model="stdinfo.classname" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="学校：" style="width: 22em;">
            <el-input v-model="stdinfo.college" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="地址：" style="width: 22em;">
            <el-input v-model="stdinfo.location" :disabled="!isShow"></el-input>
          </el-form-item>
          <el-form-item label="个性签名：" style="width:100%;">
            <el-input type="textarea" v-model="stdinfo.tdescribe" :disabled="!isShow"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="modifyInfo">修改个人信息</el-button>
      <input
        type="file"
        name="cover"
        ref="file"
        value
        id="cover"
        @change="getFile"
        style="width:0"
        v-if="isShow"
      >
      <label for="cover" class="info-img-btn" v-if="isShow">上传头像</label>
      <el-button type="danger" @click="resetField" v-if="isShow">重置</el-button>
      <el-button type="success" @click="saveChange" v-if="isShow">保存</el-button>
    </el-row>
  </div>
</template>
<script>
import {
  getStudentInfo,
  getStudentJoinedCourse,
  modifyStudentInfo
} from "@/api/myAPI";
import "animate.css";
import { userMixin } from "@/utils/mixin";
import axios from "axios";
import { getToken } from "@/utils/localStorage";

export default {
  mixins: [userMixin],
  async created() {
    const res = await getStudentInfo();
    if (res.meta.message === "ok") {
      const data = res.data;
      this.stdinfo = data.studentinfo;
    }
    this.copy = JSON.parse(JSON.stringify(this.stdinfo));
    this.isLoading = false;
  },
  methods: {
    async created() {
      const res = await getStudentInfo();
      if (res.meta.message === "ok") {
        const data = res.data;
        this.stdinfo = data.studentinfo;
      }
      this.copy = JSON.parse(JSON.stringify(this.stdinfo));
      this.isLoading = false;
    },
    modifyInfo() {
      this.isShow = true;
    },
    resetField() {
      this.teacherinfo = JSON.parse(JSON.stringify(this.copy));
    },
    async saveChange() {
      const payload = {
        classname: this.stdinfo.classname,
        college: this.stdinfo.college,
        img: this.stdinfo.img,
        location: this.stdinfo.location,
        number: this.stdinfo.number,
        realname: this.stdinfo.realname,
        tdescribe: this.stdinfo.tdescribe
      };
      const res = await modifyStudentInfo(payload);
      this.isShow = false;
      this.created();
    },
    getFile(e) {
      let _this = this;
      var files = e.target.files[0];
      var imageType = /^image\//;
      //是否是图片
      if (!imageType.test(files.type)) {
        this.$message({
          type: "error",
          message: "请选择图片"
        });
        return;
      }
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();

      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        let param = new FormData(); //创建form对象
        param.append("file", files, files.name); //通过append向form对象添加数据
        // console.log(param.get("file")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
            token: getToken()
          }
        }; //添加请求头
        const baseUrl = "http://111.231.138.158";
        axios
          .post("/api/system/v1/upload", param, config)
          .then(response => {
            return response.data.data.imgUrl;
          })
          .then(url => {
            console.log(url);
            // url = url.split('/')[1]
            console.log(`${baseUrl}/${url}`);
            return `${baseUrl}/${url}`;
          })
          .then(url => {
            _this.stdinfo.img = url;
          });
      };
    }
  },
  data() {
    return {
      isLoading: true,
      currentPage: 1,
      curCourse: [],
      stdinfo: {},
      course: [],
      totalCourse: 0,
      isShow: false,
      copy: {}
    };
  }
};
</script>

<style lang="less">
.std-info {
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .el-input.is-disabled .el-input__inner,
  .el-textarea.is-disabled .el-textarea__inner {
    color: black;
  }
  .head_img {
    display: block;
    height: 200px;
    width: 200px;
    border: 1px solid #888;
    margin-top: 110px;
  }
  .info-img-btn {
    color: #fff;
    background-color: #22272f;
    border-color: #22272f;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
}
.box-card {
  margin-bottom: 3px;
}

.std-info .report_title {
  color: #000;
}

.std-info .report_title span {
  display: inline-block;
  font-size: 0.9em;
  color: #aaa;
  float: right;
}
.std-info .mt {
  font-weight: 400;
}
.std-info .text {
  font-size: 14px;
}

.std-info .item {
  margin-bottom: 18px;
}

.std-info .clearfix:after,
.std-info .clearfix:before {
  display: table;
  content: "";
}

.std-info .clearfix:after {
  clear: both;
}

.std-info .box-card {
  width: 100%;
}

.std-info .course_sub_title,
.std-info .course_title {
  float: left;
}

.std-info .course_sub_title {
  margin-left: 5px;
  color: #aaa;
}

.std-info .course_date {
  float: right;
}

.std-info .id {
  font-size: "microsoft yahei";
  font-size: 1.2rem;
  margin-top: 0.3rem;
}

.std-info {
  padding-left: 15px;
  padding-right: 15px;
}
.student_course {
  position: relative;
  width: 100%;
  .course_to_detail {
    cursor: pointer;
  }

  .time {
    font-size: 13px;
    color: #999;
    line-height: 1.5em;
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
