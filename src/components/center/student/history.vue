<template>
  <el-table :data="log" style="width: 100%" class="animated fadeIn">
    <el-table-column prop="courseName" label="课程名称" width="180"></el-table-column>
    <el-table-column prop="courseTemplate" label="实验名称" width="180"></el-table-column>
    <el-table-column prop="operateTime" label="操作时间"></el-table-column>
  </el-table>
</template>

  <script>
import 'animate.css'

export default {
  props: {
    log: {
      type: Array,
      required: true
    }
  }
};
</script>