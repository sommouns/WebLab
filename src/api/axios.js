import axios from 'axios'

axios.interceptors.request.use( ( config ) => {
  let {
    token
  } = window.localStorage.getItem( "user" )
  if ( token ) {
    config.headers.Authorization = token; //将token放到请求头发送给服务器

    //这里主要是为了兼容IE9
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    if ( browser == 'Netscape' && b_version.indexOf( ';' ) < 0 ) { //火狐
    } else {
      if ( b_version.indexOf( ';' ) < 0 ) {
        return config;
      }
      var version = b_version.split( ";" );
      var trim_Version = version[ 1 ].replace( /[ ]/g, "" );
      if ( browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0" ) { //IE9
        if ( config.url.indexOf( '?' ) > 0 ) {
          config.url = config.url + "&token=" + JSON.parse( token ).value;
        } else {
          config.url = config.url + "?token=" + JSON.parse( token ).value;
        }
      }
    }
  } else {
    localStorage.clear(); //清空缓存
    if ( router.currentRoute.name && router.currentRoute.name.toLowerCase() == "login" ) {
      //这里需要排除登陆(或者说是第一次请求获取token)的时候的请求验证，我这里没做处理
      //我的后台api接口，并没有对login接口做token验证，所以这里不做处理
    } else {
      //除登陆接口外，其他需要token验证的方法，会走这里且返回null
      return null;
    }
  }
  return config;
}, function( err ) {
  // return Promise.reject(err);
} );

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response; //请求成功的时候返回的data
  },
  error => {
    try {
      if ( error.response ) {
        switch ( error.response.status ) {
          case 401: //token过期，清除token并跳转到登录页面
            localStorage.clear();
            var baurl = window.location.href;
            router.replace( {
              path: 'login',
              query: {
                backUrl: baurl
              }
            } );
            return;
        }
      }
      return Promise.reject( error.response.data )
    } catch ( e ) {}
  } );