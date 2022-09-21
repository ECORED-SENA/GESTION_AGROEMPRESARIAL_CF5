<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1(data-aos="fade-right") Plan de Alimentación

    .row
      .col-lg-6
        .cajon.color2.py-3.px-4.mt-3.mb-4       
          p.m-0 Este plan es la forma clara de planificar cómo se le dará alimento a los animales a cargo para satisfacer mucho más que el hambre, para la FAO (2020) este plan debe trabajar en “un mejoramiento continuo de las condiciones de los animales, que satisfaga sus requerimientos nutricionales (en cantidad y calidad) y les permita un buen desempeño, lo cual se evidencia en los parámetros productivos y reproductivos (peso al nacimiento, peso al destete, ganancia de peso, producción de leche e intervalo entre partos), como también en la salud y el bienestar del hato”, adicionalmente debe ser claro el abastecimiento de agua en buenas condiciones y suplementos vitamínicos que satisfagan las necesidades energéticas y de formación de los animales.

        p El plan de alimentación obedece directamente a la fase en la que se encuentra el animal, puede ser para levante y ceba, recuperación, crecimiento o manutención; inclusive se debe tener en cuenta las dietas especiales en caso de requerirse por asistencia veterinaria o medidas especiales.  
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img01.png')

    Separador

    #t_6_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 6.1 Buenas prácticas de alimentación animal 

    p Las buenas prácticas de alimentación animal “son todas las acciones encaminadas en el proceso de elaboración de alimentos que brinden un estándar de calidad e inocuidad según las diferentes normas y lineamientos” FAO (2004). Enfocadas en brindar unos piensos o alimentos de excelente calidad para los animales que son destinados al consumo humano abarcando toda la cadena alimenticia.

    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img02.png')
      .col-lg-6
        p Así, el ICA como ente regulador da unas especificaciones y lineamientos, los cuales son de vital importancia reconocer e implementar para asegurar las buenas prácticas de alimentación animal que cumplan las siguientes características:
        ul.lista-ul--color.mb_1
          li.mb_1 
            i.fas.fa-check
            | Los alimentos, suplementos y sales mineralizadas utilizados en la alimentación o elaboración de raciones deben contar con un registro emitido por el ICA.
          li.mb_1
            i.fas.fa-check
            | En el momento de fabricación, elaboración de raciones o en una suplementación no utilizar harinas de sangre, hueso o carne, ya que puede ser un foco de diseminación de una enfermedad.
          li.mb_1
            i.fas.fa-check
            | No realizar una suplementación o uso de suplementos de cosechas que puedan estar contaminadas con plaguicidas, en caso de ser usadas cosechas o subproductos de industrias, se debe conocer y registrar el origen o uso.
          li.mb_1
            i.fas.fa-check
            | En caso de utilizar o emplear plaguicidas en pastos y forrajes para la alimentación animal es importante respetar el periodo de carencia especificado en el rotulado del producto.

    .row.mb-4
      .col-lg-6
        ul.lista-ul--color.mb_1
          li.mb_1 
            i.fas.fa-check
            | El uso de materiales transgénicos debe contar con la autorización del ente regulador. 
          li.mb_1
            i.fas.fa-check
            | El agua utilizada en las prácticas de alimentación animal debe contar con una calidad adecuada para que no afecte la inocuidad de los productos o subproductos obtenidos de los animales.
          li.mb_1
            i.fas.fa-check
            | Se debe practicar un análisis anual de calidad de agua.
          li.mb_1
            i.fas.fa-check
            | Se deben controlar las condiciones de temperatura y humedad para el almacenamiento de los diferentes alimentos con el fin de evitar el deterioro del mismo y crecimiento de patógenos.
          li.mb_1
            i.fas.fa-check
            | Los alimentos dispuestos en bultos deben ser colocados sobre estibas y realizar una separación de las paredes para evitar la humedad y asegurar las condiciones de inocuidad.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img03.png')

    .bg_5.p-4.mb-5
      p.m-0 Para esto debemos tener en cuenta los diferentes principios y requerimientos generales en los cuales los piensos o ingredientes juegan un papel fundamental ya que se deben obtener de fuentes seguras y conservarse en bajo condiciones de inocuidad, para protegerlos de contaminación o plagas que puedan afectar las condiciones organolépticas de dichos alimentos. 

    .row.justify-content-center
      .col-lg-10
        .bg_6.p-4
          .row.justify-content-center
            .col-lg-10
              ol.lista-ol--cuadro.mt-5
                li 
                  .lista-ol--cuadro__vineta
                  h4 Piensos e ingredientes
              p.mb-4 Los ingredientes deben obtenerse de fuentes seguras y someterse a diferentes análisis de calidad los que determinan la inocuidad de los alimentos. La vigilancia de los ingredientes debe incluir la inspección, el muestreo y el análisis para descartar la presencia de contaminantes, alteraciones de la materia prima, aplicando protocolos encaminados en el riesgo. Teniendo presente los diferentes agentes causales de descomposición y alteración dentro de los cuales encontramos los agentes físicos, los agentes químicos, los agentes biológicos. 
    
    .row.justify-content-center
      .col-lg-8               
        figure.mb-5(data-aos="fade-left")
          img.img-t.mt_2(src='@/assets/curso/tema6/img04.svg')
              
    .row.justify-content-center
      .col-lg-8             
        ol.lista-ol--cuadro.mb-4
          li 
            .lista-ol--cuadro__vineta
            h4 Agentes causales de alteración del pienso e ingredientes 
        p.text-bold Etiquetado
        p El etiquetado o rótulo debe ser claro y visible, se deben tener en cuenta los ingredientes y su norma de uso aparte de esto debe cumplir con los siguientes criterios:
        .row.mb-4
          .col-lg-3
            figure(data-aos="fade-left")
              img.img-t.mx-auto(src='@/assets/curso/tema6/img05.png')
          .col-lg-7
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Lista de ingredientes.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Información del fabricante. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Identificación de lote.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Fecha de fabricación. 
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Fecha de caducidad. 
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Información sobre la especie a la que está destinado. 
        p.mb-5 Por medio del etiquetado, las fechas de fabricación, lista de ingredientes deberá ser posible generar una trazabilidad de los alimentos o materias primas utilizadas mediante el manejo adecuado de registros y muestras tomadas en caso de generar una alteración o enfermedad en el animal, tal como se ve en el numeral a y b que se presentan a continuación:

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span a
        p.text-bold Procedimiento de inspección o control 

    .row.mb-5
      .col-lg-6
        .cajon.color2.py-3.px-4.mt-3.mb-4       
          p.m-0 Para la elaboración de los diferentes planes de alimentación se deben adquirir materias primas o diferentes alimentos balanceados para suplir las necesidades de las especies, al adquirir estas materias primas o alimentos los fabricantes o distribuidores deben adoptar prácticas de inspección vigilancia y control en las diferentes etapas de elaboración de dicho alimentos tanto en la etapa de producción, almacenamiento y transporte, asegurando así que los alimentos destinados para el consumo animal sean ofrecidos de manera inocua y bajo estándares de calidad.
        p La vigilancia de los alimentos balanceados o pienso, ya sea por el fabricante, distribuidor, el productor o el ente regulador deberá incluir actividades de inspección, muestreo y por último un análisis para determinar las características del alimento y así asegurar sus condiciones de consumo. 
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img06.png')
    
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span b
        p.text-bold Riesgos para la salud
    
    p Es importante tener en cuenta que todas las actividades de buenas prácticas de alimentación animal van direccionadas a asegurar la inocuidad de los alimentos para prevenir las diferentes alteraciones a la salud y todos los problemas que estas generan tanto para los humanos como para los animales hablando de los retrasos que estas pueden generar en los diferentes sistemas productivos, es esencial que los niveles de sustancias no deseables sean demasiado bajas o nulas.

    .row.justify-content-center
      .col-lg-8 
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-t(src='@/assets/curso/tema6/img07.svg' alt='AvatarTop')
              .tarjeta.color9
                .p-4
                  p.text-bold.ms-3 Medicamentos veterinarios en alimentos medicados.
                  p.ms-3 Para la realización de alimentos medicados se deben emplear unas condiciones especiales para evitar la contaminación cruzada con otros alimentos que no requieren la medicación. 

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-t(src='@/assets/curso/tema6/img08.svg' alt='AvatarTop')
              .tarjeta.color9
                .p-4
                  p.text-bold.ms-3 Sustancias no deseables
                  p.ms-3 Deberán identificarse, controlarse y reducirse al mínimo la presencia de estos en los alimentos balanceados para animales donde debemos tener en cuenta la eliminación de contaminantes industriales y ambientales, contaminantes de tipo orgánicos los diferentes agentes patógenos y mico toxinas. 

    p Es importante la evaluación de los diferentes riesgos que indican cada sustancia y la contaminación cruzada por el uso de medicamentos en raciones animales que no requieran del mismo tanto para la salud del animal como de los consumidores finales de los productos animales es importante reconocer los límites máximos admitidos para cada sustancia.

    .row.justify-content-center.mb-5
      .col-lg-6
        .bg_7.p-2
          p.m-0.text-center.text-bold Procesos que alteran la inocuidad de los alimentos  
    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="fade-down")
          img.img-t(src='@/assets/curso/tema6/img09.svg')

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
        h4 Personal
    
    p.mb-5 El personal juega un papel fundamental en la elaboración y manipulación de los alimentos balanceados, de allí la importancia de la higiene y conocimiento de manipulación animal bajo estándares de limpieza y desinfección donde el personal debe utilizar siempre todos los elementos de protección requeridos para la labor que está realizando donde la empresa pecuaria será responsable de la capacitación en los temas de higiene, manipulación de alimentos, seguridad y elementos de protección personal aparte de las especificaciones de las funciones a realizar.

    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-7.col-xxl-6
        .bg_7.p-2
          p.m-0.text-center.text-bold  Acciones del personal en pro de las buenas prácticas de alimentación animal
    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="fade-down")
          img.img-t(src='@/assets/curso/tema6/img10.svg')

    .row.justify-content-center
      .col-lg-10
        p.text-center.mb-5 Las buenas prácticas se relacionan en los siguientes tres elementos:

        .row.mb-5
          .col-sm-6.col-xl-4.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img
                  .row.justify-content-center
                    .col-7
                      figure
                        img.img-t.img-c.mb_2(src='@/assets/curso/tema6/img11.svg', alt='Texto que describa la imagen')
                  h4.text-center Instalaciones 
                .tarjeta-flip__contenido.p-3.p-xl-4
                  p <b>Instalaciones:</b> Las instalaciones deben mantenerse limpias y desinfectadas de acuerdo al protocolo de limpieza y desinfección, deben contar con áreas con buena iluminación, temperatura, humedad y ventilación conforme al criterio de cumplimiento para cada área, las instalaciones se deben diseñar y ubicar para cumplir con las exigencias en pro al control de plagas.

          .col-sm-6.col-xl-4.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img
                  .row.justify-content-center
                    .col-7
                      figure
                        img.img-t.img-c.mb_2(src='@/assets/curso/tema6/img12.svg', alt='Texto que describa la imagen')
                  h4.text-center Equipos
                .tarjeta-flip__contenido.p-3.p-xl-4
                  p <b>Equipos:</b> Las herramientas o equipos que se encuentran en contacto directo con las diferentes materias primas deben ser limpiados y desinfectados después de cada uso para evitar todo tipo de contaminación cruzada. 

          .col-sm-6.col-xl-4.mb-4.mb-sm-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img
                  .row.justify-content-center
                    .col-7
                      figure.pt-4
                        img.img-t.img-c.mb_3(src='@/assets/curso/tema6/img13.svg', alt='Texto que describa la imagen')
                  h4.text-center Documentación 
                .tarjeta-flip__contenido.p-3.p-xl-4
                  p <b>Documentación:</b> La documentación es importante en los procesos de buenas prácticas de alimentación animal, ya que brindan información no solo frente a la trazabilidad de los alimentos, sino también de los animales dando criterios demostrativos de cumplimiento de muchas laborares realizadas y datos para un análisis mucho más riguroso en caso de ser necesario. 

    Separador

    #t_6_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 6.2 Almacenamiento de alimentos, materia prima e insumos pecuarios

    .row.align-items-center.mb-4
      .col-lg-6
        p.mb-4 El almacenamiento de los alimentos, materias primas e insumos es uno de los puntos críticos de control hablando de las buenas prácticas de alimentación, ya que unas buenas técnicas de almacenamiento brindan a los alimentos balanceados y materias una mayor vida útil dicho lo anterior el almacenamiento depende exclusivamente del espacio y condiciones del almacén.
        .cajon.color2.py-3.px-4.mt-3.mb-4       
          p.m-0 Existen diferentes formas de almacenar las materias primas, alimentos e insumos pecuarios teniendo en cuenta las características físicas y condiciones organolépticas de los anteriormente nombrados. Los métodos de almacenamiento se dividen según la acomodación y orden dado a los alimentos, materias primas e insumos en el momento de almacenar.  
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img14.png')

    p.mb-5 Las formas más comunes de almacenar las cuales pueden ser usadas según condiciones productivas y o estructurales son las siguientes:
                
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bg_9
      .row.justify-content-around.align-items-start(titulo="Almacenamiento ordenado")
        .col-md-6.mb-4.mb-md-0
          p.ms-2 Es un método de almacenamiento en el cual se ordena teniendo el flujo y la frecuencia de uso, entrada y salida de materias primas , alimento, etc., evitando si mezclas de productos, delimitando cada espacio con los nombres que los alimentos ocuparan, dejando una separación entre alimentos para así evitar contaminación o mezcla de alimentos o materias primas así asegurando una inocuidad de las mismas, este tipo de almacenamiento no genera una utilización total del espacio pero su flujo es mucho más ágil y ordenado.       
        .col-md-4
          figure
            img.img-t(src='@/assets/curso/tema6/img15.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-start(titulo="Almacenamiento en bloque")
        .col-md-6.mb-4.mb-md-0
          p.ms-2 La acomodación de las materias primas se da por su orden de llegada almacenando productos de una misma referencia o lote así, generando una gran cantidad de grupos como materias primas existan en el almacén, no se deja espacio entre referencias, logrando el llenado del almacén en su gran totalidad posee características similares al almacenamiento ordenado, pero con la diferencia de que no de dejan espacios entre referencias.      
        .col-md-4
          figure
            img.img-t(src='@/assets/curso/tema6/img16.png', alt='Texto que describa la imagen')

      .row.justify-content-around(titulo="Almacenamiento o acopio a granel")
        .col-md-6.mb-4.mb-md-0
          p.ms-2 Consta de un almacenamiento de materias primas o alimento suelto sin empacado, es importante la separación de dichas materias primas para evitar mezclas o contaminación, es importante tener en cuenta las características físicas de las materias primas o alimentos ya que hay que tener cuidado con las harinas ya que pueden ser muy volátiles y causar una contaminación.     
          p.ms-2 Teniendo en cuenta lo anterior, se deben tener unos lineamientos o condiciones básicas de almacenamiento en donde:     
        .col-md-4
          figure.mb-4
            img.img-t(src='@/assets/curso/tema6/img17.png', alt='Texto que describa la imagen')
      
        .row.justify-content-center
          .col-lg-11
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Los fertilizantes, químicos, plaguicidas y otros materiales que no estén destinados a utilizarse en la elaboración o suplementación de los alimentos se deben almacenar de manera separada para así evitar todo tipo de riesgos de contaminación cruzada. 
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Es importante también disponer de una separación de alimentos ya procesados o elaborados.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Los alimentos dispuestos en bultos deben ser colocados sobre estibas y realizar una separación de las paredes para evitar la humedad y asegurar las condiciones de inocuidad.
            
            p Deberá realizarse la inspección de las condiciones de limpieza para asegurar la inocuidad de los alimentos allí almacenados.

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
        h4 Uso de suplementos para alimentación animal. 

    .row.mb-5
      .col-lg-6
        p La deficiencia de nutrientes en las diferentes materias primas o los elevados costos para la adquisición de materias primas de calidad, genera en el sistema productivo un retraso, ya que en el animal se ve afectado el desarrollo y expresión genética del animal, ya sea en la ganancia de peso, crecimiento, madurez sexual, entre otros aspectos, que para la producción pecuaria son de vital importancia acortar estos periodos de tiempo para aumentar la producción.
        .cajon.color2.py-3.px-4.mt-3.mb-4       
          p.m-0 Es por esto que la utilización de suplementos puede ser una alternativa para disminuir esta problemática, teniendo en cuenta que no reemplazan ninguna alimentación o ración ya que lo que ellos hacen es suplir las necesidades o deficiencias de un alimento, ya sea en su componente vitamínico, mineral, energético, grado de digestibilidad, palatabilidad, etc., logrando mejorar dicho alimento para alcanzar las necesidades del animal.

        p Los factores básicos para considerar suplementar un animal son tener claro los requerimientos nutricionales del animal, necesaria para elegir y reconocer si el alimento balanceado suple las necesidades de las especies trabajadas.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img19.png')

    .row.justify-content-center.mb-5
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema6/img20.png' alt='AvatarTop')
          .tarjeta.color10
            .p-4
              p.m-0 <b>Etapa de producción del animal:</b> según las etapas en las que el animal se encuentra en la producción es necesario realizar suplementación, por ejemplo: animales en estado de gestación es recomendable realizar una suplementación mineral especialmente con calcio ya que su estado fisiológico requiere unos niveles mayores de este mineral, siendo este un condicionante de suplementación para lograr un objetivo productivo.

      .col-lg-9
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema6/img21.png' alt='AvatarTop')
          .tarjeta.color11
            .p-4
              p.mt-5 <b>Características biológicas:</b> como la edad, etapa reproductiva, sexo entre otras, las cuales puede cambiar los requerimientos nutricionales de la especie. 

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
        h4 Manejo de praderas y forrajes.

    p.m-0 El manejo de praderas y forrajes es una de las principales problemáticas en la producción ganadera bovina, ya que el mal manejo de estas puede generar una compactación del suelo por sobrepastoreo de los animales; por ende, la importancia de conocer y manejar periodos de pastoreo adecuados con sistema de rotación de potreros y periodos de descanso donde brindaran un mejor manejo de las praderas para ofrecer al animal las mejores condiciones nutricionales que la pradera puede ofertar.
    p El concepto de forraje es principalmente dado como toda aquella planta o residuo no procesado de este que sirve como fuente de alimentación animal.
    p.mb-5 Estas se dividen en gramíneas y leguminosas, las cuales aportan al animal una fuente importante de proteínas, vitaminas y un componente importante de fibra alimentaria . 

    .row.mb-5
      .col-lg-12
        .bg_3.p-4
          SlyderB.mb-5(:datos="datosSlyder")  

    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario.bg_11
          .row.justify-content-center(numero="1" titulo="Periodos de pastoreo")
            .col-md-11.mb-4.mb-md-0
              p Los periodos de pastoreo deben hacerse cuando el forraje tenga niveles de nutrientes adecuados de acuerdo a su periodo vegetativo, es importante aclarar que a medida que se pastoreen más tiernos o más maduros los resultados afectarán la recuperación de estos; por lo tanto, el consumo voluntario de materia seca se reduce, un indicio de que la pradera se encuentra en condiciones óptimas de recepción de animales es cuando el 30 % de la mismas se encuentra florecida.
              figure
                img.img-t(src='@/assets/curso/tema6/img24.png', alt='Periodos de pastoreo')

          .row.justify-content-center(numero="2" titulo="Sobrepastoreo")
            .col-md-11.mb-4.mb-md-0
              p El sobrepastoreo es una problemática muy común en el manejo de potreros o praderas que normalmente ocurre por la sobrecarga animal en los potreros, en la cual el número de animales sobrepasa la carga del terreno o cuando los animales permanecen más tiempo del recomendado, es muy común en las condiciones de verano o clima cálido, ya que escasea el alimento y se llevan al límite o en inviernos fuertes por inundaciones de potreros y las pasturas no soportan los encharcamientos, los resultados finales del sobrepastoreo siempre serán los mismos crecimiento de malezas, suelos erosionados y de difícil recuperación por consiguiente un problema de producción en la explotación. 
              figure
                img.img-t(src='@/assets/curso/tema6/img25.png' alt='Sobrepastoreo')        

          .row.justify-content-center(numero="3" titulo="Periodos de recuperación")
            .col-md-11.mb-4.mb-md-0
              p Los pastos requieren un tiempo de recuperación o descanso para recuperarse una vez han sido cortados, o consumido por los animales, teniendo esto en cuenta, es razonable pensar que se requiere dar un tiempo para que este vuelva a recuperar sus hojas que fueron consumidas o pisoteadas, esta recuperación se da desde la parte inferior de la planta iniciando por la raíz, pasando por los tallos y por último las hojas. Por ende, a medida que es respetado el tiempo de pastoreo de un potrero o pradera su recuperación será mucho más eficiente ya que el componente vegetativo no será maltratado y su crecimiento se efectuará de manera vigorosa y veloz, de lo contrario empezarán problemas de malezas y zonas erosionadas y como consecuencia recuperaciones muy lentas.    
              p Los periodos de recuperación varían dependiendo el clima, el tipo de suelo, el manejo que se le da al potrero (riego, fertilización, tipo de pastoreo, etc.) y la especie de pasto utilizado.     
              .tabla-a.color-primario.mt-2.border_tabla1.mb-5
                table
                  thead
                    tr
                      td.h4.text-center(colspan="2")(rowspan="2") Clima
                      td.h4.text-center(colspan="2")(rowspan="2") Especie 
                      td.h4.text-center(colspan="4") Periodo de descanso/días
                    tr
                      td.h4.text-center(colspan="2") Invierno
                      td.h4.text-center(colspan="2") Verano
                  tbody
                    tr
                      td.h4.text-center(colspan="2")(rowspan="5") <b>Cálido</b>
                      td.text-center(colspan="2") Guinea
                      td.text-center(colspan="2") 35-45 
                      td.text-center(colspan="2") 45
                    tr
                      td.text-center(colspan="2") Brachiarias
                      td.text-center(colspan="2") 30-45 
                      td.text-center(colspan="2") 45
                    tr 
                      td.text-center(colspan="2") Estrella
                      td.text-center(colspan="2") 23-30
                      td.text-center(colspan="2") 45-60                  
                    tr
                      td.text-center(colspan="2") Elefante 
                      td.text-center(colspan="2") 50 
                      td.text-center(colspan="2") 
                    tr
                      td.text-center(colspan="2") King Grass
                      td.text-center(colspan="2") 45 
                      td.text-center(colspan="2") 

                    tr 
                      td.h4.text-center(colspan="2")(rowspan="4") <b>Frio</b>
                      td.text-center(colspan="2") Raigrases anuales 
                      td.text-center(colspan="2") 28-35
                      td.text-center(colspan="2") 40
                    tr
                      td.text-center(colspan="2") Kikuyo
                      td.text-center(colspan="2") 42
                      td.text-center(colspan="2") 63
                    tr 
                      td.text-center(colspan="2") Azul orchoro
                      td.text-center(colspan="2") 35-42
                      td.text-center(colspan="2")                   
                    tr
                      td.text-center(colspan="2") Raigrases perennes
                      td.text-center(colspan="2") 30-40 
                      td.text-center(colspan="2") 40

          .row.justify-content-center(numero="4" titulo="Sistema de rotación de potreros") 
            .col-md-11.mb-4.mb-md-0
              .row.justify-content-around.align-items-center
                .col-md-8
                  p En el uso de las praderas o potreros es muy común los sistemas de ocupación permanente y/o alterna, las cuales generan una compactación e impactan tremendamente el suelo, pues la permanencia de los animales y el pisoteo durante un largo periodo de tiempo generando hábitos comportamentales de preferencia de lugares, ya sea por condiciones de agua o sombra generando en estos sitios una gran compactación y deterioro severo de los suelos. Así es como una gran alternativa sugerida es la rotación de potreros el cual disminuye esta problemática aportando beneficios no solo al sistema productivo, sino también al medio ambiente.
                .col-md-4
                  figure
                    img.img-t(src='@/assets/curso/tema6/img26.png' alt='Sistema de rotación de potreros')         

              p Este sistema consiste en la división de los potreros o el potrero dependiendo la capacidad de carga animal de cada uno, pero, asimismo, acortando los tiempos de estadía de los animales en el mismo lugar y generando tiempos de recuperación de los pastos y leguminosas.
              p.mb-4 Es importante conocer el área del predio y más importante el área de cada potrero, para así conocer la producción de forraje para después identificar la capacidad de carga animal, respectivamente.

              .bg_10.p-4
                p.text-bold Beneficios de la rotación de potreros: 
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Permite que cada forraje tenga su periodo de recuperación o de descanso entre los ciclos de pastoreo. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Rotaciones rápidas que promueven una producción de forraje durante todo el año.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Ayuda a controlar de forma más efectiva el crecimiento de plantas no deseadas y malezas. 

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
        h4 Alimento balanceado.

    p.mb-5 La composición de los alimentos balanceados generalmente tiene una determinada concentración de ingredientes o materias primas, para así lograr satisfacer los requerimientos energéticos, proteicos, minerales entre otros. Es importante conocer las características nutricionales de un alimento para así identificar las interacciones que dicho alimento generará en el animal. La gran mayoría de materias primas provienen de los vegetales aportando diferentes valores nutricionales a un costo relativamente más económico. La ración se define como una provisión diaria de alimento o forraje la cual es instaurada por una dieta para así cumplir las necesidades del animal según su estado de desarrollo. Dentro de los nutrientes que están en las dietas de los animales se tienen: 

    .tarjeta.tarjeta--gris.p-4.mb-5.bg_12
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Agua")
          .col-md-5.mb-4.mb-md-0.align-self-center
            p <b>Agua:</b> la cual se encuentra contenida en los alimentos.     
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/img27.png', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="Nitrógeno no proteico")
          .col-md-5.mb-4.mb-md-0.align-self-center
            p <b>Nitrógeno no proteico:</b> se refiere a los compuesto por ures, sales de amonio, nitritos y nitratos, que se utilizan exclusivamente para la dieta de rumiantes.        
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/img28.png', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="Glucósidos solubles")
          .col-md-5.mb-4.mb-md-0.align-self-center
            p <b>Glucósidos solubles:</b> las hexosas, pentosas, las pectinas, amilopectinas, amilasa.        
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/img29.png', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="Glucósidos estructurales")
          .col-md-5.mb-4.mb-md-0.align-self-center
            p <b>Glucósidos estructurales:</b> estructurados por hemicelusoa y celusosa, solo la contienen las raciones para rumiantes.       
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/img30.png', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="Lípidos")
          .col-md-5.mb-4.mb-md-0.align-self-center
            p <b>Lípidos:</b> ácidos grasos, triglicéridos y glicerol.     
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/img31.png', alt='Texto que describa la imagen')
        
        .row.justify-content-center(titulo="Vitaminas")
          .col-md-5.mb-4.mb-md-0.align-self-center
            p <b>Vitaminas:</b> tiamina, riboflavina, vitaminas B6, vitaminas B12, vitaminas del complejo B, vitamina A, D, C, E, K, ácidos nicotínicos, ascórbico, biotina.  
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/img32.png', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="Aditivos")
          .col-md-5.mb-4.mb-md-0.align-self-center
            p <b>Aditivos:</b> Comúnmente se utilizan para que los alimentos sean más palatables y tengan mejor digestibilidad y absorción.       
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/img33.png', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="Proteinas y aminoácidos")
          .col-md-5.mb-4.mb-md-0.align-self-center
            p <b>Proteinas y aminoácidos:</b> que se obtienen de acuerdo a como esten disponibles los porcentajes en los productos provenientes.
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/img34.png', alt='Texto que describa la imagen')

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
        h4 Disponibilidad de agua
    
    .row.mb-5
      .col-lg-7
        p El consumo de agua en las especies pecuarias es un recurso fundamental y esencial para su funcionamiento vital, ya que es necesaria para su regulación osmocelular, su consumo es dado en las diferentes especies por las necesidades para mantener el balance corporal y reponer los líquidos perdidos en las heces y orina, pérdidas evaporativas, más el agua retenida en líquidos de preñez y producción de leche. Es importante tener en cuenta las condiciones en las que se ofrece el agua, que sean condiciones óptimas y de buena calidad para el animal, y así prevenir enfermedades digestivas o patologías causadas por el agua contaminada. 
        p Los factores de requerimientos de agua y consumo son dados principalmente por tres (3) factores como:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            p.m-0 <b>Medioambientales:</b> temperatura, humedad relativa, lluvia, viento entre otras.
          li 
            .lista-ol--cuadro__vineta
              span b
            p.m-0 <b>Relativos de la dieta:</b> principalmente el contenido de humedad del alimento 
          li 
            .lista-ol--cuadro__vineta
              span c
            p.m-0 <b>Relativos del animal:</b> peso vivo, estado fisiológico, nivel reproductivo, consumo diario de materia seca. 
      .col-lg-5
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema6/img35.png')

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bg_9
      .row.justify-content-around.align-items-start(titulo="Factores medioambientales")
        .col-md-6.mb-4.mb-md-0
          p.ms-2 De los factores medioambientales es evidente que la temperatura es el más determinante, ya que en condiciones de verano siempre hay un aumento en el consumo de agua por parte de los animales pero también hay una mayor evaporación de los diferentes humedales o estadios de agua; por ende, se debe tener en cuenta para asegurar una disponibilidad de agua constante en estos tiempos, ya que en resumidas palabras aumenta el consumo y disminuye la disponibilidad por eso la importancia de reconocer estas situaciones y ofertar mayor cantidad de agua a los animales.      
        .col-md-4
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema6/img36.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-start(titulo="Factores relativos a la dieta")
        .col-md-6.mb-4.mb-md-0
          p.ms-2 Los forrajes secos y alimentos balanceados demandan mayor cantidad de agua para su consumo por ende existe una relación entre el consumo de materia seca y los requerimientos de consumo de agua. Como contraparte una reducción en el consumo de agua reduce un consumo de materia seca afectando indirectamente el nivel de producción o crecimiento esperado, ya que el animal limita su consumo de alimento.    
        .col-md-4
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema6/img37.png', alt='Texto que describa la imagen')

      .row.justify-content-around(titulo="Factores relativos del animal")
        .col-md-6.mb-4.mb-md-0
          p.ms-2 Los diferentes estados fisiológicos del animal determinan el consumo de agua, generalmente es mucho mayor el consumo de agua en animales jóvenes y con niveles productivos altos que en animales viejos y posiblemente con niveles de producción con tendencia a bajar. De igual manera los procesos de gestación, lactancia y crecimiento. 
          p.ms-2 Necesidades de agua según especie animal en condiciones normales referente a su peso vivo:
          .row.justify-content-center
            .col-lg-12
              table
                thead.color_thead 
                  tr.color13
                    td.h4.text-center Especie
                    td.h4.text-center Porcentaje/Consumo
                tbody
                  tr
                    td.text-center Equinos
                    td.text-center 10-15 % de su peso vivo
                  tr
                    td.text-center Rumiantes
                    td.text-center 8 a 10% de su peso vivo
                  tr
                    td.text-center Porcinos
                    td.text-center 5-6 % de su peso vivo
                  tr
                    td.text-center Aves
                    td.text-center 2-3 % de su peso vivo           
  
        .col-md-4
          figure.mb-4
            img.img-t.mx-auto(src='@/assets/curso/tema6/img38.png', alt='Texto que describa la imagen')  
          p La disponibilidad del agua en los diferentes sistemas productivos pecuarios como es un recurso de vital importancia, de necesidad básica y de un acceso fácil para la gran mayoría de sistemas productivos es un recurso que se ofrece de manera a voluntad del animal, que permanece disponible las 24 horas en condiciones normales y que el animal cuando tiene la necesidad de consumir lo hace. 
       

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaSlide: true,

    datosSlyder: [
      {
        titulo: 'Gramíneas',
        texto:
          'Dentro de las gramíneas están el maíz, el trigo, el arroz, la caña de azúcar, las cuales, por sus condiciones físicas de poseer un tallo cilíndrico, con nudos y flores con panojas o espigas se pueden diferenciar muy fácilmente. Su principal aporte nutricional es fuente importante de vitaminas y minerales con un alto valor de fibra que ayuda al componente digestivo y previene enfermedades.',
        imagen: require('@/assets/curso/tema6/img22.png'),
      },
      {
        titulo: 'Leguminosas',
        texto:
          'Son una fuente importante de proteínas y minerales como el calcio, estas poseen una capacidad importante de fijación de nitrógeno en suelos los cuales ayudan a la fertilización de las praderas, estas se caracterizan por producir una legumbre o vaina las cuales alojan semillas en su interior.',
        imagen: require('@/assets/curso/tema6/img23.png'),
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
