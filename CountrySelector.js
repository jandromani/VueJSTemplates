<!-- Plantilla 61/100 CountrySelector VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <label for="country-select">Selecciona tu país:</label>
    <select id="country-select" v-model="selectedCountry">
      <option v-for="country in countries" :value="country.code">{{ country.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: '',
      countries: [
        { name: 'España', code: 'ES' },
        { name: 'México', code: 'MX' },
        { name: 'Argentina', code: 'AR' },
        { name: 'Estados Unidos', code: 'US' },
        { name: 'Chile', code: 'CL' },
        { name: 'Colombia', code: 'CO' },
        { name: 'Perú', code: 'PE' },
        { name: 'Francia', code: 'FR' },
        { name: 'Italia', code: 'IT' },
        { name: 'Alemania', code: 'DE' }
      ]
    }
  },
}
</script>

<style>
/* Estilos opcionales aquí */
</style>
