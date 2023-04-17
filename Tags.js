<!-- Plantilla 23/100: Etiquetas VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="tag" :class="[color]">
    {{ label }}
    <button class="tag-close" @click="$emit('remove')">
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
.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 16px;
  cursor: default;
}

.tag.default {
  background-color: #f2f2f2;
  color: #666;
}

.tag.primary {
  background-color: #007bff;
  color: #fff;
}

.tag.success {
  background-color: #28a745;
  color: #fff;
}

.tag.info {
  background-color: #17a2b8;
  color: #fff;
}

.tag.warning {
  background-color: #ffc107;
  color: #fff;
}

.tag.danger {
  background-color: #dc3545;
  color: #fff;
}

.tag-close {
  margin-left: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
}
</style>
