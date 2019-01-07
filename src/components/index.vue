<template>
<div class="main_index" style="display:flex;flex-direction:column">
  <div style="position:fixed;height:100%;width:100%;background:rgba(0,0,0,.8);z-Index:9999" v-if="this.$store.state.diaShow">
    <div class="dialog" style="padding:3rem 2rem;box-sizing:border-box;height:33rem;width:36rem;background:#fff;position:absolute;left:50%;top:50%;border-radius:2rem;transform:translate(-50%,-50%)">
      <h3 style="font-weight:normal">实验列表</h3>
      <br>
      <el-transfer filterable filter-placeholder="请输入实验拼音" v-model="value2" :data="this.$store.state.LabList">
      </el-transfer>
      <div class="" style="position:absolute;bottom:5rem;text-align:right">
        <el-button type="primary" @click="confirm">确定</el-button>
        <el-button @click="toggle">取消</el-button>
      </div>
    </div>
  </div>
  <Header style="position:fixed;top:0;width:100%;z-index:2001"></Header>
  <div class="sub_nav_bar">
    <ul>
      <router-link tag="li" to="/">首页</router-link>
      <router-link tag="li" to="/morecourse">全部课程</router-link>
      <li @click="toCenter">我的主页</li>
    </ul>
  </div>
  <router-view style="position:absolute;top:128px;left:0;bottom:0;width:100%;background:#eee" />
</div>
</template>

<script>
import Header from '@/components/index/header'
import {
  getUserInfo,
  userLogOut
} from '@/api/myAPI'
export default {
  async created() {
    let res = await getUserInfo()
    let data = res.data
    if ( res.status ) {
      if ( data.meta.success === true ) {
        const logInfo = data.data
        let token = localStorage.getItem( 'token' )
        this.$store.dispatch( 'setInfo', {
          token,
          ...logInfo
        } )
        this.user = {
          ...logInfo
        }
        this.islogin = true
      }
    } else {

    }
  },
  methods: {
    toCenter() {
      const info = this.user.Logininfo
      info.usertype === 0 ? this.$router.push( '/student' ) : this.$router.push( '/teacher' )
    },
    toggle( data ) {
      console.log( data )
      this.$store.commit( 'TOGGLEDIASHOW' )
    },
    confirm() {
      this.$store.state.value = this.value2
    }
  },
  name: 'index',
  components: {
    Header
  },
  data() {
    const generateData2 = _ => {
      const data = [];
      const cities = [ '上海', '北京', '广州', '深圳', '南京', '西安', '成都' ];

      cities.forEach( ( city, index ) => {
        data.push( {
          label: city,
          key: index,
        } );
      } );
      return data;
    };
    return {
      data2: generateData2(),
      value2: [],
      filterMethod( query, item ) {
        return item.pinyin.indexOf( query ) > -1;
      },
    }
  }
}
</script>
<style media="screen" lang="less">
.main_index {
    height: 100%;
    width: 100%;
    background: #fff;
    position: relative;
    z-index: 1;
    flex-direction: column;
    .sub_nav_bar {
        background: #fafafa;
        height: 3rem;
        box-sizing: border-box;
        margin-top: 80px;
        ul {
            height: 3rem;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            width: 1180px;
            margin: 0 auto;
            li {
                list-style: none;
                line-height: 3rem;
                font-size: 1.1rem;
                flex: 1;
                cursor: pointer;
                text-align: center;
                transition: 0.5s all ease-out;
                box-sizing: border-box;
                background: linear-gradient(to bottom, #fafafa, #eee);
                border-left: 1px solid #999;
                border-right: 1px solid #999;
            }
            li:active,
            li:hover {
                background: #22272f;
                color: #fff;
                transform: scaleY(120%);
            }
        }
    }
}
</style>
