<template>
  <div class="inventory-management">
    <h2>庫存管理</h2>
    <button @click="showAddItemForm">添加庫存項目</button>
    <table>
      <thead>
      <tr>
        <th>項目ID</th>
        <th>項目名稱</th>
        <th>當前數量</th>
        <th>最低庫存量</th>
        <th>單位</th>
        <th>最後更新</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in inventoryItems" :key="item.item_id">
        <td>{{ item.item_id }}</td>
        <td>{{ item.item_name }}</td>
        <td>{{ item.current_quantity }}</td>
        <td>{{ item.minimum_quantity }}</td>
        <td>{{ item.unit_of_measure }}</td>
        <td>{{ item.last_updated }}</td>
        <td>
          <button @click="editInventoryItem(item.item_id)">編輯</button>
          <button @click="adjustQuantity(item.item_id)">調整數量</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'InventoryManagement',
  data() {
    return {
      inventoryItems: []
    }
  },
  mounted() {
    this.fetchInventoryItems()
  },
  methods: {
    fetchInventoryItems() {
      // 這裡應該調用 API 獲取庫存數據
      // 暫時使用模擬數據
      this.inventoryItems = [
        { item_id: 1, item_name: '雞肉', current_quantity: 50, minimum_quantity: 20, unit_of_measure: 'kg', last_updated: '2024-09-24 10:00:00' },
        { item_id: 2, item_name: '牛肉', current_quantity: 30, minimum_quantity: 15, unit_of_measure: 'kg', last_updated: '2024-09-24 11:00:00' }
      ]
    },
    showAddItemForm() {
      // 實現顯示添加庫存項目表單的邏輯
      console.log('顯示添加庫存項目表單')
    },
    editInventoryItem(itemId) {
      // 實現編輯庫存項目的邏輯
      console.log('編輯庫存項目:', itemId)
    },
    adjustQuantity(itemId) {
      // 實現調整庫存數量的邏輯
      console.log('調整庫存數量:', itemId)
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