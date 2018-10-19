import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Register from '@/components/register'
import Login from '@/components/login'
import Main from '@/components/index/main'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          name: 'Main',
          component: Main
        }
      ]
    },{
      path: '/Register',
      name: 'Register',
      component: Register
    }
    ,{
      path: '/Login',
      name: 'Login',
      component: Login
    } 
  ]
})
