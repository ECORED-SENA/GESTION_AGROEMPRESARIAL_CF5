<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Programa de producción

    .bg_fondo-t4
      .row.mb-4
        .col-lg-6(data-aos="fade-right").mb-4.mb-lg-0
          p El programa de producción es una herramienta de planificación operativa en la cual se establecen los pormenores del proceso productivo, en lo relacionado con la identificación plena del tipo de bienes a producir, las cantidades que se comercializarán y el tiempo del cual se dispone para la entrega del producto.          
          p El programa de producción depende de varios factores, entre los cuales se encuentran:
          ul.lista-ul--color.mb_1
            li.mb_1 
              i.fas.fa-check
              | El destino de los bienes producidos.
            li.mb_1
              i.fas.fa-check
              | El volumen de la demanda.
            li.mb_1
              i.fas.fa-check
              | La disponibilidad de materias primas.
            li.mb_1
              i.fas.fa-check
              | Los hábitos de consumo.
            li.mb_1
              i.fas.fa-check
              | La capacidad instalada de la empresa pecuaria.
        .col-lg-6.mb-4.mb-lg-0
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema4/img01.svg')

      .row.justify-content-center.mb-4
        .col-lg-10
          .cajon.color-acento-contenido.bg_color1.p-3.mb-4(data-aos="fade-up")
            h4.ms-2 Diseño del programa de producción           
            p.m-0.ms-2 El correcto diseño del programa de producción permite el uso eficiente de los recursos y posibilita el cumplimiento de los plazos de entrega, lo cual es de suma importancia cuando se tienen compromisos contractuales donde el factor tiempo es prioritario. 

      p.mb-5 Los elementos básicos del programa de producción se pueden agrupar así:        

      .bg_medida-sly.ms-5.ms-lg-0
        .row.mb-5(data-aos="fade-up-right")
          .col-lg-12
            .bg_3.p-1.p-lg-5
              SlyderB(:datos="datosSlyder")  

    p La formulación del programa de producción es una labor que demanda un alto nivel de concentración de parte del equipo de trabajo de la empresa pecuaria y que requiere del conocimiento profundo de sus potencialidades y necesidades.  
    p.mb-5 Para obtener un programa de producción eficiente y que responda a las necesidades reales de la empresa es fundamental tener en cuenta los siguientes pasos:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p <b>Realizar un diagnóstico de la empresa</b>
              p Se realiza un análisis detallado de los componentes de la empresa pecuaria para identificar debilidades, oportunidades, fortalezas y amenazas relacionadas con los procesos productivos. Se identifican los posibles riesgos y se evalúan las estrategias para mitigar sus impactos. 
            .col-lg-4
              .row.justify-content-end
                .col-lg-9(data-aos="fade-left")
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema4/img09.svg', alt='Texto que describa la imagen')
                  
          .row.justify-content-end.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-lg-9
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema4/img10.svg', alt='Texto que describa la imagen')                
            .col-lg-7.text-start(data-aos="fade-left")
              p <b>Identificar la capacidad productiva</b> 
              p Se analiza la infraestructura de la empresa pecuaria, la disponibilidad de materias primas, los costos de producción y las condiciones del entorno productivo (vías de acceso, disponibilidad de servicios, disponibilidad de personal, condiciones de seguridad). Describir los procesos productivos.
              
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p <b>Establecer la demanda potencial</b> 
              p Señalar qué aspectos inciden en la demanda del producto, en qué épocas del año esta es mayor o menor, identificar la estacionalidad del producto, identificar factores externos que pueden afectar el comportamiento del consumidor o de los clientes potenciales.        
            .col-lg-4
              .row.justify-content-end
                .col-lg-9(data-aos="fade-left")
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema4/img11.svg', alt='Texto que describa la imagen')

          .row.justify-content-end.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-lg-9
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema4/img12.svg', alt='Texto que describa la imagen')                
            .col-lg-7.text-start(data-aos="fade-left")
              p <b>Establecer el tiempo requerido por el proceso productivo</b> 
              p Se debe definir el tiempo que será necesario para obtener determinada cantidad de producto, analizando variables relacionadas con la disponibilidad de materia prima, infraestructura disponible, sistema productivo implementado y condiciones generales del entorno.
              
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p <b>Establecer los plazos de entrega del producto</b> 
              p En esta fase es necesario definir si el programa de producción se realiza para cumplir con una fecha específica o si por el contrario se cuenta con cierta flexibilidad en los plazos de entrega. Es importante definir estos tiempos para desarrollar eficientemente el ejercicio de planeación.
            .col-lg-4
              .row.justify-content-end
                .col-lg-9(data-aos="fade-left")
                  figure
                    img.img-t.mx-auto(src='@/assets/curso/tema4/img13.svg', alt='Texto que describa la imagen')
          


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaSlide: true,

    datosSlyder: [
      {
        titulo: 'Descripción del producto',
        texto:
          'Es importante definir cuál será el producto líder de la empresa pecuaria, ya que se debe tener claridad sobre sus características, propiedades, disponibilidad y estacionalidad, entendida como las épocas de mayor o menor oferta y/o demanda.',
        imagen: require('@/assets/curso/tema4/img02.png'),
      },
      {
        titulo: 'Descripción de la infraestructura productiva',
        texto:
          'Se debe tener claridad sobre las capacidades reales de la infraestructura productiva con la que se cuenta en la empresa pecuaria para, de esta forma, establecer qué volumen de producción se puede llegar a obtener en determinado momento.',
        imagen: require('@/assets/curso/tema4/img03.png'),
      },
      {
        titulo: 'Mapa de procesos',
        texto:
          'Es fundamental identificar cada uno de los procesos que tienen lugar en la empresa pecuaria y evaluar los factores que inciden en su desarrollo. Para ello se deben establecer los recursos que se necesitan, los costos de producción, la eficiencia de los procesos, las condiciones del personal  y la duración estimada de cada etapa del ciclo productivo.',
        imagen: require('@/assets/curso/tema4/img04.png'),
      },
      {
        titulo: 'Inventario de materias primas',
        texto:
          'Las materias primas son fundamentales en el programa de producción ya que, de acuerdo con su disponibilidad, costos y calidades, es posible definir qué tipo de bienes se pueden producir y la periodicidad con la que se obtendrán. En el programa de producción es fundamental señalar de cuánta materia prima se dispone, de dónde proviene y cómo se garantizará su disponibilidad en caso de que se agote el inventario.',
        imagen: require('@/assets/curso/tema4/img05.png'),
      },
      {
        titulo: 'Mapa de riesgos',
        texto:
          'Contar con una buena planeación de las actividades no garantiza que no surjan inconvenientes que puedan afectar la productividad de la empresa pecuaria, por lo que es importante que, dentro del programa de producción, se identifiquen los posibles riesgos a los que se puede enfrentar la unidad productiva y se establezca de qué forma se abordarán estas situaciones para que tengan el menor impacto posible.',
        imagen: require('@/assets/curso/tema4/img06.svg'),
      },
      {
        titulo: 'Cronogramas',
        texto:
          'En el programa de producción es esencial establecer los tiempos necesarios para la ejecución de los procesos productivos. Esto implica definir actividades, responsables y tiempos de entrega. Tener ciclos de entrega de producto bien definidos es sumamente importante para los aspectos logísticos de la operación.',
        imagen: require('@/assets/curso/tema4/img07.png'),
      },
      {
        titulo: 'Responsables',
        texto:
          'Este componente hace referencia a las dependencias que se encargará de desarrollar cada uno de los procesos estimados en el programa de producción. A partir de allí, cada departamento de la empresa desglosar las actividades hasta donde le sea posible con el fin de estimar las responsabilidades para cada uno de los miembros del equipo de trabajo.',
        imagen: require('@/assets/curso/tema4/img08.png'),
      },
    ],
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
