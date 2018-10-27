import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Register from '@/components/register'
import Login from '@/components/login'
import Main from '@/components/index/main'
import Student from '@/components/center/student'
import Teacher from '@/components/center/teacher'
import Admin from '@/components/center/admin'
import StudentInfo from '@/components/center/student/info';
import Course from '@/components/center/student/course'
import CourseDetail from '@/components/allcourse/coursedetail'
import Lab from '@/components/lab/index'


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
        },
        {
          path:'/student',
          name: 'Student',
          component: Student,
          redirect: '/student/course',
          children:[
            {
              path:'/student/course',
              name: 'Course',
              component: Course,
            },
            {
              path:'/student/info',
              name: 'StudentInfo',
              component: StudentInfo
            }
          ]
        },
        {
          path:'/teacher',
          name: 'Teacher',
          component: Teacher
        },
        {
          path:'/admin',
          name: 'Admin',
          component: Admin
        },
        {
          path:'/detail/:id',
          name:'detail',
          component: CourseDetail,
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
    },
    {
      path:'/lab/:key',
      name:'Lab',
      component: Lab,

    }

  ]
})
