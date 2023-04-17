<!-- Plantilla 1/100: Botones VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <button :class="classes" @click="handleClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'secondary'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'btn',
        `btn-${this.size}`,
        `btn-${this.variant}`,
      ]
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  padding: 8px 16px;
}

.btn-small {
  padding: 4px 8px;
  font-size: 12px;
}

.btn-large {
  padding: 16px 24px;
  font-size: 16px;
}

.btn-default {
  background-color: #eaeaea;
  color: #333333;
}

.btn-primary {
  background-color: #1a73e8;
  color: #ffffff;
}

.btn-secondary {
  background-color: #f1f1f1;
  color: #333333;
}
</style>
