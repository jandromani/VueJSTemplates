<!-- Plantilla 26/100: Barra lateral VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <aside class="sidebar">
    <div class="sidebar-header">{{ title }}</div>
    <ul class="sidebar-menu">
      <li v-for="item in items" :key="item.id" class="sidebar-item">
        <a :href="item.link" class="sidebar-link">{{ item.label }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 240px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #eee;
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 16px;
}

.sidebar-item {
  margin-bottom: 8px;
}

.sidebar-link {
  display: block;
  padding: 8px;
  color: #666;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.sidebar-link:hover {
  background-color: #f2f2f2;
  color: #333;
}
</style>
