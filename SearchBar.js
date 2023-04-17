<!-- Plantilla 16/100: Barra de búsqueda VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="search-wrapper">
    <input
      type="text"
      class="search-input"
      placeholder="Search..."
      v-model.trim="searchTerm"
      @input="$emit('input', searchTerm)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <button class="search-button" :class="{ active: isFocused }">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      isFocused: false,
    }
  },
}
</script>

<style scoped>
.search-wrapper {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 8px 32px 8px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #2196f3;
}

.search-button {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  padding: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.search-button i {
  font-size: 16px;
  color: #ddd;
}

.search-button.active i {
  color: #2196f3;
  transform: rotate(360deg);
}
</style>
