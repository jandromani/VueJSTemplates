<!-- Plantilla 40/100 CollapsibleContent VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="toggleContent">
      {{ showContent ? 'Ocultar contenido' : 'Mostrar contenido' }}
    </button>

    <div v-show="showContent" class="mt-3">
      <!-- Contenido -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapsibleContentExample",
  data() {
    return {
      showContent: false
    }
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent;
    }
  }
}
</script>

<style>
/* Estilos personalizados */
</style>


