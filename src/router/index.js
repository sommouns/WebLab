import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Register from '@/components/register'
import Login from '@/views/login'
import Main from '@/components/index/main'


//student router
import Student from '@/views/center/student'
import StudentInfo from '@/views/center/student-center/student-info';
import StudentHistory from '@/views/center/student-center/student-lab-history';
import StudentReport from '@/views/center/student-center/student-reports';
import StudentReportDetail from '@/views/center/student-center/student-report-detail'
import StudentCourse from '@/views/center/student-center/student-course'

//teacher router
import Teacher from '@/views/center/teacher'
import TeacherInfo from '@/views/center/teacher-center/teacher-info'
import TeacherPublish from '@/views/center/teacher-center/teacher-publish-course'
import TeacherModify from '@/components/center/teacher/modify'
import TeacherJudge from '@/components/center/teacher/judge'
import TeacherFind from '@/components/center/teacher/find'
import TeacherFindDetail from '@/components/center/teacher/find_detail'
import TeacherJudgeDetail from '@/views/center/teacher-center/teacher-judge-report-detail'
import TeacherPublishNewLab from '@/components/center/teacher/publishnewlab'
import TeacherJudgeReport from '@/views/center/teacher-center/teacher-judge-report'
import TeacherViewCourse from '@/views/center/teacher-center/teacher-course'


//admin router
import Admin from '@/components/center/admin/'
import AdminLab from '@/components/center/admin/lab'
import AdminTeacher from '@/components/center/admin/teacher'
import AdminStudent from '@/components/center/admin/student'



import CourseDetail from '@/views/course/detail'
import Lab from '@/views/lab'
import WebView from '@/views/WebView'
import Questions from '@/views/questions'
import MoreCourse from '@/views/course/index'

import Demo from '@/components/demo'
Vue.use( Router )

export default new Router( {
  mode: 'hash',
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
          path: '/demo',
          name: 'Demo',
          component: Demo,
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
          redirect: '/student/course',
          children: [ {
              path: '/student/course',
              name: 'StudentCourse',
              component: StudentCourse,
              meta: {
                requireAuth: true
              },
            }, {
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
          redirect: '/teacher/publish',
          children: [ {
              path: '/teacher/info',
              name: 'TeacherInfo',
              component: TeacherInfo,
              meta: {
                requireAuth: true
              },
            },
            {
                path: '/teacher/viewCourse',
                name: 'TeacherViewCourse',
                component: TeacherViewCourse,
                meta: {
                  requireAuth: true
                },
              },
            {
              path: '/teacher/publishnewlab',
              name: 'TeacherPublishNewLab',
              component: TeacherPublishNewLab,
              meta: {
                requireAuth: true
              },
            },
            {
              path: '/teacher/judgeReport',
              name: 'TeacherJudgeReport',
              component: TeacherJudgeReport,
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
      path: '/demo',
      name: 'Demo',
      component: Demo,
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
    },
    {
      path: '/webview/:key',
      name: 'WebView',
      component: WebView,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/questions/:key',
      name: 'questions',
      component: Questions,
      meta: {
        requireAuth: true
      },
    }

  ]
} )
