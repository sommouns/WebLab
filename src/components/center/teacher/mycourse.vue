<template lang="html">
  <div class="teacher_my_course"  style="width:90%" v-loading="isloading">
    <el-container>

      <el-aside style="padding: 20px 15px;">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="课程名称">
            <el-select v-model="cur_course" placeholder="请选择" style="width:100%" @change="changeCourse">
              <el-option
                v-for="item in course_list"
                :key="item.courseId"
                :label="item.courseName"
                :value="item.courseId">
              </el-option>
           </el-select>
          </el-form-item>
          <el-form-item label="章节名称">
            <el-select v-model="cur_charpter" placeholder="请选择" style="width:100%">
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
        <FindDetail :detail="detail"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FindDetail from '@/components/center/teacher/find_detail.vue'
import {
  getTeacherCourse,
  findTargetCourse
} from '@/api/myAPI.js'
export default {
  components: {
    FindDetail
  },
  async created() {
    const res = await getTeacherCourse( 1 )
    this.course_list = res.data.pageResult.listData
    this.cur_course = this.course_list[ 0 ].courseName
    const res2 = await findTargetCourse( 1 )
    this.charpter_list = res2.data.courseinfo.courseTempletes
    this.cur_charpter = this.charpter_list[ 0 ].cname
    this.isloading = false
  },
  methods: {
    async changeCourse( e ) {
      const res2 = await findTargetCourse( e )
      this.charpter_list = res2.data.courseinfo.courseTempletes
      this.cur_charpter = this.charpter_list[ 0 ].cname
    },
    async find() {

    }
  },
  data() {
    return {
      isloading: true,
      options: [],
      course_list: [],
      cur_course: '',
      charpter_list: '',
      cur_charpter: '',
      detail: {
        name: '如何开机',
        rate: '85',
        person: [ {
            name: 'jackson',
            date: '2018-5-9'
          },
          {
            name: 'jackson',
            date: '2018-5-9'
          },
          {
            name: 'jackson',
            date: '2018-5-9'
          },
          {
            name: 'jackson',
            date: '2018-5-9'
          },
          {
            name: 'jackson',
            date: '2018-5-9'
          },
          {
            name: 'jackson',
            date: '2018-5-9'
          },
        ]
      }
    }
  }
}
</script>

<style lang="less">
.teacher_my_course {
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
