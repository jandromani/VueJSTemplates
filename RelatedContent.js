<!-- Plantilla 52/100 RelatedContent VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="related-content">
    <div class="tabs">
      <div
        class="tab"
        :class="{ 'is-active': activeTab === 'tab1' }"
        @click="activeTab = 'tab1'"
      >
        <h3>Tab 1</h3>
      </div>
      <div
        class="tab"
        :class="{ 'is-active': activeTab === 'tab2' }"
        @click="activeTab = 'tab2'"
      >
        <h3>Tab 2</h3>
      </div>
      <div
        class="tab"
        :class="{ 'is-active': activeTab === 'tab3' }"
        @click="activeTab = 'tab3'"
      >
        <h3>Tab 3</h3>
      </div>
    </div>
    <div class="tab-content">
      <div v-if="activeTab === 'tab1'" class="content">
        <h4>Content for Tab 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div v-if="activeTab === 'tab2'" class="content">
        <h4>Content for Tab 2</h4>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div v-if="activeTab === 'tab3'" class="content">
        <h4>Content for Tab 3</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "tab1",
    };
  },
};
</script>

<style>
.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tab {
  border: 1px solid #ddd;
  border-bottom: none;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
}

.tab:hover {
  background-color: #f5f5f5;
}

.tab.is-active {
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  border-bottom: none;
}

.content {
  padding: 20px;
}
</style>

