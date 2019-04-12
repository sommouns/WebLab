<template lang="html">
  <div class="teacher_publish  animated fadeIn">
    <el-row>
      <el-col :span="24">
            <el-form ref="form" :model="publish_form" label-width="80px" class="pb_form">
              <el-form-item label="课程名称">
                <el-input v-model="publish_form.cname" style="width:42%"></el-input>
              </el-form-item>
              <el-form-item label="课程封面" class="cover">
                <input type="file" name="cover" ref="file" value="" id="cover" @change="getFile" >
                <label for="cover">选择上传</label>
                <div class="display_img">
                  <img :src="publish_form.src" alt="">
                </div>
              </el-form-item>
              <el-form-item label="课程说明" class="cover">
                <el-input
                  type="textarea"
                  :rows="16"
                  placeholder="课程简介"
                  v-model="publish_form.cdescribe">
                </el-input>
              </el-form-item>
              <el-form-item label="课程章节" >
                <el-tag
                  v-for="tag in cur_tempList"
                  :key="tag.id"
                  closable
                  type="primary"
                  style="margin-left:5px"
                  :disable-transitions="false"
                  @close="deleteTemp(tag.id)">
                  {{tag.name}}
                </el-tag>
                <el-button plain style="display:block;"  @click="dialogFormVisible = true">添加</el-button>
              </el-form-item>
            <el-form-item label="标签">
              <el-input v-model="publish_form.tag" style="width:42%"></el-input>
            </el-form-item>
            <el-button type="success" style="margin-left:80px;background:#22272f" @click="publishCourse">发布</el-button>
            </el-form>
      </el-col>

    </el-row>
    <el-dialog title="实验" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
      <el-form :model="newCourse">
        <el-form-item label="实验模板" :label-width="formLabelWidth">
          <el-select v-model="newCourse.temp" placeholder="请选择活动区域" @change="changeTemp">
            <el-option
              v-for="item in tempList"
              :key="item.id"
              :label="item.cname"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="实验要求" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
             v-model="newCourse.desc"
             disabled>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNewCourseTemp">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createCourse, getTempList, getTarTemp } from "@/api/myAPI.js";
export default {
  async created() {
    const res = await getTempList();
    this.tempList = res.listData;
  },
  data() {
    return {
      publish_form: {
        cname: "",
        cdescribe: "",
        charpter: [
          {
            cname: "Linux实验环境",
            id: 1
          },
          {
            cname: "Wegoat实验环境",
            id: 2
          }
        ],
        src: "",
        tag: ""
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      newCourse: {
        temp: "",
        desc: "",
        name: ""
      },
      tempList: [],
      cur_tempList: []
    };
  },
  methods: {
    deleteTemp(id) {
      this.cur_tempList = this.cur_tempList.filter(item => {
        return item.id !== id;
      });
    },
    async changeTemp() {
      const res = await getTarTemp(this.newCourse.temp);
      this.newCourse.desc = res.courseTemplete.cdescribe;
      this.newCourse.name = res.courseTemplete.cname;
    },
    handleDelete(index, row) {
      this.tableData = this.tableData.filter((val, index) => {
        return val.index !== row.index;
      });
    },

    getFile(e) {
      let _this = this;
      var files = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        _this.publish_form.src = this.result;
      };
    },
    addNewCourseTemp() {
      const newCourse = {
        id: this.newCourse.temp,
        name: this.newCourse.name
      };
      this.cur_tempList.push(newCourse);

      this.dialogFormVisible = false;
    },
    publishCourse() {}
  }
};
</script>

<style lang="less">
.teacher_publish {
  width: 100%;
  padding-top: 25px;
  padding-right: 30px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 20px;
  .el-textarea.is-disabled .el-textarea__inner {
    color: #22272f;
  }
  .display_img {
    height: 10rem;
    width: 19rem;
    border: 1px solid #aaa;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .message {
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    left: 50%;
    top: 20px;
    background-color: #edf2fc;
    transition: opacity 0.3s, transform 0.4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: inline-block;
    align-items: center;
    background: #22272f;
    color: #fff;
    i:hover {
      font-weight: 700;
      cursor: pointer;
    }
    margin: 5px;
  }
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
