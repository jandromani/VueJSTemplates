<!-- Plantilla 43/100 SettingsPanel VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <div class="row">
      <div class="col-3">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link" :class="{ active: activeTab === 1 }" @click="activeTab = 1" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Opción 1</a>
          <a class="nav-link" :class="{ active: activeTab === 2 }" @click="activeTab = 2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Opción 2</a>
          <a class="nav-link" :class="{ active: activeTab === 3 }" @click="activeTab = 3" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Opción 3</a>
        </div>
      </div>
      <div class="col-9">
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade" :class="{ show: activeTab === 1 }" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <h3>Opción 1</h3>
            <!-- Contenido de la opción 1 -->
          </div>
          <div class="tab-pane fade" :class="{ show: activeTab === 2 }" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <h3>Opción 2</h3>
            <!-- Contenido de la opción 2 -->
          </div>
          <div class="tab-pane fade" :class="{ show: activeTab === 3 }" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <h3>Opción 3</h3>
            <!-- Contenido de la opción 3 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsPanelExample",
  data() {
    return {
      activeTab: 1
    }
  }
}
</script>

<style>
/* Estilos personalizados */
</style>


