const state = {
    userInfo: null,
    isLogin: false,
    count: 0
}

const mutations = {
    'SET_USER_INFO': (state, payload) => {
        state.userInfo = payload
    },
    'SET_IS_LOGIN': (state, payload) => {
        state.isLogin = payload
    }
}

export default {
    state,
    mutations
}