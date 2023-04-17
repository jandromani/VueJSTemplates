<!-- Plantilla 14/100: Sliders VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="slider-wrapper">
    <input
      type="range"
      class="slider"
      :min="min"
      :max="max"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div class="slider-labels">
      <div class="slider-label" v-for="(label, index) in labels" :key="index" :style="{ left: label.position }">
        {{ label.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },
    labels: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.slider-wrapper {
  margin-bottom: 16px;
}

.slider {
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  background-color: #ddd;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 8px;
  margin-bottom: 8px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background-color: #2196f3;
  cursor: pointer;
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background-color: #2196f3;
  cursor: pointer;
  border-radius: 50%;
}
  
.slider-labels {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-label {
  position: absolute;
  font-size: 12px;
  transform: translateX(-50%);
  white-space: nowrap;
}
</style>
