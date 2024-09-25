<template>
  <div id="app" :class="{ 'light-mode': isLightMode }">
    <Navigation v-if="isLoggedIn"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Navigation
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'isLightMode'])
  },
  created() {
    this.initializeStore()
  },
  methods: {
    ...mapActions(['initializeStore'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

#app.light-mode {
  color: #000000;
  background-color: rgba(235, 235, 235, 0.8);
}
th {
  background-color: #a6a6a6!important;
}
.stat-card{
  background-color: #a6a6a6!important;
}
.modal-content{
  background-color: #a6a6a6!important;
}
</style>