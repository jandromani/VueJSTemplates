<!-- Plantilla 72/100 ServiceList VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div>
    <h1>Servicios</h1>
    <ul>
      <li v-for="service in services" :key="service.id">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <a :href="service.link">{{ service.linkText }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Diseño web',
          description: 'Creamos diseños personalizados para páginas web.',
          link: '#',
          linkText: 'Más información'
        },
        {
          id: 2,
          title: 'Desarrollo de aplicaciones',
          description: 'Desarrollamos aplicaciones web y móviles para diferentes plataformas.',
          link: '#',
          linkText: 'Más información'
        },
        {
          id: 3,
          title: 'SEO',
          description: 'Mejoramos el posicionamiento de tu sitio web en los resultados de búsqueda.',
          link: '#',
          linkText: 'Más información'
        },
        {
          id: 4,
          title: 'Marketing en redes sociales',
          description: 'Gestionamos tus redes sociales y creamos campañas publicitarias en línea.',
          link: '#',
          linkText: 'Más información'
        }
      ]
    }
  }
}
</script>

<style>
/* Estilos para la lista de servicios */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  margin: 0 0 20px;
  padding: 20px;
}
h2 {
  font-size: 24px;
  margin: 0 0 10px;
}
p {
  margin: 0 0 20px;
}
a {
  color: #007bff;
  text-decoration: none;
}
</style>


