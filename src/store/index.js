import { createStore } from 'vuex'
// 持久化
import createPersistedstate from 'vuex-persistedstate'
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'


export default createStore({
    modules: {
        cart,
        user,
        category
    },
    // 插入套件
    plugins: [
        // 預設儲存於LocalStorage
        createPersistedstate({
            // 數據名
            key: 'erabbit-client-goodshop-store',
            // module
            paths: ['user', 'cart']
        })
    ]
})