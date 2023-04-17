<!-- Plantilla 39/100 CustomScrollbar VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="custom-scrollbar">
    <div class="content">
      <!-- Contenido -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomScrollbarExample",
  mounted() {
    const el = document.querySelector(".custom-scrollbar .content");
    new SimpleBar(el);
  }
}
</script>

<style>
.custom-scrollbar {
  height: 200px;
  overflow: hidden;
}
.custom-scrollbar .content {
  height: 100%;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #000;
}
</style>

