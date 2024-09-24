<template>
  <nav>
    <ul>
      <li><router-link to="/dashboard">儀表板</router-link></li>
      <li><router-link to="/orders">訂單管理</router-link></li>
      <li><router-link to="/menu">菜單管理</router-link></li>
      <li><router-link to="/inventory">庫存管理</router-link></li>
      <li><router-link to="/staff">員工管理</router-link></li>
      <li><router-link to="/reports">報表</router-link></li>
      <li><router-link to="/reports">報表和分析</router-link></li>
      <li><router-link to="/settings">系統設置</router-link></li>
      <li><router-link to="/employees">員工管理</router-link></li>
      <li><router-link to="/schedule">排班管理</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
}
a {
  color: white;
  text-decoration: none;
}
</style>