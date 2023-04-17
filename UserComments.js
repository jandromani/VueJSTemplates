<!-- Plantilla 45/100 UserComments VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <div v-for="(comment, index) in comments" :key="index" class="card mb-3">
      <div class="card-header">
        <strong>{{ comment.username }}</strong> - {{ comment.date }}
      </div>
      <div class="card-body">
        <p class="card-text">{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCommentsExample",
  data() {
    return {
      comments: [
        {
          username: "Usuario1",
          date: "01/01/2023",
          text: "Este es mi comentario."
        },
        {
          username: "Usuario2",
          date: "02/01/2023",
          text: "Este es mi segundo comentario."
        },
        {
          username: "Usuario3",
          date: "03/01/2023",
          text: "Este es mi tercer comentario."
        }
      ]
    }
  }
}
</script>

<style>
/* Estilos personalizados */
</style>

