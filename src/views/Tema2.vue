<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Sistema de producción pecuario

    .row.mb-4
      .col-lg-6
        p Los sistemas productivos pecuarios son aquellos en los que se desarrollan actividades para la explotación comercial de especies animales, las cuales tienen como fin el abastecimiento de alimentos, la producción de materias primas para la industria o la prestación de servicios. Estos sistemas productivos pueden ser de pequeña, mediana o gran escala, dependiendo del volumen de la producción y de la extensión del área empleada para los procesos productivos. 
        .cajon.color2.py-3.px-4.mt-3.mb-4       
          p En Colombia los principales sistemas pecuarios se relacionan con:
          ul.lista-ul--color.mb_1
            li.mb_1 
              i.fas.fa-check
              | Producción de carne y leche (explotación de bovinos)
            li.mb_1
              i.fas.fa-check
              | Producción de pollo de engorde y huevo (avicultura)
            li.mb_1
              i.fas.fa-check
              | Producción porcícola (cerdos de engorde y cerdas de cría)
            li.mb_1
              i.fas.fa-check
              | Piscicultura – acuicultura (producción de peces o especies acuáticas)
            li.mb_1
              i.fas.fa-check
              | Producción de ovinos (ovejas), explotación de caprinos (cabras)Producción de especies menores (conejos, cuyes, pavos, patos, codornices y gansos)   

        p Además de los anteriores, existen otros sistemas que, igualmente, son generadores de ingresos y empleo como es el caso de los equinos (caballos y mulares) y la industria apícola (producción de miel de abejas). Incluso, existen sistemas poco convencionales como es el caso de los reptiles (babillas) y avestruces, especies de las cuales se obtiene carne y piel. 
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img01.png')

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
        h4 Clases y características

    p Los sistemas pecuarios se pueden agrupar en diferentes clases dependiendo, básicamente, de factores como el destino de la producción, tamaño de las explotaciones, el volumen de las inversiones y el tipo de especie en el que se basa la explotación. 
    p De acuerdo con los criterios anteriormente mencionados es posible obtener la siguiente clasificación:

    .titulo-sexto.color-acento-botones(data-aos="fade-right").mb-0
      h5 Tabla 2 
    span.ms-4 <em>Clasificación de los sistemas pecuarios</em>
    
    .tabla-a.color-primario.mt-2.border_tabla1.mb-5
      table
        thead
          tr
            td.h5(colspan="2") Criterio
            td.h5(colspan="2") Clasificación
            td.h5(colspan="8") Características
        tbody
          tr
            td(colspan="2")(rowspan="3") <b>Tamaño de las explotaciones</b>
            td(colspan="2") Extensivas 
            td(colspan="8") Se emplean grandes extensiones de terreno para sostener un relativo bajo número de animales. Es altamente empleado en sistemas como la producción de bovinos y algunas especies de ovinos y caprinos. 
          tr
            td(colspan="2") Semi – intensivas
            td(colspan="8") Se hace un uso más eficiente del espacio. El número de animales por unidad de área es mayor que en los sistemas extensivos. Generalmente se suplementa la nutrición con alimentos concentrados u otro tipo de alternativas. 
          tr 
            td(colspan="2") Intensivas
            td(colspan="8") Se aprovecha al máximo el espacio disponible y el pastoreo es muy restringido. La alimentación de los animales depende casi en su totalidad de los suplementos. 
            
          tr
            td(colspan="2")(rowspan="3") <b>Destino de la producción</b>
            td(colspan="2") Industrial 
            td(colspan="8") La mayor parte de la producción se comercializa directamente a la industria. Se abastecen principalmente materias primas para su transformación, como es el caso de la leche, las pieles y la lana de las ovejas.   
          tr
            td(colspan="2") Abastecimiento
            td(colspan="8") El destino de la producción son los centros de abasto locales o regionales. Los sistemas de comercialización y los criterios de calidad difieren de los que se requieren en la industria. Los productos no tienen procesos industriales, sino que por el contrario van directamente al consumidor. 
          tr 
            td(colspan="2") Autoabastecimiento
            td(colspan="8") La producción se destina única y exclusivamente a atender las necesidades alimenticias del productor. No se realiza un proceso de comercialización. 

          tr
            td(colspan="2")(rowspan="3") <b>Volumen de las inversiones</b>
            td(colspan="2") Grandes 
            td(colspan="8") Son aquellas que poseen un gran capital para el desarrollo de la actividad productiva. De acuerdo con Finagro en esta clasificación están los productores cuyos activos superan los 5.000 salarios mínimos mensuales legales vigentes. (Finagro 2022)   
          tr
            td(colspan="2") Medianas
            td(colspan="8") En estas explotaciones también se destinan grandes capitales al sistema productivo, están entre los 284 y los 5.000 salarios mínimos mensuales legales vigentes. (Finagro 2022)
          tr 
            td(colspan="2") Pequeñas
            td(colspan="8") Son explotaciones en las que el capital de los productores es inferior a 284 salarios mínimos mensuales legales vigentes. (Finagro 2022)
          tr
            td(colspan="2")(rowspan="2") <b>Tipo de especies</b>
            td(colspan="2") Mayores 
            td(colspan="8") Especies de gran tamaño como ovinos, bufalinos o equinos.   
          tr
            td(colspan="2") Menores
            td(colspan="8") Especies de menor tamaño como aves de corral, conejos, porcinos, ovinos y caprinos. 

          tr
            td(colspan="2")(rowspan="3") <b>Etapa de desarrollo del sistema productivo</b>
            td(colspan="2") Convencionales  
            td(colspan="8") Son especies que tienen alto grado de reconocimiento dentro de los consumidores, son popularmente comercializadas para el consumo directo o la industria, por ejemplo, carne de res, de pollo, huevo, leche o carne de cerdo.    
          tr
            td(colspan="2") No convencionales
            td(colspan="8") Son especies que no se comercializan en la misma proporción que las convencionales. No tienen un alto grado de reconocimiento dentro de los consumidores o el uso que se les da no es muy popular, como es el caso de la leche de búfala, la carne de algunos reptiles.  
          tr 
            td(colspan="2") Promisorias
            td(colspan="8") Son especies que se encuentran en etapas exploratorias como ocurre con proteínas procedentes de insectos, la carne de lombriz o la carne de avestruz.  

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
        h4 Componentes

    p Visualice con atención el vídeo que se muestra enseguida; entérese de las generalidades de los principales componentes de un sistema pecuario. Procure llevar registro de lo más destacado en su libreta personal de apuntes:

    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/3hmUzSEuIsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4 En relación con los componentes de un sistema de producción pecuario, tenga en cuenta:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Especies pecuarias")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h4 Especies pecuarias
            p Principales especies animales aprovechadas en sistemas pecuarios: aves, bovinos, bufalinos, piscicultura, especies menores, equinos, porcinos, ovinos.
            figure
              img.img-t(src='@/assets/curso/tema2/img02.svg', alt='Especies pecuarias')
              
      .py-3.py-md-4(titulo="Instalaciones pecuarias")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema2/img03.png', alt='Instalaciones pecuarias')
              
          .col-md-6
            h4 Instalaciones pecuarias
            p Principales instalaciones pecuarias de acuerdo con su uso: contención, alimentación, manejo, mixtas.
            .row.justify-content-center
              .col-lg-8
                .bg_1.p-2.mb-4
                  .row.justify-content-center
                    .col-lg-4
                      img.img-t.mx-auto(src='@/assets/curso/tema2/img04.png')
                    .col-lg-8.align-self-end
                      h4 Alimentación
                      p Saladeros, bebederos, comederos.
                .bg_2.p-2
                  .row.justify-content-center
                    .col-lg-4
                      img.img-t.mx-auto(src='@/assets/curso/tema2/img05.png')
                    .col-lg-8.align-self-end
                      h4 Contención
                      p Cercas de alambre, cercas eléctricas.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-12
        .tarjeta.color12.p-4.shadow.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-t.mx-auto(src="@/assets/curso/tema2/img13.svg")          
            .col.mb-3.mb-sm-0.col-lg-10
              p.ms-0.ms-lg-3 <b>Construcción adecuada de toriles, mangas y callejones para vacunos</b>
              p.ms-0.ms-lg-3 Amplíe la información sobre instalaciones pecuarias, visualizando los videos que encuentra en los materiales complementarios.
              .row
                .col-auto
                  a.anexo(href="https://www.youtube.com/embed/OQH0Tsy9NyU" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace web.</b> Construcción adecuada de toriles, mangas y callejones para vacunos      
                    
    .row
      .col-lg-6
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
            h4 Programación de actividades
        p Uno de los elementos más importantes en la empresa agropecuaria es el desarrollo de las actividades de planeación estratégica, pues es a partir de allí que se definen los objetivos, metas, planes de producción, recursos y responsables para cada actividad dentro de la organización.
        p Para que el ejercicio de planeación sea acertado es necesario identificar las metas de producción y las acciones que conducirán a la obtención de los resultados esperados, lo cual será posible teniendo en cuenta los planes de trabajo, los cronogramas y los parámetros productivos.  
      .col-lg-6
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img07.png')

    Separador

    #t_2_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 2.1 Planes de trabajo

    p.mb-5 El plan de trabajo es un documento en el cual se incluye toda la información que se requiere para el desarrollo de un proyecto; allí se establecen los objetivos, procesos y tiempo estimado que requerirá realizar las tareas. Los principales elementos que constituyen un plan de trabajo son los que evidencia la figura que se muestra enseguida:

    .titulo-sexto.color-acento-botones(data-aos="fade-right").mb-0
      h5 Figura 1 
    span.ms-4 <em>Elementos que conforman el plan de trabajo</em>

    .row.mb-5
      .col-lg-12
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img08.svg', alt='Elementos que conforman el plan de trabajo')

    p Para la elaboración de un plan de trabajo, en primera instancia, se deben formular los objetivos estratégicos, los cuales deben ser precisos, medibles y realizables en una escala de tiempo determinada. 
    p.mb-5 Estos, son algunos aspectos clave de la formulación del plan de trabajo, sus objetivos y demás elementos constitutivos:

    .row.justify-content-center
      .col-md-6.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema2/img09.svg')
      .col-md-6.mb-5.mb-md-0(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Temporalidad")
            .col-md-10.mb-4.mb-md-0
              p Se pueden establecer objetivos a corto, mediano y largo plazo, dependiendo de las necesidades y las posibilidades de la empresa. 

          .row.justify-content-center(titulo="Medición de logros")
            .col-md-10.mb-4.mb-md-0
              p A partir de los objetivos y su temporalidad, se establecen los indicadores, los cuales definen la manera como se medirá el logro de los objetivos. 

          .row.justify-content-center(titulo="Impacto en los objetivos propuestos")
            .col-md-10.mb-4.mb-md-0
              p Una vez se tiene claridad sobre los objetivos y los indicadores, se da paso al diseño de las estrategias, las cuales contienen la descripción de cómo se conseguirá impactar en los objetivos propuestos.

          .row.justify-content-center(titulo="Secuencialidad de las estrategias")
            .col-md-10.mb-4.mb-md-0
              p Las estrategias se diseñan con base en actividades que, al realizarse de manera secuencial, contribuyen a alcanzar las metas trazadas. 

          .row.justify-content-center(titulo="Organización de las actividades")
            .col-md-10.mb-4.mb-md-0
              p La definición de las estrategias permite diseñar los procesos que se implementarán en la empresa pecuaria, los cuales consisten en la organización de las actividades de una manera lógica para obtener los resultados esperados. 

          .row.justify-content-center(titulo="Responsabilidad de personas y equipos")
            .col-md-10.mb-4.mb-md-0
              p Finalmente, una vez se tienen claros los procesos, se definen los equipos responsables de la ejecución de las actividades que llevarán eventualmente a conseguir los objetivos de la empresa. 

    Separador

    #t_2_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 2.2 Cronogramas

    .row.align-items-center
      .col-lg-6
        p El cronograma es una representación gráfica en la cual se plasman las actividades que se deben desarrollar y el tiempo del que se dispone para su realización. Es una herramienta de planeación muy eficiente debido a que permite hacer un seguimiento muy preciso de las actividades y facilita la identificación de retrasos o avances en la ejecución del plan de producción. 
        p Observe, en los siguientes ejemplos, cómo el cronograma debe contener las actividades que, de una u otra forma, contribuyen al logro de alguno o varios de los objetivos estratégicos de la empresa:
      .col-lg-6
        .row.justify-content-center
          .col-lg-10
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema2/img10.svg')

    .titulo-sexto.color-acento-botones(data-aos="fade-right").mb-0
      h5 Tabla 3 
    span.ms-4 <em>Ejemplo de componentes del plan estratégico de la empresa pecuaria</em>
    
    .tabla-a.color-primario.mt-2.border_tabla1.mb-5
      table
        thead
          tr
            td.h5(colspan="2") Objetivo estratégico
            td.h5(colspan="3") Metas
            td.h5(colspan="7") Actividades
        tbody
          tr
            td(colspan="2")(rowspan="3") <b>Mejorar en un 20 % la producción de leche en la finca La Herradura</b>
            td(colspan="3") Aumentar en 30 % el área sembrada en pastos mejorados 
            td(colspan="7")
              ul.lista-ul--color.mb_1
                li.mb_1 
                  i.fas.fa-angle-right
                  | Renovar 10 hectáreas de praderas.  
                li.mb_1 
                  i.fas.fa-angle-right
                  | Sembrar 500 árboles forrajeros. 
                li.mb_1 
                  i.fas.fa-angle-right
                  | Fertilizar 8 hectáreas de praderas. 
                li.mb_1 
                  i.fas.fa-angle-right
                  | Controlar arvenses en 6 hectáreas de praderas.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Sembrar pastos mejorados en 6 hectáreas.        
          tr
            td(colspan="3") Implementar Buenas Prácticas Pecuarias
            td(colspan="7") 
              ul.lista-ul--color.mb_1
                li.mb_1 
                  i.fas.fa-angle-right
                  | Capacitar al 100 % de los colaboradores en BPP.  
                li.mb_1 
                  i.fas.fa-angle-right
                  | Contratar una firma certificadora en BPA. 
                li.mb_1 
                  i.fas.fa-angle-right
                  | Adecuar la señalización de las áreas de la finca. 
          tr 
            td(colspan="3") Suplementar al 100 % de las vacas de ordeño.
            td(colspan="7") 
              ul.lista-ul--color.mb_1
                li.mb_1 
                  i.fas.fa-angle-right
                  | Diseñar una ración alimenticia. 
                li.mb_1 
                  i.fas.fa-angle-right
                  | Elaborar la ración.
                li.mb_1 
                  i.fas.fa-angle-right
                  | Suplementar las vacas al momento del ordeño. 
                      
    .row.justify-content-center.mb-4
      .col-lg-9
        .titulo-sexto.color-acento-botones(data-aos="fade-right").mb-0
          h5 Tabla 4 
        span.ms-4 <em>Ejemplo de cronograma de actividades de la unidad productiva</em>
        .tabla-a.color-primario.mt-2.border_tabla1.mb-5
          table
            thead
              tr
                td.h5(colspan="9") Cronograma de actividades <br>Finca La Herradura <br>Meta estratégica: Aumentar en 30 % el área sembrada en pastos mejorados
              tr
                td.h5(colspan="3")
                td.h5.text-center MES 01
                td.h5.text-center MES 02
                td.h5.text-center MES 03
                td.h5.text-center MES 04
                td.h5.text-center MES 05
                td.h5.text-center MES 06
            tbody
              tr.py-2
                td(colspan="3") <b>Renovar 10 hectáreas de praderas.</b>
                td.bg_color3
                td
                td
                td
                td
                td
              tr
                td(colspan="3") <b>Sembrar 500 árboles forrajeros.</b>
                td
                td.bg_color3
                td.bg_color3
                td
                td
                td
              tr
                td(colspan="3") <b>Fertilizar 8 hectáreas de praderas.</b> 
                td
                td
                td
                td.bg_color3
                td.bg_color3
                td
              tr
                td(colspan="3") <b>Controlar arvenses en 6 hectáreas de praderas.</b>
                td
                td
                td
                td
                td.bg_color3
                td
              tr
                td(colspan="3") <b>Sembrar pastos mejorados en 6 hectáreas.</b>
                td
                td
                td
                td
                td
                td.bg_color3
              
    p.mb-5 El modelo de cronograma más empleado es el denominado “Diagrama de Gantt” en el cual se relacionan, de una forma precisa, las actividades y los tiempos establecidos para su ejecución. Con este esquema es posible subdividir las tareas en componentes más pequeños, los cuales son fácilmente verificables.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-acento-contenido.bg_color1.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col-auto 
              img.img-t(src='@/assets/curso/tema1/img02.svg', alt='')
            .col-lg-10
              p.m-0.ms-2 Este diagrama permite observar la interdependencia que existe entre las tareas y analizar la secuencia lógica que se debe seguir para cumplir con cada una de ellas. Favorece supervisar la ejecución de las actividades de una forma sencilla y práctica. 

    .row.align-items-center
      .col-lg-6
        p Dentro de las consideraciones, no solo más importantes, sino necesarias que deben tenerse en cuenta y aplicarse, en la elaboración de un cronograma, se encuentran:
        ul.lista-ul--color.mb_1
          li.mb_1 
            i.fas.fa-check
            | Conocer la secuencia lógica de las tareas que contribuirán al logro del objetivo. 
          li.mb_1 
            i.fas.fa-check
            | Establecer qué actividades se relacionan entre sí. 
          li.mb_1 
            i.fas.fa-check
            | Estimar los tiempos necesarios para la ejecución de las actividades. 
          li.mb_1 
            i.fas.fa-check
            | Ubicar las actividades dentro del horizonte de tiempo del proyecto. 
      .col-lg-6
        .row.justify-content-center
          .col-lg-10
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema2/img11.svg')

    Separador

    #t_2_3.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 2.3 Parámetros productivos

    p.mb-5 Dependiendo de lo que se quiera medir al interior de la explotación pecuaria se pueden identificar y cuantificar cuantos parámetros productivos se consideren necesarios, para lo cual es necesario diseñar y diligenciar registros que permitan hacer un seguimiento detallado del comportamiento de estos importantes indicadores.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Parámetros productivos")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            .row.justify-content-center
              .col-lg-11
                p Los parámetros productivos son variables cuantificables y observables que permiten analizar detalladamente el comportamiento de las unidades pecuarias en cualquiera de sus etapas, estos permiten evaluar los rendimientos y, además, facilitar la toma de decisiones administrativas teniendo en cuenta factores técnicos y productivos. Algunos de los parámetros productivos que se pueden medir al interior de las principales explotaciones pecuarias son los siguientes:
          .col-md-4
            .row.justify-content-center
              .col-lg-10
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img12.svg', alt='Parámetros productivos')
              
      .py-3.py-md-4(titulo="Parámetros productivos bovinos, bufalinos, ovinos y caprinos")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            .tabla-a.color-primario.mt-2.border_tabla1.mb-5
              table
                thead
                  tr
                    td.h5(colspan="2") Especie
                    td.h5(colspan="4") Parámetro productivo
                    td.h5(colspan="3") Unidad
                tbody
                  tr
                    td(colspan="2") <b>Bovinos - bufalinos - ovinos - caprinos</b>
                    td(colspan="4")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso promedio al nacer.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso promedio al destete.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Edad promedio al destete. 
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de terneros.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de terneras.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Porcentaje de nacimiento de hembras.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Mortalidad anual de lactantes.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Mortalidad anual de adultos. 
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Producción de leche diaria.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número mensual de partos.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Ganancia de peso mensual.
                    td(colspan="3")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Kg
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Kg
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Meses
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de animales
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de animales
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Porcentaje   
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de animales
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de animales 
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Litros   
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de partos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Kilogramos / mes   
      .py-3.py-md-4(titulo="Parámetros productivos para aves")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            .tabla-a.color-primario.mt-2.border_tabla1.mb-5
              table
                thead
                  tr
                    td.h5(colspan="2") Especie
                    td.h5(colspan="4") Parámetro productivo
                    td.h5(colspan="3") Unidad
                tbody
                  tr
                    td(colspan="2") <b>Aves</b>
                    td(colspan="4")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Aves que inician - aves que finalizan.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Mortalidad diaria.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Mortalidad acumulada. 
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso corporal.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Longitud del pico.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Longitud del tarso.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Consumo de alimento diario.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Conversión de alimento.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Masa del huevo.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Huevos día.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Porcentaje de pérdida de huevos.
                    td(colspan="3")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de animales
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de animales
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Porcentaje
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Gramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Milímetros
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Centímetros   
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Gramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Kilogramo / Kilogramo 
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Gramos   
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de huevos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Porcentaje  

      .py-3.py-md-4(titulo="Parámetros productivos para porcinos")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            .tabla-a.color-primario.mt-2.border_tabla1.mb-5
              table
                thead
                  tr
                    td.h5(colspan="2") Especie
                    td.h5(colspan="4") Parámetro productivo
                    td.h5(colspan="3") Unidad
                tbody
                  tr
                    td(colspan="2") <b>Porcinos</b>
                    td(colspan="4")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Edad a la primera monta.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso corporal.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Conversión de alimento.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Edad al sacrificio.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Intervalo destete monta.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Abortos.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Porcentaje de partos.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Lechones nacidos vivos por camada.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Lechones nacidos muertos.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Partos/Cerda/Año.
                    td(colspan="3")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Meses
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Kilogramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Kilogramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Meses
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de abortos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Porcentaje
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de lechones
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de lechones
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de partos
      .py-3.py-md-4(titulo="Parámetros productivos para especies menores")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            .tabla-a.color-primario.mt-2.border_tabla1.mb-5
              table
                thead
                  tr
                    td.h5(colspan="2") Especie
                    td.h5(colspan="4") Parámetro productivo
                    td.h5(colspan="3") Unidad
                tbody
                  tr
                    td(colspan="2") <b>Especies menores (conejos - cuyes)</b>
                    td(colspan="4")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Edad destete.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso crías al nacer.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de crías al año.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Partos al año.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Camadas/hembra/año.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso crías al destete.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Edad al sacrificio.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Madurez sexual machos.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Madurez sexual hembras.
                    td(colspan="3")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Gramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de animales
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de partos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Kilogramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de camadas
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Gramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días
      .py-3.py-md-4(titulo="Parámetros productivos para peces")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            .tabla-a.color-primario.mt-2.border_tabla1.mb-5
              table
                thead
                  tr
                    td.h5(colspan="2") Especie
                    td.h5(colspan="4") Parámetro productivo
                    td.h5(colspan="3") Unidad
                tbody
                  tr
                    td(colspan="2") <b>Especies menores (conejos - cuyes)</b>
                    td(colspan="4")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Edad destete.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso crías al nacer.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de crías al año.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Partos al año.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Camadas/hembra/año.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Peso crías al destete.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Edad al sacrificio.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Madurez sexual machos.
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Madurez sexual hembras.
                    td(colspan="3")
                      ul.lista-ul--color.mb_1
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Gramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de animales
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de partos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Kilogramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Número de camadas
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Gramos
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días
                        li.mb_1 
                          i.fas.fa-angle-right
                          | Días                                    
                                                        
         

</template>

<script>
export default {
  name: 'Tema2',
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
