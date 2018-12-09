<template>
<div class="header">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="width:1180px;margin: 0 auto;background:none;">
    <el-menu-item index="1" style="float:left">
      <router-link to="/" class="logo"><img src="@/assets/logo.png" height="55" style="margin-right:5px" />CTF Lab</router-link>
    </el-menu-item>
    <el-menu-item index="2" v-if="!islogin" style="float:right">
      <router-link to="/register">Sign up</router-link>
    </el-menu-item>
    <el-menu-item index="3" v-if="!islogin" style="float:right">
      <router-link to="/Login">Login</router-link>
    </el-menu-item>
    <el-submenu index="2" v-if="islogin" style="float:right;border-bottom:none">
      <template slot="title" style="color:#72C2C3">{{user.Logininfo.username}}</template>
      <el-menu-item index="2-1" style="text-align:center;color:#72C2C3" @click="toCenter">个人中心</el-menu-item>
      <el-menu-item index="2-2" @click="logout" style="text-align:center;color:#72C2C3">退出</el-menu-item>
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
    background: #fbfbfb;
    transform-style: preserve-3d;
    border-bottom: 1px solid #aaa;

    // transform: perspective(700px) rotateX(-20deg);
    transition: 0.5s all ease;
    .el-menu-demo a {
        transition: none;
        color: #72C2C3;
    }
    .el-menu-item:hover a {
        color: #aaa !important;
    }
    .logo {
        font-size: 32px;
        font-family: 'Sigmar One', cursive;
        color: #aaa;
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
        color: #72C2C3;
        font-size: 24px;
    }
}
</style>
