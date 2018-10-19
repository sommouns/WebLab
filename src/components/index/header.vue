<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">  
            <el-menu-item index="1"><router-link to="/">实验吧</router-link></el-menu-item>
            <el-menu-item index="2" v-if="!islogin" style="float:right"><router-link to="/register">注册</router-link></el-menu-item>
            <el-menu-item index="3" v-if="!islogin" style="float:right"><router-link to="/Login">登录</router-link></el-menu-item>
            <el-menu-item index="3" v-if="islogin" style="float:right" @click="logout">登出</el-menu-item>
            <el-menu-item index="2" v-if="islogin" style="float:right">{{user.id}}</el-menu-item>
            
        </el-menu>  
    </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      activeIndex:'1',
      user:{
        type:"",
        id:""
      },
      islogin:false
      
    };
  },

  methods: {
    handleSelect(value) {
      console.log(value);
    },
    logout(){
      this.islogin = false
      const res = {}
      this.$store.commit('setInfo',res)
    }
  },
  created(){
    if(this.$store.state.user.type){
      this.user = this.$store.state.user
      this.islogin = true;
      console.log("login!!!")
    }
    console.log(this.islogin)

  }
};
</script>
<style>
a{
    text-decoration: none
}
.el-menu-demo{


}
</style>


