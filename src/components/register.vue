<template>
<div class="register">

  <el-card class="box-card">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
      <el-form-item label="用戶名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密碼" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="重複密碼" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-row style="text-align:center">
        <router-link to="/login">
          <el-button style="width:40%" type="">登录</el-button>
        </router-link>&nbsp;&nbsp;&nbsp;<el-button style="width:40%" type="primary">注册</el-button>

      </el-row>
    </el-form>
  </el-card>
</div>
</template>
<script>
export default {

  data() {

    return {

      ruleForm: {

        name: ""

      }

    };

  },



  methods: {

    onSubmit() {

      console.log("submit!");

    }

  }

};
</script>
<style>
body,
html {
  height: 100%;
  width: 100%;
}

.register {
  height: 100%;
  width: 100%;
  /* padding-top: 30px; */




  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540293197&di=ffafcf0df5e1cc32ecf03a1cff78c037&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038db7f56d7f14532f875520f74927b.png) no-repeat;
  background-size: cover;

}

.register .box-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
</style>
