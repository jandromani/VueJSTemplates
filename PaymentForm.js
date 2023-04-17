<!-- Plantilla 59/100 PaymentForm VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="payment-form">
    <form>
      <h2 class="form-title">Datos de pago</h2>
      <div class="form-group">
        <label for="card-number">Número de tarjeta</label>
        <input type="text" id="card-number" class="form-control" v-model="cardNumber" placeholder="0000 0000 0000 0000" required>
      </div>
      <div class="form-group">
        <label for="card-expiry">Fecha de vencimiento</label>
        <div class="expiry">
          <input type="text" id="card-expiry" class="form-control" v-model="cardExpiry" placeholder="MM / AA" required>
        </div>
      </div>
      <div class="form-group">
        <label for="card-cvc">CVC</label>
        <input type="text" id="card-cvc" class="form-control" v-model="cardCVC" placeholder="CVC" required>
      </div>
      <div class="form-group">
        <label for="card-name">Nombre del titular de la tarjeta</label>
        <input type="text" id="card-name" class="form-control" v-model="cardName" placeholder="Nombre y apellido" required>
      </div>
      <div class="form-group">
        <label for="card-address">Dirección de facturación</label>
        <input type="text" id="card-address" class="form-control" v-model="cardAddress" placeholder="Calle, número, ciudad, código postal" required>
      </div>
      <div class="form-group">
        <label for="card-email">Correo electrónico</label>
        <input type="email" id="card-email" class="form-control" v-model="cardEmail" placeholder="Correo electrónico" required>
      </div>
      <div class="form-group">
        <label for="card-amount">Monto a pagar</label>
        <input type="number" id="card-amount" class="form-control" v-model="cardAmount" placeholder="Monto" required>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="processPayment">Pagar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: "",
      cardExpiry: "",
      cardCVC: "",
      cardName: "",
      cardAddress: "",
      cardEmail: "",
      cardAmount: "",
    };
  },
  methods: {
    processPayment() {
      // Lógica para procesar el pago
      console.log("Procesando pago...");
    },
  },
};
</script>

<style>
</style>