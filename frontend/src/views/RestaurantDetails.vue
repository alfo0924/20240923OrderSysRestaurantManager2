<template>
  <div class="restaurant-details" v-if="restaurant">
    <h2>{{ restaurant.name }}</h2>
    <p>地址：{{ restaurant.address }}</p>
    <button @click="goBack">返回列表</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'RestaurantDetails',
  computed: {
    ...mapGetters(['currentRestaurant']),
    restaurant() {
      return this.currentRestaurant;
    },
  },
  methods: {
    ...mapActions(['fetchRestaurantById']),
    goBack() {
      this.$router.push({ name: 'RestaurantList' });
    },
  },
  created() {
    const id = this.$route.params.id;
    this.fetchRestaurantById(id);
  },
};
</script>