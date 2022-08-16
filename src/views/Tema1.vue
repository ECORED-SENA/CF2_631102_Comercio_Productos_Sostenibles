<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span(style="color:#FFFFFF") 1
      h1 #[i Marketing Mix]
    p.mb-5  La #[span.txt-color1 mezcla de mercadeo]  (#[i Marketing Mix] en inglés) conocida comercialmente como las cuatro P (producto, precio, plaza y promoción), la cual representa la base conceptual para la implementación de las estrategias de mercadeo, fueron creadas por Jerome McCarthy alrededor del año 1970 y son cuatro variables sobre las cuales se fundamentan el qué hacer del proceso de mercadeo dentro de las empresas; en este sentido, un reto para las personas de mercadeo consiste en encontrar la mejor combinación posible, asegurando que las cuatro P se incorporen en el día a día de la gestión comercial de la compañía.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-9.bg-color1
        .p-4
          p.text-center.mb-0 Las variables (cuatro P) que conforman la mezcla de mercadeo se describen a continuación:
    .row.justify-content-center.mb-5
      .col-10.col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img1.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-content-center.justify-content-center.align-items-center
              p.mb-0 #[b Producto]: aquello que se ofrece en el mercado.
      .col-10.col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-content-center.justify-content-center.align-items-center
              p.mb-0 #[b Precio]: valor monetario de la transacción.
      .col-10.col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-content-center.justify-content-center.align-items-center
              p.mb-0 #[b Plaza]: está asociada a los canales de distribución, cómo se asegura que el producto llegue a manos del cliente.
      .col-10.col-lg
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img4.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-content-center.justify-content-center.align-items-center
              p.mb-0 #[b Promoción (comunicación)]: está relacionada con aquellos aspectos  tácticos enfocados en la marca y en la comunicación de la oferta de valor.
    
    p.mb-5 Respecto a la mezcla de mercadeo, es importante aclarar que estas variables constituyen lo mínimo que debe asegurar una empresa, y dado que el mercadeo ha ido evolucionando, algunos autores mencionan 7 P, otros, incluso, indican que el mercadeo ahora debería enfocarse en lo digital, sin embargo, pareciera haber consenso en la relevancia que tiene para una empresa y especialmente, para las personas de mercadeo y ventas, entender el funcionamiento de estos componentes.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Aun teniendo presente que el centro de la venta es el cliente, el producto es sumamente importante, ya que es justamente el objeto de la transacción, es decir, sin producto no será posible generar transacciones comerciales. Asociado al producto, vale la pena mencionar que el conjunto de todo aquello que ofrece una empresa al mercado, se denomina el #[span.txt-color1 portafolio] o la #[span.txt-color1 cartera de productos].
        p.mb-5 Tradicionalmente, el producto era entendido como algo que se podía tocar, es decir, algo tangible; sin embargo, gracias a la evolución del mercado, ahora es posible comercializar casi todo, por lo que en el mercadeo moderno el producto es la palabra genérica que hace relación a todo aquello que es susceptible de vender. No obstante, existen ciertos tipos de producto, a saber:
        .tarjeta.tarjeta--azul.p-4
          SlyderA(tipo="b")
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0.ps-5
                p #[b Productos tangibles]
                p Es la definición clásica del producto, constituyen aquellos bienes que se pueden tocar; tienen por como fin satisfacer una necesidad o un gusto. Su proceso de comparación se da detallando las características intrínsecas, es decir, aquellas que son internas y que están asociadas a la producción del bien, por ejemplo: el peso, forma, color, tamaño y las características extrínsecas, que son las externas que se observan fácilmente, tales como: empaque, marca, precio. El proceso de decisión de compra suele ser mucho más corto frente a otro tipo de tipología de productos.
              .col-lg-5.ps-4
                figure
                  img(src='@/assets/curso/tema1/img2.png')
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0.ps-5
                p #[b Productos intangibles]
                p Representan los servicios, es decir, aquellos productos que NO se pueden tocar, se caracterizan porque entregan a quien los adquiere un beneficio, su nivel de evaluación puede ser subjetivo, ya que depende de las expectativas que tenga cada cliente. En los intangibles, el proceso para la adquisición puede ser más largo que el asociado a los productos tangibles, dado que no es tan sencillo el proceso de comparación.
              .col-lg-5.ps-4
                figure
                  img(src='@/assets/curso/tema1/img3.png')
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0.ps-5
                p #[b Productos tipo marcas]
                p Con la creciente relevancia de los conceptos aspiracionales y moda, surgen las marcas como un tipo de producto más dentro del mercadeo. Hoy, pensar en Nike, Adidas, iPhone, Samsung, Diesel, entre muchas otras, muestran cómo las marcas son claves para los procesos de mercadeo, llegando incluso al concepto de mercadear una marca.
              .col-lg-5.ps-4
                figure
                  img(src='@/assets/curso/tema1/img4.png')
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0.ps-5
                p #[b Productos tipo personas]
                p ¿Suena raro cierto?, sí… quizá suene extraño, sin embargo, hoy grandes figuras de la política, el deporte, el entretenimiento e incluso los YouTubers son ejemplos de cómo es posible mercadear una persona. Ejemplo: imagínese, ¿cuánto cobra Sofía Vergara por ser la voz en una película de Disney?, ¿cuánto dinero genera Messi o Ronaldo por aparecer en un comercial?, ¿cuánto cobra un cantante de reggaetón por autorizar el uso de su nombre en una colección de ropa?, la respuesta exacta no la sabemos; sin embargo, sí se puede asegurar que son millones de dólares o euros (según sea el caso) y todo eso gracias al poder de su marca personal; por ello, para el mercadeo las personas constituyen un tipo de producto.
              .col-lg-5.ps-4
                figure
                  img(src='@/assets/curso/tema1/img5.png')
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0.ps-5
                p #[b Productos tipo lugares]
                p Los sitios asociados a diferentes áreas temáticas (culturales, deportivos, religiosos, de entretenimiento), son también importantes para el mercadeo, ya que son valorados positivamente por los consumidores, quiénes están dispuestos a pagar en algunos casos, incluso, importantes sumas de dinero por conocer o visitar dichos lugares. Algunos ejemplos: entrada al museo del Louvre, en Francia; entrada a La Bombonera, en Argentina; entrada al Museo del Oro, en Bogotá.
              .col-lg-5.ps-4
                figure
                  img(src='@/assets/curso/tema1/img6.png')
    p.mb-5 El #[span.txt-color1 precio] es una variable de alto interés para el mercadeo y las ventas, dado que es la única variable de la mezcla que genera ingresos (es decir, entradas de dinero para la compañía); se interpreta como la cantidad de dinero que el cliente va a pagar a la empresa a cambio de obtener por parte de esta el producto que requiere.
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.bg-color2.py-3
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img5.svg', style="width: 350px").m-auto
          .col-lg-8
            p.mb-0 Asociado a la variable precio, es de resaltar, que la cuantificación del mismo se da a través de un concepto económico denominado moneda, la cual es propia de cada país o zona económica, permitiendo así las mediciones y las comparaciones. En la tabla 1 se evidencian algunas monedas utilizadas en Colombia y en las principales economías del mundo, relacionando también su código ISO, es decir, las siglas que permiten la estandarización para reconocer las monedas a nivel mundial.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1]. Algunas monedas de circulación mundial.
        .tabla-a.color-acento-botones
          table
            caption Nota. Tomada de la clasificación ISO 4217 de las monedas.
            thead
              tr
                th #[b Moneda]
                th #[b País (es) de uso]
                th #[b Notación - Código ISO]
            tbody
              tr
                td 
                  p.text-center.mb-0 Peso colombiano.
                td 
                  p.text-center.mb-0 Colombia.
                td 
                  p.text-center.mb-0 #[b COP]
              tr(style="background-color: #FFFAE7")
                td 
                  p.text-center.mb-0 Dólar estadounidense.
                td 
                  p.text-center.mb-0 Estados Unidos.
                td 
                  p.text-center.mb-0 #[b USD]
              tr
                td 
                  p.text-center.mb-0 Euro.
                td 
                  p.text-center.mb-0 Alemania, Francia, Italia, España, Bélgica, Grecia, Austria, Irlanda, Finlandia, Portugal, Eslovaquia, Malta, Países Bajos, Chipre.
                td 
                  p.text-center.mb-0 #[b EUR]
              tr(style="background-color: #FFFAE7")
                td 
                  p.text-center.mb-0 Peso chileno.
                td 
                  p.text-center.mb-0 Chile.
                td 
                  p.text-center.mb-0 #[b CLP]
              tr
                td 
                  p.text-center.mb-0 Peso mexicano.
                td 
                  p.text-center.mb-0 México.
                td 
                  p.text-center.mb-0 #[b MXN]
              tr(style="background-color: #FFFAE7")
                td 
                  p.text-center.mb-0 Peso argentino.
                td 
                  p.text-center.mb-0 Argentina.
                td 
                  p.text-center.mb-0 #[b ARS]
              tr
                td 
                  p.text-center.mb-0 Real.
                td 
                  p.text-center.mb-0 Brasil.
                td 
                  p.text-center.mb-0 #[b BRL]
              tr(style="background-color: #FFFAE7")
                td 
                  p.text-center.mb-0 Yen japonés.
                td 
                  p.text-center.mb-0 Japón.
                td 
                  p.text-center.mb-0 #[b JPY]
    p Dentro del tema de precios se manejan los #[span.txt-color1 descuentos], los que están determinados por disminuciones en los precios de lista (precios de referencia o precios base) que concede la empresa a sus clientes, estos son porcentajes (%) los establecen las organizaciones según su estructura de costos para generar más ventas; y se realizan como consecuencia de negociaciones puntuales, necesidad de salir de inventarios, lanzamiento de productos o captación de nuevos clientes o mercados. 
    p.mb-5 Los descuentos más usados comercialmente son los financieros y los comerciales, así:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #EBE3F9")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b Descuentos financieros]
              p Son aquellos que tienen como finalidad obtener el pago del dinero por parte del cliente a la mayor brevedad posible, dado que representa para la empresa capital de trabajo, es decir, los recursos con los que debe contar la organización para poder operar (ya sea para producir el bien o prestar el servicio, según sea el caso), lo anterior, bajo la lógica a menor tiempo de pago mayor descuento.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img6.svg')})`}")
      .col-lg-5
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #EBE3F9")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b Descuentos comerciales]
              p Son el tipo de descuento que tiene por fin, no solo asegurar las mejores condiciones para un cierre de ventas, sino, además, generar relaciones de largo plazo con el cliente, ya que al aplicarlos él percibirá que la empresa lo trata de forma preferencial.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img7.svg')})`}")
    p La #[span.txt-color1 plaza] es llamada por algunos autores como #[span.txt-color1 distribución], es la variable de la mezcla de mercadeo (#[i Marketing Mix]), responsable de hacer que el producto llegue a las manos del cliente. Como consecuencia de este concepto, surgen los canales de distribución que son los medios que utilizan las empresas para gestionar el proceso de entrega del producto.
    p.mb-5 Los canales de distribución pueden ser:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones.p-4(titulo="Canal de distribución<br>directo")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Cuando la empresa le entrega directamente el producto al cliente, se conoce también como canal cero (0) y se caracteriza por no tener intermediarios. Algunos ejemplos de ellos son: las ventas que realizan los tenderos en sus tiendas, una emprendedora que comercializa sus productos en su tienda virtual o una contadora que vende sus servicios a sus familiares.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img8.png', style="width: 450px").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Canal de distribución<br>indirecto")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Este funciona cuando la empresa requiere o elige tener intermediarios en la cadena de distribución. La ventaja de este canal frente al canal directo es que la empresa llega a mayor cantidad de clientes, la desventaja es que los costos se incrementan y, por ende, puede aumentar el precio del producto. Dentro del canal de distribución indirecto, pueden darse canales cortos o largos.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img9.png', style="width: 450px").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Canal corto")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Canal corto es cuando solo participa un intermediario entre la empresa y el cliente.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img10.png', style="width: 450px").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Canal largo")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Canal largo es cuando se involucran más de dos intermediarios. En este orden de ideas, las ventas, usualmente utilizan canales largos, ya que suelen estar presente varios intermediarios.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img11.png', style="width: 450px").m-auto
    p.text-center.mb-5 En el siguiente esquema se presentan los ejemplos.
    .row.fondo1.ampliarambos.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10-md-5.px-5
        figure
          img(src='@/assets/curso/tema1/img8.svg')(data-aos="fade-right")
    p.mb-5 #[span.txt-color1 La promoción] hace alusión a la forma como la empresa plantea sus estrategias para comunicar su marca y productos a los clientes, suele ser una variable bastante densa, dado que dentro de ella tiene sus propios componentes, denominados en conjunto “mezcla de comunicación”, la cual tiene básicamente los siguientes elementos: publicidad, relaciones públicas y propaganda.
    .row.justify-content-center
      .col-lg-10
        .row
          .col-12.bg-color4
            .p-4
              .row.align-items-center
                .col-lg-2.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img9.svg', style="width: 80px").mx-auto(data-aos="fade-right")
                .col(data-aos="fade-left")
                  p.mb-0 #[span.txt-color1 ●] Lo más utilizado por las empresas dentro de la promoción es la #[span.txt-color1 publicidad], ya que según la estrategia puede dar alcance a tres objetivos: informar (dar a conocer algo), persuadir (disuadir para que se realice una acción) o recordar (mantener en la mente de los clientes una marca o un producto). Es un mecanismo de comunicación no personal que es pagado por una empresa para presentar y promocionar productos. El reto de la publicidad consiste en llegar a la mayor cantidad de personas al costo más bajo posible.
          .col-12
            .p-4
              .row.align-items-center
                .col-lg-2.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img10.svg', style="width: 80px").mx-auto(data-aos="fade-right")
                .col(data-aos="fade-left")
                  p.mb-0 #[span.txt-color1 ●] Otro aspecto que hace parte de la promoción son las #[span.txt-color1 relaciones públicas], son todas aquellas acciones encaminadas en entablar buenas relaciones con los diversos grupos de interés de la empresa (el Estado, accionistas, periodistas, proveedores, distribuidores, entre otros), con el fin principal de crear buena imagen.
          .col-12.bg-color4
            .p-4
              .row.align-items-center
                .col-lg-2.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img11.svg', style="width: 80px").mx-auto(data-aos="fade-right")
                .col(data-aos="fade-left")
                  p.mb-0 #[span.txt-color1 ●] Finalmente, la #[span.txt-color1 propaganda] es similar a la publicidad, porque consiste en la forma impersonal de estimular la demanda o de influir en la opinión o actitud de un grupo hacia la empresa, a través de una comunicación en medios masivos, la gran diferencia es que usualmente no es pagada por la empresa u organización que se beneficia con ella. Usualmente la propaganda tiene un tinte más asociado a religión, política, opiniones o doctrinas, y no tiene un tinte tan comercial como sí lo tiene la publicidad.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.tarjeta-up
  overflow: hidden
  position: relative
  height: 206px
  .tarjeta-up__content
    position: absolute
    bottom: -106%
    width: 100%
    height: 106%
    padding: 1rem
    transition: bottom 0.7s ease-in-out
    &.bg-1
        background-color: #EBE3F9
        h1, h2, h3, h4, h5, p
          color: $black
    &.bg-2
        background-color: #FFE0F0
    &.bg-3
        background-color: $color-acento-contenido
    &.bg-4
        background-color: $color-acento-botones
  &:hover
    .tarjeta-up__content
      bottom: 0%
</style>
