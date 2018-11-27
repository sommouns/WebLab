<template>
<div class="std-info" style="width:100%;margin-left:50px">
  <el-row>
    <el-col :span="4">
      <div class="head">
        <img src="http://img0.imgtn.bdimg.com/it/u=1285245409,4077430671&fm=11&gp=0.jpg" alt="" style="width:100%">
      </div>
    </el-col>
    <el-col :span="19" offset="1" style="padding-top:20px">
      <div class="id">账号：{{user.id}}</div>
      <div class="id">姓名：{{stdinfo.name}}</div>
      <div class="id">学号：{{stdinfo.stdId}}</div>
      <div class="id">班级：{{stdinfo.class}}</div>
    </el-col>
  </el-row>

  <hr>
  <el-row>
    <h2>其他信息</h2>
    <p>text code here ...</p>
  </el-row>
  <!-- <el-tabs type="border-card">
    <el-tab-pane label="账号信息">
      <div class="id">账号：{{user.id}}</div>
      <div class="id">姓名：{{stdinfo.name}}</div>
      <div class="id">学号：{{stdinfo.stdId}}</div>
      <div class="id">班级：{{stdinfo.class}}</div>
    </el-tab-pane>
    <el-tab-pane label="我的实验记录">
      <el-card class="box-card">
        <div class="text item clearfix" v-for="item in curLab" :key="item.title">
          <div class="course_title">{{item.title}}</div>

          <div class="course_sub_title">{{item.subtitle}}</div>
          <div class="course_date">{{item.date}}</div>
        </div>
      </el-card>
      <div class="block" style="text-align:center">
        <el-pagination layout="prev, pager, next" :total="paginationTotalLab" :current-page="currentPageLab" @current-change="handleCurrentChangeLab">
        </el-pagination>
      </div>
    </el-tab-pane>
    <el-tab-pane label="我的实验报告">
      <el-card class="box-card">
        <div class="text item" v-for="item in curReport" :key="item.title" style="border-bottom:1px dashed #aaa;padding-bottom:5px">
          <router-link :to="{ name: '', params: {} }" type="div">
            <div class="report_title">{{item.title}}<span>{{item.date}}</span></div>

          </router-link>
        </div>
      </el-card>
      <div class="block" style="text-align:center">
        <el-pagination layout="prev, pager, next" :total="paginationTotalReport" :current-page="currentPageReport" @current-change="handleCurrentChangeReport">
        </el-pagination>
      </div>
    </el-tab-pane>
  </el-tabs> -->
</div>
</template>
<script>
export default {
  created() {
    this.user = JSON.parse( localStorage.getItem( 'user' ) )
    this.curLab = this.lab.slice( ( 1 - 1 ) * 5, ( 1 - 1 ) * 5 + 5 )
    this.curReport = this.report.slice( 1, 6 )
  },
  methods: {
    handleCurrentChangeLab( val ) {
      // console.log(`当前页: ${val}`);
      this.curLab = this.lab.slice( ( val - 1 ) * 5, ( val - 1 ) * 5 + 5 )
    },
    handleCurrentChangeReport( val ) {
      this.curReport = this.report.slice( ( val - 1 ) * 5, ( val - 1 ) * 5 + 5 )
    }
  },
  computed: {
    paginationTotalLab() {
      return Math.ceil( this.lab.length / 5 ) * 10
    },
    paginationTotalReport() {
      return Math.ceil( this.report.length / 5 ) * 10
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
      ],
    }
  }
}
</script>

<style lang="less">
.std-info {
    hr {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
.std-info .box-card {
    margin-bottom: 3px;
}

.std-info .report_title {
    color: #000;
}

.std-info .report_title span {
    display: inline-block;
    font-size: 0.9em;
    color: #aaa;
    float: right;
}

.std-info .text {
    font-size: 14px;
}

.std-info .item {
    margin-bottom: 18px;
}

.std-info .clearfix:after,
.std-info .clearfix:before {
    display: table;
    content: "";
}

.std-info .clearfix:after {
    clear: both;
}

.std-info .box-card {
    width: 100%;
}

.std-info .course_sub_title,
.std-info .course_title {
    float: left;
}

.std-info .course_sub_title {
    margin-left: 5px;
    color: #aaa;
}

.std-info .course_date {
    float: right;
}

.std-info .id {
    line-height: 2em;
    font-size: 'microsoft yahei';
}

.std-info {
    padding-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
