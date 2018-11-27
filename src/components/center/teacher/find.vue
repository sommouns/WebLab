<template lang="html">
  <div class="teacher_find">
    <el-row>
        <el-col :span="24">

            <el-row>
              <el-col :span="24">
                <el-col :span="6" style="height:36rem;box-sizing:border-box;overflow:scroll;">
                  <el-card class="box-card"  v-for="item in course" :key="item.name">
                    <img src="https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg" alt="" @mouseover="mixins" style="width:100%" class="hov_img" @click="toFind(item)">
                    <div class="course_title clearfix mgtb" align="center">
                      {{item.name}}
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="17" offset="1" class="chapter_preview" style='background:#62b2C3;min-height:36rem;padding:20px;'>
                  <el-card v-if="charpter.length >0">
                    <h2>Charpter</h2>
                    <ul>
                      <li v-for="item in charpter" :key="item.index"  @click="toDetail(item)">
                        <el-col :span="2">
                            第{{item.index}}节
                        </el-col>
                        <el-col :span="6">
                            {{item.name}}
                        </el-col>
                      </li>
                    </ul>
                  </el-card>
                  <div class="" v-else style="width:100%;height:35rem;text-align:center;line-height:35rem;font-size:42px;font-weight:700;color:rgba(0,0,0,.3)">
                    请从左侧课程列表选择课程

                  </div>
                </el-col>
              </el-col>

            </el-row>

        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rate: '',
      course_name: '',
      charpter: [],
      course: [ {
          name: 'Excel就业班',
          charpter: [ {
              index: 1,
              name: '如何开机',
              key: 212346
            },
            {
              index: 2,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
          ]
        },
        {
          name: 'PPT就业班',
          charpter: [ {
              index: 1,
              name: '如何开机',
              key: 212346

            },
            {
              index: 2,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
          ]
        },
        {
          name: 'JAVA就业班',
          charpter: [ {
              index: 1,
              name: '如何开机',
              key: 212346

            },
            {
              index: 2,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
          ]
        },
        {
          name: 'JAVA就业班',
          charpter: [ {
              index: 1,
              name: '如何开机',
              key: 212346

            },
            {
              index: 2,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
            {
              index: 3,
              name: '如何开机',
              key: 212346

            },
            {
              index: 4,
              name: '如何关机',
              key: 212346

            },
          ]
        }
      ]
    }
  },
  methods: {
    mixins( e ) {},
    toFind( item ) {
      this.charpter = item.charpter

    },
    toDetail( item ) {
      this.$router.push( 'find_detail/' + item.key )
    }
  }
}
</script>

<style lang="less">
.teacher_find {
    margin-left: 25px;

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
