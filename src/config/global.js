export const global = {
  componenteFormativo:
    'Administración y manejo del sistema de poscosecha en una empresa agrícola',
  descripcionCurso:
    'El objetivo de la producción agrícola es producir alimentos y/o subproductos de origen vegetal de alto nivel nutricional. Estos productos son de fácil deterioro durante toda su cadena productiva, ya sea por manejo o el tiempo de entrega, desde su recolección hasta el momento de recibo por parte del distribuidor mayorista o directamente llegando al consumidor final. ',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
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
      titulo: 'Consideraciones de administración en la producción agrícola',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Administración',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Recursos',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Programa de producción',
          hash: 't_1_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.4',
          titulo: 'Riego y fertirriego',
          hash: 't_1_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.5',
          titulo: 'Cronograma',
          hash: 't_1_5',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.6',
          titulo: 'Planeación',
          hash: 't_1_6',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.7',
          titulo: 'Control',
          hash: 't_1_7',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Producción limpia dentro de un sistema agropecuario',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Gestión de calidad',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Normas técnicas colombianas',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo: 'Programa de certificación',
          hash: 't_2_3',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Manejo del sistema de poscosecha en la producción agrícola',
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
          titulo: 'Identificación fibras por combustión',
          hash: 't_3_2',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Gloria Matilde Lee Mejía',
      cargo: 'Responsable del equipo',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Astrid Lili Puerta',
      cargo: 'Experta temática',
      centro: 'Centro Agropecuario de Buga',
      regional: 'Regional valle',
    },
    {
      nombre: 'Javier Enrique Santana',
      cargo: 'Experto temático',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Michael Andrés Cortés Caro',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Mauricio Jiménez Fajardo',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Manuel Alejandro Garzón Cárdenas',
      cargo: 'Experto temático',
      centro: 'Deutsche Gesellschaft für',
      regional: 'Internationale Zusammenarbeit (GIZ)',
    },
    {
      nombre: 'Liliana Victoria Morales Gualdrón',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Evaluador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Julieth Paola Vital López',
      cargo: 'Revisora de estilo',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Brayan Stiven Pinto Diaz',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'GLOBAL G.AP. (2016). Guía para usuarios y autoevaluación para el cumplimiento de la regla sobre seguridad de productos de la FSMA. ',
    link:
      'https://www.globalgap.org/permalink/9bbc82f0-98d8-11e7-98d5-6805ca037347.pdf ',
  },
  {
    referencia:
      'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
  },
  {
    referencia:
      'Hospital Universitario Ramón y Cajal. (s. f.). Ejemplos de tipos de representaciones gráficas.',
    link: 'http://www.hrc.es/bioest/Ejemplos_histo.html ',
  },
  {
    referencia:
      'Instituto Colombiano Agropecuario (ICA). (2020a). Normas nacionales. ',
    link: 'https://www.ica.gov.co/normatividad/normas-nacionales',
  },
  {
    referencia:
      'Instituto Colombiano Agropecuario (ICA). (2020b). Índice de normatividad. ',
    link: 'https://www.ica.gov.co/normatividad/indice-de-normatividad.aspx ',
  },
  {
    referencia:
      'Lesur, L., Martínez, A. y Celis, P. (2008). Manual del riego agrícola: una guía paso a paso. Editorial Trillas.',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/156au80/sena_aleph000055500',
  },
  {
    referencia:
      'Ministerio de Agricultura y Desarrollo Rural. (2019). Lista de organismos de certificación acreditados y autorizados para certificar bajo el Reglamento para la producción ecológica adoptado por la Resolución 0187/2006, y autorizados para administrar el uso del Sello de Alimento Ecológico del Ministerio de Agricultura y Desarrollo Rural.',
    link:
      'https://www.minagricultura.gov.co/tramites-servicios/Documents/Lista_de_Certificadoras_de_Productos_Ecologicos_040219.pdf',
  },
  {
    referencia:
      'Ministerio de Agricultura y Desarrollo Rural. (s. f.). Reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación y comercialización de productos agropecuarios',
    link:
      'https://www.minagricultura.gov.co/tramites-servicios/Documents/Reglamento_para_la_produccion_Organica.pdf',
  },
  {
    referencia: 'Minitab. (2020). Elementos básicos de un diagrama de Pareto.',
    link:
      'https://support.minitab.com/es-mx/minitab/19/help-and-how-to/quality-and-process-improvement/quality-tools/supporting-topics/pareto-chart-basics/',
  },
  {
    referencia:
      'Progressa Lean. (2014). Diagrama causa-efecto (diagrama Ishikawa).',
    link:
      'https://www.progressalean.com/diagrama-causa-efecto-diagrama-ishikawa/ ',
  },
  {
    referencia: 'Raffino. M. E. (2020). Proceso administrativo. ',
    link:
      'https://concepto.de/proceso-administrativo/#:~:text=El%20proceso%20administrativo%20funciona%20como,materiales%20que%20posee%20una%20empresa.',
  },
  {
    referencia:
      'Red de Agricultura Sostenible (RAS). (2010). Norma para agricultura sostenible.',
    link:
      'https://www.rainforest-alliance.org/lang/sites/default/files/publication/pdf/SAN-S-1-4S-Norma-para-Agricultura-Sostenible_es.pdf',
  },
]

