<template lang="html">
  <div class="student_history" style="padding-top:25px;padding-left:25px;margin-left:20px">
      <div class="text his_item clearfix" v-for="item in curLab" :key="item.title">
        <div class="course_title">{{item.title}}</div>

        <div class="course_sub_title">{{item.subtitle}}</div>
        <div class="course_date">{{item.date}}</div>
      </div>

    <div class="block" style="text-align:center;position:absolute;bottom:0;left:50%;transform:translateX(-50%)" >
      <el-pagination layout="prev, pager, next" :total="paginationTotalLab" :current-page="currentPageLab" @current-change="handleCurrentChangeLab">
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  created() {
    this.curLab = this.lab.slice( ( 1 - 1 ) * 8, ( 1 - 1 ) * 8 + 8 )
  },
  methods: {
    handleCurrentChangeLab( val ) {
      // console.log(`当前页: ${val}`);
      this.curLab = this.lab.slice( ( val - 1 ) * 8, ( val - 1 ) * 8 + 8 )
    },
    toCourseDetail( key ) {
      console.log( key )
      this.$router.replace( '/detail/' + key )
    }
  },
  computed: {
    paginationTotalLab() {
      return Math.ceil( this.lab.length / 8 ) * 10
    },
  },
  data() {
    return {
      currentPageLab: 1,
      currentPageReport: 1,
      user: {},
      stdinfo: {
        name: '谢贝贝',
        stdId: '201731960119',
        class: '计算机171'
      },
      curLab: [],
      curReport: [],
      lab: [ {
          title: 'Excel实验',
          subtitle: '第1章',
          date: '2017-12-1'
        },
        {
          title: 'Excel实验',
          subtitle: '第2章',
          date: '2017-12-5'
        },
        {
          title: 'Excel实验',
          subtitle: '第3章',
          date: '2017-12-7'
        },
        {
          title: 'Excel实验',
          subtitle: '第4章',
          date: '2017-12-6'
        },
        {
          title: 'Excel实验',
          subtitle: '第5章',
          date: '2017-12-6'
        },
        {
          title: 'PPt实验',
          subtitle: '第1章',
          date: '2017-12-7'
        },
        {
          title: 'PPt实验',
          subtitle: '第2章',
          date: '2017-12-7'
        },
        {
          title: 'PPt实验',
          subtitle: '第3章',
          date: '2017-12-7'
        },
        {
          title: 'PPt实验',
          subtitle: '第4章',
          date: '2017-12-7'
        },
        {
          title: 'PPt实验',
          subtitle: '第7章',
          date: '2017-12-7'
        },
        {
          title: 'Excel实验',
          subtitle: '第2章',
          date: '2017-12-5'
        },
        {
          title: 'Excel实验',
          subtitle: '第3章',
          date: '2017-12-7'
        },
        {
          title: 'Excel实验',
          subtitle: '第4章',
          date: '2017-12-6'
        },
        {
          title: 'Excel实验',
          subtitle: '第5章',
          date: '2017-12-6'
        },
        {
          title: 'PPt实验',
          subtitle: '第1章',
          date: '2017-12-7'
        },
        {
          title: 'PPt实验',
          subtitle: '第2章',
          date: '2017-12-7'
        },
        {
          title: 'PPt实验',
          subtitle: '第3章',
          date: '2017-12-7'
        },
        {
          title: 'PPt实验',
          subtitle: '第4章',
          date: '2017-12-7'
        },
        {
          title: 'PPt实验',
          subtitle: '第7章',
          date: '2017-12-7'
        },
      ],
    }
  }
}
</script>

<style lang="less">
.student_history {
    position: relative;
    padding-bottom: 30px;
    width: 100%;
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
            width: 110px;
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
        color: #72C2C3;
        border-bottom: 1px dashed #72c2c3;
    }
}
</style>
