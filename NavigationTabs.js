<!-- Plantilla 63/100 NavigationTabs VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="tab-navigation">
    <div class="tab-nav">
      <div 
        v-for="(tab, index) in tabs" 
        :key="index"
        :class="{ 'active': activeTab === index }" 
        class="tab"
        @click="activeTab = index"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tab-content">
      <slot :name="tabs[activeTab]"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: []
    }
  },
  mounted() {
    this.tabs = this.$slots.default.filter(slot => slot.tag).map(slot => slot.data.slot)
  }
}
</script>
<style scoped>
.tab-navigation {
  display: flex;
  flex-direction: column;
}

.tab-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tab {
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.tab.active {
  border-bottom-color: #fff;
  background-color: #fff;
  font-weight: bold;
}

.tab-content {
  border: 1px solid #ddd;
  padding: 10px;
}
</style>