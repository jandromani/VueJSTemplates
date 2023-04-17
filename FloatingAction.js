<!-- Plantilla 53/100 FloatingAction VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="floating-action-button-container">
    <div
      class="floating-action-button"
      :class="{
        'floating-action-button-open': isOpen
      }"
      @click="toggleOpen"
    >
      <i class="fas fa-plus"></i>
    </div>
    <div
      class="floating-action-button-menu"
      :class="{
        'floating-action-button-menu-open': isOpen
      }"
    >
      <div class="floating-action-button-item" @click="onClick('Action 1')">
        <i class="fas fa-check"></i>
      </div>
      <div class="floating-action-button-item" @click="onClick('Action 2')">
        <i class="fas fa-times"></i>
      </div>
      <div class="floating-action-button-item" @click="onClick('Action 3')">
        <i class="fas fa-pencil-alt"></i>
      </div>
      <div class="floating-action-button-item" @click="onClick('Action 4')">
        <i class="fas fa-share-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    onClick(action) {
      console.log(action)
      // do something
    }
  }
}
</script>

<style scoped>
.floating-action-button-container {
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 1;
}
.floating-action-button {
  width: 60px;
  height: 60px;
  background-color: #3498db;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
.floating-action-button:hover {
  background-color: #2980b9;
}
.floating-action-button-open {
  transform: rotate(45deg);
}
.floating-action-button-menu {
  position: absolute;
  bottom: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none;
}
.floating-action-button-menu-open {
  opacity: 1;
  pointer-events: auto;
}
.floating-action-button-item {
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  color: #3498db;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
.floating-action-button-item:hover {
  background-color: #f1f1f1;
}
</style>

