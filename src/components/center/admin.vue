<template lang="html">
  <div class="teacher-center">
    <el-container class="index-con">
      <el-aside class="aside-menu">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse" style="background:#409eff">

          <el-menu-item index="1" @click="myRouter('/admin/admin_lab')">
            <i class="el-icon-news"></i>
            <span slot="title">管理实验信息</span>
          </el-menu-item>
          <el-menu-item index="2" @click="myRouter('/admin/admin_teacher')">
            <i class="el-icon-view"></i>
            <span slot="title">管理教师信息</span>
          </el-menu-item>
          <el-menu-item index="3" @click="myRouter('/admin/admin_student')">
            <i class="el-icon-service"></i>
            <span slot="title">管理班级信息</span>
          </el-menu-item>
        </el-menu>
        </el-aside>

      <el-container class="main-con">
        <router-view />
        </el-container>
  </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    myRouter( path ) {
      this.$router.push( path )
    }
  }
}
</script>

<style lang="less">
.teacher-center {
    width: 1180px;
    margin: 0 auto;
    padding-top: 25px;
    .el-menu-vertical-demo {
        // border-radius: 5px;
        background: #409eff;
        color: #fff;
    }
}
</style>
