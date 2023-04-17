<!-- Plantilla 48/100 FloatingContextMenu VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Texto de ejemplo para la tarjeta.</p>
            <button class="btn btn-primary" @click="toggleMenu">Abrir menú</button>
            <div v-show="showMenu" class="context-menu">
              <ul>
                <li>Editar</li>
                <li>Eliminar</li>
                <li>Compartir</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingContextMenuExample",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>
.context-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 10;
  padding: 5px;
  box-shadow: 0px 0px 5px #ccc;
}
.context-menu ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
.context-menu ul li {
  padding: 5px;
  cursor: pointer;
}
.context-menu ul li:hover {
  background-color: #f7f7f7;
}
</style>

