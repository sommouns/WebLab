<template lang="html">
  <div class="student_list_course">
    <el-tag type="info" v-for="item in stdList" :key="item.id" >{{item.realname}}
      <span style="display:inline-block;margin-left:5rem;">{{item.classname}}</span>
      <span style="display:inline-block;margin-left:5rem;">{{item.college}}</span>
      <span style="display:inline-block;margin-left:5rem;">加入时间：{{item.jointime}}</span>
    </el-tag>
    <el-tag type="info"  v-if="stdLength === 0" style="text-align:center">
      暂无学生参加
    </el-tag>
  </div>
</template>

<script>
export default {
  name:'CourseStudentList',
  created() {
  },
  props: {
    stdList: {
      type: Array,
      required: true
    },
    stdLength: {
      type: Number,
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
.student_list_course{
  width: 100%;
  .el-tag{
    width:100%;
    margin-bottom:5px;
  }

}
</style>
