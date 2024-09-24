<template>
  <div class="system-settings">
    <h2>系統設置</h2>
    <form @submit.prevent="saveSettings">
      <div class="form-group">
        <label for="language">系統語言:</label>
        <select id="language" v-model="settings.language">
          <option value="zh_TW">繁體中文</option>
          <option value="en">English</option>
        </select>
      </div>
      <div class="form-group">
        <label for="timezone">時區:</label>
        <select id="timezone" v-model="settings.timezone">
          <option value="Asia/Taipei">台北 (GMT+8)</option>
          <option value="Asia/Tokyo">東京 (GMT+9)</option>
          <option value="America/New_York">紐約 (GMT-5)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="notifications">啟用通知:</label>
        <input type="checkbox" id="notifications" v-model="settings.notifications">
      </div>
      <div class="form-group">
        <label for="backupFrequency">自動備份頻率:</label>
        <select id="backupFrequency" v-model="settings.backupFrequency">
          <option value="daily">每日</option>
          <option value="weekly">每週</option>
          <option value="monthly">每月</option>
        </select>
      </div>
      <button type="submit">保存設置</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SystemSettings',
  data() {
    return {
      settings: {
        language: 'zh_TW',
        timezone: 'Asia/Taipei',
        notifications: true,
        backupFrequency: 'daily'
      }
    }
  },
  methods: {
    saveSettings() {
      // 這裡應該調用 API 保存設置
      console.log('保存設置:', this.settings)
      // 顯示保存成功的提示
      alert('設置已保存')
    }
  }
}
</script>

<style scoped>
.system-settings {
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
select, input[type="checkbox"] {
  margin-bottom: 10px;
}
</style>