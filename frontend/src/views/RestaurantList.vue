<template>
  <div class="restaurant-list">
    <h2>餐廳列表</h2>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        {{ restaurant.name }} - {{ restaurant.address }}
        <button @click="viewDetails(restaurant.id)">查看詳情</button>
        <button @click="editRestaurant(restaurant.id)">編輯</button>
        <button @click="deleteRestaurant(restaurant.id)">刪除</button>
      </li>
    </ul>
    <button @click="showAddForm">添加新餐廳</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'RestaurantList',
  computed: {
    ...mapGetters(['allRestaurants']),
    restaurants() {
      return this.allRestaurants;
    },
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'deleteRestaurant']),
    viewDetails(id) {
      this.$router.push({ name: 'RestaurantDetails', params: { id } });
    },
    editRestaurant(id) {
      this.$router.push({ name: 'EditRestaurant', params: { id } });
    },
    async deleteRestaurant(id) {
      if (confirm('確定要刪除這家餐廳嗎？')) {
        await this.deleteRestaurant(id);
      }
    },
    showAddForm() {
      this.$router.push({ name: 'AddRestaurant' });
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>