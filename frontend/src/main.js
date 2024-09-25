import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

// 設置 axios 的基礎 URL
axios.defaults.baseURL = 'http://localhost:8080/api'

// 添加請求攔截器
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加響應攔截器
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            // 如果收到 401 錯誤，清除 token 並重定向到登入頁面
            store.dispatch('logout')
            router.push('/login')
        }
        return Promise.reject(error)
    }
)

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('initializeStore')
    }
}).$mount('#app')