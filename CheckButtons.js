<!-- Plantilla 9/100: Botones de chequeo VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div :class="wrapperClasses">
    <label :for="id">
      <input
        :id="id"
        :name="name"
        :type="type"
        :value="value"
        :checked="checked"
        @input="handleChange"
        :disabled="disabled"
        :readonly="readonly"
        :class="inputClasses"
      />
      <span>{{ label }}</span>
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
    type: {
      type: String,
      default: 'checkbox',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
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
        'checkbox-wrapper',
        this.error ? 'has-error' : '',
      ]
    },
    inputClasses() {
      return [
        'checkbox-field',
        this.error ? 'has-error' : '',
      ]
    },
    errorMessage() {
      if (this.error) {
        return this.error
      } else if (this.required && !this.checked) {
        return 'This field is required'
      } else {
        return null
      }
    },
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.checked)
    },
  },
}
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.checkbox-field {
  margin-right: 8px;
}

.has-error label {
  color: #e53935;
}

.has-error .checkbox-field {
  border-color: #e53935;
}

.has-error .checkbox-field:checked + span {
  color: #e53935;
}

.error-message {
  font-size: 12px;
  color: #e53935;
  margin-top: 4px;
}
</style>
