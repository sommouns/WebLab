import {
  postParams,
  postData,
  getWithToken,
  getWithNoToken,
  deleteWithToken,
  putWithToken
} from './util.js'



//通用API
//获取首页推荐课程
export const getHotCourses = () => new Promise( async ( resolve, reject ) => {
  const res = await getWithNoToken( '/course/v1/courses' )
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
    console.log(res.data.data)
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//删除课程
export const deleteCourse = ( courseId ) => new Promise( async ( resolve, reject ) => {
  const res = await deleteWithToken( `course/v1/course/${courseId}` )
  if ( res.data.meta.success === true ) {
    resolve( res.data )
  } else {
    reject( res )
  }
} )
//查看课程下的实验报告
export const getAllReports = ( courseId, tempId, currentPage ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `/course/v1/course/${courseId}/courseTemp/${tempId}/reports?currentPage=${currentPage}` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//查看指定实验报告
export const checkDestReport = ( repoid ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `/report/v1/repot/${repoid} ` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//获取实验模板
export const getTempList = ( repoid ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `courseTemp/v1/courseTemps` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//查看参与该课程的学生
export const getStdList = ( courseId ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `/course/v1/course/${courseId}/students` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//暂停课程报名
export const stopEnlist = ( courseId ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `/course/v1/course/${courseId}/stopCourse ` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//参与课程
export const joinCourse = ( courseId ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `course/v1/course/${courseId}/courseJoin ` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//评定实验报告
export const judgeReport = ( reportId, info ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await putWithToken( `report/v1/report/${reportId} `, info)
    if ( res.status === 200 ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}
//查看指定实验报告内容
export const getTarReportContent = ( reportId ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `/report/v1/repot/${reportId}` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//查看指定课程实验模板
export const getTarTemp = ( tempId ) => new Promise( async ( resolve, reject ) => {
  const res = await getWithToken( `/courseTemp/v1/courseTemp/${tempId} ` )
  if ( res.data.meta.success === true ) {
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//添加实验报告
export const submitMyReport = ( info ) => new Promise( async ( resolve, reject ) => {
  const res = await postData( `/report/v1/report`, info)
  
  if ( res.data.meta.success === true ) {
    
    resolve( res.data.data )
  } else {
    reject( res )
  }
} )
//登陆
export const login_api = ( { username, password } ) => {
  return new Promise( ( resolve, reject ) => {
    const res = postData( '/system/v1/login', {
      username,
      password
    } )
    resolve( res )
  } )
}
//登出
export const userLogOut_api = () => {
  return new Promise( async ( resolve, reject ) => {
    const res = await getWithToken( '/system/v1/logout' )
    if ( res.status === 200 ) {
      resolve( res.data )
    } else {
      reject( res )
    }
  } )
}

//获取用户信息
export const getUserInformation_api = () => {
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
//修改学生个人信息
export const modifyStudentInfo = ( info ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await putWithToken( 'student/v1/info', info)
    if ( res.status === 200 ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}
//教师端
//修改教师个人信息
export const modifyTeacherInfo = ( info ) => {
  return new Promise( async ( resolve, reject ) => {
    const res = await putWithToken( 'teacher/v1/info', info)
    if ( res.status === 200 ) {
      resolve( res.data )
    } else {
      reject( res.data )
    }
  } )
}
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

//上传图片
export const uploadImg = (file) => {
  return new Promise(async (resolve, reject) => {
    const res = await postWithData('/system/v1/upload', file)
    if (res.data.meta.success === true) {
      resolve(res.data)
    }else {
      reject(res.data)
    }
  })
}
