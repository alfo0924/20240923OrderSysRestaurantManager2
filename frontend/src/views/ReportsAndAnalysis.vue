<template>
  <div class="reports-and-analysis">
    <h2>報表和分析</h2>
    <div class="report-options">
      <select v-model="selectedReport" @change="generateReport">
        <option value="">選擇報表類型</option>
        <option value="sales">銷售報表</option>
        <option value="inventory">庫存報表</option>
        <option value="financial">財務報表</option>
      </select>
      <input type="date" v-model="startDate">
      <input type="date" v-model="endDate">
      <button @click="generateReport">生成報表</button>
    </div>
    <div v-if="reportData.length" class="report-container">
      <table>
        <thead>
        <tr>
          <th v-for="header in reportHeaders" :key="header">{{ header }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in reportData" :key="row.id">
          <td v-for="header in reportHeaders" :key="header">{{ row[header] }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="chart-container" v-if="chartData">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'ReportsAndAnalysis',
  data() {
    return {
      selectedReport: '',
      startDate: '',
      endDate: '',
      reportData: [],
      reportHeaders: [],
      chartData: null,
      chart: null
    }
  },
  methods: {
    generateReport() {
      // 這裡應該調用 API 獲取報表數據
      // 暫時使用模擬數據
      if (this.selectedReport === 'sales') {
        this.reportHeaders = ['日期', '總銷售額', '訂單數量']
        this.reportData = [
          { id: 1, 日期: '2024-09-01', 總銷售額: 5000, 訂單數量: 50 },
          { id: 2, 日期: '2024-09-02', 總銷售額: 5500, 訂單數量: 55 },
          { id: 3, 日期: '2024-09-03', 總銷售額: 4800, 訂單數量: 48 }
        ]
        this.createChart('銷售趨勢', '日期', '總銷售額')
      } else if (this.selectedReport === 'inventory') {
        // 生成庫存報表的邏輯
      } else if (this.selectedReport === 'financial') {
        // 生成財務報表的邏輯
      }
    },
    createChart(title, xAxisLabel, yAxisLabel) {
      if (this.chart) {
        this.chart.destroy()
      }
      const ctx = this.$refs.chartCanvas.getContext('2d')
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.reportData.map(row => row[this.reportHeaders[0]]),
          datasets: [{
            label: yAxisLabel,
            data: this.reportData.map(row => row[yAxisLabel]),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: xAxisLabel
              }
            },
            y: {
              title: {
                display: true,
                text: yAxisLabel
              }
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.reports-and-analysis {
  padding: 20px;
}
.report-options {
  margin-bottom: 20px;
}
.report-container {
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
.chart-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>