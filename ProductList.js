<!-- Plantilla 50/100 ProductList VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="row">
      <div v-for="product in products" class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" :src="product.image" alt="Imagen del producto">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Comprar ahora</button>
              </div>
              <small class="text-muted">{{ product.price }} {{ product.currency }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListExample",
  props: {
    title: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}

.btn-group {
  display: flex;
  flex-direction: row;
}
</style>

