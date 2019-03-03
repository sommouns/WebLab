import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import actions from './actions';
import getters from './getters';

Vue.use( Vuex )
const store = new Vuex.Store( {
 modules: {
   user
 },
 actions,
 getters
} )
export default store

