<template lang="html">
  <div class="teacher_publish">
    <el-row>
      <el-col :span="24">
            <el-form ref="form" :model="publish_form" label-width="80px" class="pb_form">
              <el-form-item label="课程名称">
                <el-input v-model="publish_form.name" style="width:42%"></el-input>
              </el-form-item>
              <el-form-item label="课程封面" class="cover">
                <input type="file" name="cover" value="" id="cover" @change="img_path_cahnge(e)" >
                <label for="cover">选择上传</label>
              </el-form-item>
              <!-- <el-form-item label="课程章节" class="charpter">
                <el-col :span="8" :gutter="20">
                  <el-input v-model="publish_form.key" placeholder="请输入章节序号" type="number"></el-input>
                </el-col>
                <el-col :span="8" :gutter="20"  :offset="1">
                  <el-input v-model="publish_form.charpter_name" placeholder="请输入章节名称"></el-input>
                </el-col>
                <el-col :span="2"  :offset="1">
                  <el-button type="primary" @click="addCharpter" plain>添加</el-button>
                </el-col>
              </el-form-item> -->
              <el-form-item label="课程说明" class="cover">
                <el-input
                  type="textarea"
                  :rows="16"
                  placeholder="课程简介"
                  v-model="textarea">
                </el-input>
              </el-form-item>

              <!-- <el-row>
                <el-col :span="24">
                  <el-table
                 :data="tableData"
                 style="width: 750px;margin: 0 auto"
                 :default-sort = "{prop: 'index', order: 'descending'}"
                 >
                 <el-table-column
                   prop="index"
                   label="序号"
                   sortable
                   width="250"
                   align="center">
                 </el-table-column>
                 <el-table-column
                   prop="name"
                   label="课程名称"
                   width="250"
                   align="center">
                 </el-table-column>
                 <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
               </el-table>
                </el-col>
              </el-row> -->
            </el-form>
            <el-button type="success" style="margin-left:80px;background:#22272f">发布</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import R from 'ramda'
export default {
  data() {
    return {
      publish_form: {
        name: '',
        key: '',
        charpter_name: ''
      },
      tableData: [ {
        index: 1,
        name: '开机教学',
      }, {
        index: 2,
        name: '关机教学',
      }, {
        index: 3,
        name: '如何打开百度',
      }, {
        index: 5,
        name: '嘟嘟嘟',
      } ]
    }
  },
  methods: {
    handleDelete( index, row ) {
      this.tableData = this.tableData.filter( ( val, index ) => {
        return val.index !== row.index
      } )
    },
    addCharpter() {
      this.tableData.push( {
        index: this.publish_form.key,
        name: this.publish_form.charpter_name
      } )
    }
  }
}
</script>

<style lang="less">
.teacher_publish {
    width: 100%;
    padding-top: 25px;
    padding-right: 30px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;
    .box-card {
        width: 100%;
    }
    margin-left: 25px;
    .cover {
        position: relative;
        input {
            width: 1px;
            height: 1px;
            position: absolute;

        }
    }
    .pb_form {
        width: 100%;
    }
}
</style>
