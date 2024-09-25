<template>
  <div class="member-management">
    <h2>會員管理</h2>
    <div class="member-controls">
      <button @click="showAddMemberModal">添加新會員</button>
      <input v-model="searchQuery" placeholder="搜索會員...">
    </div>
    <table>
      <thead>
      <tr>
        <th>會員ID</th>
        <th>姓名</th>
        <th>電話</th>
        <th>電子郵件</th>
        <th>會員等級</th>
        <th>積分</th>
        <th>註冊日期</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="member in filteredMembers" :key="member.id">
        <td>{{ member.id }}</td>
        <td>{{ member.name }}</td>
        <td>{{ member.phone }}</td>
        <td>{{ member.email }}</td>
        <td>{{ member.level }}</td>
        <td>{{ member.points }}</td>
        <td>{{ formatDate(member.registerDate) }}</td>
        <td>
          <button @click="editMember(member)">編輯</button>
          <button @click="viewMemberDetails(member)">查看詳情</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- 添加新會員的模態框 -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h3>添加新會員</h3>
        <form @submit.prevent="addNewMember">
          <input v-model="newMember.name" placeholder="姓名" required>
          <input v-model="newMember.phone" placeholder="電話" required>
          <input v-model="newMember.email" type="email" placeholder="電子郵件" required>
          <button type="submit">添加</button>
          <button type="button" @click="showAddModal = false">取消</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberManagement',
  data() {
    return {
      members: [],
      searchQuery: '',
      showAddModal: false,
      newMember: {
        name: '',
        phone: '',
        email: ''
      }
    }
  },
  computed: {
    filteredMembers() {
      return this.members.filter(member =>
          member.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          member.phone.includes(this.searchQuery) ||
          member.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  mounted() {
    this.fetchMembers()
  },
  methods: {
    fetchMembers() {
      // 這裡應該調用 API 獲取會員數據
      // 暫時使用模擬數據
      this.members = [
        { id: 1, name: '張三', phone: '0912345678', email: 'zhangsan@example.com', level: '黃金', points: 1000, registerDate: '2024-01-01' },
        { id: 2, name: '李四', phone: '0923456789', email: 'lisi@example.com', level: '白銀', points: 500, registerDate: '2024-02-15' }
      ]
    },
    showAddMemberModal() {
      this.showAddModal = true
    },
    addNewMember() {
      // 這裡應該調用 API 添加新會員
      console.log('添加新會員:', this.newMember)
      this.showAddModal = false
      // 重置表單
      this.newMember = { name: '', phone: '', email: '' }
    },
    editMember(member) {
      // 實現編輯會員的邏輯
      console.log('編輯會員:', member)
    },
    viewMemberDetails(member) {
      // 實現查看會員詳情的邏輯
      console.log('查看會員詳情:', member)
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.member-management {
  padding: 20px;
}
.member-controls {
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
  background-color: #595959;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>