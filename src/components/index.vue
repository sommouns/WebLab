<template>
<div class="main_index">
  <Header style="position:fixed;top:0;width:100%;z-index:2001"></Header>
  <div style="height:5rem">

  </div>
  <div class="sub_nav_bar">
      <ul>
        <router-link tag="li" to="/">首页</router-link>
        <router-link tag="li" to="/morecourse">全部课程</router-link>
        <router-link tag="li" to="/student/history">我的主页</router-link>
      </ul>
    </div>  
  <router-view />
</div>
</template>

<script>
import Header from '@/components/index/header'

export default {

  name: 'index',
  components: {
    Header
  },
  data() {
    return {

    }
  }
}
</script>
<style media="screen" lang="less">
.main_index {
  height: 100%;
  width: 100%;
    background: #fff;
    position: relative;
    z-index: 1;
    flex-direction: column;
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
          transition: .5s all ease-out;
          box-sizing:border-box;
          background: linear-gradient(to bottom, #fafafa, #eee);
          border-left:1px solid #999;
          border-right: 1px solid #999;
        }
        li:hover, li:active{
          background:#22272f;
          color: #fff;
          transform: scaleY(120%);
        }
      }
    }
}
</style>
