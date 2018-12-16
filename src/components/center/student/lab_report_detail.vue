<template lang="html">
  <div class="lab_report_detail">
    <div class="detail_title">
      <i class="el-icon-edit-outline"></i>  {{title}}
    </div>
    <hr>
    <div class="detail_subtitle">
      <i class="el-icon-warning"></i> 实验要求
    </div>
    <div class="instruction" v-html="instruction">
      <!-- {{instruction}} -->
    </div>
    <hr>
    <div class="detail_subtitle">
      <i class="el-icon-star-on"></i> 我的报告
    </div>
    <div class="my_report">
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
      Test code here
    </div>
    <hr>
    <div class="detail_subtitle">
      <i class="el-icon-star-on"></i> 评定结果
    </div>
    <div class="" >
      {{remark}}
      <br>
      成绩： {{grade}}
    </div>
  </div>
</template>

<script>
import {getStudentGetReportDetail} from '@/api/myAPI'
export default {
  async created() {
    const res = await getStudentGetReportDetail(this.$route.params.id)
    console.log(res)
    this.title = res.data.ReportInfo.cname
    this.instruction = res.data.ReportInfo.content.split('\r\n').join('<br/>')
    this.remark = res.data.ReportInfo.remark
    this.grade = res.data.ReportInfo.grade
  },
  data() {
    return {
      title: 'PHP实战',
      instruction: "",
      remark:"",
    }
  }
}
</script>

<style lang="less">
.lab_report_detail {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 30px;
    .detail_title {
        font-size: 26px;
        i {
            color: #22272f;
        }
    }
    hr {
        color: #22272f;
        margin: 15px 0;
    }
    .detail_subtitle {
        font-size: 20px;
        margin-bottom: 5px;
        i {
            color: #22272f;
        }
    }
    .instruction,
    .my_report {
        font-size: 14px;
    }
}
</style>
