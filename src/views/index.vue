<template>
  <div class="main_index  animated fadeIn" style="display:flex;flex-direction:column">
    <Header style="position:fixed;top:0;width:100%;z-index:2001"></Header>
    <SubNavBar/>
    <router-view style="position:absolute;top:112px;left:0;bottom:0;width:100%;"/>
  </div>
</template>

<script>
import Header from "@/components/index/header";
import SubNavBar from "@/components/index/sub-nav-bar";
import { getUserInformation_api, userLogOut_api } from "@/api/myAPI";

import { userMixin } from "@/utils/mixin";

export default {
  mixins: [userMixin],
  name: "index",
  components: {
    Header,
    SubNavBar
  },
  methods:{
    initIndex() {
      this.$message({
        type: "success",
        message: "欢迎进入浙江师范大学行知学院网络攻防实验室"
      });
    }
  },
  created() {
    if (this.isLogin) {
      return;
    }
    // let res = await getUserInformation_api()
    getUserInformation_api()
      .then(res => {
        console.log(this.userInfo)
        
        return res.data})
      .then(data => {
        if (data.meta.success === true) {
          console.log(data.data)
          const { Logininfo } = data.data;
          this.setUserInfo(Logininfo).then(()=>{
            console.log(this.userInfo)

            this.setIsLogin(true)
          });
          saveUserInfomation(Logininfo);
          this.setIsLogin(true);
        } else {
          localStorage.clear();
          this.initIndex();
        }
      })
      .catch(err => {
        this.initIndex();
      });
  }
};
</script>
<style media="screen" lang="less" scoped>
.main_index {
  height: 100%;
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 1;
  flex-direction: column;
  .sub_nav_bar {
    background: #fafafa;
    height: 2rem;
    box-sizing: border-box;
    margin-top: 80px;
    ul {
      margin: 0 auto;
      width: 1180px;
      margin: 0 auto;
      li {
        width: 8em;
        list-style: none;
        font-size: 0.9rem;
        line-height: 2em;
        float: left;
        cursor: pointer;
        text-align: center;
        transition: 0.5s all ease-out;
        box-sizing: border-box;
      }
      li:active,
      li:hover {
        background: #22272f;
        color: #fff;
        transform: translateY(10%);
        box-shadow: 8px 0px 8px -8px black, -8px 0px 8px -8px black;
        position: relative;
      }
    }
  }
}
</style>
