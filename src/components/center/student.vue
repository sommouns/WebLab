<template>
<div class="admin-center">
  <el-row class="tac">
    <el-col :span="4">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" @click="toStudentCourse">
          <i class="el-icon-document"></i>
          <span>我的课程</span>
        </el-menu-item>
        <el-menu-item index="2" @click="toStudentInfo">
          <i class="el-icon-menu"></i>
          <span>个人信息</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span='20'>
      <router-view />
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toStudentInfo() {
      this.$router.push('/student/info')
    },
    toStudentCourse() {
      this.$router.push('/student/course')

    }
  }
}
</script>
<style lang="less">
.admin-center {
    width: 1180px;
    margin: 0 auto;
}
</style>
