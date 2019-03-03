<template>
  <div>
    <div class="sub_nav_bar">
      <ul>
        <router-link tag="li" to="/">首页</router-link>
        <router-link tag="li" to="/morecourse">全部课程</router-link>
        <li @click="toCenter" v-show="isLogin">我的主页</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { userMixin } from "@/utils/mixin";

export default {
  mixins: [userMixin],
  methods: {
    toCenter() {
      const info = this.userInfo;
      info.usertype === 0
        ? this.$router.push("/student")
        : this.$router.push("/teacher");
    }
  }
};
</script>

<style lang="less" scoped>
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
</style>