<template>
<div class="teacher-info  animated fadeIn" style="width:100%;margin-left:50px">
  <el-row>
    <el-col :span="4">
      <div class="head">
        <img :src="teacherinfo.img" alt="" class="head_img">
      </div>
    </el-col>
    <el-col :span="17"  style="margin-left:5rem;padding-top:20px">
      <el-form ref="form" :model="teacherinfo" label-width="90px"   label-position="left" >
        <el-form-item label="姓名：" style="width: 13em;" >
         <el-input v-model="teacherinfo.tname" :disabled="!isShow"></el-input>
        </el-form-item>
        <el-form-item label="工号：" style="width: 22em;">
        <el-input v-model="teacherinfo.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" style="width: 22em;">
          <el-input v-model="teacherinfo.phone" :disabled="!isShow"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" style="width: 22em;">
          <el-input v-model="teacherinfo.email" :disabled="!isShow"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <br>
  <el-row>
    <el-button type="primary" @click="modifyInfo">修改个人信息</el-button>
    <input type="file" name="cover" ref="file" value="" id="cover" @change="getFile"  style="width:0"  v-if="isShow">
    <label for="cover" class="lb"  v-if="isShow">选择上传</label>
    <el-button type="danger" @click="resetField" v-if="isShow">重置</el-button>
    <el-button type="success" @click="saveChange" v-if="isShow">保存</el-button>
  </el-row>
</div>
</template>
<script>
import {
  getTeacherInfo,
  modifyTeacherInfo
} from '@/api/myAPI.js'
import "animate.css";
import { userMixin } from "@/utils/mixin";
import axios from "axios";
import { getToken } from "@/utils/localStorage";

export default {
    mixins: [userMixin],
  async created() {
    const res = await getTeacherInfo()
    this.teacherinfo = res.data.teacherinfo
    this.copy = JSON.parse(JSON.stringify(this.teacherinfo))
    // this.user = JSON.parse( localStorage.getItem( 'user' ) )
  },
  methods: {
    modifyInfo(){
      this.isShow = true
    },
    resetField(){
      this.teacherinfo = JSON.parse(JSON.stringify(this.copy))
    },
    async saveChange(){
      const payload = {
        email: this.teacherinfo.email,
        img: this.teacherinfo.img,
        phone: Number(this.teacherinfo.phone),
        qq: Number(this.teacherinfo.qq),
        tname: this.teacherinfo.tname
      }
      const res = await modifyTeacherInfo(payload)
      this.isShow = false
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
            _this.teacherinfo.img = url;
          });
      };
    }
  },
  computed: {},
  data() {
    return {
      user: {},
      teacherinfo: {},
      copy:{},
      isShow:false
    }
  }
}
</script>

<style lang="less">
.teacher-info {
    hr {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .el-input.is-disabled .el-input__inner{
      color: black
    }
    .lb:hover, .lb:focus {
        background: #4e5259;
        border-color: #4e5259;
        color: #fff;
    }
    .lb{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      color: #fff;
      background-color: #22272f;
      border-color: #22272f;
      }
      .head_img{
            display: block;
            height: 200px;
            width: 200px;
            border: 1px solid #888;
            margin-top: 31px;
      }
}
.teacher-info .box-card {
    margin-bottom: 3px;
}

.teacher-info .report_title {
    color: #000;
}

.teacher-info .report_title span {
    display: inline-block;
    font-size: 0.9em;
    color: #aaa;
    float: right;
}

.teacher-info .text {
    font-size: 14px;
}

.teacher-info .item {
    margin-bottom: 18px;
}

.teacher-info .clearfix:after,
.teacher-info .clearfix:before {
    display: table;
    content: "";
}

.teacher-info .clearfix:after {
    clear: both;
}

.teacher-info .box-card {
    width: 100%;
}

.teacher-info .course_sub_title,
.teacher-info .course_title {
    float: left;
}

.teacher-info .course_sub_title {
    margin-left: 5px;
    color: #aaa;
}

.teacher-info .course_date {
    float: right;
}

.teacher-info .id {
    line-height: 2em;
    font-size: 'microsoft yahei';
}

.teacher-info {
    padding-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
