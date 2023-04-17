<!-- Plantilla 18/100: Tarjetas de contenido VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="card">
    <img :src="image" alt="Card Image" class="card-image" />
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-title {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: bold;
}

.card-text {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
}
</style>
