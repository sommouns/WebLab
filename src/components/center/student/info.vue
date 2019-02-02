<template>
<div class="std-info" style="width:100%;margin-left:50px" v-loading="isLoading" element-loading-text="拼命加载中">
  <el-row>
    <el-col :span="4">
      <div class="head">
        <img :src="stdinfo.studentinfo.img" alt="" style="width:100%" class="head_img">
      </div>
    </el-col>
    <el-col :span="19" offset=1 style="padding-top:3rem;">

      <el-form ref="form" :model="form" label-width="90px"   label-position="left" >
        <el-form-item label="姓名：" style="width: 13em;" >
         <el-input v-model="stdinfo.studentinfo.realname" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="学号：" style="width: 22em;">
        <el-input v-model="stdinfo.studentinfo.number" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="班级：" style="width: 22em;">
          <el-input v-model="stdinfo.studentinfo.classname" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="学校：" style="width: 22em;">
          <el-input v-model="stdinfo.studentinfo.college" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="地址：" style="width: 22em;">
          <el-input v-model="stdinfo.studentinfo.location" :disabled="!isShow"></el-input>
        </el-form-item>
        <el-form-item label="个性签名：" style="width:100%;">
          <el-input type="textarea" v-model="stdinfo.studentinfo.tdescribe" :disabled="!isShow"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
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
  getStudentInfo,
  getStudentJoinedCourse,
  modifyStudentInfo
} from '@/api/myAPI'

export default {
  async created() {
    this.user = JSON.parse( localStorage.getItem( 'user' ) )
    const res = await getStudentInfo()
    if ( res.meta.message === "ok" ) {
      const data = res.data
      this.stdinfo = data
    }
    this.copy = JSON.parse(JSON.stringify(this.stdinfo.studentinfo))
    this.isLoading = false
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
        classname: this.stdinfo.studentinfo.classname,
        college: this.stdinfo.studentinfo.college,
        img: this.stdinfo.studentinfo.img,
        location: this.stdinfo.studentinfo.location,
        number: this.stdinfo.studentinfo.number,
        realname: this.stdinfo.realname,
        tdescribe: this.stdinfo.studentinfo.tdescribe
      }
      const res = await modifyStudentInfo(payload)
      this.isShow = false
      created()
    },
    getFile( e ) {
        let _this = this
        var files = e.target.files[ 0 ]
        if ( !e || !window.FileReader ) return // 看支持不支持FileReader
        let reader = new FileReader()
        reader.readAsDataURL( files ) // 这里是最关键的一步，转换就在这里
        reader.onloadend = function () {
          _this.stdinfo.studentinfo.img = this.result
        }
      },
    },
  data() {
    return {
      isLoading: true,
      currentPage: 1,
      curCourse: [],
      stdinfo: {},
      course: [],
      totalCourse: 0,
      isShow:false,
      copy:{}
    }
  }
}
</script>

<style lang="less">
.std-info {
    hr {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .el-input.is-disabled .el-input__inner,.el-textarea.is-disabled .el-textarea__inner{
      color: black
    }
    .head_img{
            display: block;
            height: 200px;
            border: 1px solid #888;
            margin-top: 110px;
      }
}
.std-info .box-card {
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
.std-info .mt{
  font-weight: 400
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
    font-size: 'microsoft yahei';
    font-size: 1.2rem;
    margin-top: .3rem;
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
        line-height: 1.5em
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
