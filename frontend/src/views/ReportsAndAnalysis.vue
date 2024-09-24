<template>
  <div class="reports-and-analysis">
    <h2>報表和分析</h2>
    <div class="report-options">
      <button @click="generateSalesReport">生成銷售報表</button>
      <button @click="generateInventoryReport">生成庫存報表</button>
      <button @click="generateFinancialReport">生成財務報表</button>
    </div>
    <div class="chart-container" v-if="chartData">
      <canvas ref="chartCanvas"></canvas>
    </div>
    <div class="report-table" v-if="reportData.length">
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
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'ReportsAndAnalysis',
  data() {
    return {
      chartData: null,
      reportData: [],
      reportHeaders: [],
      chart: null
    }
  },
  methods: {
    generateSalesReport() {
      // 這裡應該調用 API 獲取銷售報表數據
      // 暫時使用模擬數據
      this.reportHeaders = ['日期', '總銷售額', '訂單數量']
      this.reportData = [
        { id: 1, 日期: '2024-09-01', 總銷售額: 5000, 訂單數量: 50 },
        { id: 2, 日期: '2024-09-02', 總銷售額: 5500, 訂單數量: 55 },
        { id: 3, 日期: '2024-09-03', 總銷售額: 4800, 訂單數量: 48 }
      ]
      this.createChart('銷售趨勢', '日期', '總銷售額')
    },
    generateInventoryReport() {
      // 實現生成庫存報表的邏輯
      console.log('生成庫存報表')
    },
    generateFinancialReport() {
      // 實現生成財務報表的邏輯
      console.log('生成財務報表')
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
.chart-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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
</style>