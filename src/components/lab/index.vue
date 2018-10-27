<template lang="html">
  <div class="lab_container">
    <header>
        <el-button type="info" class="el-icon-arrow-left" style="padding:7px" @click="retrunCourse">返回课程</el-button>
        <el-button type="success" class="el-icon-caret-right
" style="padding:7px" v-if="!isStart" @click="toggleLab">开始实验</el-button>
        <el-button type="danger" class="el-icon-circle-close-outline
" style="padding:7px" v-if="isStart" @click="toggleLab">终止</el-button>
        <div class="lab_left_time">
          剩余时间<span>{{hour}}</span>时<span>{{minute}}</span>分<span>{{second}}</span>秒
        </div>

    </header>
    <el-row class="lab_body">
      <el-col :span="24">
        <div class="abs_tips" id="tips">
          <el-card class="box-card" v-if="showInfo" >
            <div class="abs_open_info el-icon-minus" @click="closeInfo">
            </div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
             <el-tab-pane label="指导" name="instruct">Fixed DatePicker not triggering form validation, #12328 #12348
Fixed DatePicker throwing errors in multiple mode, #12347
Fixed incorrect position of DatePicker spinner, #12415 (by @rang-ali)
Fixed automatic filling of DatePicker input box, #12521 (by @abdallanayer)
Fixed Input not highlighted in Cascader, #12341
Fixed wrong order of Tabpane, #12346
Fixed incorrect position of ColorPicker cursor, #12376 (by @cnwhy)
Fixed the style of Submenu, #2457
Fixed not highlighted after Submenu is selected, #12479
Fixed incorrect values selected by Cascader, #12508 (by @huangjinqiang)
Fixed incorrect value of Pagination input box, #12525
Fixed order that Pagination triggers events, #12530
Fixed Table Filter not displayed, #12539
Fixed Tree unable to delete nodes, #12684
Fixed height of Select Input changing in single mode, #12719
Fixed style of FormItem label in nested Form, #12748Fixed DatePicker not triggering form validation, #12328 #12348
Fixed DatePicker throwing errors in multiple mode, #12347
Fixed incorrect position of DatePicker spinner, #12415 (by @rang-ali)
Fixed automatic filling of DatePicker input box, #12521 (by @abdallanayer)
Fixed Input not highlighted in Cascader, #12341
Fixed wrong order of Tabpane, #12346
Fixed incorrect position of ColorPicker cursor, #12376 (by @cnwhy)
Fixed the style of Submenu, #2457
Fixed not highlighted after Submenu is selected, #12479
Fixed incorrect values selected by Cascader, #12508 (by @huangjinqiang)
Fixed incorrect value of Pagination input box, #12525
Fixed order that Pagination triggers events, #12530
Fixed Table Filter not displayed, #12539
Fixed Tree unable to delete nodes, #12684
Fixed height of Select Input changing in single mode, #12719
Fixed style of FormItem label in nested Form, #12748
<el-button type="danger" style="display:block">提交</el-button></el-tab-pane>
             <el-tab-pane label="问答" name="question">Config</el-tab-pane>
             <el-tab-pane label="笔记" name="note">Role</el-tab-pane>
           </el-tabs>
          </el-card>
          <div v-if="!showInfo" class="show_info" style="text-align:center;height:50px;width:50px;background-color:#ffffff;border-radius:50%;transition:1s all ease">
            <i class="el-icon-plus" style="line-height:50px;font-size:18px;" @click="openInfo"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
    var cutDown = window.setInterval(() => {
      this.leftTime -= 1000
      if (this.leftTime <= 0) {
        window.clearInterval(cutDown)
      }
    }, 1000)
  },
  data() {
    return {
      isStart: false,
      unikey: this.$route.params.key,
      showInfo: true,
      activeName: 'instruct',
      leftTime: 3600000
    }
  },
  methods: {
    toggleLab() {
      this.isStart = !this.isStart
    },

    retrunCourse() {
      this.$router.push(`/detail/${this.unikey}`)
    },
    closeInfo() {
      const tips = document.getElementById('tips')
      console.log(tips)

      this.showInfo = false
    },
    openInfo() {
      const tips = document.getElementById('tips')
      console.log(tips)
      this.showInfo = true

    }
  },
  computed: {

    hour() {
      var temp = this.leftTime / 1000
      var hour = Math.floor(temp / 3600)
      return '0' + hour
    },
    minute() {
      var temp = this.leftTime / 1000
      var min = Math.floor(temp / 60)
      if (min < 10) {
        return '0' + min
      } else {
        return min

      }
    },
    second() {
      var temp = this.leftTime / 1000
      var sec = Math.floor(temp % 60)
      if (sec < 10) {
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
        flex: 1;
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
                max-height: 600px;
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
