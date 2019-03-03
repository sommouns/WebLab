<template lang="html">
  <div class="lab_report" >
     <ReportItemList :report="report"/>
    <div class="block" style="text-align:center;position:absolute;left:50%;transform:translateX(-50%)">
      <el-pagination layout="prev, pager, next" :total="paginationTotalReport" :current-page="currentPageReport" @current-change="handleCurrentChangeReport">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getStudentExpReport} from '@/api/myAPI'
    import ReportItemList from '@/components/center/student/report-item';

export default {
    components:{
        ReportItemList
    },
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
}
</style>
