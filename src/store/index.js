import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import cart from './modules/cart'



export default createStore({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        user,
        cart,
    },
    getters: {

    },
    plugins: [
        createPersistedstate({
            key: 'erabbit-client-pc-store',
            paths: ['user', 'cart']
        })
    ]
})