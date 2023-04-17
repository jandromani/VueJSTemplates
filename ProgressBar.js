<!-- Plantilla 22/100: Barra de progreso VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="progress-bar">
    <div class="progress-bar-track">
      <div class="progress-bar-fill" :style="{ width: progress + '%' }"></div>
    </div>
    <div class="progress-bar-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
}

.progress-bar-track {
  flex: 1;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
}

.progress-bar-fill {
  height: 100%;
  background-color: #4CAF50;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-bar-label {
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
</style>
