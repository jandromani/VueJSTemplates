<!-- Plantilla 42/100 DropZone VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="drop-zone" @dragover.prevent @drop="handleDrop">
    <p>Arrastra y suelta aquí</p>
  </div>
</template>

<script>
export default {
  name: "DropZoneExample",
  methods: {
    handleDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      // Manejar el archivo suelto
    }
  }
}
</script>

<style>
.drop-zone {
  width: 200px;
  height: 200px;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #999;
}
.drop-zone p {
  margin: 0;
}
</style>


