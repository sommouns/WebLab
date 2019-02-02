<template lang="html">
  <div class="judge_detail">
    <h2>实验报告内容</h2>
    <hr>
    <div class="content">
        {{ReportInfo.content}}
    </div>
    <h2 style="margin-top:30px">实验报告评价</h2>
    <hr>
    <div class="content">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入评价"
        v-model="ReportInfo.remark">
        </el-input>
    </div>
    <div class="choice">
      <el-input  v-model="ReportInfo.grade"/><el-button type="success" @click="judge">打分</el-button>
    </div>
  </div>
</template>

<script>
import {
    getTarReportContent,
    judgeReport
} from '@/api/myAPI.js'
export default {
    async created(){
        const reportId = this.$route.params.id
        const res = await getTarReportContent(reportId)
        this.ReportInfo = res.ReportInfo
    },
    methods:{
        async judge() {
            const payload = {
                remark: this.ReportInfo.remark,
                grade: this.ReportInfo.grade
            }
            const res = judgeReport(this.reportId, payload)

            this.$message({
                message: '评定成功',
                type: 'success'
            });
            
            this.$router.push({path:'/teacher/mycourse'})
        }
    },
    data(){
        return {
            reportId: this.$route.params.id,
            ReportInfo: {}
        }
    }
}
</script>

<style lang="less">
.judge_detail {
    width: 100%;
    padding: 20px 30px;
    h2 {
        font-weight: 700;
        color: #22272f;
    }
    hr {
        background-color: #22272f;
        height: 1px;
        border: none;
        margin: 20px 0;
    }
    .content {
        // background: rgba(114,194,193, 0.2);
        margin: 15px;
    }
    .choice {
        width: 25%;
        margin: 0 auto;
        .el-input {
            width: 30%;
            margin-right: 20px;
        }
        input {
            width: 100%;
            display: inline-block;
        }
    }

}
</style>
