<template>
  <div class="dashboard">
    <h1>餐廳管理系統儀表板</h1>
    <p>歡迎, {{ username }}!</p>
    <div class="dashboard-stats">
      <div class="stat-card">
        <h3>今日訂單</h3>
        <p>{{ todayOrders }}</p>
      </div>
      <div class="stat-card">
        <h3>本月收入</h3>
        <p>{{ monthlyIncome }}</p>
      </div>
      <div class="stat-card">
        <h3>活躍客戶</h3>
        <p>{{ activeCustomers }}</p>
      </div>
    </div>
    <button @click="logout">登出</button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      username: '',
      todayOrders: 0,
      monthlyIncome: 0,
      activeCustomers: 0
    }
  },
  mounted() {
    // 這裡應該從 Vuex store 或 API 獲取用戶信息和統計數據
    this.username = 'Restaurant Manager'
    this.todayOrders = 15
    this.monthlyIncome = '$5,000'
    this.activeCustomers = 100
  },
  methods: {
    logout() {
      // 實現登出邏輯
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
.dashboard-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.stat-card {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}
</style>