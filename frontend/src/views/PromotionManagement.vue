<template>
  <div class="promotion-management">
    <h2>優惠活動管理</h2>
    <div class="promotion-controls">
      <button @click="showAddPromotionModal">創建新活動</button>
    </div>
    <table>
      <thead>
      <tr>
        <th>活動ID</th>
        <th>活動名稱</th>
        <th>開始日期</th>
        <th>結束日期</th>
        <th>折扣類型</th>
        <th>折扣值</th>
        <th>狀態</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="promotion in promotions" :key="promotion.id">
        <td>{{ promotion.id }}</td>
        <td>{{ promotion.name }}</td>
        <td>{{ formatDate(promotion.startDate) }}</td>
        <td>{{ formatDate(promotion.endDate) }}</td>
        <td>{{ promotion.discountType }}</td>
        <td>{{ promotion.discountValue }}</td>
        <td>{{ promotion.status }}</td>
        <td>
          <button @click="editPromotion(promotion)">編輯</button>
          <button @click="togglePromotionStatus(promotion)">
            {{ promotion.status === '進行中' ? '停止' : '啟動' }}
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- 創建新活動的模態框 -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h3>創建新優惠活動</h3>
        <form @submit.prevent="addNewPromotion">
          <input v-model="newPromotion.name" placeholder="活動名稱" required>
          <input v-model="newPromotion.startDate" type="date" required>
          <input v-model="newPromotion.endDate" type="date" required>
          <select v-model="newPromotion.discountType" required>
            <option value="percentage">百分比折扣</option>
            <option value="fixed">固定金額折扣</option>
          </select>
          <input v-model="newPromotion.discountValue" type="number" placeholder="折扣值" required>
          <button type="submit">創建</button>
          <button type="button" @click="showAddModal = false">取消</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromotionManagement',
  data() {
    return {
      promotions: [],
      showAddModal: false,
      newPromotion: {
        name: '',
        startDate: '',
        endDate: '',
        discountType: '',
        discountValue: ''
      }
    }
  },
  mounted() {
    this.fetchPromotions()
  },
  methods: {
    fetchPromotions() {
      // 這裡應該調用 API 獲取優惠活動數據
      // 暫時使用模擬數據
      this.promotions = [
        { id: 1, name: '春季大促', startDate: '2024-03-01', endDate: '2024-03-31', discountType: '百分比折扣', discountValue: 20, status: '進行中' },
        { id: 2, name: '新會員優惠', startDate: '2024-04-01', endDate: '2024-04-30', discountType: '固定金額折扣', discountValue: 100, status: '未開始' }
      ]
    },
    showAddPromotionModal() {
      this.showAddModal = true
    },
    addNewPromotion() {
      // 這裡應該調用 API 添加新優惠活動
      console.log('創建新優惠活動:', this.newPromotion)
      this.showAddModal = false
      // 重置表單
      this.newPromotion = { name: '', startDate: '', endDate: '', discountType: '', discountValue: '' }
    },
    editPromotion(promotion) {
      // 實現編輯優惠活動的邏輯
      console.log('編輯優惠活動:', promotion)
    },
    togglePromotionStatus(promotion) {
      // 實現切換優惠活動狀態的邏輯
      console.log('切換優惠活動狀態:', promotion)
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.promotion-management {
  padding: 20px;
}
.promotion-controls {
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