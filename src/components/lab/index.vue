<template lang="html">
  <div class="lab_container" >
    <!-- :style="{height:`${innerHeight}px`}" -->
    <header>
        <el-button type="info" class="el-icon-arrow-left" style="padding:7px" @click="retrunCourse">返回课程</el-button>
        <!-- <el-button type="success" class="el-icon-caret-right
" style="padding:7px" v-if="!isStart" @click="toggleLab">开始实验</el-button> -->
        <el-button type="danger" class="el-icon-circle-close-outline
" style="padding:7px" v-if="isStart" @click="toggleLab">终止</el-button>
        <!-- <div class="lab_left_time">
          剩余时间<span>{{hour}}</span>时<span>{{minute}}</span>分<span>{{second}}</span>秒
        </div> -->

    </header>
    <el-row class="lab_body" >
      <el-col :span="16">
        <Console/>
      </el-col>
      <el-col :span="8" class="lab_info">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="实验要求" name="instruct" v-html="instruction" class="pd_pane">
          </el-tab-pane>
          <el-tab-pane label="课堂问答" name="question">Config</el-tab-pane>
          <el-tab-pane label="我的实验报告" name="note" >
            <froala :tag="'textarea'" :config="config" v-model="model"></froala>
            <el-row style="margin-top:30px;text-align:center">
              <el-button  style="background:#22272f;width:80%;" type="success" @click="submitReport">提交</el-button>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg';
import Console from '../Console.vue'
import {
  getTarTemp,
  submitMyReport
} from '@/api/myAPI'
export default {
  async created() {
    this.innerHeight = window.innerHeight
    const key = this.$route.params.key.split('|')
    this.courseId = key[0]
    this.tempId = key[1]
    const res = await getTarTemp(this.tempId)
    this.instruction = res.courseTemplete.cdescribe
  },
  components: {
    Console
  },
  mounted() {
    // const content = document.querySelector( '.el-tabs__content' )
    // content.height = this.innerHeight - 80 + 'px'
    var cutDown = window.setInterval( () => {
      this.leftTime -= 1000
      if ( this.leftTime <= 0 ) {
        window.clearInterval( cutDown )
      }
    }, 1000 )
  },
  data() {
    var inn = window.innerHeight * 0.5
    return {
      courseId:'',
      instruction:'',
      tempId:'',
      isStart: false,
      unikey: this.$route.params.key,
      showInfo: true,
      innerHeight: 0,
      activeName: 'instruct',
      leftTime: 3600000,
      config: {
        // imageUploadURL: 'http://upload.qiniu.com/',
        // fileUploadURL: 'http://upload.qiniu.com/',
        // videoUploadURL: 'http://upload.qiniu.com/',
        height: inn,
        language: 'zh_cn',
        toolbarButtons: [ 'fullscreen', 'bold', 'italic', 'underline',
          'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|',
          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
          'insertLink', 'insertImage', 'insertTable', '|', 'emoticons',
          'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
          'html', '|', 'undo', 'redo', 'myButton', 'toolsButton', 'insertAudio', 'wirisEditor', 'wirisChemistry'
        ],
        events: {
          'froalaEditor.initialized': function () {
            console.log( 'initialized' )
          }
        }
      },
      model: ''
    }
  },
  methods: {
    toggleLab() {
      this.isStart = !this.isStart
    },
    async submitReport() {
      const payload = {
        content: this.model,
        courseId: Number(this.courseId), //当前操作课程ID
        courseTemplete: { 
          id: Number(this.tempId) //当前模板的ID
        }
      }  
      const res = await submitMyReport(payload)
      this.$message({
        message: '提交成功',
        type: 'success'
      });
      this.model = ""
    },
    retrunCourse() {
      this.$router.push( `/detail/${this.courseId}` )
    },
    closeInfo() {
      const tips = document.getElementById( 'tips' )
      console.log( tips )

      this.showInfo = false
    },
    openInfo() {
      const tips = document.getElementById( 'tips' )
      console.log( tips )
      this.showInfo = true

    }
  },
  computed: {

    hour() {
      var temp = this.leftTime / 1000
      var hour = Math.floor( temp / 3600 )
      return '0' + hour
    },
    minute() {
      var temp = this.leftTime / 1000
      var min = Math.floor( temp / 60 )
      if ( min < 10 ) {
        return '0' + min
      } else {
        return min

      }
    },
    second() {
      var temp = this.leftTime / 1000
      var sec = Math.floor( temp % 60 )
      if ( sec < 10 ) {
        return '0' + sec
      } else {
        return sec
      }

    }
  }
}
</script>

<style lang="less">
body,
html {
    height: 100%;
    width: 100%;

}
.lab_container {
    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    height: 100%;
    width: 100%;
    background: #333;
    display: flex;
    flex-direction: column;
    .lab_info {
        background: #fff;
        color: #aaa;
        height: 100%;
    }
    .el-tabs__header {
        margin-bottom: 0;
    }
    .pd_pane {
      box-sizing: border-box;
      padding:20px 25px;
      color: #333
    }
    header {
        height: 40px;
        background: rgba(255,255,255,.2);
        padding: 5px 25px;
        box-sizing: border-box;
        .el-icon-circle-close-outline:before {
            margin-right: 5px;
        }
        .lab_left_time {
            float: right;
            color: #fff;
            line-height: 30px;
            vertical-align: bottom;
            span {
                font-size: 1.5em;
                color: #ffffcc;

            }
        }
    }
    .lab_body {
        // flex: 1;
        width: 100%;
        position: absolute;
        top: 40px;
        bottom: 0;
        left: 0;
        .el-col-16 {
            height: 100%;
            background: #eee;
        }
    }
    .abs_tips {
        position: absolute;
        top: 5%;
        right: 3%;
        transition: 1.5s all ease;
        .box-card {
            width: 380px;
            position: relative;

            .el-tab-pane {
                max-height: 20rem;
                // overflow: scroll;
                overflow-x: hidden;
                overflow-y: auto;
            }
            .abs_open_info {
                position: absolute;
                font-size: 18px;
                right: 0;
                top: 0;
                border: 1px solid #aaa;
            }

        }
        .show_info:hover {
            transform: translateY(2px) scale(1.2);
        }
    }
    .el-tabs__nav {
        width: 100%;
        .el-tabs__item {
            width: 33.3%;
            text-align: center;
        }
    }
}
</style>
