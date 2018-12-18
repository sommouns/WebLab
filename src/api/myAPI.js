import {
  postParams,
  postData,
  getWithToken,
  getWithNoToken
} from './util.js'

//index
export const getHotCourses = () => new Promise( async (resolve, reject) => {
  const res = await getWithNoToken('/course/v1/courses')
  console.log(res)
  if (res.data.meta.success === true) {
    resolve(res.data.data)
  }else{
    reject(res)
  } 
})

export const getMoreCourses = (currentPage) => new Promise( async (resolve, reject) => {
  const res = await getWithNoToken('/course/v1/courses/more', {currentPage})
  console.log(res)
  if (res.data.meta.success === true) {
    resolve(res.data.data)
  }else{
    reject(res)
  } 
})

export const getCourseDetail = (courseId) => new Promise( async (resolve, reject) => {
  const res = await getWithToken(`/course/v1/course/${courseId}`)
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
export const getStudentJoinedCourse = (currentPage) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken('student/v1/courses', {currentPage})
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
    const res = await getWithToken('student/v1/repos', {currentPage})
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    }else {
      reject(res.data)
    }
  } )
}
export const getStudentGetReportDetail = (repoid) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken(`student/v1/repos/${repoid}` )
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    }else {
      reject(res.data)
    }
  } )
}
export const getStudentLog = (currentPage) => {
  return new Promise( async (resolve, reject) => {
    const res = await getWithToken('student/v1/expLogs', {currentPage})
    if ( res.data.meta.success === true ) {
      resolve( res.data )
    }else {
      reject(res.data)
    }
  })
}