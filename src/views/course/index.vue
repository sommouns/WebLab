<template>
<div class="more_course  animated fadeIn">
  <el-row>
    <el-col :span="6" style="" class="more_course_filter">
      <div class="filter">
        <span>全部分类</span>
        <ul>
          <li v-for="item in typeList" :key="item" @click="handleTypeChange($event)" :class="text === item ? 'filter-active' : null">{{item}}</li>
        </ul>
      </div>
      <div class="recommend">
        <span>推荐课程</span>
        <ul>
          <li v-for="item in hot" :key="item.courseId" @click="toDetail(item.courseId)">{{item.courseName}}</li>

        </ul>
      </div>
    </el-col>
    <el-col :span="18" class="detail">
      <el-row style="text-align: right">
        <el-input placeholder="请输入内容" style="display: inline-block;width: 40%"></el-input>
        <el-button class="search el-icon-zoom-in"> 搜索</el-button>
      </el-row>
      <el-card v-for="item in courses" :key="item.courseId" @click="toDetail(item.courseId)">
        <div style="float: left;width: 12rem;height: 7rem" @click="toDetail(item.courseId)">
          <img :src="item.img" style="width: 100%;height: 100%">
        </div>
        <div class="course_info" @click="toDetail(item.courseId)">
          <el-row>
            <div class="fl title">{{item.courseName}}</div>
            <div class="fr charpter">已经更新至{{item.count}}章</div>
          </el-row>
          <el-row>
            <div class="desc">{{item.describe}}</div>
          </el-row>
          <el-row class="sm">
            <div class="tutor fl">讲师：{{item.teacherName}}</div>
            <div class="level fl"><span style="color: red">·</span> 初级</div>
            <div class="people fr">1314人学习</div>
          </el-row>
        </div>
        <div style="clear: both"></div>
      </el-card>
      <div class="block" style="text-align:center;">
        <el-pagination layout="prev, pager, next" :total="paginationTotal" :current-page="currentPage" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </el-col>

  </el-row>
</div>
</template>

<script>
import {
  getMoreCourses,
  getHotCourses
} from '@/api/myAPI'
export default {
  data() {
    return {
      typeList: [ '信息安全', '移动开发', '大数据', '操作系统', '云计算', '人工只能' ],
      courses: [],
      hot: [],
      totalPage: 10,
      currentPage: 10,
      text: '信息安全'
    }
  },
  async created() {
    const res = await getMoreCourses( 1 )
    const res2 = await getHotCourses()
    this.hot = res2.listData
    this.courses = res.pageResult.listData
    this.totalPage = res.pageResult.totalPage
    this.currentPage = res.pageResult.currentPage
  },
  methods: {
    handleTypeChange( ev ) {
      this.text = ev.target.innerText
    },
    toDetail( index ) {
      this.$router.push( `/detail/${index}` )
    },
    async handleCurrentChange( val ) {
      const res = await getMoreCourses( val )
      this.currentPage = res.currentPage
      this.courses = res.pageResult.listData
    }
  },
  computed: {
    paginationTotal() {
      return Number( this.totalPage ) * 10
    }
  }
}
</script>

<style lang="less">
.more_course {
    width: 1180px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    margin: 20px auto 0;
    .more_course_filter {
        padding: 0 30px;

        .filter,
        .recommend {
            border: 1px solid #aaa;
            border-radius: 15px 15px 0 0;
            overflow: hidden;
            span {
                font-size: 1.3em;
                padding-top: 5px;
                padding-bottom: 10px;
                display: block;
                text-align: center;
                background: #22272f;
                color: #fff;
                border-bottom: 1px solid #eee;
            }
            background: #fff;
            ul {
                padding: 15px;
                li {
                    line-height: 2.3em;
                    list-style: none;
                    cursor: pointer;
                    width: 100%;
                    height: 2.3em;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                li:hover {
                    background: #efe;
                }
            }
        }
        .filter {
            ul {
                padding: 0;
                li {
                    padding: 0 15px;
                }
                .filter-active {
                    background: #efe;
                }
            }
            margin-bottom: 20px;

        }
        .recommend {
            ul {
                padding: 0;
                li {
                    // margin:4px 0;
                    border-bottom: 1px solid #aaa;
                    padding: 0 5px;
                }
                li:nth-child(even) {}
                li:nth-child(odd) {
                    // background: #;
                }
                li:last-child {
                    margin-bottom: 0;
                }
            }

        }

    }
    .detail {
        .search {
            background: #22272f;
            color: #fff;
            font-size: 1em;
        }
        .el-card {
            margin: 15px 0;
            cursor: pointer;
            .course_info {
                float: left;
                margin-left: 10px;
                width: 600px;
                transition: 1s all ease;
                .sm {
                    font-size: 0.8em;
                    margin-top: 7px;
                    .level {
                        margin-left: 35px;

                    }
                }
                .title {
                    font-size: 1.2em;
                }
                .charpter {
                    color: #aaa;
                    font-size: 0.9em;
                }
                .desc {
                    font-size: 0.95em;
                    padding: 5px;
                    height: 3.8em;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .desc:after {
                    content: '...';
                }
                .fl {
                    float: left;
                }
                .fr {
                    float: right;
                }
            }

        }
        .el-card:hover .course_info {
            margin-left: 30px;
        }

    }
}
</style>
