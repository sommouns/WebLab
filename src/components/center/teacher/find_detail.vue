<template lang="html">
  <div class="find_detail">

      <el-row>
        <el-col :span="24" offset="1">
          <el-row style="float:right;margin-right:50px;">
              <el-col :span="12" v-if="rate!==''">
                  <span style="font-family: 'Poiret One', cursive;font-size:82px;color:rgb(0,220,0);margin-right:20px" v-if="detail.rate>=80">{{detail.rate}}%</span>
                  <span style="font-family: 'Poiret One', cursive;font-size:82px;color:orange" v-if="detail.rate<80&&detail.rate>60">{{detail.rate}}%</span>
                  <span style="font-family: 'Poiret One', cursive;font-size:82px;color:rgb(220,0,0)" v-if="detail.rate<60">{{detail.rate}}%</span>
              </el-col>
          </el-row>
          <el-row style="margin-top:30px">
              <div style="line-height:40px;font-size:22px">实验名称：<span>{{detail.name}}</span></div>
              <div style="line-height:40px;font-size:22px">章节序号：<span>2</span></div>
          </el-row>
          <el-row>
            <template>
              <el-table
                :data="detail.person"
                height="400"
                border
                style="width: 90%"
                >
                <el-table-column
                  prop="name"
                  label="姓名">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
              </el-table>
              </template>
          </el-row>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'find_detail',
  props: {
    detail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
.find_detail {
    margin-left: 25px;
    width: 100%;

    .box-card {
        padding-right: 25px;
        box-sizing: border-box;
    }
    td {}
}
</style>
