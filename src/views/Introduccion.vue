<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    p.mb-4 Aquí comienza el estudio del componente <b>“Programación de la producción pecuaria”</b>. Esperamos tener una experiencia de aprendizaje satisfactoria; para ello, inicie visualizando el recurso que se propone a continuación. <b>¡Adelante!</b>

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/G9x5U2UKRzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
