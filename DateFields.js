<!-- Plantilla 7/100: Campos de fecha VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div :class="wrapperClasses">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      @input="handleChange"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :autocomplete="autocomplete"
      :class="inputClasses"
    />
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
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
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
    maxlength: {
      type: Number,
      default: null,
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    required: {
      type: Boolean,
      default: false,
    },
    min: {
      type: String,
      default: null,
    },
    max: {
      type: String,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
  },
  computed: {
    wrapperClasses() {
      return [
        'input-wrapper',
        this.error ? 'has-error' : '',
      ]
    },
    inputClasses() {
      return [
        'input-field',
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
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.input-field {
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.input-field:focus {
  outline: none;
  border-color: #1e88e5;
}

.has-error .input-field {
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
