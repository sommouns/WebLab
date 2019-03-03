<template lang="html">
  <div class="teacher_judge  animated fadeIn"  style="width:90%" v-loading="isloading">
    <el-container>
      <el-aside style="padding: 20px 15px;">
        <el-form ref="form"  label-width="80px">
          <el-form-item label="课程名称">
            <el-select v-model="cur_course.courseName" placeholder="请选择" style="width:100%" @change="changeCourse">
              <el-option
                v-for="item in course_list"
                :key="item.courseId"
                :label="item.courseName"
                :value="item.courseId">
              </el-option>
           </el-select>
          </el-form-item>
          <el-form-item label="章节名称">
            <el-select v-model="cur_charpter.cname" placeholder="请选择" style="width:100%" @change="changeCharpter">
             <el-option
               v-for="item in charpter_list"
               :key="item.id"
               :label="item.cname"
               :value="item.id">
             </el-option>
           </el-select>
          </el-form-item>
          <el-button type="primary" style="display:block;width:100%" @click="find">查询</el-button>
        </el-form>
      </el-aside>
      <el-main>
        <JudgeLab :detail="detail"/>
        <div class="block" style="text-align:center">
          <el-pagination
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FindDetail from '@/components/center/teacher/find_detail.vue'
import JudgeLab from '@/components/center/teacher/judge.vue'
import {
  getTeacherCourse,
  findTargetCourse,
  getAllReports
} from '@/api/myAPI.js'
export default {
  components: {
    FindDetail,
    JudgeLab
  },
  async created() {
    const res = await getTeacherCourse( 1 )
    this.course_list = res.data.listData

    // const res2 = await findTargetCourse( 1 )
    // this.charpter_list = res2.data.courseinfo.courseTempletes
    // // this.cur_charpter = this.charpter_list[ 0 ].cname
    // this.cur_charpter = this.charpter_list[ 0 ]

    this.isloading = false
  },
  methods: {
    async changeCourse( e ) {
      const res3 = await findTargetCourse( e )
      this.charpter_list = res3.data.courseinfo.courseTempletes
      this.courseId = e
      this.cur_charpter = {}
      // this.cur_charpter = this.charpter_list[ 0 ]
    },
    async find() {
      const res = await getAllReports(this.courseId, this.tempId, 1)
      this.total = res.pageResult.totalPage ?  res.pageResult.totalPage * 10 : 10
      this.detail = res.pageResult.listData
      console.log(res)
    },
    changeCharpter(val){
      console.log(this.cur_charpter)
      this.tempId = val
    }
  },
  data() {
    return {
      isloading: true,
      options: [],
      course_list: [],
      cur_course: {},
      charpter_list: '',
      cur_charpter: {},
      detail: [],
      courseId:'',
      tempId:'',
      total:10
    }
  }
}
</script>

<style lang="less">
.teacher_judge {
    .el-form-item__content {
        margin-left: 0 !important;
        width: 100%;
    }
    .el-form-item__label {
        float: none;
    }
    .box-card {
        width: 100%;
    }
    .hov_img {
        transition: 0.5s all ease;
    }
    .hov_img:hover {
        transform: scale(0.95);
        cursor: pointer;
    }
    .el-card__body {
        padding-bottom: 0;
    }
    .chapter_preview {
        ul {
            list-style: none;
            width: 100%;
            margin-top: 20px;
            padding-left: 20px;
            li {
                display: block;
                list-style: none;
                line-height: 2em;
                font-size: 16px;
                font-family: microsoft yehei;
                height: 2em;

            }
            li:hover {
                cursor: pointer;
                color: rgb(114, 194, 195);
            }
            margin-bottom: 20px;
        }
    }
}
</style>
