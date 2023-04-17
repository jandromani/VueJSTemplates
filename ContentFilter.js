<!-- Plantilla 71/100 ContentFilter VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->


<template>
  <div class="search-bar">
    <input type="text" v-model="searchText" @input="filterResults" placeholder="Buscar...">
    <ul>
      <li v-for="(result, index) in filteredResults" :key="index">{{ result }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      results: ["Resultado 1", "Resultado 2", "Resultado 3", "Resultado 4"],
    };
  },
  computed: {
    filteredResults() {
      return this.results.filter((result) =>
        result.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    filterResults() {
      this.filteredResults();
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

