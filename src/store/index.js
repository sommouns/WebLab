import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )
const store = new Vuex.Store( {
  state: {
    user: false
  },
  getters: {

  },

  mutations: {
    setInfo( state, info ) {
      if ( info !== false ) {
        localStorage.setItem( 'user', JSON.stringify( info ) )
        state.user = info
      } else {
        localStorage.setItem( 'user', false )
      }

    }
  },
  actions: {

  }
} )

export default store