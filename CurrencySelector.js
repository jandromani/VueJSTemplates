<!-- Plantilla 62/100 CurrencySelector VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="currency-select">
    <label for="currency">Selecciona una moneda:</label>
    <select id="currency" v-model="selectedCurrency">
      <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
        {{ currency.name }} ({{ currency.symbol }})
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencies: [
        { code: 'USD', name: 'Dólar estadounidense', symbol: '$' },
        { code: 'EUR', name: 'Euro', symbol: '€' },
        { code: 'JPY', name: 'Yen japonés', symbol: '¥' },
        { code: 'GBP', name: 'Libra esterlina', symbol: '£' },
        { code: 'CAD', name: 'Dólar canadiense', symbol: '$' },
        { code: 'AUD', name: 'Dólar australiano', symbol: '$' },
      ],
      selectedCurrency: 'USD',
    };
  },
};
</script>

<style scoped>
.currency-select label {
  display: block;
  margin-bottom: 0.5rem;
}
.currency-select select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
}
</style>
