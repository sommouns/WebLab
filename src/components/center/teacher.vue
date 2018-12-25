<!-- <template lang="html">
  <div class="teacher-center">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          :default-active="curPage"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse">

          <el-menu-item index="1" @click="to('info')">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
            <el-menu-item index="2" @click="to('publish')">
              <i class="el-icon-menu"></i>
              <span>发布新实验</span>
            </el-menu-item>
            <el-menu-item index="3" @click="to('modify')">
              <i class="el-icon-menu"></i>
              <span>修改实验</span>
            </el-menu-item>
            <el-menu-item index="4" @click="to('find')">
              <i class="el-icon-menu"></i>
              <span>查看实验进度</span>
            </el-menu-item>
            <el-menu-item index="5" @click="to('judge')">
              <i class="el-icon-menu"></i>
              <span>评定实验报告</span>
            </el-menu-item>

        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template> -->
<template>
<div class="teacher-center">
  <CommonHeader />
  <el-container class="index-con">
    <el-aside class="aside-menu" style="width:190px">
      <!-- <el-col :span="4"> -->
      <el-menu :default-active="cur_page_index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

        <el-menu-item index="2" @click="to('publish')">
          <i class="el-icon-document"></i>
          <span>&nbsp;&nbsp;&nbsp;发布新课程&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="6" @click="to('publishnewlab')">
          <i class="el-icon-document"></i>
          <span>&nbsp;&nbsp;&nbsp;发布新实验&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="3" @click="to('modify')">
          <i class="el-icon-date"></i>
          <span>&nbsp;&nbsp;&nbsp;修改实验&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="4" @click="to('find')">
          <i class="el-icon-tickets"></i>
          <span>&nbsp;&nbsp;&nbsp;查看实验进度&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="5" @click="to('judge')">
          <i class="el-icon-tickets"></i>
          <span>&nbsp;&nbsp;&nbsp;评定实验报告&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="1" @click="to('info')">
          <i class="el-icon-menu"></i>
          <span>&nbsp;&nbsp;&nbsp;个人信息&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
      </el-menu>
      <!-- </el-col> -->
    </el-aside>
    <el-container class="main-con">
      <!-- <el-col :span='20'> -->
      <router-view style="min-height:500px;box-sizing:border-box" />
      <!-- </el-col> -->
    </el-container>
  </el-container>

</div>
</template>
<script>
import CommonHeader from './commonheader.vue'
export default {
  components: {
    CommonHeader
  },
  created() {
    const ar = this.$route.path.split( '/' )
    switch ( ar[ ar.length - 1 ] ) {
      case 'info':
        this.cur_page_index = "1";
        break;
      case 'publish':
        this.cur_page_index = "2";
        break;
      case 'modify':
        this.cur_page_index = "3";
        break;
      case 'find':
        this.cur_page_index = "4";
        break;
      case 'publishnewlab':
        this.cur_page_index = "6";
        break;
      default:
        this.cur_page_index = "5";
        break;
    }
  },
  data() {
    return {
      isCollapse: false,
      curPage: ''
    }
  },
  methods: {
    to( path ) {
      this.$router.push( `/teacher/${path}` )
    }

  }
}
</script>

<style lang="less">
.teacher-center {

    .toggleM {
        float: right;
        background: none;
        border: none;
        outline: none;
        color: #fff;
        font-size: 20px;
        height: 22px;
        width: 22px;
        text-align: center;
        line-height: 18px;
        cursor: pointer;
        border: 1px solid #fff;
    }
    // background: #eee;
    .el-menu-vertical-demo {
        background: #22272f;
        color: #fff;
        position: relative;
    }
    .el-menu {
        border-right: none;
    }
    .el-aside {
        border-right: 1px solid #e6e6e6;
        min-height: 400px;
    }
    .aside-menu {
        background: #22272f;

        i,
        span {
            color: #fff;
        }
        .el-menu-item.is-active i,
        .el-menu-item.is-active span {
            color: #aaa;
            font-weight: 700;
        }
        .el-menu-item.is-active {
            background: #fff;
        }
    }
}
</style>
</style>
