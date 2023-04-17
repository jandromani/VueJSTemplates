<!-- Plantilla 51/100 RelatedProducts VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <ul class="nav nav-tabs" id="relatedProductsTab" role="tablist">
      <li class="nav-item" v-for="(product, index) in relatedProducts" :key="index">
        <a :class="{'nav-link': true, 'active': index === 0}" :id="`tab-${index}`" data-toggle="tab" :href="`#tabContent-${index}`" role="tab" :aria-controls="`tabContent-${index}`" :aria-selected="index === 0">{{ product.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" v-for="(product, index) in relatedProducts" :key="index" :id="`tabContent-${index}`" role="tabpanel" :aria-labelledby="`tab-${index}`">
        <div class="row">
          <div v-for="relatedProduct in product.products" class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" :src="relatedProduct.image" alt="Imagen del producto">
              <div class="card-body">
                <h5 class="card-title">{{ relatedProduct.name }}</h5>
                <p class="card-text">{{ relatedProduct.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Comprar ahora</button>
                  </div>
                  <small class="text-muted">{{ relatedProduct.price }} {{ relatedProduct.currency }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelatedProductsExample",
  props: {
    relatedProducts: {
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

