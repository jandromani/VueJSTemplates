<!-- Plantilla 15/100: Menús de navegación VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <nav class="navigation">
    <ul class="menu">
      <li v-for="(item, index) in items" :key="index" :class="{ 'menu-item': true, active: item.active }">
        <router-link :to="item.path">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      validator: (items) =>
        items.every((item) =>
          typeof item === 'object' &&
          item.hasOwnProperty('label') &&
          item.hasOwnProperty('path'),
        ),
    },
  },
}
</script>

<style scoped>
.navigation {
  background-color: #f5f5f5;
  padding: 16px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item {
  margin-right: 16px;
}

.menu-item:last-child {
  margin-right: 0;
}

.active a {
  color: #2196f3;
  font-weight: bold;
}
</style>
