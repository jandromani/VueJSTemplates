<!-- Plantilla 67/100 EditProfile VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="profile-form">
    <form @submit.prevent="submitForm">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required>

      <label for="confirm-password">Confirmar contraseña:</label>
      <input type="password" id="confirm-password" v-model="confirmPassword" required>

      <button type="submit">Guardar cambios</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    submitForm() {
      // Aquí iría el código para enviar los datos del formulario al servidor
    }
  }
}
</script>

<style scoped>
.profile-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

label {
  margin: 10px;
}

input {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}
</style>



