<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1(data-aos="fade-right") Softwares pecuarios

    .bg_fondo-t8
      .row.mb-4
        .col-lg-6
          p La difusión del uso y aplicación de las Tecnologías de la Información y la Comunicación (TIC) en las principales esferas de la vida humana y el impacto positivo que ha traído consigo, son hechos ya ampliamente reconocidos a nivel mundial, aun evitando caer en análisis simplistas o apologéticos. En términos económicos, este conjunto de innovaciones tecnológicas que amalgaman a la informática y a las telecomunicaciones forma parte un nuevo paradigma tecno-productivo basado en actividades intensivas en conocimiento, en el que comparten vanguardia con otros sectores de punta como biotecnología, nanotecnología, nuevos materiales, etc., y que está incidiendo en la actividad económica de forma tal que ya ha generado cambios en la concepción sobre las formas de organización del trabajo y en los mismos parámetros de la eficiencia productiva.
        .col-lg-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema8/img01.png')

      .row.mb-4
        .col-lg-12
          .bg_14.p-4
            p.m-0 El sector agropecuario es uno de esos campos en los cuales las TIC como tecnologías de impacto horizontal están abriéndose paso, aunque no a la velocidad y la intensidad con que han avanzado en otros espacios. El desafío de insertar tecnología en el agro y la ganadería parece ser un problema más complejo que a simple vista, pero que parece tanto más prometedor para un país como Argentina, contando con un sector SSI que, aunque de modo accidentado, ha creado un caldo de cultivo con cierto potencial, y en un marco donde la competencia internacional, si bien ya no es menor, no impediría aún realizar el catch up tecnológico en sus sectores productivos.

      .row.align-items-center.mb-4
        .col-lg-4
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema8/img02.png')
        .col-lg-8
          p Desde el punto de vista de la demanda, la relevancia estratégica que supone la incorporación de las TIC al sector agropecuario y agroindustrial ya ha sido advertida por muchos países. En el último lustro se han creado entidades internacionales abocadas específicamente a la temática. En 2002 fue creada la Asian Federation of Information Technology for Agriculture (Afita), conformada por más de diez países asiáticos –en particular los del sudeste-, y su par europea, la European Federation of Information Technology for Agriculture (Efita). Un año después, a partir de la iniciativa de Estados Unidos y Brasil surgida en la conferencia mundial organizada por ambos países sobre el tema (la World Conference of Computers in Agriculture and Natural Resources –WCCA-), se fundó la Panamerican Federation of Technology for Agriculture (Panfita), a la que se asociaron, además de Estados Unidos y Brasil, también México, Chile y Costa Rica. Estas tres organizaciones se nuclean a su vez en la Internacional Federation of Information Technology for Agriculture (Infita), de carácter mundial, que posee un journal de publicaciones científico-técnicas en el tema y realiza desde su inicio congresos mundiales, el próximo de los cuales se celebra en noviembre de 2006 en Bangalore, India. La Afita, pionera en este campo, posee diversos centros de investigación desde los cuales estudia la situación del mercado de las TIC para el agro en los diversos países europeos y en Estados Unidos. De igual modo, este último estudia la situación de Brasil y la de su propio mercado.

      .row.mb-4
        .col-lg-6
          p Gracias a todo este crecimiento varias de estas entidades han tomado la iniciativa de impulsar la creación de estándares internacionales de compatibilidad y coherencia entre los sistemas de información desarrollados para el trabajo con el sector agroalimentario (los Agriculture Information Management Standards –AIMS) con el objetivo de crear lenguajes y metodologías convencionales para compartir y sistematizar este tipo de información a nivel mundial.
          p Estas evidencias parecen más que elocuentes respecto al camino ya emprendido en este sentido por diversos países. En este sentido, Colombia no posee una institución específica dedicada a este tema, y tampoco se registran otros indicios de una política pública. Las acciones emprendidas en este aspecto han sido llevadas adelante, o bien por el sector privado (entidades como Aacrea y Aapresid) o bien por unidades específicas de distintos organismos (INTA, INTI, Senasa) en forma fragmentaria, pero no parece existir una visión global de intervención, ni estudios específicos sobre esta temática en particular.
        .col-lg-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema8/img03.png')  

      .row.mb-4
        .col-lg-12
          .bg_14.p-4
            p Cada vez son más las herramientas software que se están trabajando en el área pecuaria y es común encontrar maquinaria y equipo tecnológico en granjas y centros de pastoreo que revisan con inteligencia artificial los avances de los diferentes procesos desde la alimentación hasta la gestión de los diferentes derivados pecuarios. 
            p.m-0 Para este proceso formativo no se referencian marcas de software o programas especiales, puesto que eso depende de cada una de las empresas de la que los aprendices del SENA harán parte; sin embargo, se recomienda integrar como mínimo en el sistema de cada proceso los procesadores de texto y las hojas de cálculo que facilitan la gestión de los datos.
      


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
