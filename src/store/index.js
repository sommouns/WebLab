import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      user:JSON.parse(localStorage.getItem("user")) || {}
    },
    getters:{

    },

    mutations: {
      setInfo(state, info) {
        localStorage.setItem('user',JSON.stringify(info))
        state.user = info
      }
    },
    actions: {

    }
  })

  export default store