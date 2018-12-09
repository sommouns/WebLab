import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'

Vue.use( Vuex )
const store = new Vuex.Store( {
  state: {
    user: false
  },
  getters: {
    getUser( state ) {
      return state.user
    }
  },
  mutations: {
    SETINFO( state, payload ) {
      if ( payload !== false ) {
        state.user = payload
        localStorage.setItem( 'token', payload.token )
      } else {
        localStorage.setItem( 'user', false )
      }
    }
  },
  actions: {
    setInfo( {
      commit
    }, payload ) {
      commit( 'SETINFO', payload )
    }
  }
} )
export default store

// state: {
//   user: false
// },
// getters: {
//
// },
//
// mutations: {
//   setInfo( state, info ) {
//     if ( info !== false ) {
//       localStorage.setItem( 'user', JSON.stringify( info ) )
//       state.user = info
//     } else {
//       localStorage.setItem( 'user', false )
//     }
//
//   }
// },
// actions: {
//
// }