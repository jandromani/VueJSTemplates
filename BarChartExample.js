<!-- Plantilla 55/100 BarChart + Example VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: false
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      };

      const ctx = this.$refs.barChart.getContext("2d");
      const chartData = {
        labels: this.data.labels,
        datasets: [
          {
            label: this.data.title,
            data: this.data.values,
            backgroundColor: this.data.colors
          }
        ]
      };

      const mergedOptions = Object.assign(chartOptions, this.options);
      this.chart = new Chart(ctx, {
        type: "bar",
        data: chartData,
        options: mergedOptions
      });
    }
  },
  watch: {
    data() {
      this.chart.destroy();
      this.renderChart();
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
};
</script>

<style scoped>
/* Personaliza los estilos aquí */
</style>



/*Para utilizar esta plantilla, simplemente importa el componente en tu archivo Vue y pásale las propiedades data y options para configurar los datos y opciones de tu gráfico de barras*/

<template>
  <div>
    <bar-chart :data="chartData" :options="chartOptions"></bar-chart>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      chartData: {
        title: "Ventas mensuales",
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
        values: [12, 19, 3, 5, 2, 3],
        colors: ["#0074D9", "#2ECC40", "#FF4136", "#FFDC00", "#7FDBFF", "#85144b"]
      },
      chartOptions: {
        legend: {
          display: false
        }
      }
    };
  }
};
</script>

<style scoped>
/* Personaliza los estilos aquí */
</style>
