<template lang="html">
  <div class="student_history" style="padding-top:25px;padding-left:25px;margin-left:20px" v-loading="isloading">
      <HistoryTable :log="log"/>
    <div class="block" style="text-align:center;position:absolute;left:50%;transform:translateX(-50%)" >
      <el-pagination layout="prev, pager, next" :total="totalLog"  @current-change="handleCurrentChangeLab">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import {getStudentLog} from '@/api/myAPI'
import HistoryTable from '@/components/center/student/history';

export default {
    components: {
        HistoryTable
    },
  async created() {
    const res = await getStudentLog(1)
    console.log(res)
    this.log = res.data.pageResult.listData
    this.totalLog = res.data.pageResult.totalPage * 10
    this.isloading = false
  },
  methods: {
    async handleCurrentChangeLab( val ) {
      this.isloading = true
      const res = await getStudentLog(val)
      this.log = res.data.pageResult.listData
      this.isloading = false
    },
    toCourseDetail( key ) {
      console.log( key )
      this.$router.replace( '/detail/' + key )
    }
  },
  computed: {
  },
  data() {
    return {    
      log:[],
      isloading: true,
      totalLog:0
    }
  }
}
</script>

<style lang="less">
.student_history {
    position: relative;
    padding-bottom: 30px;
    width: 100%;
    .el-card{
      .el-card__body{
      }
      padding-bottom:20px;
      height: 4rem;

    }
    
    .course_to_detail {}

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:after,
    .clearfix:before {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }
    .his_item {
        box-sizing: border-box;
        margin-left: 25px;
        margin-right: 35px;
        padding-bottom: 5px;
        margin-bottom: 25px;
        font-size: 17px;

        .course_title {
            float: left;
            margin-right: 15px;
            min-width: 10rem;
        }
        .course_sub_title {
            float: left;
            color: #aaa;
            font-size: 15px;
            line-height: 24px;
        }
        .course_date {
            float: right;
        }
    }
    .his_item:hover {
    }
}
</style>
