<!-- Plantilla 8/100: Botones de radio VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div :class="wrapperClasses">
    <label v-for="(option, index) in options" :key="index" :for="`${id}-${index}`">
      <input
        :id="`${id}-${index}`"
        :name="name"
        :value="option.value"
        :checked="option.value === value"
        @input="handleChange"
        :disabled="disabled"
        :readonly="readonly"
        :class="inputClasses"
        type="radio"
      />
      <span>{{ option.label }}</span>
    </label>
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
    options: {
      type: Array,
      required: true,
      validator: (options) =>
        options.every((option) =>
          typeof option === 'object' &&
          option.hasOwnProperty('label') &&
          option.hasOwnProperty('value'),
        ),
    },
    value: {
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
        'radio-wrapper',
        this.error ? 'has-error' : '',
      ]
    },
    inputClasses() {
      return [
        'radio-field',
        this.error ? 'has-error' : '',
      ]
    },
    errorMessage() {
      if (this.error) {
        return this.error
      } else if (this.required && !this.value) {
        return 'Please select an option'
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
.radio-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.radio-field {
  margin-right: 8px;
}

.has-error label {
  color: #e53935;
}

.has-error .radio-field {
  border-color: #e53935;
}

.has-error .radio-field:checked + span {
  color: #e53935;
}

.error-message {
  font-size: 12px;
  color: #e53935;
  margin-top: 4px;
}
</style>
