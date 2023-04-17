<!-- Plantilla 38/100 TextEditorToolbar VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <div class="btn-toolbar" role="toolbar" aria-label="Barra de herramientas de edición de texto">
      <div class="btn-group mr-2" role="group" aria-label="Negrita y cursiva">
        <button type="button" class="btn btn-secondary" @click="format('bold')">
          <i class="fa fa-bold"></i>
        </button>
        <button type="button" class="btn btn-secondary" @click="format('italic')">
          <i class="fa fa-italic"></i>
        </button>
      </div>
      <div class="btn-group mr-2" role="group" aria-label="Subrayado y tachado">
        <button type="button" class="btn btn-secondary" @click="format('underline')">
          <i class="fa fa-underline"></i>
        </button>
        <button type="button" class="btn btn-secondary" @click="format('strikeThrough')">
          <i class="fa fa-strikethrough"></i>
        </button>
      </div>
      <div class="btn-group mr-2" role="group" aria-label="Listas">
        <button type="button" class="btn btn-secondary" @click="format('insertUnorderedList')">
          <i class="fa fa-list-ul"></i>
        </button>
        <button type="button" class="btn btn-secondary" @click="format('insertOrderedList')">
          <i class="fa fa-list-ol"></i>
        </button>
      </div>
      <div class="btn-group" role="group" aria-label="Justificar texto">
        <button type="button" class="btn btn-secondary" @click="format('justifyLeft')">
          <i class="fa fa-align-left"></i>
        </button>
        <button type="button" class="btn btn-secondary" @click="format('justifyCenter')">
          <i class="fa fa-align-center"></i>
        </button>
        <button type="button" class="btn btn-secondary" @click="format('justifyRight')">
          <i class="fa fa-align-right"></i>
        </button>
        <button type="button" class="btn btn-secondary" @click="format('justifyFull')">
          <i class="fa fa-align-justify"></i>
        </button>
      </div>
    </div>
    <div contenteditable="true" @input="onInput"></div>
  </div>
</template>

<script>
export default {
  name: "TextEditorToolbarExample",
  methods: {
    format(command, value = null) {
      document.execCommand(command, false, value);
    },
    onInput(event) {
      this.$emit("input", event.target.innerHTML);
    }
  }
}
</script>

<style>
.btn-toolbar {
  margin-bottom: 15px;
}
.btn-group {
  margin-right: 5px;
}
</style>

