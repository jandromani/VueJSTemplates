<!-- Plantilla 65/100 AdvancedSearch VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="search-input">Búsqueda</label>
      <input type="text" id="search-input" v-model="searchQuery" />
    </div>

    <div>
      <label for="date-input">Fecha de inicio</label>
      <input type="date" id="date-input" v-model="startDate" />
    </div>

    <div>
      <label for="price-input">Precio máximo</label>
      <input type="number" id="price-input" v-model="maxPrice" />
    </div>

    <div>
      <label for="category-select">Categoría</label>
      <select id="category-select" v-model="selectedCategory">
        <option disabled value="">Seleccione una categoría</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
    </div>

    <button type="submit">Buscar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      startDate: '',
      maxPrice: null,
      selectedCategory: '',
      categories: [
        { id: 1, name: 'Ropa' },
        { id: 2, name: 'Electrónica' },
        { id: 3, name: 'Hogar' },
        { id: 4, name: 'Juguetes' }
      ]
    };
  },
  methods: {
    submitForm() {
      // Implementar la lógica de búsqueda aquí
      console.log('Search query:', this.searchQuery);
      console.log('Start date:', this.startDate);
      console.log('Max price:', this.maxPrice);
      console.log('Selected category:', this.selectedCategory);
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
}
input, select {
  padding: 0.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}
button[type="submit"] {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}
button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>


