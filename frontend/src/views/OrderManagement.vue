<template>
  <div class="order-management">
    <h2>訂單管理</h2>
    <table>
      <thead>
      <tr>
        <th>訂單ID</th>
        <th>客戶名稱</th>
        <th>餐廳</th>
        <th>訂單日期</th>
        <th>總價</th>
        <th>狀態</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.order_id">
        <td>{{ order.order_id }}</td>
        <td>{{ order.customer_name }}</td>
        <td>{{ order.restaurant_name }}</td>
        <td>{{ order.order_date }}</td>
        <td>{{ order.order_price }}</td>
        <td>{{ order.order_status }}</td>
        <td>
          <button @click="viewOrderDetails(order.order_id)">查看詳情</button>
          <button @click="updateOrderStatus(order.order_id)">更新狀態</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OrderManagement',
  data() {
    return {
      orders: []
    }
  },
  mounted() {
    this.fetchOrders()
  },
  methods: {
    fetchOrders() {
      // 這裡應該調用 API 獲取訂單數據
      // 暫時使用模擬數據
      this.orders = [
        { order_id: 'ORD001', customer_name: 'John Doe', restaurant_name: 'Restaurant A', order_date: '2024-09-24', order_price: 100, order_status: '待處理' },
        { order_id: 'ORD002', customer_name: 'Jane Smith', restaurant_name: 'Restaurant B', order_date: '2024-09-25', order_price: 150, order_status: '已完成' }
      ]
    },
    viewOrderDetails(orderId) {
      // 實現查看訂單詳情的邏輯
      console.log('查看訂單詳情:', orderId)
    },
    updateOrderStatus(orderId) {
      // 實現更新訂單狀態的邏輯
      console.log('更新訂單狀態:', orderId)
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>