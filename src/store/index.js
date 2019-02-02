import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'

Vue.use( Vuex )
const store = new Vuex.Store( {
  state: {
    user: false,
    diaShow: false,
    LabList: [ {
      key: 1,
      label: "Linux实验"
    }, {
      key: 2,
      label: "Docker实验"
    } ],
    value: []
  },
  getters: {
    getUser( state ) {
      return state.user
    },

  },

  mutations: {
    SETINFO( state, payload ) {
      if ( payload !== false ) {
        state.user = payload
        console.log(payload)
        payload = JSON.stringify(payload)
        localStorage.setItem( 'user', payload )
      } else {
        localStorage.setItem( 'user', false )
      }
    },
    TOGGLEDIASHOW( state, payload ) {
      this.state.diaShow = !this.state.diaShow
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
