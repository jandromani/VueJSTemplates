<!-- Plantilla 54/100 LineChart VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  props: ['data', 'labels'],
  mounted() {
    const ctx = this.$refs.chart.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Data',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          pointRadius: 3,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: 'rgba(54, 162, 235, 1)',
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
          data: this.data
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
  },
  watch: {
    data: function() {
      this.chart.update();
    }
  },
  beforeDestroy() {
    this.chart.destroy();
  }
}
</script>

<style scoped>
/* Add your own styles here */
</style>

