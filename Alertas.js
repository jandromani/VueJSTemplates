<!-- Plantilla 3/100: Alertas VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div :class="classes">
    <slot></slot>
    <button class="close-btn" @click="dismiss">
      <i class="material-icons">close</i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'success', 'warning', 'error'].includes(value),
    },
    dismissable: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return [
        'alert',
        `alert-${this.type}`,
        this.dismissable ? 'alert-dismissable' : '',
      ]
    },
  },
  methods: {
    dismiss() {
      this.$emit('dismiss')
    },
  },
}
</script>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
}

.alert-info {
  background-color: #1e88e5;
}

.alert-success {
  background-color: #43a047;
}

.alert-warning {
  background-color: #ffb300;
}

.alert-error {
  background-color: #e53935;
}

.alert-dismissable {
  position: relative;
}

.close-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
}
</style>
