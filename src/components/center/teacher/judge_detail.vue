<template lang="html">
  <div class="judge_detail">
    <h2>实验报告内容</h2>
    <hr>
    <div class="content">
      Test code here...<br>
      Test code here...<br>
      Test code here...<br>
      Test code here...<br>
    </div>
    <h2 style="margin-top:30px">实验报告评分标准</h2>
    <hr>
    <div class="content">
      Test code here...<br>
      Test code here...<br>
      Test code here...<br>
      Test code here...<br>
    </div>
    <div class="choice">
      <el-input type="number" /><el-button type="success">打分</el-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.judge_detail {
    width: 100%;
    padding: 20px 30px;
    h2 {
        font-weight: 700;
        color: #72C2C3;
    }
    hr {
        background-color: #72C2C3;
        height: 1px;
        border: none;
        margin: 20px 0;
    }
    .content {
        background: rgba(114,194,193, 0.2);
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
