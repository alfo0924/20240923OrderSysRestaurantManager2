<template>
  <div class="supplier-management">
    <h2>供應商管理</h2>
    <div class="supplier-controls">
      <button @click="showAddSupplierModal">添加新供應商</button>
      <input v-model="searchQuery" placeholder="搜索供應商...">
    </div>
    <table>
      <thead>
      <tr>
        <th>供應商ID</th>
        <th>名稱</th>
        <th>聯繫人</th>
        <th>電話</th>
        <th>電子郵件</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="supplier in filteredSuppliers" :key="supplier.supplier_id">
        <td>{{ supplier.supplier_id }}</td>
        <td>{{ supplier.supplier_name }}</td>
        <td>{{ supplier.contact_person }}</td>
        <td>{{ supplier.phone_number }}</td>
        <td>{{ supplier.email }}</td>
        <td>
          <button @click="editSupplier(supplier)">編輯</button>
          <button @click="viewOrders(supplier)">查看訂單</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- 添加新供應商的模態框 -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h3>添加新供應商</h3>
        <form @submit.prevent="addNewSupplier">
          <input v-model="newSupplier.supplier_name" placeholder="供應商名稱" required>
          <input v-model="newSupplier.contact_person" placeholder="聯繫人" required>
          <input v-model="newSupplier.phone_number" placeholder="電話" required>
          <input v-model="newSupplier.email" type="email" placeholder="電子郵件" required>
          <textarea v-model="newSupplier.address" placeholder="地址"></textarea>
          <button type="submit">添加</button>
          <button type="button" @click="showAddModal = false">取消</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupplierManagement',
  data() {
    return {
      suppliers: [],
      searchQuery: '',
      showAddModal: false,
      newSupplier: {
        supplier_name: '',
        contact_person: '',
        phone_number: '',
        email: '',
        address: ''
      }
    }
  },
  computed: {
    filteredSuppliers() {
      return this.suppliers.filter(supplier =>
          supplier.supplier_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          supplier.contact_person.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  mounted() {
    this.fetchSuppliers()
  },
  methods: {
    fetchSuppliers() {
      // 這裡應該調用 API 獲取供應商數據
      // 暫時使用模擬數據
      this.suppliers = [
        { supplier_id: 1, supplier_name: '優質食材有限公司', contact_person: '張三', phone_number: '0912345678', email: 'zhangsan@example.com' },
        { supplier_id: 2, supplier_name: '新鮮蔬果批發商', contact_person: '李四', phone_number: '0923456789', email: 'lisi@example.com' }
      ]
    },
    showAddSupplierModal() {
      this.showAddModal = true
    },
    addNewSupplier() {
      // 這裡應該調用 API 添加新供應商
      console.log('添加新供應商:', this.newSupplier)
      this.showAddModal = false
      // 重置表單
      this.newSupplier = { supplier_name: '', contact_person: '', phone_number: '', email: '', address: '' }
    },
    editSupplier(supplier) {
      // 實現編輯供應商的邏輯
      console.log('編輯供應商:', supplier)
    },
    viewOrders(supplier) {
      // 實現查看供應商訂單的邏輯
      console.log('查看供應商訂單:', supplier)
    }
  }
}
</script>

<style scoped>
.supplier-management {
  padding: 20px;
}
.supplier-controls {
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
  background-color: #595959;
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
  background-color: #595959;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>