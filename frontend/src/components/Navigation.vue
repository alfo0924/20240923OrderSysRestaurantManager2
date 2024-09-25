<!-- Navigation.vue -->
<template>
  <nav :class="{ 'light-mode': isLightMode }">
    <ul>
      <li><router-link to="/dashboard">儀表板</router-link></li>
      <li><router-link to="/orders">訂單管理</router-link></li>
      <li><router-link to="/menu">菜單管理</router-link></li>
      <li><router-link to="/inventory">庫存管理</router-link></li>
      <li><router-link to="/staff">員工管理</router-link></li>
      <li><router-link to="/reports">報表和分析</router-link></li>
      <li><router-link to="/settings">系統設置</router-link></li>
      <li><router-link to="/employees">員工管理</router-link></li>
      <li><router-link to="/schedule">排班管理</router-link></li>
      <li><router-link to="/crm">客戶關係管理</router-link></li>
      <li><router-link to="/suppliers">供應商管理</router-link></li>
      <li><router-link to="/members">會員管理</router-link></li>
      <li><router-link to="/promotions">優惠活動</router-link></li>
    </ul>
    <button @click="toggleTheme" class="theme-toggle">
      {{ isLightMode ? '深色模式' : '淺色模式' }}
    </button>
    <button @click="logout" class="logout-btn">登出</button>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters(['isLightMode'])
  },
  methods: {
    ...mapActions(['toggleTheme']),
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

nav.light-mode {
  background-color: #f0f0f0;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  margin: 5px;
}

a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav.light-mode a {
  color: #333;
}

a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

nav.light-mode a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.theme-toggle, .logout-btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.logout-btn {
  background-color: #f44336;
}

nav.light-mode .theme-toggle {
  background-color: #45a049;
  color: white;
}

nav.light-mode .logout-btn {
  background-color: #d32f2f;
  color: white;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 5px 0;
  }

  .theme-toggle, .logout-btn {
    margin-top: 10px;
  }
}
</style>