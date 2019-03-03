<template>
<div class="main_index" style="display:flex;flex-direction:column">
  <Header style="position:fixed;top:0;width:100%;z-index:2001"></Header>
  <div class="sub_nav_bar">
    <ul>
      <router-link tag="li" to="/">首页</router-link>
      <router-link tag="li" to="/morecourse">全部课程</router-link>
      <li @click="toCenter">我的主页</li>
    </ul>
  </div>
  <router-view style="position:absolute;top:112px;left:0;bottom:0;width:100%;background:#eee" />
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
        this.$store.dispatch( 'setInfo', logInfo)
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
      const info = this.userInfo
      info.usertype === 0 ? this.$router.push( '/student' ) : this.$router.push( '/teacher' )
    },
    toggle( data ) {
      console.log( data )
      this.$store.commit( 'TOGGLEDIASHOW' )
    },
    confirm() {
      this.$store.state.value = this.value2
      this.toggle()
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
        height: 2rem;
        box-sizing: border-box;
        margin-top: 80px;
        ul {
            margin: 0 auto;
            width: 1180px;
            margin: 0 auto;
            li {
                width: 8em;
                list-style: none;
                font-size: .9rem;
                line-height: 2em;
                float:left;
                cursor: pointer;
                text-align: center;
                transition: 0.5s all ease-out;
                box-sizing: border-box;
            }
            li:active,
            li:hover {
                background: #22272f;
                color: #fff;
                transform: translateY(10%);
                box-shadow: 8px 0px 8px -8px black, -8px 0px 8px -8px black;
                position: relative;
            }
        }
    }
}
</style>
