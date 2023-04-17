<!-- Plantilla 74/100 AdditionalContent VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="resources-section">
    <h2>Recursos Adicionales</h2>
    <div class="resource-item" v-for="resource in resources" :key="resource.id">
      <img :src="resource.image" alt="resource image" class="resource-image">
      <div class="resource-info">
        <h3 class="resource-title">{{ resource.title }}</h3>
        <p class="resource-description">{{ resource.description }}</p>
        <a :href="resource.link" class="resource-link">Ver más</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resources: [
        {
          id: 1,
          image: 'https://placehold.it/300x200',
          title: 'Título del recurso 1',
          description: 'Descripción del recurso 1',
          link: '#'
        },
        {
          id: 2,
          image: 'https://placehold.it/300x200',
          title: 'Título del recurso 2',
          description: 'Descripción del recurso 2',
          link: '#'
        },
        {
          id: 3,
          image: 'https://placehold.it/300x200',
          title: 'Título del recurso 3',
          description: 'Descripción del recurso 3',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.resources-section {
  margin: 20px;
}

.resource-item {
  display: flex;
  margin-bottom: 20px;
}

.resource-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px;
}

.resource-info {
  flex: 1;
}

.resource-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.resource-description {
  margin-bottom: 10px;
}

.resource-link {
  color: blue;
  text-decoration: underline;
}
</style>

