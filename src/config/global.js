export default {
  global: {
    componenteFormativo: 'Programación de la producción pecuaria',
    descripcionCurso:
      'En este componente el aprendiz se afianzará en aspectos clave de la planificación de la explotación pecuaria y el desarrollo de procesos productivos exitosos, enfocados al uso eficiente de recursos disponibles. Potenciará saberes sobre las principales pautas para la organización de actividades en la consolidación de la unidad productiva: legislación, sistemas de producción, buenas prácticas pecuarias, plan sanitario, plan de alimentación, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Legislación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Recurso humano',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normativa',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema de producción pecuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Planes de trabajo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cronogramas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Parámetros productivos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Buenas prácticas pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Normativa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Programas de certificación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Programa de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan Sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Prevención de enfermedades de control oficial',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Área de cuarentena',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo:
              'Almacenamiento y transporte de productos biológicos y medicamentos veterinarios',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Técnicas para aplicación de medicamentos veterinarios',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Tiempo de retiro',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo: 'Notificación de efectos adversos',
            hash: 't_5_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.7',
            titulo: 'Guía sanitaria de movilización interna',
            hash: 't_5_7',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plan de alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Buenas prácticas de alimentación animal',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo:
              'Almacenamiento de alimentos, materia prima e insumos pecuarios',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Manejo de crías',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Técnicas de manejo del destete',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Prácticas de manejo animal',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Sistema de identificación animal',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Software pecuario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistema de producción pecuario',
      referencia:
        'Bertotti Producciones. (2020). Construcción adecuada de toriles, mangas y callejones para vacunos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OQH0Tsy9NyU',
    },
    {
      tema: 'Sistema de producción pecuario',
      referencia:
        'Canal de los Llanos (2021). Construcciones de gallineros y galpones. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ptwG8jnd2XY',
    },
  ],
  glosario: [
    {
      termino: 'Asnales',
      significado:
        'hace referencia a la explotación y aprovechamiento de los asnos.',
    },
    {
      termino: 'Bretes',
      significado:
        'también se conocen como calcetas. son pasadizos estrechos hechos generalmente de madera que se usan para conducir el ganado de un punto a otro dentro de las instalaciones.',
    },
    {
      termino: 'Doble propósito',
      significado:
        'Se refiere al tipo de explotación pecuaria en la cual se obtienen dos beneficios con la misma especie pecuaria: como carne y leche en producción bovina o carne y lana en ovinos.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Esta abarca todas las medidas y actividades enfocadas en la protección de la salud de las personas relacionada con la calidad de los alimentos.',
    },
    {
      termino: 'Mulares',
      significado:
        'Relacionado con la explotación y aprovechamiento de las mulas, las cuales provienen del cruce de un burro con una yegua.',
    },
    {
      termino: 'Piensos',
      significado:
        'Son alimentos secos que se proporcionan al ganado para suplementar el pastoreo.',
    },
    {
      termino: 'Silvícola',
      significado:
        'Se relaciona con la explotación y beneficio de especies arbóreas, maderables y no maderables.',
    },
    {
      termino: 'Traspatio',
      significado:
        'Se relaciona con las explotaciones pecuarias que se desarrollan con baja tecnificación en la parte posterior o alrededor de las viviendas campesinas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Compañía Nacional de Chocolates (2019). <em>Buenas prácticas agrícolas en el cultivo, beneficio y comercialización de cacao.</em>',
      link:
        'https://chocolates.com.co/wp-content/uploads/2020/06/buenas-practicas-agricolas.pdf',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social (CONPES, 2010). <em>Política nacional para mejorar la competitividad del sector lácteo colombiano.</em>',
      link:
        'https://www.minagricultura.gov.co/ministerio/direcciones/Documents/d.angie/conpes%203675.pdf',
    },
    {
      referencia:
        'CONPES (2005). <em>Política sanitaria y de inocuidad para las cadenas de la carne bovina y de la leche.</em>',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3376.pdf',
    },
    {
      referencia:
        'CONPES (2010). <em>Consolidación de la política sanitaria y de inocuidad para las cadenas láctea y cárnica.</em>',
      link:
        'https://www.ica.gov.co/getattachment/3b31038a-72ba-40f9-a34d-cecd89015890/2010cp3676.aspx  ',
    },
    {
      referencia:
        'Decreto 1500 de 2007. [Ministerio de la Protección Social]. Por el cual se establece el reglamento técnico a través del cual se crea el sistema oficial de inspección, vigilancia y control de la carne, productos cárnicos comestibles y derivados cárnicos destinados para el consumo humano y los requisitos sanitarios y de inocuidad que se deben cumplir en su producción primaria, beneficio, desposte, desprese, procesamiento, almacenamiento, transporte, comercialización, expendio, importación o exportación. Mayo 04 de 2007.',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2007decreto1500.pdf',
    },
    {
      referencia:
        'Decreto 616 de 2006. [Ministerio de la Protección Social]. Por el cual se expide el Reglamento Técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercializa, expenda, importe o exporte en el país. Febrero 28 de 2006.',
      link:
        'https://www.ica.gov.co/getattachment/15425e0f-81fb-4111-b215-63e61e9e9130/2006d616.aspx',
    },
    {
      referencia:
        'Decreto 1072 de 2015. [Presidencia de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015.',
      link:
        'http://egresados.bogota.unal.edu.co/files/normatividad/Decreto%201072%20de%202015.pdf',
    },
    {
      referencia:
        'Ley 1774 de 2016. Por medio de la cual se modifican el Código Civil, la Ley 84 de 1989, el Código Penal, el Código de Procedimiento Penal y se dictan otras disposiciones. Enero 06 de 2016.',
      link: '',
    },
    {
      referencia: 'Ministerio de Trabajo (2022). <em>Normatividad.</em>',
      link: 'https://www.mintrabajo.gov.co/web/guest/marco-legal',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural (2021). <em>Propuesta de nueva clasificación de tipo de productor para la comisión nacional de crédito agropecuario.</em>',
      link:
        'https://www.finagro.com.co/sites/default/files/jt_tipos_de_productor.pdf ',
    },
    {
      referencia:
        'Resolución 76509 de 2020. [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen los requisitos para obtener la certificación en buenas prácticas ganaderas BPG en la producción porcina. Septiembre 25 de 2020.',
      link: '',
    },
    {
      referencia:
        'Resolución 68167 de 2020. [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de carne de bovinos y/o bufalinos. Mayo 20 de 2020.',
      link: '',
    },
    {
      referencia:
        'Resolución 20277 de 2018. [Instituto Colombiano Agropecuario]. Por la cual se establecen los requisitos sanitarios y de inocuidad para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción primaria de ovinos y caprinos. Febrero 7 de 2018.',
      link: '',
    },
    {
      referencia:
        'Resolución 67449 de 2020. [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de leche. Mayo 8 de 2020.',
      link: '',
    },
    {
      referencia:
        'Resolución 7953 de 2017. [Instituto Colombiano Agropecuario]. Por la cual se establecen los requisitos sanitarios y de bienestar animal para obtener la Certificación en Buenas Prácticas Ganaderas – BGP en la producción primaria de équidos, con destino a la recreación, trabajo y deporte. Junio 28 de 2017.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Sánchez Suárez',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Cordoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcela Alarcon Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
