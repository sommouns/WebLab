import axios from 'axios'

export const postParams = async ( url, params ) => {
  const res = await axios( {
    method: 'post',
    url: `/api/${url}`,
    params
  } );
  return res
}
export const postData = async ( url, data ) => {
  const res = await axios( {
    method: 'post',
    url: `/api/${url}`,
    data
  } );
  return res
}
export const get = async ( url, params ) => {
  let {
    token
  } = window.localStorage.getItem( 'user' )
  const res = await axios( {
    method: 'get',
    url: `/api/${url}`,
    params,
    headers: {
      'token': token
    }
  } );
  return res
}