<!-- Plantilla 19/100: Modal VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="modal" v-show="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">{{ title }}</h3>
        <button class="modal-close" @click="close">
          <i class="fa fa-times"></i>
        </button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button class="modal-button" @click="close">{{ cancelText }}</button>
        <button class="modal-button primary" @click="confirm">{{ confirmText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    confirmText: {
      type: String,
      default: 'OK',
    },
  },
  methods: {
    close() {
      this.$emit('update:visible', false)
    },
    confirm() {
      this.$emit('confirm')
      this.close()
    },
  },
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}

.modal-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.modal-close {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
}

.modal-body {
  padding: 16px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #ddd;
}

.modal-button {
  margin: 0 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-button.primary {
  background-color: #2196f3;
  color: #fff;
}

.modal-button:hover {
  background-color: #ddd;
}
</style>
