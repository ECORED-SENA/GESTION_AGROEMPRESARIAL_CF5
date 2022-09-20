<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1(data-aos="fade-right") Plan Sanitario

    .bg_fondo-t5
      .row.mb-4
        .col-lg-6
          p El plan sanitario en las producciones pecuarias es de gran importancia, puesto que este garantiza que se disminuyan los problemas que puedan afectar el sistema de producción y afecten la capacidad productiva y reproductiva en las explotaciones.
          .bg_4.py-3.px-4.mt-3.mb-4       
            p.m-0 Este plan debe estar enfocado en establecer actividades que contribuyan de manera sistemática, ordenada, integrada y práctica con la prevención, el control y la erradicación de enfermedades de control oficial y de gran incidencia en las producciones pecuarias. En síntesis, el plan sanitario debe establecer actividades que estén diseñadas en la mitigación de factores de riesgo que puedan afectar la sanidad de los animales. 
          p Es de aclarar que, aunque se tienen actividades en común (manejo, vacunación, desparasitación), cada plan sanitario debe ser diseñado para las condiciones específicas de cada predio en singular y a su sistema de manejo, ya que las condiciones de varían entre una región y otra, inclusive entre predios.
        .col-lg-6
          figure(data-aos="fade-left")
            img.img-t.mx-auto(src='@/assets/curso/tema5/img01.svg')
      
      p.mb-5 En la figura que se muestra a continuación, se puede observar la estructura general que se recomienda para establecer un plan sanitario y los pasos para su elaboración: 

      .row.mb-5
        .col-lg-11
          TabsA.color-acento-botones   
            .tarjeta.color8.p-5(titulo="Alcance")
              .row
                .col-xl-6.mb-4
                  h4 Alcance
                  p En esta fase se explica el contexto de aplicación del plan, el personal encargado de aplicarlo y a quien va dirigido.
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/tema5/img02.png', alt='Texto que describa la imagen')
                      
            .tarjeta.color8.p-5(titulo="Objeto")
              .row
                .col-xl-6.mb-4
                  h4 Objeto
                  p Aquí se debe mencionar la intención que se tiene al implementar el plan.
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/tema5/img03.png', alt='Texto que describa la imagen')
            
            .tarjeta.color8.p-5(titulo="Consideraciones")
              .row
                .col-xl-6.mb-4
                  h4 Consideraciones
                  p Se deben mencionar las consideraciones a tener en cuenta en el momento de la implementación del plan sanitario, las palabras con mayor importancia para la comprensión del plan. Deben describirse las causas que pueden generar algunos peligros o enfermedades, como prevenirlas y los tratamientos.
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/tema5/img04.png', alt='Texto que describa la imagen')
                    
            .tarjeta.color8.p-5(titulo="Desarrollo")
              .row
                .col-xl-6.mb-4
                  h4 Desarrollo
                  p Se plasman todas las actividades y fechas para la implementación del plan.
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/tema5/img05.png', alt='Texto que describa la imagen')
            
            .tarjeta.color8.p-5(titulo="Registros")
              .row
                .col-xl-6.mb-4
                  h4 Registros
                  p La información de todas las actividades que se desarrollen en el marco del plan, se deben consignar en los registros.
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/tema5/img06.png', alt='Texto que describa la imagen')

      .row.justify-content-center
        .col-lg-8.col-xl-9.col-xxl-8
          p.mb-5 En relación con la elaboración del plan sanitario se recomienda tener en cuenta la siguiente estructura:

      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-botones(data-aos="fade-right").mb-0
            h5 Figura 2 
          span.ms-4 <em>Estructura de un plan sanitario</em>    

          .row.justify-content-center.mt-5
            .col-lg-12
              h4.text-center.mb-5 Pasos para la realización de un plan sanitario
              figure
                img(src='@/assets/curso/tema5/img07.svg', alt='Pasos para la realización de un plan sanitario')

      Separador

      #t_5_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
          h2 5.1 Prevención de enfermedades de control oficial       

      p Las enfermedades de control oficial son aquellas que, de acuerdo con lo establecido en las normas internacionales adoptadas por Colombia, se establecen como de interés en el ámbito nacional y se disponen programas de prevención, control y erradicación. De igual manera, se establece su notificación obligatoria y registro. A continuación, encuentra el listado de enfermedades y sus características principales:

      .row.justify-content-center.mb-5
        .col-lg-12
          figure
            img(src='@/assets/curso/tema5/imginfografica.svg', alt='Texto que describa la imagen')  

      p.mb-4 Son las enfermedades que pueden sufrir las especies pecuarias y que se deben trabajar de inmediato por parte del predio y el ICA que es la entidad encargada de priorizar dichas enfermedades para evitar problemas mayores que impacten el proceso productivo, las enfermedades que han sido declaradas de control oficial en Colombia por el ICA y para las cuales se debe vacunar obligatoriamente son:

    .row(data-aos="fade-right")
      .col-lg-12        
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bg_9
          .row.justify-content-center(titulo="Fiebre aftosa")
            .col-md-11.mb-4.mb-md-0
              p Enfermedad viral altamente contagiosa que puede afectar a los animales de pezuña hendida como los bovinos, ovinos, caprinos, porcinos, bufalinos, venados y camélidos. El agente etiológico es un virus de la familia <em>Picornaviridae</em> género <em>Aphtovirus</em> y actualmente existen siete serotipos el O, A, C, SAT1, SAT2, SAT3 y Asia1.
              .bg_15.p-4
                p <b>Sus signos clínicos más representativos son:</b> presencia de ampollas y aftas en la lengua, paladar, encías, espacios interdigitales y/o ubre. Además de los mencionados anteriormente, los animales también pueden presentar fiebre, salivación excesiva, inapetencia, disminución en la producción de carne o leche, mastitis, cojeras, deformación de los cascos.
                p Esta enfermedad es altamente propagable y se transmite de a través de la orina, heces, saliva, gotículas y leche de los animales infectados. Su prevención se hace vacunando los animales de cualquier edad y repetir la dosis cada 6 meses. 

          .row.justify-content-center(titulo="Estomatitis vesicular")
            .col-md-11.mb-4.mb-md-0
              p Es una enfermedad que se presenta principalmente bajo los 2.500 msnm. Su agente etiológico es un virus de la familia Rhabdoviridae, género Vesiculoris y existen dos serotipos principales: New Jersey e Indiana. Sus principales huéspedes son, los equinos, mulares, asnales, bovinos y porcinos.
              .bg_15.p-4
                p <b>Sus signos clínicos más representativos:</b> suelen confundirse con los de la fiebre aftosa, ya que los animales infectados presentan: presencia de ampollas y aftas en la lengua, paladar, encías, espacios interdigitales y/o ubre. Además de los mencionados anteriormente, los animales también pueden manifestar fiebre, salivación excesiva, inapetencia, disminución en la producción de carne o leche, mastitis, cojeras, deformación de los cascos.
                p.m-0 El tratamiento de esta enfermedad es estrictamente sintomático y se realiza limpiando las heridas con una solución antiséptica y brindando alimento blando a los animales que presenten lesiones en la boca.

          .row.justify-content-center(titulo="Brucelosis")
            .col-md-11.mb-4.mb-md-0
              p Es una enfermedad infecciosa, causada por una bacteria Brucella. Existen diferentes especies de Brucella dependiendo de su huésped natural: <em>Brucella abortus</em> (bovinos), <em>Brucella melitensis</em> (ovinos y caprinos), <em>Brucella ovis</em> (ovinos), <em>Brucella suis</em> (porcinos), <em>Brucella canis</em> (caninos), <em>Brucella neotomae</em> (roedores silvestres).
              .bg_15.p-4
                p <b>Sus signos clínicos más representativos son:</b> abortos en el último tercio de la gestación, nacimiento de crías débiles, retención de placenta, metritis, en la macho orquitis y causar problemas de fertilidad en el hato. Además, es una enfermedad zoonótica, es decir, que se puede transmitir a los humanos. Puede afectar bovinos, ovinos, caprinos, caninos, al ser humano, entre otros. El hombre se puede contaminar por el consumo de leches crudas o por el contacto con secreciones de animales enfermos o fetos. 
                p.m-0 Su prevención consiste en vacunar exclusivamente las hembras entre 3 y 8 meses de edad con la vacuna cepa 19. Para el caso de las hembras mayores de 8 meses de edad, está rotundamente prohibida la vacunación con cepa 19 y solo se podrá vacunar con cepa RB51 con previa autorización del ICA. De igual manera, está totalmente prohibido el uso de estas vacunas en machos.

          .row.justify-content-center(titulo="Tuberculosis")
            .col-md-11.mb-4.mb-md-0      
              p Enfermedad infectocontagiosa, zoonótica, crónica, producida por bacterias de morfología bacilar pertenecientes al género <em>Mycobacterium</em>, incluyendo las especies <em>Bovis</em>, <em>Tuberculosis</em> y <em>Avium</em>. Esta enfermedad afecta principalmente a los bovinos, ovinos, caprinos, cerdos, aves, humanos, entre otros. En los humanos se transmite por el consumo de leches crudas o quesos frescos. En los animales se transmite a través de secreciones o excreciones, también se pueden contaminar a través de objetos contaminados como suelo, agua, pasto, alimento o vía aerógena. 
              .bg_15.p-4
                p.m-0 <b>Sus signos clínicos más representativos son:</b> tos seca, debilidad progresiva, perdida del apetito, fiebre fluctuante, dificultad para respirar (disnea), ganglios linfáticos grandes. Una de las lesiones más características es que en los pulmones se aprecian áreas de gran tamaño con apariencia caseificada y zonas de mineralización.

          .row.justify-content-center(titulo="Encefalopatía Espongiforme Bovina (EEB)")
            .col-md-11.mb-4.mb-md-0          
              p Comúnmente conocida con la “enfermedad de las vacas locas”, es una enfermedad zoonótica, exótica en Colombia, progresiva y fatal del sistema nervioso bovino. Es causada por la acumulación de una proteína anormal en el tejido nervioso y denominada prion y se distinguen dos formas:  la primera es la forma clásica que se da en los bovinos tras la ingestión del prion en piensos contaminados, específicamente ocurre cuando el alimento contiene productos derivados de bovinos como la harina de sangre o de hueso. La segunda forma es la atípica que hace referencia a la aparición de la enfermedad de forma espontánea.
              .bg_15.p-4
                p.m-0 <b>Sus signos clínicos más representativos son:</b> comportamiento agresivo o nervioso, falta de coordinación y dificultad para levantarse de la posición de reposo, hipersensibilidad al sonido y al tacto, movimientos espasmódicos, temblores, depresión, postura anormal, pérdida de peso, postura anormal de la cabeza, temblores y ataxia, desplazamientos en círculos, golpeo de miembros, lamido excesivo, bruxismo.

          .row.justify-content-center(titulo="Rabia silvestre")
            .col-md-11.mb-4.mb-md-0          
              p Esta es una enfermedad viral, de tipo nervioso y que es prevenible de los mamíferos. El virus de la rabia infecta el sistema nervioso central y puede llegar a causar la muerte. Afecta a los animales domésticos como bovinos, equinos, ovinos, caprinos, porcinos, caninos y felinos. Se considera además una de las principales enfermedades zoonóticas. La principal vía de contaminación es a través de la saliva de animales infectados, generalmente se da por mordeduras, aunque también se puede contaminar a través de las membranas mucosas (boca, nariz y ojos). En Colombia, los mayores transmisores de la enfermedad son los murciélagos hematófagos. 
              .bg_15.p-4
                p.m-0 <b>Sus signos clínicos más representativos son:</b> cambios en el comportamiento, caída e incoordinación del tren posterior, salivación abundante, ceguera, temblores musculares y parálisis. Los animales presentan además pérdida de peso progresivo y deshidratación y posteriormente la muerte. La prevención se realiza a través de vacunación y control de murciélagos hematófagos.

          .row.justify-content-center(titulo="Enfermedad de Newcastle")
            .col-md-11.mb-4.mb-md-0          
              p Conocida comúnmente como peste, moquillo o ahogazón. La enfermedad de Newcastle es una infección altamente contagiosa y con frecuencia severa, causada por un virus de la familia de los <em>Paramyxovirus</em>, de distribución cosmopolita. Tiene tres presentaciones: lentogénica o leve, mesogénica o moderada, y velogénica o muy virulenta, el virus puede sobrevivir por largos periodos a temperatura ambiente, especialmente en las heces, pero puede ser destruido por varios agentes físicos y químicos, no resiste pH ácidos ni la exposición a temperaturas de 60 °C por más de 30 min, es sensible al éter, formalina, amonios cuaternarios, agentes fenólicos y oxidantes, clorhexidina e hipoclorito de sodio (6%). El período de incubación es de 2 a 15 días, pero para efectos del código terrestre de la OIE es de 21.
              .bg_15.p-4.mb-4
                p.m-0 En la mayor parte de países con producción avícola a escala comercial, se practica la vacunación profiláctica. Para demostrar que un país está libre de la enfermedad de Newcastle, es necesaria la vigilancia conforme a las directrices del Código Sanitario para los Animales Terrestres de la OIE. En última instancia, los productores avícolas deben establecer procedimientos eficaces de bioseguridad para evitar la introducción de la enfermedad (Código Sanitario para los Animales Terrestres de la OIE).
              p Para profundizar más sobre la enfermedad de Newcastle se recomienda leer la cartilla <em>Conceptos importantes para tener en cuenta para el control y diagnóstico de la enfermedad de Newcastle</em> disponible en el material complementario.
        
          .row.justify-content-center(titulo="Encefalitis Equina Venezolana (EEV)")
            .col-md-11.mb-4.mb-md-0    
              p Es una enfermedad que afecta a los equinos y también a los humanos, es causada por un virus de la familia <em>Togaviridae</em>, este virus se transmite por la picadura del mosquito. Se puede prevenir vacunando cada dos años los equinos que habitan en los municipios que se encuentran por debajo de los 1.200 msnm. Es requisito indispensable para la movilización de equinos, que se encuentren vacunados contra la EEV y deberá realizarse con un periodo de anticipación de 15 días antes de la movilización de los animales.
              .bg_15.p-4
                p <b>Sus signos clínicos más representativos son:</b> en los humanos: fiebre mayor de 40 grados, dolor de cabeza, catarro nasal, vómito y dolores musculares. Sin embargo, algunas personas pueden presentar síntomas neurológicos como rigidez de la nuca, convulsiones, desviación ocular, nistagmos y en casos extremos, la muerte. 
                p.m-0 En los equinos: fiebre, inapetencia, depresión, exitabilidad, apoyar la cabeza en paredes o superficies, caminar en círculos, movimientos masticatorios, flacidez en los labios, ojos semicerrados y orejas caídas.

          .row.justify-content-center(titulo="Peste Porcina Clásica (PPC)")
            .col-md-11.mb-4.mb-md-0
              p Enfermedad viral, altamente contagiosa, que afecta a cerdos domésticos y silvestres y producida por un virus de la familia Flaviviridae del género Pestivirus. Por sus características, y por no existir tratamiento, es la enfermedad más importante en los porcinos a nivel mundial. La transmisión puede hacerse por contacto directo entre los cerdos vía oral u oro nasal, aunque también se pueden contagiar por contacto indirecto.
              .bg_15.p-4
                p <b>Sus signos clínicos más representativos son:</b> varían dependiendo de la cepa, la edad del animal y el estado inmunitario del mismo, mostrando varias formas de la enfermedad:
                ul.lista-ul--color.mb_1
                  li.mb_1 
                    i.fas.fa-angle-right
                    | Forma hiperaguda
                  li.mb_1 
                    i.fas.fa-angle-right
                    | Forma aguda
                  li.mb_1 
                    i.fas.fa-angle-right
                    | Forma subaguda
                  li.mb_1 
                    i.fas.fa-angle-right
                    | Forma crónica
                  li.mb_1 
                    i.fas.fa-angle-right
                    | Forma transplacentaria
                p.mt-4.m-0 Dentro de las medidas de prevención para la PPC se encuentra la bioseguridad del predio, el control a las movilizaciones de animales y la vacunación de animales.
        
          .row.justify-content-center(titulo="Influenza aviar")
            .col-md-11.mb-4.mb-md-0          
              p Es una infección viral tipo que afecta a todo tipo de aves, generalmente causa infecciones transitorias e inaparentes en aves silvestres (principalmente aves acuáticas) y no plantea serias amenazas a la salud de la vida silvestre, aves domésticas u otras especies. Sin embargo, ocasionalmente una cepa del virus de la IA puede emerger como una significativa amenaza a las aves silvestres, la industria aviar y/o a la salud humana; estas cepas son llamadas cepas de “influenza aviar altamente patógena” HPAI (del inglés <em>Highly Pathogenic Avian Influenza</em>).
              .bg_15.p-4
                p.m-0 La transmisión se produce por el contacto directo con las secreciones de aves infectadas, especialmente a través de las heces o de los alimentos y el agua contaminados, se puede diseminar por el transporte de fómites contaminados tales como agua, alimentos, implementos, sacos, botas, ropa, bandejas, cajas de huevos, entre otros. El virus también está normalmente en los tractos respiratorios o intestinales de las aves silvestres que actúan como portadores, transportando al virus  largas distancias cuando realizan sus migraciones. Los síntomas son depresión leve a severa, disminución en consumo de alimento, tos, estornudo, lagrimeo, cresta y barbilla congestionada y edematosa, aumento en la mortalidad.

          .row.justify-content-center(titulo="Salmonelosis")
            .col-md-11.mb-4.mb-md-0          
              p La salmonelosis es una enfermedad causada por bacterias del género Salmonella de la cual existen más de 2.600 serotipos, siendo los más importantes en el ámbito de la avicultura y a los cuales el ICA realiza actividades de control son S. pullorum y S. gallinarum, de una distribución cosmopolita, afecta a todo tipo de aves,  con gran resistencia a la desecación, pueden sobrevivir en ambiente sobre todo en presencia de materia orgánica (heces, cáscara de huevo, cama entre otros) durante varios días, aunque es susceptible a sustancias químicas oxidantes. <em>S. pullorum</em> y <em>S. gallinarum</em>, son inmóviles y altamente patógenas para las aves de corral, pudiendo causar altas pérdidas en animales reproductores o en la progenie. Además, estas bacterias pueden infectar otras especies de aves y algunos mamíferos.
              .bg_15.p-4
                p.m-0 <b>Sus signos clínicos más representativos son:</b> en  general comprenden  anorexia, diarrea, deshidratación, amontonamiento, adherencia de heces a la cloaca, debilidad y muerte, pero específicamente depende del serovar por ejemplo en Pulorosis los síntomas son diarrea blanquecina abundante, que causa “empastamiento o taponamiento” de los pollitos, dificultad para respirar, tarsos inflamados, somnolencia, depresión y con crecimiento retardado, nódulos grisáceos blanquecinos en corazón, pulmones, hígado, paredes de molleja e intestino.          
                
      .row.justify-content-center.mb-5
        .col-lg-10
          .cajon.color-acento-contenido.bg_color1.p-3.mb-4
            .row.justify-content-center.align-items-center
              .col-auto 
                img.img-t(src='@/assets/curso/tema1/img02.svg', alt='')
              .col-lg-10
                p.mb-4.ms-2 Cada una de las enfermedades tratadas en esta presentación son de suma urgencia, en caso de identificar alguno de los síntomas o tiene certeza de la enfermedad por favor llame al veterinario y reporte al ICA de inmediato.
                p.ms-2.m-0 Todos los datos de contacto los puede encontrar en: #[a(href="https://www.ica.gov.co/" target='_blank') https://www.ica.gov.co/]   

    p.mb-5 Alerta temprana es la forma de llamar a las acciones que deben ser tenidas en cuenta con prioridad para el beneficio de las diferentes fincas evitando la propagación de alguna enfermedad o virus; por ello, a continuación, se comparte la imagen del ICA con estas alertas y se recomienda contactar de inmediato al Instituto para reportar la urgencia en caso de evidenciarla:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-12
        .tarjeta.color-acento-contenido.p-4.shadow.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-t.mx-auto(src="@/assets/curso/tema2/img06.svg")
            .col
              .row.justify-content-around.align-items-center
                .col.mb-3.mb-sm-0.col-lg-8
                  p <b>Sistema de alertas tempranas</b>
                  p.text-white Instituto Colombiano Agropecuario. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Sistema-de-alertas-tempranas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador

    #t_5_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 5.2 Área de cuarentena

    .row.mb-4
      .col-lg-6
        p La cuarentena pecuaria comprende todas aquellas medidas encaminadas a regular, restringir o prohibir la producción o la importación de animales y sus productos y restringir el movimiento o existencia de estos, con la finalidad de prevenir la introducción, dispersión o diseminación de enfermedades u otros organismos que afectan o puedan afectar la sanidad animal del país.
        p El área de cuarentena es un área física y específica de la producción en donde se deben cumplir unas condiciones de aislamiento de los animales que se van a ingresar nuevos al predio o que se sospecha que tienen alguna enfermedad o condición contagiosa.
        p En cuanto a los requisitos estructurales, esta área debe estar separada de otras zonas donde haya animales, y por supuesto, a una distancia prudente, dependiendo de la especie animal y la capacidad de difusión en el aire de posibles agentes patógenos.
        p Esta zona debe estar delimitada por muros, vallas o alambrados, con puerta y un aviso en la entrada que alerte sobre la prohibición del ingreso de personal no autorizado. Estas medidas son muy importantes ya que se pueden diseminar los agentes patógenos por toda la producción. Debe tener una zona de cargue y descargue de animales y en lo posible contar con un <em>vestier</em> donde el operario pueda realizar el cambio de vestuario y botas y si se requiere, ducharse.
      .col-lg-6
        figure(data-aos="fade-left")
          img.img-t.mx-auto(src='@/assets/curso/tema5/img08.png')

    Separador

    #t_5_3.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 5.3 Almacenamiento y transporte de productos biológicos y medicamentos veterinarios

    .row.mb-5
      .col-lg-6
        .cajon.color2.py-3.px-4.mt-3.mb-4       
          p.m-0 Los medicamentos son sustancias utilizadas para curar a los animales y su administración puede ser interna o externa. Por otra parte, los biológicos son sustancias utilizadas para la prevención de enfermedades, como por ejemplo las vacunas. Los medicamentos veterinarios que se utilizan y comercializan en Colombia, deben estar registrados ante el Instituto Colombiano Agropecuario (ICA) y deberán emplearse aplicando las buenas prácticas para el uso de medicamentos veterinarios.
        p Pueden clasificarse de acuerdo con: su naturaleza (farmacológico o inmunológico); su vía de administración (oral, inyectable, ocular, por nebulización), sus propiedades (analgésico, antiparasitario, anestésico), su forma farmacéutica (polvo oral, premezcla medicamentosa, aerosol, comprimido, entre otros).
        p Los medicamentos tienen varias formas de presentación, y se clasifican según su forma de elaboración así:  
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img09.png')

    ol.lista-ol--cuadro.mb-4
      li 
        .lista-ol--cuadro__vineta
        h4 Formas de presentación de los medicamentos

    .row.justify-content-center.mb-4
      .col-md-6.mb-5.mb-md-0(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Polvos o sólidos")
            .col-md-10.mb-4.mb-md-0
              p Suelen estar en forma de comprimidos, tabletas o polvos. En esta forma de presentación podemos encontrar algunos antibióticos, vitaminas, antiparasitarios, promotores del crecimiento, entre otros.

          .row.justify-content-center(titulo="Liofilizados")
            .col-md-10.mb-4.mb-md-0
              p Son tabletas sólidas en las cuales se envasan al vacío las vacunas vivas o modificadas.

          .row.justify-content-center(titulo="Líquidos")
            .col-md-10.mb-4.mb-md-0
              p Pueden ser para administración oral e inyectable, en esta forma de presentación podemos encontrar antibióticos, vitaminas, protectores hepáticos, antiinflamatorios, entre otros. 
        p Las condiciones de almacenamiento, transporte y conservación deben ajustarse a las especificaciones que figuran en la etiqueta, en particular las relativas a la temperatura, luz y humedad.
        p Todos los productos veterinarios deben almacenarse en instalaciones seguras y mantenerse bajo llave fuera del alcance de los niños y los animales. Los medicamentos se almacenan separados de los plaguicidas, fertilizantes y alimentos.

      .col-md-6.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema5/img10.png')

    Separador

    #t_5_4.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 5.4 Técnicas para aplicación de medicamentos veterinarios
        
    .row.mb-4
      .col-lg-6
        p Se debe tener muy en cuenta que, “con el uso de medicamentos en las especies pecuarias, se pueden generar algunos riesgos que están principalmente vinculados con su manipulación y administración” (Invima, 2020). Por lo anterior, las autoridades competentes deben establecer y aplicar la regulación sobre las buenas prácticas de uso de medicamentos veterinarios.
        .cajon.color2.py-3.px-4.mt-3.mb-4       
          p.m-0 Para poder aplicar las técnicas de aplicación de medicamentos veterinarios se deben tener en cuenta factores como la seguridad, el costo, la efectividad, la especie que se vaya a tratar, el tipo de enfermedad (agudo o crónico), el manejo (dominancia sobre el animal), la vía de administración y la forma farmacéutica.  
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img11.png')

    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img12.png')
      .col-lg-6
        p Las vías de aplicación de medicamentos varían dependiendo de la especie animal; sin embargo, las principales vías de aplicación de medicamentos son: 
        ul.lista-ul--color.mb_1
          li.mb_1 
            i.fas.fa-check
            p <b>Intraalar:</b> se realiza punzando la membrana del ala. Específicamente, en medio del triángulo formado por el pliegue que aparece al abrir el ala. Este método es el utilizado para realizar vacunaciones contra Viruela Aviar y se realiza con aplicador de doble estilete que previamente debe ser introducido en el frasco que contiene la vacuna.
          li.mb_1
            i.fas.fa-check
            p <b>Intramamaria:</b> con la ayuda de un catéter de pezón, se aplica el medicamento en los pezones del animal. Esta técnica es muy utilizada para tratar casos de mastitis o secados de vacas productoras de leche.
          li.mb_1
            i.fas.fa-check
            p <b>In ovo:</b> se inyecta a los embriones en su último estado de incubación.

    .row.mb-4
      .col-lg-6
        ul.lista-ul--color.mb_1
          li.mb_1 
            i.fas.fa-check
            p <b>Intranasal:</b> el medicamento se aplica por los orificios nasales. Las formas más utilizadas son en gotas, nebulizaciones o también se puede emplear el uso de una jeringa para medicamentos líquidos y se utilizan principalmente en especies pecuarias que presenten problemas respiratorios. 
          li.mb_1
            i.fas.fa-check
            p <b>Oftálmica:</b> este método de aplicación es muy utilizada en aves y consiste en la aplicación directa del medicamento sobre el ojo del animal, generalmente la presentación del medicamento viene en gotas y se utiliza mucho en vacunaciones e infecciones oculares. Se aplica el medicamento directamente sobre el ojo. Este método es de manejo individual de los animales y en las aves se utiliza principalmente para realizar vacunaciones contra enfermedades como Newcastle, Gumboro, bronquitis, entre otras.
          li.mb_1
            i.fas.fa-check
            p <b>Ótica:</b> el medicamento es aplicado en el oído y suele utilizarse mayormente en infecciones de oído medio o externo.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img13.png')
        
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img14.png')
      .col-lg-6
        ul.lista-ul--color.mb_1
          li.mb_1 
            i.fas.fa-check
            p <b>Oral:</b> el medicamento se aplica por la boca o pico, según sea el caso, y se emplean medicamentos en presentaciones de pastillas, polvos, jarabes, suspensiones. En las aves es la principal vía de administración. 
          li.mb_1
            i.fas.fa-check
            p <b>Rectal:</b> se aplica el medicamento por el recto y se utilizan en formas de supositorios o lavados.
          li.mb_1
            i.fas.fa-check
            p <b>Tópica:</b> el medicamento se aplica sobre la piel del animal y su presentación puede ser en crema, líquido, aerosol, polvo. Esta vía de aplicación se utiliza principalmente en heridas.
          li.mb_1
            i.fas.fa-check
            p <b>Intravaginal e Intrauterina:</b> con la ayuda de un catéter, se aplica el medicamento directamente por la vagina del animal o en el caso de ser intrauterina, se continúa introduciendo el catéter pasando por el cuello uterino hasta llegar al útero y poder depositar el medicamento allí. Esta técnica se utiliza principalmente en casos de metritis o infecciones vaginales. 

    p.mb-5 La siguiente vía es la parenteral y se compone de varios elementos que se deben tener en cuenta. Esta vía implica la ruptura de las barreras del organismo, la piel y las mucosas para depositar las sustancias en tejidos o cavidades internas del organismo inyectando el medicamento a través de una punción utilizando aguja y jeringa desechables. A continuación, se explican varias vías de aplicación de medicamentos parenteral:

    .titulo-quinto.color-acento-contenido
      h4.mb-4 Ángulos de aplicación Parenteral

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema5/imginfografica2.svg', alt='Texto que describa la imagen')        

      div(x="20.5%" y="40.5%" tooltip="Intramuscular" numero="1")
        .h5.mb-4.mt-5 Intramuscular
        p Es la vía de aplicación más utilizada en la administración de medicamentos veterinarios. La técnica es muy sencilla, se introduce la aguja de forma recta y profunda en el músculo a inyectar y se pone la jeringa para, posteriormente, girarla en el sentido de las manecillas del reloj, con el fin de asegurar la aguja a la jeringa y evitar accidentes o desperdicio de producto; luego, se debe empujar el émbolo de la jeringa hacia atrás para confirmar que no se haya punzado algún vaso sanguíneo. Si el émbolo se empuja hacia atrás y la jeringa se llena de sangre, se debe retirar la aguja y punzar nuevamente para evitar la afectación de los vasos sanguíneos. 

      div(x="33.5%" y="60%" tooltip="Subcutáneo" numero="2")
        .h5.mb-4.mt-5 Subcutáneo
        p Esta técnica es utilizada en todas las especies pecuarias, principalmente en la aplicación de vacunas o desparasitantes y consiste en inyectar el medicamento bajo la piel. La técnica consiste en levantar la piel con los dedos de una mano, e introducir el bisel de la aguja mirando hacia la superficie. En animales grandes, es recomendable introducir la aguja en un ángulo de 90 grados. Las zonas más recomendadas para la aplicación de medicamentos son aquellas donde existan pliegues como en las regiones del dorso, cervical y abdominal.

      div(x="51%" y="58%" tooltip="Intravenosa" numero="3")
        .h5.mb-4.mt-5 Intravenosa
        p Esta vía de aplicación se utiliza para conseguir un efecto rápido. El procedimiento consiste en sujetar al animal, aplicando la técnica de sujeción específica, se procede a desinfectar la zona que se va a punzar, es recomendable que antes de realizar la punción, se aplique una ligadura o haga compresión sobre la zona (esto facilitará la observación y localización de la vena), por último, se procede a realizar la punción con el bisel de la aguja hacia arriba y de manera horizontal a la vena. Para comprobar si fue exitoso el procedimiento, se empuja el émbolo de la jeringa hacia atrás, si se está en la vena, el contenido de la jeringa se mezclará con sangre, en caso contrario, se debe volver a realizar el procedimiento. Finalmente, después de estar seguros de que la punción se hizo directamente en la vena, se procede a aplicar el medicamento de forma lenta. 
      
      div(x="84%" y="57%" tooltip="Intradérmica" numero="4")
        .h5.mb-4.mt-5 Intradérmica
        p Esta técnica está directamente relacionada con actividades de diagnóstico y se realiza en todas las especies animales. Consiste en aplicar pequeñas cantidades de medicamentos, poniendo la aguja de manera horizontal y con la piel estirada. Las zonas más recomendadas en especies grandes son la tabla del cuello y la zona perianal. En especies pequeñas se recomienda realizar la punción en la parte inferior del tórax. En cuanto a los cerdos, se recomienda trabajar en la zona de la oreja.

    p.mb-5 Posterior a definir la técnica a trabajar se requiere definir la vía de administración y en la siguiente infografía se trabajan las más frecuentes:

    SlyderF(columnas="col-lg-8 col-xl-6")
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img15.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Oral    

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img16.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Oral  

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img17.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Oral  

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img18.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Oral  
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img19.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-centee.mb-0 Ocular 

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img20.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Intranasal

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img21.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Subcutáneo  

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img22.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Subcutáneo

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img23.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Intramuscular

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img24.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Intramuscular
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img25.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Intramuscular

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img26.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Intraalar

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img27.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Intravenoso

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5/img28.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bg_color5
              h4.text-center.mb-0 Intravenoso

    Separador

    #t_5_5.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 5.5 Tiempo de retiro

    p.mb-5 Este tiempo que debe reposar aislado un animal desde la hora de aplicación del medicamento veterinario hasta la eliminación del medicamento del cuerpo su organismo logrando disminuir como mínimo hasta que la concentración del producto médico no infrinja el Límite Máximo de Residuos (LMR) en los tejidos del animal, esto tiene el fin de evitar que esa carne o esos productos dependientes de los animales no sean dañosos para la salud de los seres humanos o los animales con los que el animal intervenido tenga contacto. Este tiempo debe ser respetado tal como se enuncia a continuación:

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video: Leyenda del video

    Separador

    #t_5_6.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 5.6 Notificación de efectos adversos

    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p Las notificaciones o denuncias de casos que se presentan en los animales con sintomatología compatible o atribuible a enfermedades de notificación oficial según Resolución ICA 3714 del 2015, debe realizarse en las oficinas del Instituto Colombiano Agropecuario – ICA, las personas que se encuentran en la obligación de realizar esta acción son:
        ul.lista-ul--color.mb_1
          li.mb_1 
            i.fas.fa-check
            | Personas responsables, encargados o propietarios de los animales afectados, ya sea en grandes, medianas o pequeñas producciones.
          li.mb_1
            i.fas.fa-check
            | Los médicos veterinarios, médicos veterinarios zootecnistas o profesionales en el área que atiendan producciones o presten asistencia técnica ya sea pública o privada.
          li.mb_1
            i.fas.fa-check
            | Cualquier autoridad local, regional o nacional.
          li.mb_1
            i.fas.fa-check
            | Responsables o encargados de los laboratorios diagnósticos veterinarios públicos o privados.
          li.mb_1
            i.fas.fa-check
            | Cualquier persona con conocimiento de aves enfermas o aparentemente afectadas por enfermedades de notificación.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img29.png')  

    Separador

    #t_5_7.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 5.7 Guía sanitaria de movilización interna

    .row.mb-4
        .col-lg-9
          p Para garantizar las condiciones de salubridad y seguridad de los animales, el ICA diseñó un formato denominado Guía Sanitaria de Movilización Interna (GSMI). Este documento contiene información sobre el lugar de origen de los animales y las condiciones sanitarias en las que se entregan los animales; esto último con el fin de evitar propagación de enfermedades. En este formato se consignan datos como número de animales, género, predio de procedencia, destino final (transporte a otro predio o sacrificio), registro de vacunación, ruta de transporte, destino final.      
          .cajon.color-acento-contenido.bg_color1.p-3.mb-4            
            p.m-0.ms-2 Para que el ICA pueda emitir el aval para la guía de movilización, es necesario cumplir con los siguientes requisitos: que no haya presencia de focos de enfermedades en el predio, que este se encuentre registrado oficialmente ante el ICA, registro de vacunación vigente, inspecciones clínicas a los animales, registro de cuarentenas.             
        .col-lg-3
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema5/img30.png')

    p.mb-5 Es de aclarar que esta guía solamente es válida para un solo vehículo y para un solo trayecto y aplica para la fecha autorizada. Sin embargo, un solo vehículo podrá transportar animales con diferentes GSMI, de diferentes orígenes y con diferentes destinos y se debe cumplir con los siguientes requisitos:

    .row.justify-content-center.mb-4
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
          li             
          li 
            .lista-ol--cuadro__vineta.lista-t5
              span 1
            | Que el origen y el destino cuenten con igual condición sanitaria en cuanto a las enfermedades de control oficial y se encuentre dentro de las mismas zonificaciones declaradas por el ICA. 
          li 
            .lista-ol--cuadro__vineta.lista-t5
              span 2
            p.mb-4 Que se identifiquen los lugares de origen y de destino en la ruta para la movilización de animales.
          li
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
          li
          li 
            .lista-ol--cuadro__vineta.lista-t5
              span 3
            p.mb-4 Que los lugares de origen y destino no tengan requisitos sanitarios especiales para autorizar la movilización o para obtener la GSMI.
          li 
            .lista-ol--cuadro__vineta.lista-t5
              span 4
            p.mb-4 Que las GSMI expedidas se encuentren vigentes dentro del tiempo autorizado para la movilización de los animales. 
          li

    p.mb-4 La expedición de la GSMI se puede expedir de dos formas:
    
    .tabla-a.color-primario.mt-2.border_tabla1.mb-5
      table
        thead
          tr
            td(colspan="6")
              h5.m-0.ms-3 1.	Presencial en la oficina local del ICA o convenio:
            td(colspan="6")
              h5.m-0.ms-3 2.	En línea, a través de su plataforma Sigma: 
        tbody
          tr
            td(colspan="6") 
              p.ms-3 <b>Paso 1:</b> Tener registrado el predio ante el ICA.
              p.ms-3 <b>Paso 2:</b> Presentar la cédula de ciudadanía del titular de los animales o del apoderado.
              p.ms-3 <b>Paso 3:</b> Presentar soporte de pago de la GMSI.
              p.ms-3 <b>Paso 4:</b> Informar el destino de la movilización, número de animales, edad y especie a movilizar.
              p.ms-3 <b>Paso 5:</b> Informar el nombre del conductor y datos del vehículo.
              p.ms-3 <b>Paso 6:</b> Firmar recibo de satisfacción de la GSMI.
            td(colspan="6") 
              p.ms-3 <b>Paso 1:</b> Ingresar al enlace https://www.ica.gov.co/servicios_linea/sigma/manuales.aspx para descargar el acta de confidencialidad de usuarios y obtener información adicional.
              p.ms-3 <b>Paso 2:</b> Diligenciar el acta de confidencialidad.
              p.ms-3 <b>Paso 3:</b> Enviar el acta escaneada y el documento de identificación al correo electrónico mesadeayuda.sigma@ica.gov.co.
              p.ms-3 En un tiempo estimado de 24 horas, recibirá a vuelta de correo el usuario y contraseña para poder ingresar a Sigma en línea y continuar con el trámite para expedir la guía de movilización.

          
    





            


</template>

<script>
export default {
  name: 'Tema5',
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
