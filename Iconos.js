<!-- Plantilla 2/100: Iconos VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <i :class="classes"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
  computed: {
    classes() {
      return [
        'material-icons',
        `md-${this.size}`,
      ]
    },
    styles() {
      return {
        color: this.color,
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga';
  -moz-osx-font-smoothing: grayscale;
}
</style>
