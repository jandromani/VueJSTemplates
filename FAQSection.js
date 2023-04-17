<!-- Plantilla 47/100 FAQSection VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="accordion" id="accordionExample">
    <div v-for="(faq, index) in faqs" :key="index" class="card">
      <div class="card-header" id="heading{{ index }}">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index">
            {{ faq.question }}
          </button>
        </h2>
      </div>
      <div :id="'collapse' + index" class="collapse" aria-labelledby="heading{{ index }}" data-parent="#accordionExample">
        <div class="card-body">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQSectionExample",
  data() {
    return {
      faqs: [
        {
          question: "¿Cómo creo una cuenta?",
          answer: "Para crear una cuenta, haz clic en el botón de registro y completa el formulario con tus datos personales."
        },
        {
          question: "¿Cómo cambio mi contraseña?",
          answer: "Para cambiar tu contraseña, inicia sesión en tu cuenta y dirígete a la sección de ajustes de cuenta. Allí encontrarás la opción de cambiar tu contraseña."
        },
        {
          question: "¿Cómo me pongo en contacto con soporte?",
          answer: "Para ponerte en contacto con soporte, envía un correo electrónico a nuestro equipo de soporte o llámanos a nuestro número de teléfono."
        }
      ]
    }
  }
}
</script>

<style>
/* Estilos personalizados */
</style>

