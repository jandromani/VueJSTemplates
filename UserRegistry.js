<!-- Plantilla 66/100 UserRegistry VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <h2>Registro de Usuario</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmar contraseña:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
      </div>
      <div class="form-group">
        <button type="submit">Registrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    submitForm() {
      // Send form data to server for processing
      console.log(this.username, this.email, this.password, this.confirmPassword);
    },
  },
};
</script>

<style scoped>
/* Styles for form elements */
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
}

button[type='submit'] {
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #0069d9;
}
</style>

