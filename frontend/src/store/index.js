import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isLightMode: false,
        restaurants: [],
        currentRestaurant: null
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
            localStorage.setItem('isLightMode', isLight.toString())
        },
        setRestaurants(state, restaurants) {
            state.restaurants = restaurants
        },
        setCurrentRestaurant(state, restaurant) {
            state.currentRestaurant = restaurant
        }
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('/api/login', credentials)
                const user = response.data
                commit('setUser', user)
                return user
            } catch (error) {
                console.error('Login failed:', error)
                throw error
            }
        },
        logout({ commit }) {
            commit('clearUser')
            // 可以在這裡添加登出後的其他操作，如重定向
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
        },
        async fetchRestaurants({ commit }) {
            try {
                const response = await axios.get('/api/restaurants')
                commit('setRestaurants', response.data)
            } catch (error) {
                console.error('Failed to fetch restaurants:', error)
                throw error
            }
        },
        async fetchRestaurantById({ commit }, id) {
            try {
                const response = await axios.get(`/api/restaurants/${id}`)
                commit('setCurrentRestaurant', response.data)
            } catch (error) {
                console.error(`Failed to fetch restaurant with id ${id}:`, error)
                throw error
            }
        }
    },
    getters: {
        isLoggedIn: state => !!state.user,
        isLightMode: state => state.isLightMode,
        allRestaurants: state => state.restaurants,
        currentRestaurant: state => state.currentRestaurant
    }
})