<template>
  <div class="staff-management">
    <h2>員工管理</h2>
    <button @click="showAddStaffForm">添加員工</button>
    <table>
      <thead>
      <tr>
        <th>員工ID</th>
        <th>姓名</th>
        <th>角色</th>
        <th>電話</th>
        <th>電子郵件</th>
        <th>狀態</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="staff in staffList" :key="staff.id">
        <td>{{ staff.id }}</td>
        <td>{{ staff.name }}</td>
        <td>{{ staff.role }}</td>
        <td>{{ staff.phone }}</td>
        <td>{{ staff.email }}</td>
        <td>{{ staff.status }}</td>
        <td>
          <button @click="editStaff(staff.id)">編輯</button>
          <button @click="toggleStaffStatus(staff.id)">
            {{ staff.status === '在職' ? '離職' : '復職' }}
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StaffManagement',
  data() {
    return {
      staffList: []
    }
  },
  mounted() {
    this.fetchStaffList()
  },
  methods: {
    fetchStaffList() {
      // 這裡應該調用 API 獲取員工數據
      // 暫時使用模擬數據
      this.staffList = [
        { id: 1, name: '張三', role: '廚師', phone: '0912345678', email: 'zhangsan@example.com', status: '在職' },
        { id: 2, name: '李四', role: '服務生', phone: '0923456789', email: 'lisi@example.com', status: '在職' }
      ]
    },
    showAddStaffForm() {
      // 實現顯示添加員工表單的邏輯
      console.log('顯示添加員工表單')
    },
    editStaff(staffId) {
      // 實現編輯員工信息的邏輯
      console.log('編輯員工:', staffId)
    },
    toggleStaffStatus(staffId) {
      // 實現切換員工狀態的邏輯
      console.log('切換員工狀態:', staffId)
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