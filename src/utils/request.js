// 以axios封裝的請求工具，調用api時使用
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 1.創axios
// 導出位址
export const baseURL = ''
const instance = axios.create({
    // axios 基本配置
    baseURL,
    timeout: 5000
})
// 2.請求攔截：如有token 進行header傳遞
instance.interceptors.request.use(config => {
    /* 攔截資訊邏輯
    進行請求配置的修改
    如果本地 token  就於header 攜帶*/
    // 1. 取得用戶訊息對象
    const { profile } = store.state.user

    // 2. 判斷是否有token
    if (profile.token) {
        //3. set token
        config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
}, err => {
    return Promise.reject(err)
})

// 3.回應攔截： 剔除無用內容只取需求資訊 處理無效token
// res => res.data  取出data 直接向後台拿數據
instance.interceptors.response.use(res => res.data, err => {
    // 401狀態 排除無回應狀態
    if (err.response && err.response.status === 401) {
        // 清空無效user info
        // 跳轉到登入頁
        // 跳轉需要的登入URL 登入頁碼
        store.commit('user/setUser', {})
        // 當前URL
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        // 導入router進行跳轉 ?redirectUrl= + 當前路由URL
        router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
})

// 4.導出function 調用當前axios 發請求，返回值promise
// 請求工具function
export default (url, method, submitData) => {
    // 負責發請求：請求url 方式 提交的數據
    return instance({
        url,
        method,
        // 1.如果是get請求 需要使用params來傳遞submitData
        // 2.如果不是get 需要使用data來傳遞submitData
        // 設置 [ ] 一個動態key 
        // method: get, Get,GET 轉換成小寫來判斷
        // ['params']:submitData ===== params:submitData 
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}
