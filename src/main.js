// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
import store from './store/index.js'
import $ from 'jquery'
import R from 'ramda'


Vue.use( ElementUI )

Vue.config.productionTip = false

//路由守卫
router.beforeEach( ( to, from, next ) => {
  console.log(to.matched)
  if ( to.matched.length != 0 ) {
    console.log(to.meta.requireAuth)
    if ( to.meta.requireAuth ) { // 判断该路由是否需要登录权限
    console.log(1)

      if ( localStorage.getItem( "user" ) != "false" ) { // 通过vuex state获取当前的user是否存在
        next();
      } else {

        next( {
          path: '/login',
          query: {
            redirect: to.fullPath
          } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        } )
      }
    } else {
      console.log(2)
      // if ( Boolean( localStorage.getItem( "user" ) ) ) { // 判断是否登录
      //   if ( to.path != "/" && to.path != "/login" ) { //判断是否要跳到登录界面
      //     next();
      //   } else {
      //     /**
      //      * 防刷新，如果登录，修改路由跳转到登录页面，修改路由为登录后的首页
      //      */
      //     next( {
      //       path: '/'
      //     } )
      //   }
      // } else {
      //   next();
      // }
      next()
    }
  } else {
    next( {
      path: '/login',
      query: {
        redirect: to.fullPath
      } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    } )
  }
} )

/* eslint-disable no-new */
new Vue( {
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
} )