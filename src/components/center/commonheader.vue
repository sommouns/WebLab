<template>
  <div class="center_header">
    <div class="mask1">
      <div class="head fl">
        <img src="https://s1.ax1x.com/2018/12/10/FJVvnS.png" alt>
      </div>
      <div class="fl main_info">
        <div class="user_id">21324654</div>
        <div class="type">
          <i class="el-icon-news" style="transform: translateY(5%);"></i>
          <span v-if="!userInfo.usertype">学生</span>
          <span v-else>老师</span>
        </div>
      </div>
      <div class="fr other" v-if="!userInfo.usertype">
        <ul>
          <li class="fl">学习时长
            <br>2小时
          </li>
          <li class="fl">学习排名
            <br>500+
          </li>
          <li class="fl">关注课程
            <br>0门
          </li>
        </ul>
      </div>
      <div class="fr other" v-else>
        <ul>
          <li class="fl">好评率
            <br>98%
          </li>
          <li class="fl">学生
            <br>112人
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { userMixin } from "@/utils/mixin";
import { getUserInformation_api } from "@/api/myAPI";
export default {
  name: "CommonHeader",
  mixins: [userMixin],

};
</script>

<style lang="less">
.center_header {
  background: url("/static/infobg.jpg") no-repeat;
  background-size: 100%;
  color: #fff;
  height: 13rem;
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .mask1 {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7) no-repeat;
    .head {
      height: 11rem;
      width: 11rem;
      border-radius: 50%;
      overflow: hidden;
      transform: translateY(6%);
      margin-left: 10rem;
      border: 3px solid rgba(222, 222, 222, 0.7);
      img {
        height: 11rem;
        width: 11rem;
      }
    }
    .main_info {
      margin-left: 3rem;
      margin-top: 2.1rem;
      .user_id {
        font-size: 42px;
      }
      .type {
        font-size: 24px;
        margin-top: 3px;
      }
    }
    .other {
      margin-top: 7rem;
      margin-right: 8rem;
      ul {
        li {
          list-style-type: none;
          text-align: center;
          font-size: 22px;
          margin-right: 3rem;
        }
      }
    }
  }
}
</style>
