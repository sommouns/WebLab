<template lang="html">
  <div class="teacher_publish_new_lab">
    <el-row class="my_row">
      <label for="selectCourse" class="my_label">课程选择</label>
      <el-select v-model="value" placeholder="请选择" id="selectCourse">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-row>
    <el-row class="my_row">
      <label for="selectCourse" class="my_label">章节序号</label>
      <el-input style="display:inline-block;width:13.3rem;" type="number"></el-input>
    </el-row>
    <el-row class="my_row" style="margin-top:20px;height:450px">
      <froala :tag="'textarea'" :config="config" v-model="model"></froala>
    </el-row>

    <el-button type="success" style="background:#22272f">发布</el-button>
  </div>
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg';
export default {

  data() {
    return {
      options: [ {
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      } ],
      value: '',
      config: {
        // imageUploadURL: 'http://upload.qiniu.com/',
        // fileUploadURL: 'http://upload.qiniu.com/',
        // videoUploadURL: 'http://upload.qiniu.com/',
        height: 360,
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
      model: '请输入实验要求'
    }
  }
}
</script>

<style lang="less">
.teacher_publish_new_lab {
    margin: 1.5rem 0;
    padding: 0 2.52rem;
    width: 100%;
    .my_label {
        margin-right: 1rem;
    }
    .my_row {
        height: 4rem;
        // line-height: 4rem;
        width: 100%;
    }
}
</style>
