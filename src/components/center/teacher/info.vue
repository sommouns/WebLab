<template>
<div class="teacher-info" style="width:100%;margin-left:50px">
  <el-row>
    <el-col :span="4">
      <div class="head">
        <img src="http://img0.imgtn.bdimg.com/it/u=1285245409,4077430671&fm=11&gp=0.jpg" alt="" style="width:100%">
      </div>
    </el-col>
    <el-col :span="19" offset="1" style="padding-top:20px">
      <div class="id">账号：{{user.id}}</div>
      <div class="id">姓名：{{teacherinfo.name}}</div>
      <div class="id">工号：{{teacherinfo.teacherId}}</div>
      <div class="id">所带班级：<span v-for="item in teacherinfo.classList" :key="item">{{item}}&nbsp;&nbsp;&nbsp;</span></div>
    </el-col>
  </el-row>

  <hr>
  <el-row>
    <h2>其他信息</h2>
    <p>text code here ...</p>
  </el-row>
</div>
</template>
<script>
export default {
  created() {
    this.user = JSON.parse( localStorage.getItem( 'user' ) )
  },
  methods: {},
  computed: {},
  data() {
    return {
      user: {},
      teacherinfo: {
        name: '谢贝贝',
        teacherId: '201731960119',
        classList: [ '计算机171', '计算机172' ]
      },

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
