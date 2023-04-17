<!-- Plantilla 27/100 Encabezado de página VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <header>
    <!-- Contenedor del logo -->
    <div class="logo-container">
      <img src="logo.png" alt="Logo" class="logo">
    </div>
    <!-- Contenedor de la navegación -->
    <nav class="nav-container">
      <ul class="nav-list">
        <li class="nav-item"><a href="#">Inicio</a></li>
        <li class="nav-item"><a href="#">Nosotros</a></li>
        <li class="nav-item"><a href="#">Servicios</a></li>
        <li class="nav-item"><a href="#">Blog</a></li>
        <li class="nav-item"><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
  /* Estilos para el encabezado */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para el logo */
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 50px;
    height: 50px;
  }
  
  /* Estilos para la navegación */
  .nav-list {
    display: flex;
    list-style: none;
  }
  
  .nav-item {
    margin-right: 20px;
  }
  
  .nav-item a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
  }
  
  .nav-item a:hover {
    color: #007aff;
  }
</style>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        // datos del componente
      }
    },
    methods: {
      // métodos del componente
    }
  }
</script>
