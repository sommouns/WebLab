<template lang="html">
  <div class="teacher_modify">
    <el-row>
        <el-col :span="24">
              <el-row>
                  <el-col :span="12" :gutter="20" style="padding-right:25px;box-sizing:border-box">
                    <h2>已经发布的实验</h2>
                    <div class="courses" v-for="item in modify.course" :key="item.name" >
                      <img :src="item.img" alt="" height="60" >
                      <div class="course_title" @click="toModify(item)">
                        {{item.name}}
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12" :gutter="20" style="border-left:1px dashed #aaa;padding-left:25px;min-height:500px;padding-right:25px;">
                    <el-form ref="form" :model="modify_form" label-width="80px" >
                      <el-form-item label="课程名称">
                        <el-input v-model="modify_form.name" disabled class="disabled"></el-input>
                      </el-form-item>
                      <el-form-item label="课程章节" class="charpter">
                        <el-col :span="8" :gutter="20">
                          <el-input class="disabled" disabled v-model="new_c.key" placeholder="章节序号" type="number"></el-input>
                        </el-col>
                        <el-col :span="8" :gutter="20"  :offset="1">
                          <el-input class="disabled" disabled v-model="new_c.name" placeholder="章节名称"></el-input>
                        </el-col>
                        <el-col :span="2"  :offset="1">
                          <el-button class="disabled" disabled type="primary" plain>添加</el-button>
                        </el-col>
                        <br>

                      </el-form-item>
                      <el-row>
                        <el-col :span="21" offset="3">
                          <el-table
                         :data="tableData"
                         style="width: 100%"
                         :default-sort = "{prop: 'index', order: 'descending'}"
                         >
                         <el-table-column
                           prop="index"
                           label="序号"
                           sortable
                           width="80"
                           align="center">
                         </el-table-column>
                         <el-table-column
                           prop="name"
                           label="课程名称"
                           width="120"
                           align="center">
                         </el-table-column>
                         <el-table-column label="操作" align="center">
                          <template slot-scope="scope">
                            <el-button
                              size="mini"
                              type="primary"
                              @click="handleModify(scope.row)">修改</el-button>
                            <el-button
                              size="mini"
                              type="danger"
                              @click="handleDelete(scope.$index, scope.row)" style="margin-left:0">删除</el-button>
                          </template>
                        </el-table-column>
                       </el-table>
                        </el-col>
                      </el-row>
                      <el-form-item align='center' style="margin-top:15px">
                          <el-button type="success" plain class="disabled" disabled>保存</el-button>
                            <el-button type="danger" class="disabled" disabled>删除</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
              </el-row>
        </el-col>
    </el-row>
    <el-row v-if="isShowIns" style="margin-top:30px">
      <el-col :span="24">
          <el-card>
            <el-form ref="form" :model="modify_form" label-width="80px" >
              <el-form-item label="章节序号" style="float:left;width:21%;margin-right:30px">
                <el-input v-model="cur_charpter.index" type="number"></el-input>
              </el-form-item>
              <el-form-item label="章节名称" style="float:left;width:42%">
                <el-input v-model="cur_charpter.name"></el-input>
              </el-form-item>
              <el-input type="textarea" :rows="4" :value="insText" v-model="cur_charpter.text"></el-input>
              <el-col :span="24" align="right">
                <el-button>保存</el-button>
              </el-col>
            </el-form>

          </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const instruction = document.getElementsByClassName( 'teacher_modify' )[ 0 ]

export default {
  data() {
    return {
      new_c: {
        name: '',
        key: ''
      },
      cur_charpter: {
        name: '',
        text: '',
        index: ''
      },
      modify_form: {
        name: ''
      },
      isShowIns: false,
      insText: '',
      modify: {
        course: [ {
            name: 'PhotoShop实战',
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1805187435,3608860785&fm=26&gp=0.jpg',
            key: 132464566,
            charpter: [ {
              index: 1,
              name: '开机教学',
              text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'
            }, {
              index: 2,
              name: '关机教学',
              text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

            }, {
              index: 3,
              name: '如何打开百度',
              text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

            }, {
              index: 5,
              name: '嘟嘟嘟',
              text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

            } ]
          },
          {
            name: 'JAVA实战',
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1805187435,3608860785&fm=26&gp=0.jpg',
            key: 11546465,
            charpter: [ {
                index: 1,
                name: '开机教学',
                text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

              }, {
                index: 2,
                name: '关机教学',
                text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

              }, {
                index: 3,
                name: '如何打开百度',
                text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

              }, {
                index: 5,
                name: '嘟嘟嘟',
                text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

              },
              {
                index: 5,
                name: '嘟嘟嘟',
                text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

              },
              {
                index: 5,
                name: '嘟嘟嘟',
                text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

              },
              {
                index: 5,
                name: '嘟嘟嘟',
                text: '大家好安徽的发到付且u日哦亲恶人情味哦如切入权威u七二五日前二天偷偷全额提欧青沃土群殴i退额'

              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    toModify( obj ) {
      this.modify_form = obj
      this.tableData = obj.charpter,
        this.isShowIns = false
      const arr = [].slice.call( document.getElementsByClassName( 'disabled' ) )
      arr.forEach( ( val, index ) => {
        val.classList.remove( 'is-disabled' )
      } )

    },
    handleModify( index ) {
      let modifyIns = ( obj ) => {
        this.isShowIns = true;
        this.cur_charpter = obj
        $( "html,body" ).animate( {
          "scrollTop": "700px"
        }, 500 )
      }
      modifyIns( index )

    },

  }
}
</script>

<style lang="less">
.teacher_modify {
    padding: 20px;
    width: 100%;
    margin-left: 25px;
    .el-table .cell,
    .el-table th div,
    .el-table--border td:first-child .cell,
    .el-table--border th:first-child .cell {
        padding-left: 0;
    }
    .box-card {
        width: 100%;
        min-height: 600px;

    }
    .courses {
        height: 60px;
        margin: 20px 0;
        border: 1px solid #aaa;
        border-radius: 22px;
        box-shadow: 2px 2px 2px #888;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 25px;
        img {
            float: left;
        }
        .course_title {
            float: left;
            height: 60px;
            line-height: 60px;
            margin-left: 20px;
        }
        .course_title:hover {
            color: #900;
        }

    }
    .courses:hover {
        cursor: pointer;
    }
}
</style>
