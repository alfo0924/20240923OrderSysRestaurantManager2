<template>
  <div class="schedule-management">
    <h2>排班管理</h2>
    <div class="schedule-controls">
      <button @click="previousWeek">上一週</button>
      <span>{{ currentWeek }}</span>
      <button @click="nextWeek">下一週</button>
    </div>
    <table>
      <thead>
      <tr>
        <th>員工</th>
        <th v-for="day in weekDays" :key="day">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td v-for="day in weekDays" :key="day">
          <select v-model="schedules[employee.id][day]" @change="updateSchedule(employee.id, day)">
            <option value="">休息</option>
            <option value="morning">早班</option>
            <option value="afternoon">午班</option>
            <option value="evening">晚班</option>
          </select>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ScheduleManagement',
  data() {
    return {
      currentWeek: '',
      weekDays: ['週一', '週二', '週三', '週四', '週五', '週六', '週日'],
      employees: [],
      schedules: {}
    }
  },
  mounted() {
    this.fetchEmployees()
    this.initializeSchedules()
    this.setCurrentWeek()
  },
  methods: {
    fetchEmployees() {
      // 這裡應該調用 API 獲取員工數據
      // 暫時使用模擬數據
      this.employees = [
        { id: 1, name: '張三' },
        { id: 2, name: '李四' }
      ]
    },
    initializeSchedules() {
      this.employees.forEach(employee => {
        this.schedules[employee.id] = {}
        this.weekDays.forEach(day => {
          this.schedules[employee.id][day] = ''
        })
      })
    },
    setCurrentWeek() {
      // 設置當前週的日期範圍
      const today = new Date()
      const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1))
      const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7))
      this.currentWeek = `${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`
    },
    previousWeek() {
      // 實現切換到上一週的邏輯
      console.log('切換到上一週')
    },
    nextWeek() {
      // 實現切換到下一週的邏輯
      console.log('切換到下一週')
    },
    updateSchedule(employeeId, day) {
      // 實現更新排班的邏輯
      console.log('更新排班:', employeeId, day, this.schedules[employeeId][day])
    }
  }
}
</script>

<style scoped>
.schedule-controls {
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
</style>