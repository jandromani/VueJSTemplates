<!-- Plantilla 21/100: Menús desplegables VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggle">
      {{ currentOption.label }}
      <i :class="iconClass"></i>
    </button>
    <ul class="dropdown-menu" v-show="isOpen">
      <li v-for="(option, index) in options" :key="index">
        <button class="dropdown-item" @click="select(index)">
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isOpen: false,
      selectedIndex: this.value,
    }
  },
  computed: {
    currentOption() {
      return this.options[this.selectedIndex] || { label: '' }
    },
    iconClass() {
      return this.isOpen ? 'fa fa-angle-up' : 'fa fa-angle-down'
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    select(index) {
      this.selectedIndex = index
      this.$emit('input', index)
      this.isOpen = false
    },
  },
}
</script>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.dropdown-toggle:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}

.dropdown-toggle:focus {
  outline: none;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 8px 0;
  list-style: none;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f2f2f2;
}
</style>
