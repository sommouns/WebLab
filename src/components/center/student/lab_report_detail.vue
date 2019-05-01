<template lang="html">
  <div class="lab_report_detail">
    <div class="detail_title">
      <i class="el-icon-edit-outline"></i>  {{title}}
    </div>
    <hr>
    <div class="detail_subtitle">
      <i class="el-icon-warning"></i> 我的报告
    </div>
    <div class="instruction" v-html="instruction">
    </div>
    <br /><br />
    <el-button v-if="!grade" type="primary" @click="dialogFormVisible = true">修改我的实验报告</el-button>
    <hr>
    <div class="detail_subtitle">
      <i class="el-icon-star-on"></i> 评定结果
    </div>
    <div class="" >
      {{remark}}
      <br>
      成绩： {{grade}}
    </div>
    <el-dialog title="修改" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
      <froala :tag="'textarea'" :config="config" v-model="model"></froala>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="saveReport">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg';
import {
  // getStudentGetReportDetail,
  checkDestReport,
  judgeReport
} from '@/api/myAPI'
export default {
  components: {
    VueFroala
  },
  async created() {
    const res = await checkDestReport(this.$route.params.id)
    this.title = res.ReportInfo.cname
    this.instruction = res.ReportInfo.content.split('\r\n').join('<br/>')
    this.model = this.instruction
    this.remark = res.ReportInfo.remark
    this.grade = res.ReportInfo.grade
  },
  methods:{
    async saveReport() {
      const reportId = this.$route.params.id
      const payload = {
        content: this.model
      }
      const res = await judgeReport(reportId, payload)
      this.$message({
        message: '修改成功',
        type: 'success'
      });
      this.instruction = this.model
      this.model = ""
      this.dialogFormVisible = false
    },
    close() {
      this.model = ""
      this.dialogFormVisible = false
    }
  },
  data() {
    return {
      config: {
        // imageUploadURL: 'http://upload.qiniu.com/',
        // fileUploadURL: 'http://upload.qiniu.com/',
        // videoUploadURL: 'http://upload.qiniu.com/',
        height: 300,
        language: 'zh_cn',
        toolbarButtons: [ 'bold', 'italic', 'underline',
          'fontFamily', 'fontSize', 'color',
          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
          'insertLink', 'insertImage', 'insertTable', '|',
          'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
          'html', '|', 'undo', 'redo', 'myButton', 'toolsButton', 'insertAudio', 'wirisEditor', 'wirisChemistry', 'emoticons'
        ],
        events: {
          'froalaEditor.initialized': function () {
            console.log( 'initialized' )
          }
        }
      },
      model: '',
      title: 'PHP实战',
      instruction: "",
      remark:"",
      dialogFormVisible: false,
      formLabelWidth: '120px',
      copy:''
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
