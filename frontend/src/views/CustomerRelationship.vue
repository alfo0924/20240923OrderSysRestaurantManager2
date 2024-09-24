<template>
  <div class="customer-relationship">
    <h2>客戶關係管理</h2>
    <div class="search-bar">
      <input v-model="searchQuery" placeholder="搜索客戶...">
      <button @click="searchCustomers">搜索</button>
    </div>
    <table>
      <thead>
      <tr>
        <th>客戶ID</th>
        <th>姓名</th>
        <th>電話</th>
        <th>電子郵件</th>
        <th>訂單數</th>
        <th>總消費</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.id }}</td>
        <td>{{ customer.name }}</td>
        <td>{{ customer.phone }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.orderCount }}</td>
        <td>{{ customer.totalSpent }}</td>
        <td>
          <button @click="viewCustomerDetails(customer.id)">查看詳情</button>
          <button @click="sendPromotion(customer.id)">發送優惠</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CustomerRelationship',
  data() {
    return {
      searchQuery: '',
      customers: []
    }
  },
  mounted() {
    this.fetchCustomers()
  },
  methods: {
    fetchCustomers() {
      // 這裡應該調用 API 獲取客戶數據
      // 暫時使用模擬數據
      this.customers = [
        { id: 1, name: '張三', phone: '0912345678', email: 'zhangsan@example.com', orderCount: 5, totalSpent: 2500 },
        { id: 2, name: '李四', phone: '0923456789', email: 'lisi@example.com', orderCount: 3, totalSpent: 1800 }
      ]
    },
    searchCustomers() {
      // 實現搜索客戶的邏輯
      console.log('搜索客戶:', this.searchQuery)
    },
    viewCustomerDetails(customerId) {
      // 實現查看客戶詳情的邏輯
      console.log('查看客戶詳情:', customerId)
    },
    sendPromotion(customerId) {
      // 實現發送優惠的邏輯
      console.log('發送優惠給客戶:', customerId)
    }
  }
}
</script>

<style scoped>
.customer-relationship {
  padding: 20px;
}
.search-bar {
  margin-bottom: 20px;
}
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