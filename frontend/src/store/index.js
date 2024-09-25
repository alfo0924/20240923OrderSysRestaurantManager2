import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isLightMode: false
    },
    mutations: {
        setUser(state, user) {
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
        },
        clearUser(state) {
            state.user = null
            localStorage.removeItem('user')
        },
        setTheme(state, isLight) {
            state.isLightMode = isLight
            localStorage.setItem('isLightMode', isLight)
        }
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user)
        },
        logout({ commit }) {
            commit('clearUser')
        },
        initializeStore({ commit }) {
            const user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                commit('setUser', user)
            }
            const isLight = localStorage.getItem('isLightMode') === 'true'
            commit('setTheme', isLight)
        },
        toggleTheme({ commit, state }) {
            commit('setTheme', !state.isLightMode)
        }
    },
    getters: {
        isLoggedIn: state => !!state.user,
        isLightMode: state => state.isLightMode
    }
})