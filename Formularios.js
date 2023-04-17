<!-- Plantilla 4/100: Formularios VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <form :class="classes" @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      default: 'vertical',
      validator: (value) => ['vertical', 'horizontal', 'inline'].includes(value),
    },
    method: {
      type: String,
      default: 'post',
      validator: (value) => ['get', 'post'].includes(value),
    },
    action: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return [
        'form',
        `form-${this.layout}`,
      ]
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit')
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form-horizontal {
  flex-direction: row;
  align-items: center;
}

.form-inline {
  display: inline-flex;
  flex-direction: row;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.form-control label {
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-control input {
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.form-control input:focus {
  outline: none;
  border-color: #1e88e5;
}

.form-control-error input {
  border-color: #e53935;
}

.form-control-error label {
  color: #e53935;
}

.form-control-error .error-message {
  font-size: 12px;
  color: #e53935;
  margin-top: 4px;
}
</style>
