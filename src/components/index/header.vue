<template>
<div class="header">
   <div class="search">
      <i class="el-icon-search"></i>
      <input type="text" class="search_input" placeholder="请输入要搜索的课程信息">
      <button class="search_btn">搜索</button>
    </div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="background:none;">
    <el-menu-item index="1" style="float:left;height: 5rem;position: fixed;left: 3rem" >
      <router-link to="/" class="logo"><img src="@/assets/logo.png" style="margin-right:5px;height: 5rem" /></router-link>
    </el-menu-item>
    <el-menu-item  index="2" v-if="!islogin" style="float:right;height: 5rem;line-height: 5rem;margin-right: 3rem">
      <router-link to="/register">Sign up</router-link>
    </el-menu-item>
    <el-menu-item index="3" v-if="!islogin" style="float:right;height: 5rem;line-height: 5rem">
      <router-link to="/Login">Login</router-link>
    </el-menu-item>
   
    <el-submenu index="2" v-if="islogin" style="float:right;border-bottom:none;">
      <template slot="title" style="color:#fff;height: 5rem;line-height: 5rem">{{user.Logininfo.username}}</template>
      <el-menu-item index="2-1" style="text-align:center;background: #22272f;color: #fff;border-bottom: 1px solid #fff" @click="toCenter">个人中心</el-menu-item>
      <el-menu-item index="2-2" @click="logout" style="text-align:center;background: #22272f;color: #fff">退出</el-menu-item>
    </el-submenu>
  </el-menu>
  
</div>
</template>
<script>
import {
  getUserInfo,
  userLogOut
} from '@/api/myAPI'
export default {
  name: 'Header',

  data() {
    return {
      num1: 1,
      activeIndex: '1',
      user: {},
      islogin: false

    };
  },

  methods: {
    handleSelect( value ) {
      console.log( value );
    },
    logout() {
      this.islogin = false
      userLogOut()
      localStorage.clear()
      this.$router.push( '/' )
    },
    toCenter() {
      const info = this.user.Logininfo
      info.usertype === 0 ? this.$router.push( '/student' ) : this.$router.push( '/teacher' )
    }
  },
  async created() {
    let res = await getUserInfo()
    let data = res.data
    if ( res.status ) {
      if ( data.meta.success === true ) {
        const logInfo = data.data
        let token = localStorage.getItem( 'token' )
        this.$store.dispatch( 'setInfo', {
          token,
          ...logInfo
        } )
        this.user = { ...logInfo
        }
        this.islogin = true
      }
    } else {

    }

  }
};
</script>
<style lang="less">
a {
    text-decoration: none;
}

.el-menu.el-menu--horizontal {
    border-bottom: none;
}

.header {
    // border-bottom: solid 1px #e6e6e6;
    background: #22272f;
    position:relative;
    transform-style: preserve-3d;
    border-bottom: 1px solid #aaa;
    height: 5rem;
    z-index: 2001;
    .sub_nav_bar{
      background:#fafafa;
      height: 3rem;
      box-sizing: border-box;

      ul {
        height: 3rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        width: 1180px;
        margin: 0 auto;
        li{
          list-style: none;
          line-height: 3rem;
          font-size: 1.1rem;
          flex:1;
          cursor: pointer;
          text-align: center;
        }
      }
    }
    .el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
      background:rgba(255,255,255,.3);
    }
    .el-submenu__title{
      height: 5rem !important;
      line-height: 5rem !important;
      margin-right: 3rem;
    }
    .search{
      z-index: 999;
      position:absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 5rem;
      white-space: nowrap;
      line-height: 5rem;
      .el-icon-search{
        position:absolute;
        color: #fff;
        font-size: 20px;
        top:1.82rem;
      }
      .search_input{
        border:none;
        outline: none;
        background:none;
        width: 20rem;
        border-bottom:1px solid #fff;
        padding: 1rem 1rem;
        color: #fff;
        font-size: 16px;
        padding-left: 1.5rem;
        padding-bottom: .5rem;
      }
      .search_btn{
        border:none;
        outline: none;
        background:none;
        color:#fff;
        font-size: 18px;
        font-family: microsoft yahei;
        cursor: pointer;
      }
    }
    // transform: perspective(700px) rotateX(-20deg);
    transition: 0.5s all ease;
    
    .el-menu-demo a {
        transition: none;
        color: #fff;
    }
    .el-menu-item:hover a {
        color: #fff !important;
    }
    .logo {
        font-size: 32px;
        font-family: 'Sigmar One', cursive;
        color: #fff;
    }
    .el-menu--horizontal > .el-menu-item {
        height: 65px;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
        border-bottom: none;
    }
    .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
        border-bottom: none;
    }
    .el-menu--horizontal > .el-submenu .el-submenu__title {
        color: #fff;
        font-size: 24px;
    }
}
</style>
