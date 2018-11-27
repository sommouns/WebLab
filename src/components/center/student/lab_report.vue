<template lang="html">
  <div class="lab_report" >
      <div class="text report_item" v-for="(item, index) in curReport" :key="item.title" style="border-bottom:1px dashed #aaa;padding-bottom:5px">
        <router-link :to="{ name: 'StudentReportDetail', params: {id:index} }" type="div" style="width:100%">
          <div class="report_title">{{item.title}}</div>
          <div class="report_subtitle">
            {{item.subtitle}}
          </div>
          <div class="report_to_detail">
            <el-button type="danger">查看详情</el-button>
          </div>
          <div class="report_date">
            <span>{{item.date}}</span>
          </div>

        </router-link>
      </div>
    <div class="block" style="text-align:center;position:absolute;bottom:0;left:50%;transform:translateX(-50%)">
      <el-pagination layout="prev, pager, next" :total="paginationTotalReport" :current-page="currentPageReport" @current-change="handleCurrentChangeReport">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.curReport = this.report.slice( 0, 10 )
  },
  methods: {
    handleCurrentChangeReport( val ) {
      this.curReport = this.report.slice( ( val - 1 ) * 10, ( val - 1 ) * 10 + 10 )
    }
  },
  computed: {
    paginationTotalReport() {
      return Math.ceil( this.report.length / 10 ) * 10
    }
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
      ],
      report: [ {
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
          subtitle: '第5章',
          date: '2017-12-6'
        },
        {
          title: 'PPt实验',
          subtitle: '第1章',
          date: '2017-12-7'
        }
      ],
    }
  }
}
</script>

<style lang="less">
.lab_report {
    position: relative;
    width: 100%;
    padding-bottom: 40px;
    padding-top: 10px;
    .report_item {
        box-sizing: border-box;
        height: 35px;
        font-size: 18px;
        padding: 3px 25px;
        margin-right: 25px;
        margin-top: 15px;
        margin-left: 25px;
        .report_to_detail {
            float: right;
        }
        .report_title {
            color: #000;
            margin-right: 25px;
            width: 100px;
        }
        .report_subtitle {
            font-size: 0.9em;
            color: #aaa;
            width: 60px;
        }
        .report_date {
            color: #000;
            font-size: 0.9em;
            float: right;
            margin-right: 15px;
        }

        .el-button {
            height: 23px;
            line-height: 0;
        }
    }
    .report_item * {
        display: inline-block;
    }

    .report_item:hover .report_date,
    .report_item:hover .report_subtitle,
    .report_item:hover .report_title {
        color: #72C2C3;
    }
}
</style>
