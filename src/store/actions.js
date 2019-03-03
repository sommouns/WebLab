const actions = {
  setUserInfo({commit}, payload) {
    return commit('SET_USER_INFO', payload)
  },
  setIsLogin({commit}, payload) {
    return commit('SET_IS_LOGIN', payload)
  }
}
export default actions