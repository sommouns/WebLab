<template lang="html">
  <div class="teacher_judge">
    <el-row>
        <el-col :span="24">
            <el-form label-width="80px">
              <el-form-item label="作业列表">
                <template>
                  <el-table
                    :data="detail"
                    min-height="150"
                    border
                    style="width: 100%">
                    <el-table-column
                      prop="reportId"
                      label="Repprt ID"
                      width="180"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="studentName"
                      label="姓名"
                      width="180"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="createdTime"
                      label="上交时间"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="grade"
                      label="评定状态"
                      align="center">
                       <template slot-scope="scope">
                         <span v-if="scope.row.grade" class="el-icon-success" style="color:green;font-size:32px"></span>
                         <span v-else class="el-icon-error" style="color:red;font-size:32px"></span>
                       </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                     <template slot-scope="scope">
                       <el-button
                         size="mini"
                         type="primary"
                         @click="handleJudge(scope.$index, scope.row)"
                          v-if="scope.row.grade">修改</el-button>
                          <el-button
                            size="mini"
                            type="danger"
                            @click="handleJudge(scope.$index, scope.row)"
                             v-else>评定</el-button>
                     </template>

                   </el-table-column>
                  </el-table>
                </template>
              </el-form-item>
            </el-form>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"JudgeLab",
  props:{
    detail:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      cur_course: {
        course_name: '',
        charpter: [],
      },
      cur_report: [],
      course: {},
    }
  },
  methods: {
   
    handleJudge( index, row ) {
      this.$router.push( `/teacher/judge_detail/${row.reportId}` )
    }
  }
}
</script>

<style lang="less">
.teacher_judge {
    .el-main{
      padding: 0
    }
    margin-left: 25px;
    width: 95%;
    padding-top: 5px;
    .box-card {
        width: 100%;
    }
}
</style>
