<!-- Plantilla 44/100 ContentGrid VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Elemento 1</h5>
            <p class="card-text">Contenido del elemento 1</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Elemento 2</h5>
            <p class="card-text">Contenido del elemento 2</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Elemento 3</h5>
            <p class="card-text">Contenido del elemento 3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentGridExample",
}
</script>

<style>
.card {
  margin-bottom: 20px;
}
</style>

