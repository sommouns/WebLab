import { mapGetters, mapActions } from 'vuex'

export const userMixin = {
    computed: {
        ...mapGetters([
            'userInfo',
            'isLogin'
        ])
    },
    methods: {
        ...mapActions([
            'setUserInfo',
            'setIsLogin'
        ]),
    }
}