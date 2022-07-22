export default {
  global: {
    componenteFormativo: 'Propuesta y comunicación comercial',
    descripcionCurso:
      'Este componente tiene como propósito el estudio en mercadeo de productos y servicios sostenibles de acuerdo con las necesidades del cliente, se identifican las estrategias para la presentación de la propuesta comercial, conceptos de <i>marketing</i> y omnicanalidad, vinculando elementos del <i>social media</i> y la comunicación comercial hacia el consumo sostenible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        titulo: '<i>Marketing Mix</i>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Omnicanalidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<i>Social Media Marketing</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Beneficios del <i>social media marketing</i>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Pasos para implementar una estrategia de <i>social media marketing</i>',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comunicación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Características de la comunicación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Aplicabilidad',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Propuesta comercial',
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
      tema: '<em>Marketing Mix</em>',
      referencia: 'Sánchez, G., J. (2015). <em>Marketing mix</em>. ',
      tipo: 'Artículo',
      link: 'https://economipedia.com/definiciones/marketing-mix.html',
    },
    {
      tema: 'Omnicanalidad',
      referencia:
        'Villalba, D. (2021). Omnicanalidad o multicanalidad: diferencias y beneficios. Academia Pragma.',
      tipo: 'Artículo',
      link:
        'https://www.pragma.com.co/blog/omnicanalidad-vs-multicanalidad-cual-es-la-mejor-opcion-para-mi-empresa#:~:text=La%20omnicanalidad%20y%20la%20multicanalidad,cada%20vez%20m%C3%A1s%20precisa%20y',
    },
    {
      tema: 'Social media <em>Marketing</em>',
      referencia: 'MeliDesign. (2021). Social media <em>marketing</em>. ',
      tipo: 'Video',
      link: 'https://youtu.be/bJjWIubOCTw',
    },
    {
      tema: 'Comunicación comercial',
      referencia:
        'En prosa Pódcast. (2020). Episodio 008 - Comunicación comercial',
      tipo: 'Podcast',
      link: 'https://youtu.be/j5Of-sHmgP0',
    },
    {
      tema: 'Propuesta Comercial',
      referencia:
        'Asesor Empresario - Asesuisa. (2021). Metodología - Qué debe de incluir una propuesta comercial exitosa ',
      tipo: 'Video',
      link:
        'Asesor Empresario - Asesuisa. (2021). Metodología - Qué debe de incluir una propuesta comercial exitosa',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo comercial',
      significado:
        'convenio de dos o más partes, cuyo fin es la formalización de una transacción comercial.',
    },
    {
      termino: 'Cliente<em></em>',
      significado:
        'razón de ser de la empresa. Es la persona, o empresa que paga por los productos de la empresa.',
    },
    {
      termino: 'Estrategias de <em>marketing</em>',
      significado:
        'proceso de comunicación con nuestros clientes en el que les damos a conocer las diferentes ventajas que tienen nuestros productos y servicios.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'proceso responsable de diseñar y operar las estrategias para que los clientes adquieran los productos de la empresa de una forma rentable.',
    },
    {
      termino: 'Precio',
      significado:
        'cantidad de dinero asignada a un producto por parte de la empresa para representar su valor.',
    },
    {
      termino: 'Producto',
      significado:
        'objeto de la transacción. En el mercadeo moderno un producto puede ser: un tangible, un intangible, una marca, una persona o un lugar.',
    },
    {
      termino: 'Prospectar',
      significado:
        'ejercicio que realizan las empresas para seleccionar sus posibles clientes.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'grado en el que el desempeño percibido de un producto o servicio coincide con las expectativas mínimas del comprador.',
    },
    {
      termino: 'Solicitud',
      significado:
        'cualquier requerimiento que llega a la empresa de manera formal.',
    },
    {
      termino: 'Valor',
      significado:
        'asignación monetaria que da un cliente a un producto en función de la necesidad que satisface o de la usabilidad que representa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ardila, E. (1984). Técnicas de ventas: objeciones. Servicio Nacional de Aprendizaje.',
      link: 'https://hdl.handle.net/11404/1900',
    },
    {
      referencia:
        'Arenal, L., C. (2017). Técnicas de venta: UF0031. Editorial Tutor Formación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44231',
    },
    {
      referencia:
        'Arroyo, R. (2021). David Martínez: Aedas aumenta ventas de forma sostenible desde mayo.  ',
      link:
        'https://www.proquest.com/newspapers/david-martínez-aedas-aumenta-ventas-de-forma/docview/2481055759/se-2?accountid=31491',
    },
    {
      referencia:
        'Carrión, M., F. (2018). El reto de la omnicanalidad. BD Digital eLibro ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/121991',
    },
    {
      referencia: 'Navarro, M. (2012). Técnicas de ventas. Red Tercer Milenio.',
      link:
        'https://www.academia.edu/22896902/T%C3%A9cnicas_de_ventas_MARIANA_ELIZABETH_NAVARRO_MEJIA',
    },
    {
      referencia: 'Ortego, J. (2021). Pasos para una campaña promocional.',
      link:
        'https://www.javierortego.com/marketing/pasos-para-campana-promociona/',
    },
    {
      referencia:
        'Santos, D. (2020). Social media marketing: todo lo que debes saber para implementarlo en tu empresa.',
      link: 'https://blog.hubspot.es/marketing/social-media-marketing',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experta temática',
        centro:
          'Centro de la Industria, la empresa y los Servicios - Regional Huila',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios (CIES). - Regional Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
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
        nombre: 'Oscar Ivan Uribe Ortíz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
