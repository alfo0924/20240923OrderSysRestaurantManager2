<template>
  <div class="menu-management">
    <h2>菜單管理</h2>
    <button @click="showAddItemForm">添加菜品</button>
    <table>
      <thead>
      <tr>
        <th>菜品ID</th>
        <th>菜品名稱</th>
        <th>價格</th>
        <th>狀態</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in menuItems" :key="item.items_id">
        <td>{{ item.items_id }}</td>
        <td>{{ item.food_name }}</td>
        <td>{{ item.food_price }}</td>
        <td>{{ item.food_status }}</td>
        <td>
          <button @click="editMenuItem(item.items_id)">編輯</button>
          <button @click="deleteMenuItem(item.items_id)">刪除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MenuManagement',
  data() {
    return {
      menuItems: []
    }
  },
  mounted() {
    this.fetchMenuItems()
  },
  methods: {
    fetchMenuItems() {
      // 這裡應該調用 API 獲取菜單數據
      // 暫時使用模擬數據
      this.menuItems = [
        { items_id: 'ITM001', food_name: '炸雞套餐', food_price: 199, food_status: '可用' },
        { items_id: 'ITM002', food_name: '漢堡套餐', food_price: 179, food_status: '可用' }
      ]
    },
    showAddItemForm() {
      // 實現顯示添加菜品表單的邏輯
      console.log('顯示添加菜品表單')
    },
    editMenuItem(itemId) {
      // 實現編輯菜品的邏輯
      console.log('編輯菜品:', itemId)
    },
    deleteMenuItem(itemId) {
      // 實現刪除菜品的邏輯
      console.log('刪除菜品:', itemId)
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