<template lang="html">
  <div class="teacher_judge">
    <el-row>
        <el-col :span="24">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="课程名称">
                <el-select v-model="cur_course.course_name" placeholder="请选择"  @change='changeCourse(item)'>
                  <el-option
                    v-for="item in form.course"
                    :key="item.title"
                    :label="item.title"
                    :value="item.index">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="课程章节">
                <el-select v-model="cur_course.charpter" placeholder="请选择" @change='changeCharpter(item)'>
                  <el-option
                    v-for="item in course.charpter"
                    :key="item.index"
                    :label="item.name"
                    :value="item.index"
                    >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="作业列表">
                <template>
                  <el-table
                    :data="tableData"
                    min-height="150"
                    border
                    style="width: 100%">
                    <el-table-column
                      prop="studentId"
                      label="学号"
                      width="180"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="student"
                      label="姓名"
                      width="180"
                      align="center">
                    </el-table-column>

                    <el-table-column
                      prop="date"
                      label="上交时间"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="isJudge"
                      label="评定状态"
                      align="center">
                       <template slot-scope="scope">
                         <span v-if="scope.row.isJudge" class="el-icon-success" style="color:green;font-size:32px"></span>
                         <span v-else class="el-icon-error" style="color:red;font-size:32px"></span>
                       </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                     <template slot-scope="scope">
                       <el-button
                         size="mini"
                         type="primary"
                         @click="handleJudge(scope.$index, scope.row)"
                          v-if="scope.row.isJudge">修改</el-button>
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
  data() {
    return {
      cur_course: {
        course_name: '',
        charpter: [],
      },
      cur_report: [],
      course: {},
      form: {
        course: [ {
          index: '1',
          title: 'JAVA程序设计',
          charpter: [ {
            index: "1",
            name: 'diyizhang',
            reports: [ {
              studentId: 201731960119,
              student: '大根',
              date: '2017-03-18',
              isJudge: false,
            }, {
              studentId: 201731960119,

              student: '大根',
              date: '2017-03-18',
              isJudge: false,
            }, {
              studentId: 201731960119,

              student: '大根',
              date: '2017-03-18',
              isJudge: false,
            }, ]
          }, {
            index: "2",
            name: 'dierzhang',
            reports: [ {
              studentId: 201731960119,

              student: '大根',
              date: '2017-03-18',
              isJudge: false,
            }, {
              studentId: 201731960119,

              student: '大根',
              date: '2017-03-18',
              isJudge: false,
            }, {
              studentId: 201731960119,

              student: '大根',
              date: '2017-03-18',
              isJudge: false,
            }, ]
          } ]
        } ]
      },
      tableData: [ {
          studentId: 201731960119,

          student: '大根',
          date: '2017-03-18',
          isJudge: false,
        }, {
          studentId: 201731960119,

          student: '大根',
          date: '2017-03-18',
          isJudge: false,
        }, {
          studentId: 201731960119,

          student: '大根',
          date: '2017-03-18',
          isJudge: true,
        },
        {
          studentId: 201731960119,

          student: '大根',
          date: '2017-03-18',
          isJudge: true,
        }
      ]
    }
  },
  methods: {
    changeCourse() {
      for ( let i = 0; i < this.form.course.length; i++ ) {
        if ( this.form.course[ i ].index === this.cur_course.course_name ) {
          this.course = this.form.course[ i ]
          console.log( success )
          break
        }
      }
    },
    changeCharpter( item ) {
      this.course.charpter.index == item
    },
    handleJudge( index, row ) {
      this.$router.push( `/teacher/judge_detail/${row.studentId}` )
    }
  }
}
</script>

<style lang="less">
.teacher_judge {
    margin-left: 25px;
    width: 95%;
    padding-top: 30px;
    .box-card {
        width: 100%;
    }
}
</style>
