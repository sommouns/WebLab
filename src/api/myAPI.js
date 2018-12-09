import {
  postParams,
  postData,
  get
} from './util.js'
const prefix = 'http://111.231.138.158/system/v1'

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