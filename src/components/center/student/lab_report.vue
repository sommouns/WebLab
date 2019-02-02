<template lang="html">
  <div class="lab_report" >
      <el-card class="text report_item" v-for="(item, index) in report" :key="item.title" style=";padding-bottom:5px">
        <router-link :to="{ name: 'StudentReportDetail', params: {id:item.reportId} }" type="div" style="width:100%">
          <div class="report_title">{{item.courseName}}</div>
          <div class="report_subtitle">
            {{item.courseTempleteName}}
          </div>
          <div class="report_to_detail">
            <el-button type="danger" v-if="item.grade">查看详情</el-button>
            <el-button type="primary" v-else>修改实验报告</el-button>
          </div>
          <div class="report_date">
            <span>{{item.createdTime}}</span>
          </div>

        </router-link>
      </el-card>
    <div class="block" style="text-align:center;position:absolute;bottom:0;left:50%;transform:translateX(-50%)">
      <el-pagination layout="prev, pager, next" :total="paginationTotalReport" :current-page="currentPageReport" @current-change="handleCurrentChangeReport">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getStudentExpReport} from '@/api/myAPI'
export default {
  async created() {
    const res = await getStudentExpReport(1)
    this.report = res.data.pageResult.listData
    this.totalPage = res.data.pageResult.totalPage
  },
  methods: {
    async handleCurrentChangeReport( val ) {
      const res = await getStudentExpReport(val)
      this.report = res.data.pageResult.listData
    }
  },
  computed: {
    paginationTotalReport() {
      return Number(this.totalPage) * 10
    }
  },
  data() {
    return {
      currentPageLab: 1,
      currentPageReport: 1,
      user: {},
      report: [],
      totalPage: 0
    }
  }
}
</script>

<style lang="less">
.lab_report {
    position: relative;
    width: 100%;
    padding-bottom: 40px;
    padding-top: 10px;
    .el-card{
      padding-bottom:20px;
      height: 4.5rem;
        width: 95%;
        .el-card__body{
          width: 98%;
        }
    }
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
        color: #72C2C3;
    }
}
</style>
