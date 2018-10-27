<template>
<div class="header">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="width:1180px;margin: 0 auto">
    <el-menu-item index="1" style="float:left">
      <router-link to="/">实验吧</router-link>
    </el-menu-item>
    <el-menu-item index="2" v-if="!islogin" style="float:right">
      <router-link to="/register">注册</router-link>
    </el-menu-item>
    <el-menu-item index="3" v-if="!islogin" style="float:right">
      <router-link to="/Login">登录</router-link>
    </el-menu-item>

    <el-submenu index="2" v-if="islogin" style="float:right">
      <template slot="title">{{user.id}}</template>
      <el-menu-item index="2-1" style="text-align:center" @click="toCenter">个人中心</el-menu-item>
      <el-menu-item index="2-2" @click="logout" style="text-align:center">退出</el-menu-item>
    </el-submenu>



  </el-menu>
</div>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      activeIndex: '1',
      user: {
        type: "",
        id: ""
      },
      islogin: false

    };
  },

  methods: {
    handleSelect(value) {
      console.log(value);
    },
    logout() {
      this.islogin = false
      const res = {}
      this.$store.commit('setInfo', res)
      this.$router.push('/')
    },
    toCenter() {
      if (this.user.type === 'teacher') {
        this.$router.push('/teacher')
      } else if (this.user.type === 'student') {
        this.$router.push('/student')
      } else if (this.user.type === 'admin') {
        this.$router.push('/admin')
      }
    }
  },
  created() {
    if (this.$store.state.user.type) {
      this.user = this.$store.state.user
      this.islogin = true;
      console.log("login!!!")
    }
    console.log(this.islogin)

  }
};
</script>
<style>
a {
  text-decoration: none
}

.el-menu.el-menu--horizontal {
  border-bottom: none;

}

.header {
  border-bottom: solid 1px #e6e6e6;
}
</style>
