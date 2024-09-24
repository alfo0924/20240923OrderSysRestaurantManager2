<template>
  <div class="register">
    <h2>註冊</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">用戶名:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">密碼:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <label for="role">身份:</label>
        <select id="role" v-model="role" required>
          <option value="restaurant_manager">餐廳管理者</option>
          <option value="restaurant_staff">餐廳員工</option>
        </select>
      </div>
      <button type="submit">註冊</button>
    </form>
    <button @click="$router.push('/login')">返回登入</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      role: ''
    }
  },
  methods: {
    register() {
      // 這裡應該調用 API 進行註冊
      console.log('註冊:', this.username, this.password, this.role);
      // 假設註冊成功
      alert('註冊成功!');
      setTimeout(() => {
        this.$router.push('/login');
      }, 5000);
    }
  }
}
</script>