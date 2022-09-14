<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Buenas prácticas pecuarias

    .row.mb-4
      .col-lg-6
        p Las buenas prácticas (agrícolas y pecuarias) consisten en “la aplicación del conocimiento disponible a la utilización sostenible de los recursos naturales básicos para la producción, en forma benévola, de productos agrícolas alimentarios y no alimentarios inocuos y saludables, a la vez que se procuran la viabilidad económica y la estabilidad social”. Compañía Nacional de Chocolates (2019)
        .cajon.color2.py-3.px-4.mt-3.mb-4       
          p.m-0 Por su parte, con base en la legislación colombiana, las buenas prácticas se relacionan con aquellas que se deben llevar a cabo en los sistemas pecuarios para disminuir los riesgos físicos, químicos y biológicos que puedan llegar a afectar la salud de los consumidores. 

        p Ahora bien, según el Instituto Colombiano Agropecuario (ICA) las buenas prácticas pecuarias se basan en cuatro principios fundamentales, a partir de los cuales se desprenden todos los conceptos y actividades que comprenden este nuevo enfoque de la actividad productiva. Estos son:
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img01.png')

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-7
                  figure
                    img.img-t.img-c.mb_2(src='@/assets/curso/tema3/img02.svg', alt='Texto que describa la imagen')
              h5.text-center Seguridad de las personas 
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.mt-4.text-center Seguridad de las personas 
              p.text-center Protección de la salud y la seguridad del personal que labora en los sistemas productivos pecuarios.  

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-7
                  figure
                    img.img-t.img-c.mb_3(src='@/assets/curso/tema3/img03.svg', alt='Texto que describa la imagen')
              h5.text-center Medio ambiente   
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.mt-4.text-center Medio ambiente 
              p.text-center Producción pecuaria en sintonía con la protección del entorno y de los recursos naturales. 

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-7
                  figure
                    img.img-t.img-c.mb_4(src='@/assets/curso/tema3/img04.svg', alt='Texto que describa la imagen')
              h5.text-center Bienestar animal   
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.mt-4.text-center Bienestar animal 
              p.text-center Evitar el sufrimiento de los animales, el maltrato y las situaciones que pongan en riesgo su integridad. 

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-7
                  figure
                    img.img-t.img-c.mb_4(src='@/assets/curso/tema3/img05.svg', alt='Texto que describa la imagen')
              h5.text-center Inocuidad alimentaria   
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.mt-4.text-center Inocuidad alimentaria
              p.text-center Inocuidad de los alimentos procedentes de la actividad productiva pecuaria para contribuir a la salud pública. 

    Separador

    #t_3_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 3.1 Normativa

    .row.justify-content-center.mb-4
      .col-lg-6
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img06.svg')
      .col-lg-6
        p En Colombia existe una normatividad importante en los aspectos relacionados con la actividad productiva agropecuaria, la cual abarca varias leyes y decretos, además de resoluciones del ICA y varios CONPES.  
        p La normativa relacionada con las buenas prácticas pecuarias es bastante amplia en la legislación colombiana e, incluso, gracias al trabajo del ICA, existen disposiciones importantes para las explotaciones bovinas, porcinas, ovinas, caprinas y de équidos por medio de las cuales se busca contribuir a la inocuidad de los productos y al bienestar animal principalmente. 

    p En la tabla que se muestra a continuación, reconozca los pliegos más importantes de la normatividad vigente:

    .titulo-sexto.color-acento-botones(data-aos="fade-right").mb-0
      h5 Tabla 5
    
    .tabla-a.color-primario.mt-2.border_tabla1.mb-5
      table
        thead
          tr
            td.h5(colspan="4") 
            td.h5(colspan="8") 
        tbody
          tr
            td(colspan="4") <b>Pliegos más importantes de la normatividad vigente CONPES 3675 julio de 2010</b> 
            td(colspan="8") Política nacional para mejorar la competitividad del sector lácteo colombiano: se proponen estrategias para mejorar la productividad del eslabón primario de la cadena láctea en las regiones productoras.    
          tr
            td(colspan="4") <b>CONPES 3376 septiembre de 2005</b>
            td(colspan="8") Política sanitaria y de inocuidad para las cadenas de la carne bovina y de la leche: se proponen alternativas para el mejoramiento del estatus sanitario de las cadenas láctea y de la carne bovina para el fortalecimiento de la competitividad del sector.
          tr 
            td(colspan="4") <b>CONPES 3676 julio de 2010</b>
            td(colspan="8") Política sanitaria y de inocuidad para las cadenas de la carne bovina y de la leche: busca consolidar la política sanitaria y de inocuidad para mejorar la competitividad del sector, favorecer la salud pública y facilitar el acceso a mercados.            
          tr
            td(colspan="4") <b>Decreto 1500 de 2007</b>
            td(colspan="8") Establece las directrices para la inspección, vigilancia y control de los productos cárnicos para el consumo humano, así como los requisitos sanitarios y de inocuidad que se deben cumplir en la producción primaria.
          tr
            td(colspan="4") <b>Resolución ICA 76509 de 2020</b>
            td(colspan="8") Se establecen los requisitos para obtener la Certificación en Buenas Prácticas Ganaderas BPG en la producción porcina.
          tr 
            td(colspan="4") <b>Resolución ICA 68167 de 2020</b>
            td(colspan="8") Se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de carne de bovinos y/o bufalinos.
          tr
            td(colspan="4") <b>Resolución ICA 20277 de 2018</b>
            td(colspan="8") Se establecen los requisitos sanitarios y de inocuidad para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción primaria de ovinos y caprinos. 
          tr
            td(colspan="4") <b>Resolución 67449 de 2020</b>
            td(colspan="8") Establece los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de leche.
          tr 
            td(colspan="4") <b>Resolución 7953 de 2017</b>
            td(colspan="8") Se establecen los requisitos sanitarios y de bienestar animal para obtener la Certificación en Buenas Prácticas Ganaderas – BGP en la producción primaria de équidos, con destino a la recreación, trabajo y deporte.
          tr
            td(colspan="4") <b>Decreto 616 de 2006</b>
            td(colspan="8") Se expide el Reglamento Técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercializa, expenda, importe o exporte en el país.
          tr
            td(colspan="4") <b>Ley 1774 de 2016</b>
            td(colspan="8") Establece sanciones para quienes cometan delitos contra la vida e integridad física y emocional de los animales. 

    Separador

    #t_3_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 3.2 Programas de certificación

    .row.justify-content-center
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img07.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul.bg_color4
            .p-4
              h5 Sanidad animal y bioseguridad
              ul.lista-ul--color.mb_1
                li.mb_1 
                  i.fas.fa-angle-right
                  | Incripción del predio ante el ICA. 
                li.mb_1 
                  i.fas.fa-angle-right
                  | Plan sanitario.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Mantener areas de cuarentena, manejo de animales enfermos, control animales nuevos y enfermos.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Control y vacunacion de enfermedades de control.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Plan de bioseguridad.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Mantenimiento de areas vulnerables, manejo de instalaciones, materias primas, elementos y maquinaria en la producción.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Control de plagas, insectos y roedores, animales extraños a la producción.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Limpieza y desinfección en instalación.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Trazabilidad.

    .row.justify-content-center
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img08.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h5 Plan de saneamiento
              ul.lista-ul--color.mb_1
                li.mb_1 
                  i.fas.fa-angle-right
                  | Plan de manejo ambiental manejo integral de residuos.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Prevención, mitigación y reparación de riesgos.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Uso eficiente y responsable del agua, suelo, aire.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Minimizar acciones que interfieran con la inocuidad.

    .row.justify-content-center
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img09.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul.bg_color4
            .p-4
              h5 Buenas prácticas de uso de medicamentos veterinarios y alimentación animal 
              ul.lista-ul--color.mb_1
                li.mb_1 
                  i.fas.fa-angle-right
                  | Medicamentos, biológicos, plaguicidas y alimentos deben contar con registro del ICA.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Los medicamentos veterinarios, alimentos, biológicos y plaguicidas deben contar con etiqueta, lote, fecha de elaboración y vencimiento.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Insumos agropecuarios almacenados correctamente y direccionados y registro de los mismos.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Desechar correctamente los envases de medicamentos, biológicos, insecticidas, y otros productos de uso pecuario.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Cuidar los tiempos de retiro de medicamentos, prevenir residuos en productos.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Alimentos y agua de calidad, libre de contaminantes, biológicos, químicos o físicos.

    .row.justify-content-center
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img10.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h5 Bienestar animal y personal
              ul.lista-ul--color.mb_1
                li.mb_1 
                  i.fas.fa-angle-right
                  | Proporcionar condiciones de bienestar en la producción. 
                li.mb_1 
                  i.fas.fa-angle-right
                  | La productiva mejora de la mano de las prácticas de bienestar y de la mano de obra.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Tener en cuenta la etología y naturaleza de los animales utilizados en la producción para brindarles condiciones de bienestar que aumenten la producción.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Capacitar al personal para que tenga acciones apropiadas en los procesos productivos.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Designar al personal necesario de acuerdo con los procesos productivos y el tipo de producción.
                
    .titulo-sexto.color-acento-botones(data-aos="fade-right").mb-0
      h5 Tabla 6 
    span.ms-4 <em>Requerimiento de procedimientos y documentos según la Resolución ICA de acuerdo a la especie.  </em>
    
    .tabla-a.color-primario.mt-2.border_tabla1.mb-5
      table
        thead
          tr
            td.h5(colspan="3") PLAN DE IMPLEMENTACIÓN
            td.h5(colspan="3") CAPRINOS Y OVINOS Res. 202777 / 2018
            td.h5(colspan="3") PORCINOS Res. 76509 / 2020
            td.h5(colspan="3") EQUINOS Res. 7953 / 2017
          tr
            td(colspan="3")(rowspan="6") <b>PROTOCOLOS O PROCEDIMIENTOS</b>
            td(colspan="3") Manejo integral de plagas.
            td(colspan="3") Manejo integral de plagas. 
            td(colspan="3") Manejo integral de plagas. 
          tr
            td(colspan="3") Cuarentena y adquisición de animales.
            td(colspan="3") Cuarentena, adquisición de animales, ingreso y aislamiento de reemplazo.
            td(colspan="3") Cuarentena y adquisición de animales.
          tr 
            td(colspan="3") Procedimiento de identificación y atención a cambios de coportamiento -bienestar animal.
            td(colspan="3") Procedimiento de identificación y atención a cambios de comportamiento y adaptación o aclimatación - bienestar animal.
            td(colspan="3") Procedimiento de identificación y atención a cambios de comportamiento - bienestar animal.            
          tr
            td(colspan="3") Plan sanitario (manejo y aislamiento anímales enfermos).
            td(colspan="3") Plan sanitario y protocolo de bioseguridad.
            td(colspan="3") Plan sanitario.  
          tr
            td(colspan="3") 
            td(colspan="3") Ingreso y manejo de material genético.
            td(colspan="3") 
          tr 
            td(colspan="3") 
            td(colspan="3") Limpieza de áreas y utensilios.
            td(colspan="3") 
          tr
            td(colspan="3")(rowspan="6") <b>DOCUMENTOS</b>
            td(colspan="3") Registro Único de Vacunación RUV.
            td(colspan="3") Registro Único de Vacunación RUV.
            td(colspan="3") Registro Único de Vacunación RUV.
          tr
            td(colspan="3") Prescripciones medicamentos veterinarios - fórmula médica.
            td(colspan="3") Prescripciones medicamentos veterinarios - fórmula médica.
            td(colspan="3") Prescripciones medicamentos veterinarios - fórmula médica.
          tr 
            td(colspan="3") Instructivo manejo sanitario enfermedades de control oficial.
            td(colspan="3") Instructivo manejo sanitario enfermedades de control oficial.
            td(colspan="3") Instructivo manejo sanitario enfermedades de control oficial.
          tr
            td(colspan="3") Resultado del análisis del agua.
            td(colspan="3") Autorización aplicación de medicamentos y pequeñas intervenciones quirúrgicas.
            td(colspan="3") Examen médico personal.
          tr
            td(colspan="3") Examen médico personal.
            td(colspan="3") Resultado del análisis del agua.
            td(colspan="3") Certificados de capacitación.
          tr
            td(colspan="3") Certificados de capacitación.
            td(colspan="3") Certificados de capacitación.
            td(colspan="3") Seguridad social.
          tr
            td(colspan="3")(rowspan="6") <b>REGISTROS</b>
            td(colspan="3") Ingresos de personas y vehículos
            td(colspan="3") Ingresos de personas y vehículos
            td(colspan="3") Ingresos de personas y vehículos
          tr
            td(colspan="3") Diagnóstico de enfermedades veterinarias y mortalidad.
            td(colspan="3") Diagnóstico de enfermedades veterinarias y mortalidad.
            td(colspan="3") Diagnóstico de enfermedades veterinarias y mortalidad.
          tr 
            td(colspan="3") Aplicación de tratamiento o medicamentos veterinarios.
            td(colspan="3") Aplicación de tratamiento o medicamentos veterinarios.
            td(colspan="3") Aplicación de tratamiento o medicamentos veterinarios.
          tr
            td(colspan="3") Manejo de potreros.
            td(colspan="3") Individual o ficha por animal o lote.
            td(colspan="3") Inventario de insumos pecuario y agrícolas.
          tr 
            td(colspan="3") 
            td(colspan="3") Inventario de productos y biológicos veterinarios.
            td(colspan="3") 
          tr
            td(colspan="3") 
            td(colspan="3") Inventario de alimentos y materias primas.
            td(colspan="3") 
          tr
            td(colspan="3")(rowspan="10") <b>ACTIVIDADES DE MANEJO</b>
            td(colspan="3") Delimitación del predio y disposición áreas.
            td(colspan="3") Delimitación del predio y disposición áreas.
            td(colspan="3") Delimitación del predio y disposición áreas.
          tr
            td(colspan="3") Disposición residuos.
            td(colspan="3") Disposición residuos.
            td(colspan="3") Disposición residuos.
          tr 
            td(colspan="3") Protección y conservación de fuentes de agua.
            td(colspan="3") Protección y conservación de fuentes de agua.
            td(colspan="3") Protección y conservación de fuentes de agua.
          tr
            td(colspan="3") Plagas y roedores.
            td(colspan="3") Plagas y roedores.
            td(colspan="3") Plagas y roedores.
          tr
            td(colspan="3") Manejo sanitario.
            td(colspan="3") Manejo sanitario.
            td(colspan="3") Manejo sanitario.
          tr
            td(colspan="3") Medicamentos veterinarios.
            td(colspan="3") Medicamentos veterinarios.
            td(colspan="3") Medicamentos veterinarios.        
          tr 
            td(colspan="3") Alimentación animal.
            td(colspan="3") Alimentación animal e insumos agropecuarios. 
            td(colspan="3") Alimentación animal e insumos agropecuarios. 
          tr
            td(colspan="3") Elementos de bioseguridad, elementos de protección personal, seguridad y salud en el trabajo.
            td(colspan="3") Bioseguridad.
            td(colspan="3") Elementos de bioseguridad, elementos de protección personal, seguridad y salud en las labores del trabajo.
          tr
            td(colspan="3") 
            td(colspan="3") Sacrificio humanitario.
            td(colspan="3") 
          tr
            td(colspan="3") 
            td(colspan="3") Elementos e implementos de bioseguridad, elementos de protección personal, seguridad y salud en las labores del trabajo.
            td(colspan="3") 
            


</template>

<script>
export default {
  name: 'Tema3',
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
