<!-- Plantilla 68/100 AutoCompleteSearchBar VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="search-bar">
    <input type="text" v-model="searchTerm" @input="handleInput" @blur="hideResults" @focus="showResults" placeholder="Search...">
    <div class="search-results" v-show="showResults">
      <div v-if="searchResults.length > 0">
        <div v-for="(result, index) in searchResults" :key="index" class="result" @mousedown="handleClick(result)">
          {{ result }}
        </div>
      </div>
      <div v-else>No results found</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      searchResults: [],
      showResults: false,
    };
  },
  methods: {
    handleInput() {
      if (this.searchTerm.length > 0) {
        // Perform your search logic here and update the searchResults array
        this.searchResults = ["Result 1", "Result 2", "Result 3"];
      } else {
        this.searchResults = [];
        this.showResults = false;
      }
    },
    handleClick(result) {
      // Handle the click event on a search result
      console.log("Clicked result:", result);
    },
    showResults() {
      if (this.searchTerm.length > 0) {
        this.showResults = true;
      }
    },
    hideResults() {
      setTimeout(() => {
        this.showResults = false;
      }, 100);
    },
  },
};
</script>

<style>
.search-bar {
  position: relative;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
}

.result {
  padding: 8px 10px;
  cursor: pointer;
}

.result:hover {
  background-color: #f2f2f2;
}
</style>


