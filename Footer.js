<!-- Plantilla 28/100 Footer VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <footer class="footer">
    <div class="container">
      <span class="text-muted">{{footerText}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerText: "© 2023 Mi sitio web"
    }
  }
}
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; 
  line-height: 60px; 
  background-color: #f5f5f5;
}
.footer .container {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 15px;
  padding-left: 15px;
}
.text-muted {
  color: #777;
}
</style>
