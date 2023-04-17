<!-- Plantilla 33/100 ContextMenuExample VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Menú contextual</h5>
            <p class="card-text">Haz clic derecho en cualquier parte de la tarjeta para abrir el menú contextual.</p>
          </div>
          <div class="dropdown-divider"></div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Opción 1</li>
            <li class="list-group-item">Opción 2</li>
            <li class="list-group-item">Opción 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenuExample",
  mounted() {
    document.addEventListener("contextmenu", this.showContextMenu);
    document.addEventListener("click", this.hideContextMenu);
  },
  beforeDestroy() {
    document.removeEventListener("contextmenu", this.showContextMenu);
    document.removeEventListener("click", this.hideContextMenu);
  },
  methods: {
    showContextMenu(e) {
      e.preventDefault();
      const menu = document.querySelector(".dropdown-menu");
      menu.style.top = e.pageY + "px";
      menu.style.left = e.pageX + "px";
      menu.classList.add("show");
    },
    hideContextMenu() {
      const menu = document.querySelector(".dropdown-menu");
      menu.classList.remove("show");
    }
  }
}
</script>

<style>
.card {
  margin-top: 50px;
}
.dropdown-menu {
  position: absolute;
  display: none;
  z-index: 9999;
}
.dropdown-menu.show {
  display: block;
}
</style>
