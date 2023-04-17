<!-- Plantilla 31/100 PasswordResetForm VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <form class="form-signin" @submit.prevent="submitForm">
    <h1 class="h3 mb-3 font-weight-normal">Recuperar contraseña</h1>
    <p>Introduce tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
    <label for="inputEmail" class="sr-only">Correo electrónico</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Correo electrónico" required autofocus v-model="email">
    <button class="btn btn-lg btn-primary btn-block" type="submit">Enviar enlace de recuperación</button>
  </form>
</template>

<script>
export default {
  name: "PasswordResetForm",
  data() {
    return {
      email: ""
    }
  },
  methods: {
    submitForm() {
      // Aquí puedes añadir la lógica para enviar el formulario al servidor o realizar una acción en el cliente.
      console.log("Email: " + this.email);
      // Aquí puedes mostrar un mensaje de éxito o error al usuario según el resultado del envío del formulario.
    }
  }
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-block {
  display: block;
  width: 100%;
}
</style>

