<template>
  <div class="add-restaurant">
    <h2>添加新餐廳</h2>
    <form @submit.prevent="addRestaurant">
      <div class="form-group">
        <label for="name">餐廳名稱:</label>
        <input type="text" id="name" v-model="restaurant.name" required>
      </div>
      <div class="form-group">
        <label for="address">地址:</label>
        <input type="text" id="address" v-model="restaurant.address" required>
      </div>
      <div class="form-group">
        <label for="phone">電話:</label>
        <input type="tel" id="phone" v-model="restaurant.phone" required>
      </div>
      <div class="form-group">
        <label for="type">類型:</label>
        <select id="type" v-model="restaurant.type" required>
          <option value="中式">中式</option>
          <option value="西式">西式</option>
          <option value="日式">日式</option>
          <option value="其他">其他</option>
        </select>
      </div>
      <button type="submit">添加餐廳</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddRestaurant',
  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        phone: '',
        type: ''
      }
    };
  },
  methods: {
    ...mapActions(['createRestaurant']),
    async addRestaurant() {
      try {
        await this.createRestaurant(this.restaurant);
        this.$router.push('/restaurants');
      } catch (error) {
        console.error('添加餐廳失敗:', error);
        // 這裡可以添加錯誤處理邏輯,例如顯示錯誤消息
      }
    }
  }
};
</script>

<style scoped>
.add-restaurant {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>