import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Register from '@/components/register'
import Login from '@/components/login'
import Main from '@/components/index/main'
//student router
import Student from '@/components/center/student'
import StudentInfo from '@/components/center/student/info';
import StudentHistory from '@/components/center/student/lab_history';
import StudentReport from '@/components/center/student/lab_report';
import StudentReportDetail from '@/components/center/student/lab_report_detail'

import Course from '@/components/center/student/course'
//teacher router
import Teacher from '@/components/center/teacher'
import TeacherInfo from '@/components/center/teacher/info'
import TeacherPublish from '@/components/center/teacher/publish'
import TeacherModify from '@/components/center/teacher/modify'
import TeacherJudge from '@/components/center/teacher/judge'
import TeacherFind from '@/components/center/teacher/find'
import TeacherFindDetail from '@/components/center/teacher/find_detail'
import TeacherJudgeDetail from '@/components/center/teacher/judge_detail'


//admin router
import Admin from '@/components/center/admin/'
import AdminLab from '@/components/center/admin/lab'
import AdminTeacher from '@/components/center/admin/teacher'
import AdminStudent from '@/components/center/admin/student'



import CourseDetail from '@/components/allcourse/coursedetail'
import Lab from '@/components/lab/index'
import MoreCourse from '@/components/allcourse/morecourse'


Vue.use( Router )

export default new Router( {
  mode: 'history',
  routes: [ {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requireAuth: false
      },
      children: [ {
          path: '/',
          name: 'Main',
          component: Main,
          meta: {
            requireAuth: false
          }
        },
        {
          path: '/morecourse',
          name: 'MoreCourse',
          component: MoreCourse,
          meta: {
            requireAuth: false
          }
        },
        {
          path: '/student',
          name: 'Student',
          component: Student,
          meta: {
            requireAuth: true
          },
          redirect: '/student/history',
          children: [ {
              path: '/student/info',
              name: 'StudentInfo',
              component: StudentInfo,
              meta: {
                requireAuth: true
              },
            }, {
              path: '/student/history',
              name: 'StudentHistory',
              component: StudentHistory,
              meta: {
                requireAuth: true
              },
            },
            {
              path: '/student/report',
              name: 'StudentReport',
              component: StudentReport,
              meta: {
                requireAuth: true
              },
            },
            {
              path: '/student/report_detail/:id',
              name: 'StudentReportDetail',
              component: StudentReportDetail,
              meta: {
                requireAuth: true
              },
            }
          ]
        },
        {
          path: '/teacher',
          name: 'Teacher',
          component: Teacher,
          meta: {
            requireAuth: true
          },
          redirect: '/teacher/info',
          children: [ {
              path: '/teacher/info',
              name: 'TeacherInfo',
              component: TeacherInfo,
              meta: {
                requireAuth: true
              },
            },
            {
              path: '/teacher/publish',
              name: 'TeacherPublish',
              component: TeacherPublish,
              meta: {
                requireAuth: true
              },
            },
            {
              path: '/teacher/modify',
              name: 'TeacherModify',
              component: TeacherModify,
              meta: {
                requireAuth: true
              },
            },
            {
              path: '/teacher/find',
              name: 'TeacherFind',
              component: TeacherFind,
              meta: {
                requireAuth: true
              },
            },
            {
              path: '/teacher/judge',
              name: 'TeacherJudge',
              component: TeacherJudge,
              meta: {
                requireAuth: true
              },
            }, {
              path: '/teacher/find_detail/:json',
              name: 'FindDetail',
              component: TeacherFindDetail,
              meta: {
                requireAuth: true
              },
            }, {
              path: '/teacher/judge_detail/:id',
              name: 'JudgeDetail',
              component: TeacherJudgeDetail,
              meta: {
                requireAuth: true
              },
            }
          ]
        },
        {
          path: '/admin',
          name: 'Admin',
          meta: {
            requireAuth: true
          },
          component: Admin,
          children: [ {
              path: '/admin/admin_lab',
              name: 'AdiminLab',
              component: AdminLab,
              meta: {
                requireAuth: true
              },
            },
            {
              path: '/admin/admin_student',
              name: 'AdiminStudent',
              component: AdminStudent,
              meta: {
                requireAuth: true
              },
            }, {
              path: '/admin/admin_teacher',
              name: 'AdiminTeacher',
              component: AdminTeacher,
              meta: {
                requireAuth: true
              },
            },
          ]
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: CourseDetail,
          meta: {
            requireAuth: true
          },
        }
      ]
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        requireAuth: false
      },
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      },
    },
    {
      path: '/lab/:key',
      name: 'Lab',
      component: Lab,
      meta: {
        requireAuth: true
      },

    }

  ]
} )