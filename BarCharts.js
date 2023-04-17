<!-- Plantilla 11/100: Gráficos de barras VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="bar-chart-wrapper">
    <svg :width="width" :height="height">
      <g>
        <rect
          v-for="(bar, index) in bars"
          :key="index"
          :x="bar.x"
          :y="bar.y"
          :width="bar.width"
          :height="bar.height"
          :fill="bar.color"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      validator: (data) =>
        data.every((datum) =>
          typeof datum === 'object' &&
          datum.hasOwnProperty('label') &&
          datum.hasOwnProperty('value'),
        ),
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 200,
    },
    barColor: {
      type: String,
      default: '#2196f3',
    },
    barWidth: {
      type: Number,
      default: 20,
    },
    maxValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    bars() {
      const maxValue = this.maxValue || Math.max(...this.data.map((datum) => datum.value))
      return this.data.map((datum, index) => {
        const x = index * (this.barWidth + 10)
        const height = (datum.value / maxValue) * this.height
        const y = this.height - height
        return {
          x,
          y,
          width: this.barWidth,
          height,
          color: this.barColor,
        }
      })
    },
  },
}
</script>

<style scoped>
.bar-chart-wrapper {
  margin-bottom: 16px;
}
</style>
