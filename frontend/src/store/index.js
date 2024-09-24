import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
        },
        clearUser(state) {
            state.user = null
            localStorage.removeItem('user')
        }
    },
    actions: {
        login({ commit }, user) {
            // 這裡應該調用 API 進行登入驗證
            commit('setUser', user)
        },
        logout({ commit }) {
            commit('clearUser')
        }
    },
    getters: {
        isLoggedIn: state => !!state.user
    }
})