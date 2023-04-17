<!-- Plantilla 12/100: Mapas VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->


<template>
  <div class="map-wrapper">
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Object,
      required: true,
      default: () => ({ lat: 0, lng: 0 }),
    },
    zoom: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    const map = L.map(this.$refs.map).setView([this.center.lat, this.center.lng], this.zoom)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map)
  },
}
</script>

<style scoped>
.map-wrapper {
  margin-bottom: 16px;
}

.map {
  height: 400px;
}
</style>
