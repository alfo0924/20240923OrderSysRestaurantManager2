<template>
  <div class="employee-management">
    <h2>員工管理</h2>
    <button @click="showAddEmployeeForm">添加新員工</button>
    <table>
      <thead>
      <tr>
        <th>員工ID</th>
        <th>姓名</th>
        <th>職位</th>
        <th>電話</th>
        <th>電子郵件</th>
        <th>狀態</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.position }}</td>
        <td>{{ employee.phone }}</td>
        <td>{{ employee.email }}</td>
        <td>{{ employee.status }}</td>
        <td>
          <button @click="editEmployee(employee.id)">編輯</button>
          <button @click="toggleEmployeeStatus(employee.id)">
            {{ employee.status === '在職' ? '離職' : '復職' }}
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EmployeeManagement',
  data() {
    return {
      employees: []
    }
  },
  mounted() {
    this.fetchEmployees()
  },
  methods: {
    fetchEmployees() {
      // 這裡應該調用 API 獲取員工數據
      // 暫時使用模擬數據
      this.employees = [
        { id: 1, name: '張三', position: '廚師', phone: '0912345678', email: 'zhangsan@example.com', status: '在職' },
        { id: 2, name: '李四', position: '服務生', phone: '0923456789', email: 'lisi@example.com', status: '在職' }
      ]
    },
    showAddEmployeeForm() {
      // 實現顯示添加員工表單的邏輯
      console.log('顯示添加員工表單')
    },
    editEmployee(employeeId) {
      // 實現編輯員工信息的邏輯
      console.log('編輯員工:', employeeId)
    },
    toggleEmployeeStatus(employeeId) {
      // 實現切換員工狀態的邏輯
      console.log('切換員工狀態:', employeeId)
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