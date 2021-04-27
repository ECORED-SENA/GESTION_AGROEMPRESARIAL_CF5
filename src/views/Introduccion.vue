<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    p.mb-5 El manejo responsable de los sistemas de poscosecha en una empresa agrícola, permite a los productores minimizar la afectación que las prácticas agrícolas desarrolladas de manera intensiva ejercen sobre el medio ambiente y en procura de la disminución de los riesgos de contaminación cruzada que se presentan en los productos agrícolas. Esto debido a la utilización indiscriminada de agentes químicos y físicos en beneficio de una productividad empresarial explotada técnicamente.

    p.mb-5 Planear el desarrollo de las labores agrícolas con buenas prácticas y según los criterios técnicos del plan de producción, #[strong permite a los agricultores crecer en sus actividades productivas, siendo eficientes en el tiempo] y, así mismo, contribuir a la conservación y el uso sostenible de los recursos naturales; por ello, una finca agrícola será sostenible ecológicamente, después de realizar buenas prácticas que sean amigables con el medio ambiente.
    
    .row.justify-content-center.mt-5.mb-5
      .col-md.col-lg-4
        p.text_tamano 
          |
          strong En la actualidad, existe alta demanda de alimentos vegetales para a satisfacer las necesidades de los mercados verdes o producción limpia.
      .col-md.col-lg-6
        p Mercados que exigen productos certificados y cuyo cultivo sea libre de agroquímicos, fertilizantes inorgánicos o manipulados genéticamente. Una producción que aplica sistemas de gestión de calidad, adquiere el compromiso en mejorar la productividad de forma eficiente y eficaz en su funcionamiento, obteniendo ventajas económicas en cuanto los estados financieros de la empresa agropecuaria.

    figure.mb-5
      img.img-a.mb-5(src="@/assets/curso/tema_1/img_1.png")

    

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
