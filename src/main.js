// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import animate from 'animate.css'
import store from './store/index.js'
import $ from 'jquery'
import R from 'ramda'
import '@/components/config'
import 'xterm/dist/xterm.css'
require( 'froala-editor/js/froala_editor.pkgd.min' )

// Require Froala Editor css files.
require( 'froala-editor/css/froala_editor.pkgd.min.css' )
require( 'font-awesome/css/font-awesome.css' )
require( 'froala-editor/css/froala_style.min.css' )

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use( VueFroala )

Vue.use( ElementUI )

Vue.config.productionTip = false

//路由守卫
router.beforeEach( ( to, from, next ) => {
  console.log( to.matched )
  if ( to.matched.length != 0 ) {
    console.log( to.meta.requireAuth )
    if ( to.meta.requireAuth ) { // 判断该路由是否需要登录权限
      console.log( 1 )

      if ( localStorage.getItem( "token" ) != "" ) { // 通过vuex state获取当前的user是否存在
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
      console.log( 2 )
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