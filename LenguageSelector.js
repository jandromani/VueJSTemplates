<!-- Plantilla 60/100 LenguageSelector VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="language-selector">
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option v-for="(language, index) in supportedLanguages" :key="index" :value="language">
        {{ language }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      supportedLanguages: ['English', 'Español', 'Français', 'Deutsch', 'Italiano'],
      selectedLanguage: 'English'
    };
  },
  methods: {
    changeLanguage() {
      // Add code here to change the language based on selectedLanguage value
    }
  }
};
</script>
<style scoped>
.language-selector {
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
}

select {
  background: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

option {
  font-size: 14px;
}
</style>