<template lang="html">
  <div class="lab_report_detail">
    <div class="detail_title">
      <i class="el-icon-edit-outline"></i>  {{title}}
    </div>
    <hr>
    <div class="detail_subtitle">
      <i class="el-icon-warning"></i> 实验要求
    </div>
    <div class="instruction">
      {{instruction}}
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
    <div class="">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'PHP实战',
      instruction: " ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ...Test code here ..."
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
            color: #72C2C3;
        }
    }
    hr {
        color: #72C2C3;
        margin: 15px 0;
    }
    .detail_subtitle {
        font-size: 20px;
        margin-bottom: 5px;
        i {
            color: #72C2C3;
        }
    }
    .instruction,
    .my_report {
        font-size: 14px;
    }
}
</style>
