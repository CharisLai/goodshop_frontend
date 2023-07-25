// user

export default {
    namespaced: true,
    state() {
        return {
            // user.info
            profile: {
                id: '',
                name: '',
                email: '',
                tel: '',
                isAdmin: '',
                isSeller: '',
                token: ''
            }
        }
    },
    mutations: {
        // create
        setUser(state, payload) {
            state.profile = payload
        }
    }
}