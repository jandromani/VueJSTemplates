<!-- Plantilla 24/100: Chips VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="chip" :class="[color]">
    <div class="chip-content">
      {{ label }}
    </div>
    <button class="chip-close" @click="$emit('remove')">
      <i class="fa fa-times"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'default',
      validator: value => [
        'default',
        'primary',
        'success',
        'info',
        'warning',
        'danger',
      ].includes(value),
    },
  },
}
</script>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: #f2f2f2;
  border-radius: 16px;
  cursor: default;
}

.chip.default {
  background-color: #f2f2f2;
  color: #666;
}

.chip.primary {
  background-color: #007bff;
  color: #fff;
}

.chip.success {
  background-color: #28a745;
  color: #fff;
}

.chip.info {
  background-color: #17a2b8;
  color: #fff;
}

.chip.warning {
  background-color: #ffc107;
  color: #fff;
}

.chip.danger {
  background-color: #dc3545;
  color: #fff;
}

.chip-content {
  margin-right: 8px;
}

.chip-close {
  margin-left: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
}
</style>
