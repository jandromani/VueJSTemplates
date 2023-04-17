<!-- Plantilla 56/100 PieChart VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <canvas ref="chart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "PieChart",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chart.getContext("2d");

      new Chart(ctx, {
        type: "pie",
        data: this.data,
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }
};
</script>

<style>
</style>
