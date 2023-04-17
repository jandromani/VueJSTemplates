<!-- Plantilla 20/100: Ventana emergente VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="popup" v-show="visible">
    <div class="popup-overlay" @click="close"></div>
    <div class="popup-content">
      <div class="popup-header">
        <h3 class="popup-title">{{ title }}</h3>
        <button class="popup-close" @click="close">
          <i class="fa fa-times"></i>
        </button>
      </div>
      <div class="popup-body">
        <slot></slot>
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
  },
  methods: {
    close() {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style scoped>
.popup {
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

.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  position: relative;
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}

.popup-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.popup-close {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
}

.popup-body {
  padding: 16px;
}
</style>
