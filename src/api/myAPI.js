import {
  postParams,
  postData,
  get
} from './util.js'

//index
export const getMyCourses = () => new Promise( async (resolve, reject) => {
  const res = await get('/course/v1/courses')
  console.log(res)
  if (res.data.meta.success === true) {
    resolve(res.data.data)
  }else{
    reject(res)
  }
})
export const getCourseDetail = (courseId) => new Promise( async (resolve, reject) => {
  const res = await get(`/course/v1/course/${courseId}`)
  if (res.data.meta.success === true) {
    resolve(res.data.data)
  }else{
    reject(res)
  }
})



//system (Login Logout)
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
export const userLogOut = () => {
  return new Promise( async ( resolve, reject ) => {
    const res = await get( '/system/v1/logout' )
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
export const getUserInfo = () => {
  return new Promise( ( resolve, reject ) => {
    const res = get( '/system/v1/logininfo' )
    resolve( res )
  } )
}

//student
export const getStudentInfo = () => {
  return new Promise( async ( resolve, reject ) => {
    const res = await get( '/student/v1/info' )
    if ( res.status === 200 ) {
      resolve( res.data )
    }
  } )
}
export const getStudentJoinedCourse = (currentPage) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await get('student/v1/courses', {currentPage})
    console.log(res)
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    }else {
      reject(res.data)
    }
  } )
}
export const getStudentExpReport = (currentPage) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await get('student/v1/repos', {currentPage})
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    }else {
      reject(res.data)
    }
  } )
}
export const getStudentGetReportDetail = (repoid) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await get(`student/v1/repos/${repoid}` )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    }else {
      reject(res.data)
    }
  } )
}
export const getStudentLog = (currentPage) => {
  return new Promise( async (resolve, reject) => {
    const res = await get('student/v1/expLogs', {currentPage})
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    }else {
      reject(res.data)
    }
  })
}