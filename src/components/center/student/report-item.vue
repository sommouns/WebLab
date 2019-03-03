<template>
<div>
<el-card
    class="text report_item"
    v-for="(item, index) in report"
    :key="index"
    style=";padding-bottom:5px"
  >
    <router-link
      :to="{ name: 'StudentReportDetail', params: {id:item.reportId} }"
      type="div"
      style="width:100%"
      class="animated fadeIn"
    >
      <div class="report_title">{{item.courseName}}</div>
      <div class="report_subtitle">{{item.courseTempleteName}}</div>
      <div class="report_to_detail">
        <el-button type="danger" v-if="item.grade">查看详情</el-button>
        <el-button type="primary" v-else>修改实验报告</el-button>
      </div>
      <div class="report_date">
        <span>{{item.createdTime}}</span>
      </div>
    </router-link>
  </el-card>
</div>
  
</template>
<script>
import 'animate.css'
export default {
    props: {
        report:{
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="less">
.report_item {
        box-sizing: border-box;
        // height: 35px;
        font-size: 18px;
        padding: 3px 25px;
        margin-right: 25px;
        margin-top: 15px;
        margin-left: 25px;
        .report_to_detail {
            float: right;
            transform: translateY(-15%);
        }
        .report_title {
            color: #000;
            margin-right: 25px;
            min-width: 10rem;
        }
        .report_subtitle {
            font-size: 0.9em;
            color: #aaa;
            width: 15rem;
        }
        .report_date {
            color: #000;
            font-size: 0.9em;
            float: right;
            margin-right: 15px;
        }

        .el-button {
            height: 23px;
            line-height: 0;
        }
    }
    .report_item * {
        display: inline-block;
    }

    .report_item:hover .report_date,
    .report_item:hover .report_subtitle,
    .report_item:hover .report_title {
        color: #22272f !important;
    }
</style>
