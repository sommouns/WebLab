
<template>
<div class="teacher-center" v-if="userInfo">
  <CommonHeader />
  <el-container class="index-con">
    <el-aside class="aside-menu" :style="{width:'11rem', minHeight: myHeight + 'px'}">
      <el-menu :default-active="cur_page_index" class="el-menu-vertical-demo">
        <el-menu-item index="1" @click="to('publish')">
          <i class="el-icon-document"></i>
          <span>&nbsp;&nbsp;&nbsp;发布新课程&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="2" @click="to('judgeReport')">
          <i class="el-icon-tickets"></i>
          <span>&nbsp;&nbsp;&nbsp;评定实验报告&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="3" @click="to('viewCourse')">
          <i class="el-icon-tickets"></i>
          <span>&nbsp;&nbsp;&nbsp;我的课程&nbsp;&nbsp;&nbsp;</span>
        </el-menu-item>
        <el-menu-item index="4" @click="to('info')">
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
import CommonHeader from '@/components/center/commonheader'
import {userMixin} from '@/utils/mixin';
export default {
  mixins: [userMixin],
  components: {
    CommonHeader
  },
  created() {
    const ar = this.$route.path.split( '/' )
    switch ( ar[ ar.length - 1 ] ) {
      case 'publish':
        this.cur_page_index = "1";
        break;
      case 'mycourse':
        this.cur_page_index = "2";
        break;
      case 'viewCourse':
        this.cur_page_index = "3";
        break;
      case 'info':
        this.cur_page_index = "4";
        break;
      default:
        this.cur_page_index = "5";
        break;
    }
  },
  data() {
    return {
      isCollapse: false,
      curPage: '',
    }
  },
  methods: {
    to( path ) {
      this.$router.push( `/teacher/${path}` )
    }

  },
  computed: {
    myHeight() {
      return window.innerHeight - 210 - 110
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
