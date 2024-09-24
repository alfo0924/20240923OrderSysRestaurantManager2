<template>
  <div class="inventory-management">
    <h2>庫存管理</h2>
    <div class="inventory-controls">
      <button @click="showAddItemModal">添加新項目</button>
      <input v-model="searchQuery" placeholder="搜索庫存項目...">
    </div>
    <table>
      <thead>
      <tr>
        <th>項目ID</th>
        <th>名稱</th>
        <th>當前數量</th>
        <th>最低庫存量</th>
        <th>單位</th>
        <th>最後更新</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in filteredItems" :key="item.item_id">
        <td>{{ item.item_id }}</td>
        <td>{{ item.item_name }}</td>
        <td>{{ item.current_quantity }}</td>
        <td>{{ item.minimum_quantity }}</td>
        <td>{{ item.unit_of_measure }}</td>
        <td>{{ formatDate(item.last_updated) }}</td>
        <td>
          <button @click="editItem(item)">編輯</button>
          <button @click="adjustQuantity(item)">調整數量</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- 添加新項目的模態框 -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h3>添加新庫存項目</h3>
        <form @submit.prevent="addNewItem">
          <input v-model="newItem.item_name" placeholder="項目名稱" required>
          <input v-model="newItem.current_quantity" type="number" placeholder="當前數量" required>
          <input v-model="newItem.minimum_quantity" type="number" placeholder="最低庫存量" required>
          <input v-model="newItem.unit_of_measure" placeholder="單位" required>
          <button type="submit">添加</button>
          <button type="button" @click="showAddModal = false">取消</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventoryManagement',
  data() {
    return {
      inventoryItems: [],
      searchQuery: '',
      showAddModal: false,
      newItem: {
        item_name: '',
        current_quantity: 0,
        minimum_quantity: 0,
        unit_of_measure: ''
      }
    }
  },
  computed: {
    filteredItems() {
      return this.inventoryItems.filter(item =>
          item.item_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
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
    showAddItemModal() {
      this.showAddModal = true
    },
    addNewItem() {
      // 這裡應該調用 API 添加新項目
      console.log('添加新項目:', this.newItem)
      this.showAddModal = false
      // 重置表單
      this.newItem = { item_name: '', current_quantity: 0, minimum_quantity: 0, unit_of_measure: '' }
    },
    editItem(item) {
      // 實現編輯項目的邏輯
      console.log('編輯項目:', item)
    },
    adjustQuantity(item) {
      // 實現調整數量的邏輯
      console.log('調整數量:', item)
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleString()
    }
  }
}
</script>

<style scoped>
.inventory-management {
  padding: 20px;
}
.inventory-controls {
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
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>