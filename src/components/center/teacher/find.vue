<template lang="html">
  <div class="teacher_find">
    <el-container>

      <el-aside style="padding: 20px 15px;">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="课程名称">
            <el-select v-model="value" placeholder="请选择" style="width:100%">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
          </el-form-item>
          <el-form-item label="章节名称">
            <el-select v-model="value" placeholder="请选择" style="width:100%">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
          </el-form-item>
          <el-button type="primary" style="display:block;width:100%s">查询</el-button>
        </el-form>
      </el-aside>
      <el-main>

      </el-main>
    </el-container>

  </div>
</template>

<script>
export default {

  data() {
    return {
      rate: '',
      course_name: '',
      charpter: [],
      form: {
        name: '11'
      },
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
    .el-form-item__content {
        margin-left: 0 !important;
        width: 100%;
    }
    .el-form-item__label {
        float: none;
    }
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
