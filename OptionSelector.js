<!-- Plantilla 6/100: Selectores de opciones VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div :class="wrapperClasses">
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      :name="name"
      :value="value"
      @input="handleChange"
      :disabled="disabled"
      :readonly="readonly"
      :multiple="multiple"
      :size="size"
      :class="selectClasses"
    >
      <slot></slot>
    </select>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Array],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: null,
    },
  },
  computed: {
    wrapperClasses() {
      return [
        'select-wrapper',
        this.error ? 'has-error' : '',
      ]
    },
    selectClasses() {
      return [
        'select-field',
        this.error ? 'has-error' : '',
      ]
    },
    errorMessage() {
      if (this.error) {
        return this.error
      } else if (this.required && !this.value) {
        return 'This field is required'
      } else {
        return null
      }
    },
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped>
.select-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.select-field {
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.select-field:focus {
  outline: none;
  border-color: #1e88e5;
}

.has-error .select-field {
  border-color: #e53935;
}

.has-error label {
  color: #e53935;
}

.error-message {
  font-size: 12px;
  color: #e53935;
  margin-top: 4px;
}
</style>