export const glosario = [
  {
    termino: 'Abono orgánico natural',
    significado:
      'producto debidamente compostado y estabilizado que, al ser aplicado al suelo, activa principalmente los procesos microbillos, fomentando simultáneamente su estructura, aireación y capacidad de retención de humedad y aportando pequeñas cantidades de nutrientes. Incluye subproductos animales, estiércoles, residuos vegetales y lombricompuestos.',
  },
  {
    termino: 'Acreditar',
    significado:
      'procedimiento a través del cual se reconoce la competencia técnica y la idoneidad de organismos de control, de inspección y laboratorios de calibración y ensayo. Con el proceso de acreditación, la entidad competente autoriza legalmente a una persona física o jurídica para que desempeñe las funciones de certificador / organismo de control.',
  },
  {
    termino: 'Agricultura convencional',
    significado:
      'método de producción agropecuaria en el que se utilizan sustancias químicas sintéticas total o parcialmente.',
  },
  {
    termino: 'Agricultura ecológica',
    significado:
      'todos los sistemas agrícolas que promueven la producción ambiental, social y económicamente sostenible de alimentos, los cuales debe ocurrir sin la utilización de insumos de síntesis química y tomando la fertilidad del suelo como un elemento fundamental para la producción exitosa, respetando la capacidad natural de las plantas, los animales y los suelos para optimizar la calidad en todos los aspectos de la agricultura y el ambiente.',
  },
  {
    termino: 'Alimento',
    significado:
      'todo producto natural o artificial, elaborado o no, que ingerido aporta al organismo humano los nutrientes y la energía necesarios para el desarrollo de los procesos biológicos. Quedan incluidas en la presente definición las bebidas no alcohólicas, y aquellas sustancias con que se sazonan algunos comestibles y que se conocen con el nombre genérico de especias.',
  },
  {
    termino: 'Bioabono',
    significado:
      'abono orgánico obtenido de procesos de compostaje de residuos sólidos o materiales orgánicos separados desde la fuente, utilizado para mejorar las características biológicas de un suelo y al cual se le adicionan artificialmente inoculantes biológicos que son garantizados en la composición.',
  },
  {
    termino: 'Bioinsumo',
    significado:
      'producto de origen biológico utilizado con fines de nutrición vegetal, manejo integrado de plagas o mejoramiento de las características biológicas del suelo. Incluye: agentes biológicos para el control de plagas, inoculantes biológicos, bioabonos, inóculos microbiales para compostaje y productos bioquímicos.',
  },
  {
    termino: 'Certificación ecológica',
    significado:
      'procedimiento mediante el cual los organismos de control debidamente autorizados, garantizan por escrito o por un medio equivalente que los productos y sus sistemas de producción se ajustan a los principios, las normativas y requisitos del presente reglamento.',
  },
  {
    termino: 'Inspector en agricultura ecológica',
    significado:
      'persona física capacitada y autorizada para realizar inspecciones tendientes a otorgar certificación ecológica, en productos, en finca, en proceso y en comercialización.',
  },
  {
    termino: 'Registro',
    significado:
      'base de datos administrada por el sistema de control, relativa a operadores, producción, fincas de producción ecológica, en transición, establecimientos de procesamiento, comercialización, elaboración, organismos de control e inspectores de agricultura ecológica.',
  },
  {
    termino: 'Sello ecológico',
    significado:
      'figura adherida o impresa a un certificado, producto o empaque que identifique que el mismo, o su producción y procesamiento ha cumplido con las directrices establecidas en el presente reglamento.',
  },
  {
    termino: 'Trazabilidad',
    significado:
      'capacidad para seguir el movimiento de un alimento a través de etapa (s) especifica (s) de la producción, transformación y distribución. Es la posibilidad de encontrar y seguir el rastro, a través de todas las etapas de producción, transformación y distribución, de un alimento (para uso humano o animal) o una sustancia destinada a ser incorporada en alimentos o con probabilidad de serlo. Unidad productiva: finca, predio, parcela, zonas de producción, proceso, acopio, almacén y establecimiento donde se llevan a cabo actividades de producción, proceso, almacenamiento y comercialización de productos agropecuarios.',
  },
]

export const complementario = [
  {
    texto:
      'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    tipo: 'Página web',
    descarga: '/downloads/prueba.pdf',
  },
  {
    texto:
      'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
    tipo: 'Artículo científico',
    link: 'https://www.google.com/',
  },
  {
    texto: 'Economía de Rosquilla. (s.f.).',
    tipo: 'Página web',
    descarga: '/downloads/prueba.pdf',
  },
  {
    texto: '2 minutos para entender el desarrollo sostenible – Spanish',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
]
