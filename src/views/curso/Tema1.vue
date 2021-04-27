<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Consideraciones de administración en la producción agrícola

    p.mb-5 El manejo eficiente de los sistemas de poscosecha y las funciones que realiza la administración de la empresa agrícola, contribuyen al período comprendido entre la recolección de algún tipo de vegetal ya sea frutas, verduras, tubérculos, etc., y el momento en el que llegue a las manos del consumidor final. #[strong Es responsabilidad de todos los intervinientes dentro de la cadena de suministro, el mantener las características organolépticas, calidad y frescura de cada uno de los elementos objeto de la comercialización], garantizando al consumidor final una trazabilidad responsable del alimento a consumir, al saber su procedencia y técnica de producción del cultivo. 

    .titulo-segundo
      #t_1_1.h4 1.1  Administración

    .cajon--lavanda.p-4.mb-5.mt-5
      p Se puede conceptualizar que el término administración, hace referencia al #[strong conjunto de actividades que se realizan para organizar un sistema y/o producto, mediante procesos metodológicos como: planificación, organización, dirección y control de los recursos y la planeación de actividades específicas], con el propósito de lograr los objetivos y metas propuestas por la empresa para ser económicamente rentable, eficiente y sostenible.

    p.mb-5 Con ayuda de la siguiente figura se resumen las funciones de la administración de una empresa en las aéreas de planificación, organización, dirección y control. Estas son adaptables a todos los procesos productivos de labores agrícolas.

    .row.justify-content-center.mb-5
      .col-md-4.col-lg-3.mb-5
        .tarjeta-Avatar
          img.img-a(src='@/assets/curso/tema_1/img_2.png' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla.p-4
            .h4.text-center Planeación

      .col-md-4.col-lg-3.mb-5
        .tarjeta-Avatar
          img.img-a(src='@/assets/curso/tema_1/img_3.png' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla.p-4
            .h4.text-center Organización

      .col-md-4.col-lg-3.mb-5
        .tarjeta-Avatar
          img.img-a(src='@/assets/curso/tema_1/img_4.png' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla.p-4
            .h4.text-center Dirección

      .col-md-4.col-lg-3.mb-5
        .tarjeta-Avatar
          img.img-a(src='@/assets/curso/tema_1/img_5.png' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla.p-4
            .h4.text-center Control

    .h4.mb-5 Estructura

    figure.mb-5
      img.img-a.mb-5(src="@/assets/curso/tema_1/img_6.png")

    .row.justify-content-center.mb-5
      .col-md.col-lg-4
        .bloque-texto-c.p-4
          .h4.mb-2 La estructura organizacional de una empresa es el arreglo ordenado de los recursos económicos, físicos, humanos y medioambientales.
      .col-md.col-lg-6
        p.mb-3 Como se observa en la figura anterior, la estructura organizacional es la herramienta diseñada para que una empresa en línea jerárquica, 
          |
          strong logre la consecución de los objetivos propuestos para la ejecución, siendo económicamente rentable y eficiente.

        p Mediante lo diseñado en la fase de planeación, se puede resumir que la estructura organizacional de una empresa es el arreglo ordenado de los recursos económicos, físicos, humanos y medioambientales para alcanzar los objetivos y metas plasmados en esta fase; en la que se ofrecen condiciones óptimas para la dirección, ejecución y control de las diferentes labores de la empresa.

    .h4.mb-5 Proceso administrativo

    p.mb-5 En la siguiente figura se ilustra el proceso administrativo de una empresa y las funciones básicas que la conforman:

    figure.mb-5
      img.img-a.mb-5(src="@/assets/curso/tema_1/img_7.png")

    p.mb-5 En síntesis, el proceso administrativo #[strong es la herramienta que se aplica en las empresas para el logro de sus objetivos y poder satisfacer sus necesidades financieras, ambientales, técnicas y sociales]. Si los administradores cumplen con su labor eficientemente y son eficaces en su gestión, es posible que la organización alcance sus metas y objetivos; y es aquí donde el proceso administrativo se desarrolla cumpliendo las cinco funciones: #[strong planeación, organización, integración, dirección y control.] 

    .h4.mb-5 Herramientas de control

    .row.justify-content-center.mb-5
      .col-md.col-lg-6
        p Existen muchas herramientas de control de procesos que facilitan el desarrollo de las labores agrícolas en una empresa; estas se utilizan para #[strong medir, analizar y proponer alternativas de soluciones a las dificultades presentadas durante el desarrollo del proceso productivo de la organización], contribuyendo a dar solución y mejorar los indicadores de calidad dentro de los procesos de mejora continua de la empresa agrícola.
      .col-md.col-lg-4
        .cajon--azul.p-4
          .h4 Se utilizan para medir, analizar y proponer alternativas de soluciones a las dificultades.

    p.mb-5 #[strong Cada empresa, de acuerdo con sus necesidades, diseña sus propias herramientas de control.] A continuación, se enuncian algunas aplicables a cualquier unidad productiva del sector agrícola.

    SlyderC.mb-5(:datos="datosSlyder")

    .titulo-segundo
      #t_1_2.h4 1.2 Recursos

    p.mb-5.mt-5 Los recursos se definen como el conjunto de elementos requeridos para el desarrollo a plenitud de un proceso productivo, en correlación directa a lo diseñado en la fase de planeación. También son #[strong todos los medios necesarios para realizar su actividad de forma eficiente.]

    .cajon--amarillo.p-4.mb-5
      p En el desarrollo de toda labor agrícola se requiere contar con diversas clases de recursos que proveen a una empresa, estando directamente relacionados con los requerimientos técnicos de cada tipo de explotación agrícola a desarrollar y siendo utilizados en algún punto del proceso de producción. El empleo adecuado de los recursos de una empresa contribuye a aumentar la productividad de la organización.

    .h4.mb-5 Tipos de recursos

    p.mb-5 Los recursos que se pueden considerar en la administración de la producción agrícola, se dividen en cuatro grupos, así:

    TabsB.mb-5
      .py-4.py-md-5(titulo="Recursos humanos" :icono="require('@/assets/curso/tema_1/img_9.png')")
        .row.align-items-cente
          .col-md-6
            p.mb-3 Son los individuos que se encargan de articular el resto de los recursos para hacer funcionar el proceso productivo; de allí que 
              | 
              strong el talento humano es considerado como el recurso más importante de toda empresa. 

            p Son las habilidades, destrezas y conocimiento inherentes a cada trabajador junto con la interacción que tienen entre ellos, lo que le permite a la empresa obtener el éxito. Además, #[strong las personas ofrecen sus habilidades, destrezas y conocimientos a cambio de una remuneración económica]. Hay perfiles que son muy complejos de conseguir y por este motivo, la importancia del departamento de recursos humanos para seleccionar la persona idónea, de acuerdo a cada función a realizar dentro de la empresa
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_1/img_13.png', alt='Texto que describa la imagen')
        
      .py-4.py-md-5(titulo="Recursos financieros" :icono="require('@/assets/curso/tema_1/img_10.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Es la representación de dinero en todas sus formas: efectivo, bancos, créditos, etc. En este mismo sentido, los recursos financieros se consideran como la capacidad económica que posee una empresa en todos sus bienes tangibles e intangibles. Con estos recursos la empresa garantiza el funcionamiento de la organización eficientemente. 

            p Como se mencionó antes, estos recursos tienen representaciones variadas encontrando: efectivo, créditos, CDT, acciones, bancos y demás de interés financiero. Pueden provenir de recursos propios o de capital social, de subsidios estatales, de venta de productos, de inversores o de créditos, entre otras fuentes. Su correcta gestión es indispensable para el buen funcionamiento de la empresa.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

      .py-4.py-md-5(titulo="Recursos materiales" :icono="require('@/assets/curso/tema_1/img_11.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6
            p Son todos los bienes tangibles disponibles por la empresa para el ejercicio de su misión en cumplimento del objeto social de la organización. Estos recursos se pueden clasificar en maquinaria, inmuebles, terrenos, vehículos, material de oficina, equipos, materias primas o productos en bodega, etc
        
      
      .py-4.py-md-5(titulo="Recursos tecnológicos" :icono="require('@/assets/curso/tema_1/img_12.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Como recurso intangible, las tecnologías de la información y la comunicación han facilitado a las empresas mejorar su eficiencia en todas las actividades productivas o procesos importantes de gestión de recursos. 
 
            p Los recursos tecnológicos prestan servicios a los usuarios que lo demanden; dentro de ellos se tienen la telefonía, internet, softwares, entre otros. Este recurso es el encargado de administrar eficazmente todos los demás requeridos durante la gestión productiva y en cumplimiento de la misión empresarial. En la siguiente figura se resumen los tipos recursos tecnológicos utilizados en una empresa. 
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
      
    .h4.mb-5 Aplicación

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_14.png")
      .col-md.col-lg-6
        p Cada empresa requiere una estructura administrativa propia que, mediante un organigrama, #[strong facilite la consecución de los elementos requeridos para el desarrollo a plenitud de su proceso productivo] en correlación directa con lo diseñado en la fase de planeación; como también suministrar a todas las dependencias los recursos requeridos por cada unidad de forma eficiente y eficaz. 

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-5.mb-4
          .h4.mb-0 La estructura administrativa de una empresa debe estar en función de la consecución de recursos para el cumplimiento de sus objetivos y metas. 
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p En cada nivel de la empresa existen requerimientos puntuales de recursos y #[strong deben ser solicitados de acuerdo con lo establecido en protocolos internos al departamento encargado de la recepción de recursos] y gestionando en el menor tiempo la consecución de los mismos, para que su entrega se realice rápidamente y no se afecte el funcionamiento empresarial. Es de anotar que cada empresa diseña su propio organigrama de suministro de recursos.

    .h4.mb-5 Importancia

    p.mb-5 Todos los recursos son importantes a la medida de su necesidad de aplicación y la disponibilidad de los mismos, ya que #[strong sirven para optimizar las capacidades de la empresa y alcanzar los objetivos y metas propuestas por la organización agrícola], siendo económicamente rentable y productivamente sostenible y eficiente a menor costo de producción. 

    .cajon--azul.p-4.mb-5
      p #[strong Toda unidad productiva al realizar una buena gestión de recursos a todos los estamentos de la empresa, adquiere ventajas competitivas que contribuyen a optimizar el funcionamiento de la organización], reduce tiempo de gestión, disminuye de costos de producción, flexibiliza la toma de decisiones en beneficio de toda la organización empresarial y mejora su imagen corporativa. 

    .titulo-segundo
      #t_1_3.h4 1.3 Programa de producción

    .row.justify-content-center.mb-5
      .col-md.col-lg-4
        .bloque-texto-d.p-4
          .h4.mb-2 La producción agrícola en Colombia es muy variada debido a su posición geográfica, al clima y a su topografía
      .col-md.col-lg-6
        p.mb-3 El programa de producción agrícola es el encargado planificar un sistema de cultivo de origen vegetal, principalmente para #[strong suplir la demanda de alimentos de la especie humana, seguido de la especie animal y por último, como fuente de bioenergía]. La producción agrícola en Colombia es muy variada debido a su posición geográfica, al clima y a su topografía; es así como la economía del país está basada principalmente en producir café, algodón, cacao, caña de azúcar, banano, arroz, maíz, papa, flores, aguacate, frijol, hortalizas, entre otros.

        p Esta programación se realiza
          |
          strong  desde el primer momento que se inicia con la adecuación del terreno, hasta el momento de recogida del cultivo previo al proceso de poscosecha.

    p.mb-5 El programa de producción constituye un instrumento de gestión que tiene por objeto establecer el tipo de cultivo, la superficie de siembra del cultivo, la disponibilidad de agua, entre otros elementos de importancia a fin de evitar imprevistos. Una buena planeación del cultivo es la clave del éxito empresarial y junto con la rotación son fundamentales para obtener buenas producciones.

    img.img-a.mb-5(src="@/assets/curso/tema_1/img_15.png")

    p.mb-5 Cuando se hace referencia a planificación de cultivos, #[strong se enfatiza en qué cultivo se sembrará en cada parcela una vez terminada la cosecha]. Esto es lo que acostumbra la mayoría de agricultores cultivo tras cultivo, pero no es lo más adecuado, ya que se debe cultivar con base en la demanda del mercado. 

    .h4.mb-5 Alcance

    p.mb-5 Los pequeños y medianos agricultores realizan labores agrícolas por tradición familiar o por falta de información técnica de nuevos cultivos o simplemente por temor al riesgo. Cultivos que se realizan a corto plazo.

    p.mb-5 El alcance de la producción agrícola está determinado por la capacidad financiera de la empresa, lo que le permite establecer el tamaño del cultivo, tipo de cultivo a implantar, planeación del cultivo sea a mediano o largo plazo; todo en relación directa con el cumplimento de los objetivos que se intentarán alcanzar a lo largo del desarrollo del programa de producción.

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_16.png")
      .col-md.col-lg-6
        p.mb-3 Planear el desarrollo de las labores agrícolas siguiendo criterios técnicos, se debe hacer 
          |
          strong identificando con claridad el cultivo a instaurar.

        p Así, se propone que estas se proyecten a largo plazo (actividad a realizar durante los próximos tres o cuatro años). Aunque conlleva un poco más de trabajo inicial, 
          |
          strong los beneficios serán mayores a lo largo del cultivo y se reducirán costos de producción.

    p.mb-5 Por otra parte, la población mundial se enfrenta a la necesidad de #[strong suplir necesidades energéticas con fuentes alternativas como los biocombustibles, lo que genera un conflicto de interés socioeconómico], donde se producen alimentos con destino al consumo humano o con la finalidad de extraer combustibles.

    .bloque-texto-e.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-5.mb-4.mb-lg-0
          .h2.mb-0 Colombia es vista por el mundo como una gran despensa de alimentos.  
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Para que el país pueda ser competitivo a nivel internacional, debe superar las mayores dificultades que se le presentan como producciones bajas, infraestructura inadecuada, canales de comercialización reducidos, baja tecnología, transporte deficiente a lo requerido técnicamente, entre otros.

    .h4.mb-5 Estructura

    p.mb-3 El plan de producción agrícola de una empresa, para alcanzar los objetivos propuestos en la fase de planeación, #[strong debe organizar mediante una estructura las fases requeridas para su desarrollo]. Allí se deben indicar los recursos necesarios, costos y gestiones realizadas para el control de calidad de la producción.

    p.mb-5 La estructura se diseña en la fase de planeación y corresponde al plan de producción agrícola establecido para cada empresa. En ella #[strong se priorizan los cultivos que tendrán mayor impacto para promover el crecimiento de la empresa y del sector agrícola], teniendo en cuenta aspectos comerciales y productivos en referencia a la competitividad de la producción local.

    .h4.mb-5 Características

    .row.justify-content-center.mt-5.mb-5
      .col-md.col-lg-4
        p.text_tamano 
          |
          strong La planificación es la primera función administrativa de una empresa. 
      .col-md.col-lg-6
        p Es la encargada de la diligencia funcional de la organización e, igualmente, cumple la función de #[strong determinar por anticipado el logro de los objetivos propuestos]; por tanto, es el modelo teórico para desarrollar el programa de producción a futuro.

    .h4.mb-5 Fases

    p.mb-5 Para el desarrollo exitoso de un programa de producción agrícola, #[strong la planeación es la base de organización administrativa necesaria para la ejecución de las demás fases secuenciales] que actúan sincrónicamente en el desarrollo del plan de producción. De la misma forma, mantiene la dirección y el control de la producción de forma eficiente, en relación directa con las siguientes fases:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--morada")
      .row(titulo="Fase de carácter mecánico")
        p.mb-5 Es el componente teórico de las funciones administrativas, allí se establece lo que debe de hacerse a futuro. Se divide en: 
        .row.justify-content-around.align-items-cente
          .col-md-8.mb-4.mb-md-0
            .h4 Previsión
            p Etapa del proceso administrativo donde se diagnostica, a través de datos relevantes del pasado y del presente, el programa de producción.
          hr.bd-hr.mt-3
          .col-md-8.mb-4.mb-md-0
            .h4 Planeación
            p Es la función de la dirección de la empresa que sistematiza por anticipado los factores de mano de obra, materias primas, maquinaria y equipo para realizar la implantación del cultivo a desarrollar, en relación con la demanda del mercado.
          hr.bd-hr.mt-3
          .col-md-8.mb-4.mb-md-0
            .h4 Organización
            p Es de suma importancia para la empresa agrícola, ya que incide sobre los costos de producción, la calidad final del producto, los tiempos de entrega y la productividad referente a la producción obtenida y los insumos utilizados para el cumplimento de las metas.
      .row(titulo="Fase de carácter dinámico")
        p.mb-5 Hace referencia a liderar el componente social de la empresa. Se divide en: 
        .row.justify-content-around.align-items-cente
          .col-md-8.mb-4.mb-md-0
            .h4 Control
            p Como su nombre lo indica, se encarga de vigilar todas las actividades del proceso productivo, como son el funcionamiento de la maquinaria, insumos, trabajadores, programaciones de trabajo asignado, calidad de los productos y demás.
          hr.bd-hr.mt-3
          .col-md-8.mb-4.mb-md-0
            .h4 Dirección
            p Dentro del organigrama general de un proceso productivo, se encuentra el departamento de dirección de la producción que se encarga de la toma de decisiones en todos los niveles de la empresa para el logro de los objetivos y metas propuestos en la fase de planeación.
          hr.bd-hr.mt-3
          .col-md-8.mb-4.mb-md-0
            .h4 Ejecución de los planes de acuerdo con la estructura organizacional
            p Herramienta metodológica cuyo propósito es articular su capacidad productiva con los recursos que cuenta la empresa; así como identificar sus limitaciones y oportunidades para diseñar acciones de mejora en el proceso productivo.

    .h4.mb-5 Aplicación

    .row.justify-content-center.mb-5
      .col-lg-8.mb-5.mb-lg-0
        .bloque-texto-b.p-4
          .bloque-texto-b__texto.h2.mb-0 El proceso administrativo funciona como una guía simple y rigurosa mediante la cual una empresa u organización intenta lograr los objetivos propuestos de la forma más eficiente. La aplicación de este proceso administrativo permite aprovechar la mano de obra y los recursos técnicos y materiales que posee una empresa.
          span Raffino, 2020

    p.mb-5 El proceso administrativo dentro de una explotación agrícola es permanente y continuo, es decir, funciona como faro, mediante el cual la empresa persigue alcanzar de forma eficiente los objetivos propuestos. La puesta en marcha de este proceso permite aprovechar eficazmente todos los recursos como mano de obra, recursos técnicos, insumos y materiales que posee una empresa. #[strong Con la aplicación del programa productivo se visualiza el futuro del cultivo, estando permanentemente expuesto a tener imprevistos en cada una de sus etapas de producción], pero con una excelente administración y sincronía en cada una de sus fases, es posible el cumplimento de los objetivos y metas de la empresa.
            
    .titulo-segundo
      #t_1_4.h4 1.4 Riego y fertirriego    

    p.text_tamano_1.mb-5 #[strong El concepto de riego se puede describir como ] #[strong.color_text la acción de suministrar algún tipo de líquido nutritivo o agua a un cultivo ] 
      | #[strong , ya sea de forma natural o artificial.]

    img.img-a.mb-5(src="@/assets/curso/tema_1/img_17.png")

    p.mb-5 Por su parte, #[strong el fertirriego es la acción de inyectar fertilizante en estado líquido, generalmente disuelto en agua mediante un sistema de riego]. Además, permite suministrar nutrientes minerales según el requerimiento técnico del cultivo en la cantidad y concentración ajustadas a sus necesidades, en el momento justo, de forma fácil y uniforme. En otros términos, el término fertirrigación es un método de aplicación simultánea de agua y fertilizantes al cultivo por medio de un sistema de riego dispuesto para ello.

    .h4.mb-5 Métodos

    p.mb-5 En este grupo existe dos métodos a saber: riego natural y mecánico. Las siguientes figuras los representan:

    .tarjeta--container.row.mb-5
      .row.mb-5
        .col-sm-6.col-lg-6.mb-4.mb-lg-0
          .tarjeta.tarjeta--boton.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema_1/img_18.png', alt='Texto que describa la imagen')

            .h2.text-center Riego natural
            p.text-center La más frecuente y económica es la que ocurre de forma natural a cielo abierto; como son las lluvias, fenómeno natural que se presenta según la pluviosidad de cada región.
    
        .col-sm-6.col-lg-6.mb-4.mb-lg-0
          .tarjeta.tarjeta--boton.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema_1/img_19.png', alt='Texto que describa la imagen')

            .h2.text-center Riego mecánico
            p.text-center Acondicionando por el ser humano para el suministro de agua o fertirriego en cualquier momento de la producción, con base en la necesidad y requerimientos técnicos del cultivo.
          
    .h4.mb-5 Sistemas

    p.mb-5 Con los avances científicos, tecnológicos y tipos de producción agrícola, #[strong los sistemas de riego han evolucionado notoriamente y se ajustan de acuerdo al tipo de explotación, según los recursos financieros de la empresa]. Los sistemas de riego más utilizados en terreno son: riego manual, riego por inundación o surco, riego por aspersión, riego por goteo, riego por microaspersión, riego hidropónico, riego automático y riego por nebulización. Estos tipos de riego optimizan el uso del agua, aprovechándose específicamente en los lugares del cultivo donde es necesario y en la cantidad requerida según las especificaciones técnicas. 

    p.mb-5 A continuación, se describen estos tipos de sistemas de riego.
        

    SlyderC.mb-5(:datos="datosSlyder_b")

    .h4.mb-5 Implementación

    p.mb-5 La implementación del cualquier sistema de riego está sujeta al criterio del empresario, teniendo en cuenta: #[strong tipo de cultivo, requerimientos técnicos, productividad, topografía, eficiencia, entre otros]. Según el sistema de riego se debe, paralelamente, realizar la programación por tiempos, volúmenes, caudal de agua, nivel del estado hídrico del suelo y de la planta.

    .h4.mb-5 Cálculos

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_21.png")
      .col-md.col-lg-6
        p Para implementar algún tipo de sistema de riego en un cultivo, lo primero que se debe hacer es identificar: #[strong tipo de cultivo, caudal de agua disponible, superficie a cubrir con el sistema de riego, tipo de equipos requeridos, días a realizar riego sobre superficie determinada, la topografía del terreno, identificación de obstáculos y forma de solución]. Un ejemplo de lo anterior es la figura en la que se observa un diseño de acuerdo con el grado de tecnificación.

    .h4.mb-5 Características

    .cajon--amarillo.p-4.mb-5
      .row.align-items-center
        .col-md.col-lg-2
          img.img-a(src="@/assets/curso/tema_1/img_22.png")
        .col-md.col-lg-9
          p #[strong Con la implementación de un sistema de riego se busca tener un ahorro de agua, entre 50% a 60%, dependiendo del sistema a utilizar], optimizando el suministro de fertirriego y eficiencia en la distribución de nutrientes disueltos en el agua a proporcionar al cultivo.

    .h4.mb-5 Aplicaciones

    .row.justify-content-center.mt-5.mb-5
      .col-md.col-lg-4
        p.text_tamano 
          |
          strong El objetivo de un sistema de riego es proporcionar agua o fertirriego a un cultivo, buscando preservar la mayor humedad requerida en el suelo de la explotación agrícola. 
      .col-md.col-lg-6
        p Igualmente facilita las labores de labranza, preparación de camas del cultivo, realización de labores específicas por parte de los trabajadores en el cultivo, profundidad del nivel acuífero y tipo de sistema de riego a implementar, con base en las exigencias técnicas del cultivo.

    img.img-a.mb-5(src="@/assets/curso/tema_1/img_23.png")

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Son diversos los usos que se le dan a un sistema de riego. La principal aplicación que se le ha otorgado es distribuir agua o sustancias nutritivas disueltas en ella, directamente al suelo del cultivo, para ser aprovechada de forma eficiente y oportuna por cada una de las plantas que conforman el cultivo.
        .col-lg-5.mb-4
          .h4.mb-0 La principal aplicación que se le ha otorgado es distribuir agua o sustancias nutritivas disueltas en ella.

    .h4.mb-5 Materiales

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-lg-6
        p.mb-3 Teniendo en cuenta el grado de tecnificación del cultivo, extensión, tipo de cultivo y topografía se requieren equipos y materiales para la puesta en marcha de la explotación.
        p Los materiales que se requieren de forma general son: 
          | 
          strong bomba de riego, filtros para riego, tubería de riego, cabezal de riego, aspersores, tanque de depósito de riego, etc. 
      .col-md.col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_24.png")

    .h4.mb-5 Hidráulica e importancia

    img.img-a.mb-5(src="@/assets/curso/tema_1/img_25.png")

    p.mb-5 En todo proceso de producción agrícola que se realice de forma intensiva, #[strong es importante la implementación de tecnologías que mejoren la productividad del cultivo y que las labores que se realicen dentro de este se hagan de forma eficiente]. Por tal razón, con ayuda de la hidráulica, que forma parte de la mecánica, se pueden mejorar los movimientos de los fluidos dentro de un sistema de riego o fertirriego, logrando hacer llegar a todos los lugares de la plantación el líquido requerido; en cantidad y presión igual a todos los lugares del cultivo. 

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_26.png")
      .col-md.col-lg-6
        p Para la implementación de un sistema hidráulico en una producción agrícola, #[strong se requiere de un estudio previo que indique cómo funcionará el almacenamiento de agua, conducción, distribución y suministro del agua en el terreno que se disponga para sembrar]. Igualmente, se deben tener presente los elementos necesarios para la adecuación del sistema de riego y drenaje. Es necesario, entonces, conocer los #[strong principios generales que rigen el movimiento del agua dentro de las tuberías, accesorios, mangueras, entre otros, que son transportados].

    .cajon--amarillo.p-4.mb-5
      p Para que el agua se pueda mover (porque una fuerza tiene que actuar sobre ella), es muy dispendioso saber cuáles son las fuerzas que actúan sobre el agua y las estructuras que la almacenan. 
        |
        strong La importancia de saber los orígenes de estas fuerzas se debe a que se puede diagnosticar la capacidad, aumentar o disminuir las presiones de todo el sistema según las necesidades operacionales. 

    p.mb-5 #[strong La exactitud y precisión en el suministro de agua dependen del diseño del sistema de riego a implementar]. Pero es gracias a la hidráulica del sistema de riego que se logra llegar a todo el cultivo, de acuerdo a los requerimientos técnicos del mismo.
      
    .titulo-segundo
      #t_1_5.h4 1.5 Cronograma

    p.mb-5 El cronograma se puede definir como #[strong la representación gráfica de un conjunto de actividades o tareas programadas], las cuales se deben realizar ordenadamente siguiendo la fecha y tiempo establecidos para ello y plasmado en un calendario en el que se describen los tiempos en los que se debe realizar cada una las tareas definidas. 

    .row.justify-content-center.mb-5
      .col-md.col-lg-4
        .bloque-texto-c.p-4
          .h4.mb-2 El cronograma es una herramienta de planificación de actividades de la unidad agrícola
      .col-md.col-lg-6
        p.mb-3 En síntesis, el cronograma es una herramienta de planificación de actividades de la unidad agrícola y convirtiéndose en un instrumento que permite definir el tiempo que se proyecta para realizar una actividad 
       
        p Con la utilización de esta herramienta se puede hacer #[strong una adecuada programación de las labores diarias, definiendo el tiempo de duración de cada una]. Además de la organización al realizar seguimiento y control de cada una de las actividades que se llevan a cabo en la producción agrícola. 

    .h4.mb-5 Alcance

    p.mb-5 En un programa de producción, la ejecución y puesta en marcha de las actividades es de vital importancia, ya que permite determinar cómo se deben distribuir los recursos, desde el momento de alistamiento del suelo hasta la cosecha para alcanzar los objetivos y metas propuestas de manera eficiente por la organización. #[strong El cronograma indica, secuencialmente, las actividades que se deben realizar en un proceso productivo agrícola], como: labranza, siembra, mantenimiento del cultivo, cosecha y poscosecha. 

    .cajon--azul.p-4.mb-5
      p Los trabajos se deben realizar tal como se encuentra plasmado en el cronograma de actividades del proceso productivo; #[strong esto le permite a la empresa mantener las condiciones planeadas, y revisten gran importancia puesto que de ellas depende el futuro de la cosecha]. 

    .h4.mb-3 Estructura

    p.mb-3 La estructura de un plan de producción se resume en un instrumento de planeación que le permite a una empresa del sector agrícola, desarrollar las actividades planeadas siguiendo el cronograma establecido. #[strong Un plan de producción está diseñado temporalmente para el periodo correspondiente al ciclo productivo del cultivo]; allí, se definen todos los aspectos técnicos, organizativos y consecutivos de recursos que se requieren para producir y volver eficiente el cultivo, según lo diseñado en al plan estratégico de la empresa.

    p.mb-5 Un cronograma de actividades de un proceso productivo se debe diseñar teniendo en cuenta los siguientes elementos.

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_27.png' alt='AvatarTop')
        .h4 Labores a desarrollar
        p Son todas las actividades que se realizarán dentro del programa de producción. Entre más puntual sea dicha descripción, mejores resultados se obtendrán. 

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_28.png' alt='AvatarTop')
        .h4 Definición de tiempos
        p Con base en las labores definidas, el siguiente paso es asignar a cada una de ellas un tiempo de ejecución; se deben tener en cuenta experiencias anteriores.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_29.png' alt='AvatarTop')
        .h4 Relación entre tareas
        p Es fundamental establecer las tareas que requieren de atención especial y aquellas de carácter simultáneo. Estos datos son de gran importancia para optimizar los plazos de ejecución del proceso productivo.

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_30.png' alt='AvatarTop')
        .h4 Restricciones
        p Para el cumplimento de las metas existen tiempos definidos y condicionados a una actividad puntual que se debe realizar dentro del plazo establecido e, igualmente, está sujeto a factores externos que se deben contemplar para optimizar cada una de las tareas establecidas. 

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_31.png' alt='AvatarTop')
        .h4 Recursos disponibles
        p En este ítem se definen para cada una de las fases del programa productivo las personas, materiales e insumos que se requieren a lo largo del proceso. El cronograma sirve como base para la elaboración del presupuesto y establecer costos de producción.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_32.png' alt='AvatarTop')
        .h4 Análisis y revisión
        p Es indispensable para la verificación de los resultados finales identificar los tiempos en relación directa con la calidad de las tareas ejecutadas. Esto permitirá la realización de una mejora dentro del proceso.

    .h4.md-5 Características

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_1/img_33.png', alt='Texto que describa la imagen')
      figcaption Figura 1. Cronograma de actividades.

    p.mb-5 Como se observa en la figura anterior del cronograma de actividades, se puede apreciar que está organizado en #[strong filas horizontales y columnas verticales, distribuyendo en cada fila la actividad a ejecutar]. Mientras que #[strong en las columnas se hace una división de tiempo, ya sea por años, meses, semanas e incluso días], todo depende de cuánto va a durar el ciclo productivo.

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--morada")
      .row(titulo="Fases")
        p.mb-5 Para el #[strong logro eficiente de los objetivos es necesario organizar la ejecución de la producción por fases], para facilitar el cumplimento de la misión empresarial. Cada organización, con base en el programa de producción, diseña su propio cronograma y, a su vez, las fases que lo conforman. A continuación, se mencionan algunas de ellas:  
        .row.justify-content-around.align-items-cente
          .col-md-8.mb-4.mb-md-0
            .h4 Recopilación de información
            p Es el proceso de recepción de variables específicas en un proceso, que posteriormente permite realizar la tarea en un tiempo puntual.
          hr.bd-hr.mt-3
          .col-md-8.mb-4.mb-md-0
            .h4 Definición de actividades
            p Es la programación e incorporación de tareas dentro del cronograma que debe hacerse en tiempo determinado.
          hr.bd-hr.mt-3
          .col-md-8.mb-4.mb-md-0
            .h4 Secuencia de actividades
            p Es la programación e incorporación de tareas dentro del cronograma que debe hacerse en orden de ejecución secuencial y puntual, según el orden establecido.
          hr.bd-hr.mt-3
          .col-md-8.mb-4.mb-md-0
            .h4 Establecimiento de los tiempos y recursos
            p Es la asignación de recursos requeridos a cada actividad programada y la distribución del tiempo a desarrollar la actividad. 
          hr.bd-hr.mt-3
          .col-md-8.mb-4.mb-md-0
            .h4 Distribución de actividades
            p Está en relación directa con el proceso productivo y se diseña con base en las siguientes actividades: labranza, siembra, mantenimiento del cultivo, cosecha y poscosecha. 

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-5.mb-4
          .h4.mb-0 Los cronogramas de actividades son la herramienta mediante la cual se dinamiza la ejecución del desarrollo de las labores agrícolas.
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Además, es aplicable a todos los procesos del programa de producción agrícola, #[strong describiendo el tiempo en que se debe realizar el proceso para llevar a cabo el ciclo del cultivo]. En él se establece cuánto tiempo va a demorar y qué recursos se requieren para el desarrollo de las labores agrícolas.
        
    .titulo-segundo
      #t_1_6.h4 1.6 Planeación

    p.mb-5 La planeación es #[strong el primer paso del proceso administrativo de todo programa productivo y se construye a partir de los resultados que se quieren alcanzar], con base en el planteamiento de los objetivos propuestos por la de empresa. Con los elementos recopilados en la fase de planeación es que se gestionan los recursos que se requieren en cada una de las fases, además se establece la prioridad y orden en que se deben ejecutar en cada etapa del proceso productivo. 

    img.img-a.mb-5(src="@/assets/curso/tema_1/img_34.png")

    .row.justify-content-center.mt-5.mb-5
      .col-md.col-lg-4
        p.text_tamano 
          |
          strong El manual de procedimiento es un documento elaborado de acuerdo con los requerimientos técnicos de la unidad productiva.  
      .col-md.col-lg-6
        p En él se describe de forma secuencial, detallada e integral, 
          |
          strong el paso a paso de cada una de las actividades que se realizan diariamente para cumplir los objetivos y metas de la empresa. 

    .h4.mb-5 Clases

    p.mb-5 En todo proceso administrativo del área agrícola se pueden establecer tres tipos de planeación:

    .row.mb-5
      .col-sm-6.col-lg-4.mb-6.mb-lg-0
        .tarjeta.tarjeta--boton.p-4.mb-5.min-h
          .row.mb-3
            .col-3
              img.img-a(src='@/assets/curso/tema_1/img_35.png')

          .h5 Planeación estratégica
          p Herramienta de gestión y responsabilidad del nivel directivo. Este tipo de planeación permite establecer el quehacer y el camino que debe seguir la empresa para alcanzar las metas previstas en esta fase.
  
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta--boton.p-4.min-h
          .row.mb-3
            .col-3
              img.img-a(src='@/assets/curso/tema_1/img_35.png')

          .h5 Planeación táctica
          p Es la responsable de diseñar las metas y escenarios para que las acciones establecidas en la planificación sean alcanzadas de forma eficiente.
  
      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta.tarjeta--boton.p-4.min-h
          .row.mb-3
            .col-3
              img.img-a(src='@/assets/curso/tema_1/img_35.png')

          .h5 Planeación operativa
          p Se fundamenta en las actividades de importancia dentro del proceso productivo que deben ejecutar los operarios técnicos de la empresa. Específica las actividades que debe realizar el talento humano teniendo en cuenta su perfil técnico.

    .h4.mb-3 Aplicación
      
    p.mb-5 La planeación en el contexto del proceso administrativo, consiste en saber qué se va a hacer por anticipado, cuál va a ser la dirección que tomará para alcanzar, de la manera más eficiente, los objetivos y metas trazadas en la empresa. Sirve como soporte paras las demás funciones administrativas en relación con la organización, coordinación y control de actividades. Su aplicación es fundamental para organizar recursos, coordinar actividades, controlar el desarrollo de las labores agrícolas y evaluar los resultados obtenidos con los planificados.

    .h4.mb-3 Estructura

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_36.png")
      .col-md.col-lg-6
        p.mb-3 La estructuración de la planeación es la segunda fase del programa productivo,#[strong enfocada en los lineamientos establecidos en la planeación]. En este nivel es donde se procede a definir la forma y detalle de cómo se desarrollarán las labores dentro del plan de producción, siendo, además, el enlace entre la fase de planeación y ejecución del proceso productivo.

        p Aquí es donde los funcionarios designados #[strong crean y definen la estructura que seguirán a las acciones para el ejercicio del funcionamiento eficiente de la empresa y cumplir así los objetivos y contribuir en alcanzarlos], así como las metas propuestas por la organización agrícola y ser sostenible.

    .cajon--lavanda.p-4.mb-5
      p En síntesis, una estructura de planeación es 
        | 
        strong el conjunto de actividades específicas y ordenadas dentro de un cronograma, con autoridad jerárquica para lograr los objetivos y la misión de la empresa agrícola. 

    .h4.mb-3 Metodología

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-lg-6
        p La planeación es un proceso metodológico en sí y consiste en #[strong una sucesión de pasos que ayudan a alcanzar los objetivos propuestos por la empresa], empleando diversos procesos de técnicas e instrumentos que permiten comprender los diferentes tipos de planeaciones, de acuerdo a las necesidades de cada programa de producción y seleccionar el que más se ajuste a sus necesidades productivas.
      .col-md.col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_37.png")

    .h4.mb-3 Importancia

    .row.justify-content-center.mb-5
      .col-md.col-lg-4
        .bloque-texto-d.p-4
          .h4.mb-2 La planeación es el primer paso del proceso administrativo de todo programa productivo.
      .col-md.col-lg-6
        p.mb-3 Por este motivo, es de resaltar su importancia en el desarrollo de las labores agrícolas; 
          | 
          strong ya que se proponen los objetivos y se direcciona lo que se va a hacer para poder alcanzarlos.

        p Igualmente se encarga de organizar las áreas, los recursos, coordinar las actividades, controlar y evaluar los resultados de la empresa. Ello gracias a que facilita comparar los resultados obtenidos con los planificados.

    p.mb-5 En un programa de producción agrícola, es relevante el proceso de planeación y cada una de las etapas que lo contempla como son: 

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla_1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_38.png' alt='AvatarTop')
        p.text-center.mb-3 
          |
          strong ANÁLISIS DE LA SITUACIÓN
        p.text-center Para saber dónde se está. 

      .col-md-6.col-lg.tarjeta--tabla_1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_39.png' alt='AvatarTop')
        p.text-center.mb-3 
          |
          strong ESTABLECIMIENTO DE OBJETIVOS
        p.text-center Determina el fin que se quiere alcanzar.

      .col-md-6.col-lg.tarjeta--tabla_1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_40.png' alt='AvatarTop')
        p.text-center.mb-3 
          |
          strong FORMULACIÓN DE ESTRATEGIAS
        p.text-center Diseña estrategias para saber cómo alcanzar los objetivos.

      .col-md-6.col-lg.tarjeta--tabla_1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img.img-a(src='@/assets/curso/tema_1/img_41.png' alt='AvatarTop')
        p.text-center.mb-3 
          |
          strong DISEÑO DE PLANES DE ACCIÓN
        p.text-center Establece cómo priorizar las iniciativas más importantes para lograr en detalle el desarrollo del proceso productivo. 

    .titulo-segundo
      #t_1_7.h4 1.7 Control

    p.mb-5 Aquí es donde un productor agrícola, asumiendo con responsabilidad el rol que desempeña teniendo en cuenta el orden jerárquico de la empresa, #[strong garantiza el desarrollo de las labores agrícolas en condiciones de calidad, plazos establecidos en el cronograma, manejo de insumos, mano de obra] y las demás fases que requiera el programa de producción.

    .row.justify-content-center.mb-5
      .col-md.col-lg-4
        .bloque-texto-b.p-4
          .h4.mb-2 El control de un proceso productivo agrícola es llevado por un representante legal o administrador de la unidad productiva.
      .col-md.col-lg-6
        img.img-a(src='@/assets/curso/tema_1/img_42.png')

    p.mb-5 Está a su cargo la #[strong orientación, inspección, manejo del cultivo, maquinaria, sistemas de riego, fertirriego, eficiencia productiva, insumos, eficacia en las distintas actividades, calidad de los productos y otras de importancia]. Además, debe tomar decisiones eficientes para el cumplimiento de la actividad productiva.

    .h4.mb-5 Aplicación
     
    p.mb-5 La aplicación de un sistema productivo en el sector agrícola, #[strong debe estar direccionada a nuevos mercados que exigen productos innovadores, obtenidos con tecnologías eficientes sin la presencia de algún agente químico en su proceso productivo], identificando su trazabilidad dentro de la cadena productiva y buscando preservar el medio ambiente. Este proceso se realiza como paso siguiente a un estudio de mercados, siendo incorporado posteriormente a la planeación estratégica para luego instaurar su ejecución siguiendo los parámetros técnicos del programa productivo, para controlar #[strong el desarrollo de las labores agrícolas que conduzcan al logro de los objetivos y metas propuestas por la empresa agrícola.] 

    img.img-a.mb-5(src='@/assets/curso/tema_1/img_43.png')

    .h4.mb-5 Estructura e importancia

    p.mb-5 Para el desarrollo de cualquier tipo de explotación agrícola es importante contar con # [strong una estructura organizada jerárquicamente y plasmada en un organigrama que lleve el control de la empresa para lograr los objetivos y la misión de la unidad productiva]. Por lo general, el administrador de la empresa agropecuaria es el encargado de llevar el control de esta, desempeñando funciones inherentes al proceso administrativo como planificación, organización, ejecución y control de todos los recursos de los que dispone: tierra, mano de obra, capital de trabajo, insumos y demás. 

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-lg-4
        img.img-a(src='@/assets/curso/tema_1/img_44.png')
      .col-md.col-lg-6
        p La estructura administrativa es fundamental, ya que #[strong con su diseño secuencial se facilita el desarrollo de las actividades establecidas para cada fase del programa productivo]. En relación con el cronograma de actividades, es el funcionario quien asigna la distribución de recursos para el funcionamiento eficiente de la empresa. 

    img.img-a(src='@/assets/curso/tema_1/img_45.png')
     


</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosPasosA: [
      {
        titulo: 'Dressed for Error',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Before the Fury',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Khans Tribute',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Secret of the Quiet Stranger',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
    ],
    datosSlyder: [
      {
        titulo: 'Diagrama de flujo',
        texto:
          'También se conoce como flujograma. Es una herramienta de uso general en la que se representa la gráfica de un proceso. Se describen los pasos que siguen en el ciclo productivo desde que se inicia hasta que se termina, mediante la utilización de figuras que facilitan entender la secuencia de las actividades de un proceso productivo. Por medio de esta herramienta se puede identificar el mejor camino que el producto recorrerá en el proceso productivo.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de Ishikawa (fishbone)',
        texto:
          'Se trata de una herramienta para el análisis de los problemas que básicamente representan la relación entre un efecto y todas las posibles causas que lo ocasionan. Se le denomina también “diagrama de espina de pescado” por su parecido con el esqueleto de un pescado. El diagrama causa-efecto está compuesto por un recuadro que constituye la cabeza del pescado, una línea principal, que representa su columna y de 4 a más líneas apuntando a la línea principal formando un ángulo de 70º, creando sus espinas principales. A su vez, cada una tiene varias espinas y pueden tener de dos a tres más. Esquemáticamente el diagrama causa-efecto tiene la siguiente forma.',
        imagen: require('@/assets/curso/tema_1/img_8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tablas de datos',
        texto:
          'Como su nombre lo indica, es una tabla de información relevante organizada en filas y columnas para ser analizada y tomar decisiones en proceso de mejora continua; como se observa en la siguiente figura.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Hojas de verificación',
        texto:
          'También conocida como lista de chequeo, es una herramienta impresa con formato de tabla o diagrama, destinada a la recolección sistemática de datos importantes en un proceso productivo. A continuación, se muestra un modelo',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de Pareto',
        texto:
          'Es otra herramienta gerencial en la que por medio de barras se grafican los valores organizados de mayor a menor. Este diagrama se utiliza para identificar los defectos que se producen con mayor frecuencia, las causas más comunes de los mismos o las causas más repetitivas de quejas de los clientes.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Histogramas',
        texto:
          'Es la representación gráfica de una variable en forma de barras, teniendo en cuenta que la superficie de cada barra es proporcional a la frecuencia de los valores representados. Con esta herramienta se observa cómo cambian los valores de la variable que se está estudiando',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de dispersión',
        texto:
          'Es una herramienta gráfica que permite identificar la posible relación entre dos o más variables, permitiendo visualizar la tendencia de comportamiento de cada una e interpretar los datos registrados.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder_b: [
      {
        titulo: 'Riego manual',
        texto:
          'Es el más utilizado por los pequeños o medianos productores agrícolas. Este sistema es empleado por su bajo costo y se requiere de equipos básicos como una manguera, boquilla y rociador con lanza para manguera. ',
        imagen: require('@/assets/curso/tema_1/img_20.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Riego por inundación o surco',
        texto:
          'Este sistema de riego es usado en plantaciones de gran extensión o en cultivos extensivos como arroz, pastos, etc. Se caracteriza por dividir el terreno con diques de medio metro de altura, con surcos internos en donde se vierte el agua, por lo general proveniente de una quebrada o rio caudaloso, se realiza el ingreso de agua por la cabecera de los surcos y por gravedad avanza hasta el extremo más bajo permitiendo humedecer todo el terreno. A este sistema también se le denomina riego por gravedad.',
        imagen: require('@/assets/curso/tema_1/img_8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Riego por aspersión',
        texto:
          'Se denomina así por el instrumento mecánico que se utiliza para aplicar agua a los cultivos en forma de gotas dispersas, imitando la lluvia. ',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Riego por goteo',
        texto:
          'Es un método de suministro de agua o fertilizante por goteo. Por medio de esta técnica el sustrato llega directamente a la zona de influencia radicular, a través de un sistema de mangueras y gateadores que optimizan la aplicación del fertirriego.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Riego por microaspersión',
        texto:
          'También recibe el nombre de riego por microirrigación. Se fundamenta en suministrar de forma controlada agua a presión a un cultivo, y está formado por diversos elementos acondicionados en un ambiente apropiado para la implantación del cultivo.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Riego hidropónico',
        texto:
          'Es un mecanismo de suministro de sustratos disueltos en agua, los cuales llegan directamente a la raíz de la planta y pueden crecer directamente sobre la solución o con apoyo de un sustrato. En esta disolución se encuentran todos los macro y micronutrientes requeridos para el desarrollo de las plantas.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Riego automático',
        texto:
          'Es un sistema para proveer con agua a las explotaciones intensivas de producciones agrícolas especializadas de manera tecnificada, por medio de algún sistema de riego mecánico adaptado para ello. Con este sistema se suministra agua o fertirriego en la ubicación que se desee, en la cantidad requerida, con la frecuencia y horario determinados en el protocolo de cultivo. <br><br> Cada producción agrícola adapta el sistema de riego automático, con base en sus necesidades técnicas y al potencial financiero de la empresa. En la actualidad existen sistemas de riego totalmente computarizados, lo que facilita el manejo del cultivo y reduce costos de producción en mano de obra e insumos por menor pérdida de agua o fertirriego.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Riego por nebulización',
        texto:
          'Es un sistema de riego utilizado principalmente dentro de los invernaderos. Este sistema provee agua o fertirriego en forma de neblina, a través de aspersores dispuestos en la parte superior de los cultivos. Con la utilización de este sistema las plantaciones reducen la temperatura interna y aumentan el nivel de humedad relativa en la nave.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
