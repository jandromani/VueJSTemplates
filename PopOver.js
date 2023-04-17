<!-- Plantilla 32/100 PopOver VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <button ref="popoverButton" class="btn btn-secondary" @click="togglePopover">Abrir Popover</button>
    <b-popover ref="popover" :target="popoverButton" triggers="click">
      <template v-slot:title>Información del usuario</template>
      <div class="card">
        <div class="card-body">
          <p><strong>Nombre:</strong> {{user.name}}</p>
          <p><strong>Email:</strong> {{user.email}}</p>
          <p><strong>Teléfono:</strong> {{user.phone}}</p>
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  name: "PopoverExample",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    togglePopover() {
      this.$refs.popover.toggle();
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 0;
}
.card-body {
  padding: 15px;
}
</style>