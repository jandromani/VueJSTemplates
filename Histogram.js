<!-- Plantilla 58/100 Histogram VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="chart-container">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'HistogramChart',
  props: {
    data: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
      }),
    },
  },
  mounted() {
    const ctx = this.$refs.chart.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.map(d => d.label),
        datasets: [{
          label: 'Histogram',
          data: this.data.map(d => d.value),
          backgroundColor: '#4BC0C0',
        }],
      },
      options: this.options,
    });
  },
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px;
}
</style>

