<template>
<div class="std-center">
  <CommonHeader />
  <el-container class="index-con">

    <el-aside class="aside-menu" style="width:11rem;">
      <!-- <el-col :span="4"> -->
      <el-menu :default-active="cur_page_index" class="el-menu-vertical-demo">

        <el-menu-item index="4" @click="to('course')">
          <i class="el-icon-tickets"></i>
          <span>&nbsp;&nbsp;&nbsp;我的课程&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="2" @click="to('history')">
          <i class="el-icon-date"></i>
          <span>&nbsp;&nbsp;&nbsp;实验记录&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="3" @click="to('report')">
          <i class="el-icon-tickets"></i>
          <span>&nbsp;&nbsp;&nbsp;实验报告&nbsp;&nbsp;&nbsp;</span>
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
      <router-view style="box-sizing:border-box" />
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
      case 'history':
        this.cur_page_index = "2";
        break;
      case 'course':
        this.cur_page_index = "4"
        break
      default:
        this.cur_page_index = "3";
        break;
    }
  },
  data() {
    return {
      isCollapse: false,
      w: '0',
      cur_page_index: ""
    }
  },
  methods: {
    to( path ) {
      this.$router.push( `/student/${path}` )
    },
    toggleMenu() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="less">
.std-center {
    // width: 1180px;
    // margin: 15px auto 0;
    border-left: none;

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
        margin-top: 0;
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
