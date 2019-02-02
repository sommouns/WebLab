<template lang="html">
  <div class="modify_course_info">
    <el-row>
      <el-col :span="24">
            <el-form ref="form"  label-width="80px" class="pb_form">
              <el-form-item label="课程名称">
                <el-input v-model="initInfo.cname" style="width:42%"></el-input>
              </el-form-item>
              <el-form-item label="课程封面" class="cover">
                <input type="file" name="cover" ref="file" value="" id="cover" @change="getFile" >
                <!-- <input type="file" @change="getFile" id="file"> -->
                <label for="cover">选择上传</label>
                <div class="display_img">
                  <img :src="initInfo.src" alt="">
                </div>
              </el-form-item>
              <el-form-item label="课程说明" class="cover">
                <el-input
                  type="textarea"
                  :rows="16"
                  placeholder="课程简介"
                  v-model="initInfo.cdescribe">
                </el-input>
              </el-form-item>
              <el-form-item label="课程章节" >
                <div class="message" v-for="item in this.$store.state.value">
                  <p class="el-message__content">{{item}} <i class="el-icon-close" @click="deleteCharpter(item)"></i></p>
                </div>
                <el-button plain style="display:block;" @click="open1">添加</el-button>
              </el-form-item>
            </el-form>
            <el-form-item label="标签">
              <el-input v-model="publish_form.tag" style="width:42%"></el-input>
            </el-form-item>
            <el-button type="success" style="margin-left:80px;background:#22272f" @click="create">发布</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import R from 'ramda'
import {
  createCourse
} from '@/api/myAPI.js'
export default {
   name:'ModifyCourse', 
   props:{
       initInfo:{
           type: Object,
           required: true
       }
   },
  data() {
    return {
      publish_form: {
        cname: '',
        cdescribe: '',
        charpter: [ {
          cname: "Linux实验环境",
          id: 1
        }, {
          cname: "Wegoat实验环境",
          id: 2
        } ],
        src: '',
        tag: ''
      },


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
    },
    deleteCharpter( item ) {
      this.publish_form.charpter = this.publish_form.charpter.filter( v => {
        return v.id !== item.id
      } )
    },
    getFile( e ) {
      let _this = this
      var files = e.target.files[ 0 ]
      if ( !e || !window.FileReader ) return // 看支持不支持FileReader
      let reader = new FileReader()
      reader.readAsDataURL( files ) // 这里是最关键的一步，转换就在这里
      reader.onloadend = function () {
        _this.src = this.result
      }
    },
    open1() {
      // this.$emit( "toggleee", "success" )
      this.$store.commit( 'TOGGLEDIASHOW' )
    },
    async create() {
      const res = await createCourse()
    }

  }
}
</script>

<style lang="less">
.modify_course_info {
    width: 100%;
    padding-top: 25px;
    padding-right: 30px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;
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
        transition: opacity 0.3s,transform 0.4s;
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
