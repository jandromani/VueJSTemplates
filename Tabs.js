<!-- Plantilla 35/100 Tabs VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Perfil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contacto</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <h2>Inicio</h2>
        <p>Contenido de la pestaña de inicio.</p>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <h2>Perfil</h2>
        <p>Contenido de la pestaña de perfil.</p>
      </div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <h2>Contacto</h2>
        <p>Contenido de la pestaña de contacto.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsExample"
}
</script>

<style>
.nav-tabs {
  margin-bottom: 15px;
}
.tab-content {
  border: 1px solid #ddd;
  border-top: none;
  padding: 15px;
}
</style>

