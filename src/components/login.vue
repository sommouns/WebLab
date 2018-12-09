<template>
<div class="login">
  <canvas style="position: absolute;z-index: -1;"></canvas>
  <el-card class="box-card card1 animate" data-ani="bounceInLeft">
    <div class="login_logo">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div style="height:4.5rem">
    </div>
    <div class="username my_form_item">
      <img src="@/assets/username.fw.png" alt="" class="item_icon">
      <input type="text" name="" value="" v-model="ruleForm.name">
    </div>
    <div class="password my_form_item">
      <img src="@/assets/psd.fw.png" alt="" class="item_icon" style="transform:translateY(-1%)">
      <input type="password" name="" value="" v-model="ruleForm.psd">
    </div>
    <div class="my_form_item">
      <router-link :to="{ name: '', params: {} }" style="color:#4280BB;font-size:12px;float:left;line-height:2.2rem">forget the password?</router-link>
      <el-button style="float:right" type="primary" @click="logIn()">Log in</el-button>
    </div>
  </el-card>
  <el-card class="box-card card2 animate" data-ani="bounceInLeft" data-delay="500">
    <div class="to_rg">
      <div style="float:left">
        Not a registered user yet?
      </div>
      <router-link :to="{ name: 'Register', params: {} }" style="color:#4280BB;float:right">Sign up now!</router-link>
    </div>
  </el-card>
</div>
</template>
<script>
import {
  login
} from '@/api/myAPI.js'
import axios from 'axios'
export default {
  mounted() {
    this.handleAnimate()
  },
  created() {

  },
  data() {
    return {
      ruleForm: {
        name: "",
        psd: ""
      },
      msg: ''
    };
  },
  methods: {
    onSubmit() {
      console.log( "submit!" );
    },
    async logIn() {
      const query = {
        username: this.ruleForm.name,
        password: this.ruleForm.psd
      }
      const {
        data
      } = await login( query )
      if ( data.meta.success === false ) {
        this.msg = data.meta.message
      } else {
        const {
          token
        } = data.data
        const payload = {
          token,
          username: this.ruleForm.name
        }
        console.log( this.$store )

        this.$store.dispatch( 'setInfo', payload )
      }
      this.$router.push( {
        name: 'Main'
      } )
    },
    handleAnimate() {
      let top = pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let vh = document.documentElement.clientHeight;
      let dom = document.querySelectorAll( ".animate" );
      [].slice.call( dom ).forEach( v => {
        if ( top + vh > v.offsetTop ) {
          var delay = v.dataset.delay;
          if ( delay ) {
            setTimeout( () => {
              v.style.opacity = 1;
              v.classList.add( v.dataset.ani )
            }, delay )
          } else {
            v.style.opacity = 1;
            v.classList.add( v.dataset.ani )
          }
        } else {
          v.classList.remove( v.dataset.ani )
          v.style.opacity = 0;
        }
      } )
    }


  }

}
</script>
<style lang="less">
body,
html {
    height: 100%;
    width: 100%;
}

.login {
    height: 100%;
    width: 100%;
    position: relative;
    /* padding-top: 30px; */
    /* background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540293197&di=ffafcf0df5e1cc32ecf03a1cff78c037&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038db7f56d7f14532f875520f74927b.png) no-repeat; */
    background: url("../assets/login_rg_bg.fw.png") no-repeat;
    background-size: cover;
    .login_logo {
        position: absolute;
        left: 50%;
        top: -3rem;
        height: 7rem;
        overflow: hidden;
        width: 7rem;
        background: #fff;
        border: 1px solid #aaa;
        transform: translateX(-50%);
        img {
            width: 100%;
        }
    }
    .card1 {
        position: absolute;
        height: 15rem;
        width: 25rem;
        top: 17rem;
        left: 50%;
        overflow: visible;
        transform: translate(-50%, -50%);
    }
    .card2 {
        position: absolute;
        height: 3rem;
        width: 25rem;
        top: 27rem;
        left: 50%;
        overflow: visible;
        transform: translate(-50%, -50%);
        .to_rg {
            line-height: 0.6rem;
            font-size: 12px;
            text-align: center;
            width: 18rem;
            margin: 0 auto;
        }
    }
    .my_form_item {
        text-align: center;
        width: 18rem;
        margin: 0 auto;
        box-sizing: border-box;
        position: relative;
        margin-bottom: 15px;
        input {
            width: 18rem;
            height: 1.9rem;
            box-sizing: border-box;
            outline: none;
            border: 1px solid #aaa;
            padding-left: 42px;
        }
        .item_icon {
            position: absolute;
            left: 0;
        }
    }
    .el-button--primary {
        margin-top: 0.2rem;
        background-image: linear-gradient(to bottom ,#56AEFB, #3477B6);
        height: 1.9rem;
        line-height: 0.4rem;
    }
}
</style>
