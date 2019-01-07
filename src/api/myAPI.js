import {
  postParams,
  postData,
  getWithToken,
  getWithNoToken
} from './util.js'





//通用API
//获取首页推荐课程
export const getHotCourses = () => new Promise( async ( resolve, reject ) => {
  const res = await getWithNoToken( '/course/v1/courses' )
  console.log( res )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//获取更多课程
export const getMoreCourses = ( currentPage ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithNoToken( '/course/v1/courses/more', {
    currentPage
  } )
  console.log( res )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//查看课程的详情
export const getCourseDetail = ( courseId ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `/course/v1/course/${courseId}` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//登陆
export const login = ( {
  username,
  password
} ) => {
  return new Promise( ( resolve, reject ) => {
    const res = postData( '/system/v1/login', {
      username,
      password
    } )
    resolve( res )
  } )
}
//登出
export const userLogOut = () => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( '/system/v1/logout' )
    if ( res.status === 200 ) {
      this.$store.dispatch( 'setInfo', {} )
      localStorage.removeItem( 'token' )
      localStorage.removeItem( 'user' )
      resolve( res.data )
    } else {
      reject( res )
    }
  } )
}

//获取用户信息
export const getUserInfo = () => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( '/system/v1/logininfo' )
    resolve( res )
  } )
}

//student
export const getStudentInfo = () => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( '/student/v1/info' )
    if ( res.status === 200 ) {
      resolve( res.data )
    }
  } )
}
export const getStudentJoinedCourse = ( currentPage ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( 'student/v1/courses', {
      currentPage
    } )
    console.log( res )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}
export const getStudentExpReport = ( currentPage ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( 'student/v1/repos', {
      currentPage
    } )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}
export const getStudentGetReportDetail = ( repoid ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( `student/v1/repos/${repoid}` )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}
export const getStudentLog = ( currentPage ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( 'student/v1/expLogs', {
      currentPage
    } )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}

//教师端
//获取教师的课程信息
export const getTeacherCourse = ( currentPage ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( 'teacher/v1/courses', {
      currentPage
    } )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}
//获取教师个人信息
export const getTeacherInfo = () => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( 'teacher/v1/info' )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}
/*
  课程操作
*/

//查看指定课程
export const findTargetCourse = ( courseid ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( `/course/v1/course/${courseid}` )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}

//创建课程
export const createCourse = ( {
  cname,
  cdescribe,
  Img,
  courseTempletes,
  tag
} ) => {
  return new Promise( ( resolve, reject ) => {
    const res = postData( '/course/v1/course', {
      cname,
      cdescribe,
      img,
      courseTempletes,
      tag
    } )
    resolve( res )
  } )

}