<!-- Plantilla 57/100 AreaChart VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <h3>Gráfico de áreas</h3>
    <canvas ref="chart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  mounted() {
    const ctx = this.$refs.chart.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
          {
            label: 'Ventas',
            data: [10, 30, 20, 40, 30, 50, 40],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: true,
          },
          {
            label: 'Gastos',
            data: [5, 20, 15, 25, 20, 30, 25],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
};
</script>

<style>
canvas {
  max-width: 100%;
}
</style>

