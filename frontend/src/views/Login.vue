<template>
  <div class="login">
    <h2>登入</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">用戶名:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">密碼:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">登入</button>
    </form>
    <p>還沒有帳號? <router-link to="/register">註冊</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // 這裡應該調用 API 進行登入驗證
      console.log('登入:', this.username, this.password);
      // 假設登入成功
      this.$store.commit('setUser', { username: this.username });
      this.$router.push('/dashboard');
    }
  }
}
</script>