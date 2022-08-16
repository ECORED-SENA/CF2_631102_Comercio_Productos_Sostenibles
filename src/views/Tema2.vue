<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span(style="color:#FFFFFF") 2
      h1 Omnicanalidad
    p.mb-5(data-aos="fade-right") Las estrategias de venta omnicanalidad buscan que el cliente encuentre la forma de comprar que más se ajuste a su estilo de vida por diferentes canales o plataformas digitales de forma sincrónica. Lo importante es mejorar la experiencia y beneficios del consumidor, por este motivo, para esta estrategia es importante contar con los datos constantes del cliente, no importa donde esté y qué tecnología esté utilizando el cliente para aplicar una estrategia de Omnicanalidad.
    .row.mb-5(data-aos="fade-right")
      .col-lg.mb-4.mb-lg-0
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          h4.mb-2 Un ejemplo básico para definir lo que es la omnicanalidad es cuando un usuario mantiene comunicación con una empresa a través de sus redes sociales, pero al mismo tiempo tiene la disponibilidad de enviar un correo electrónico y también visitar su sucursal física.
          span - Samsing, 2021.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 180px").m-auto
    .row.bg-color5
      .col-12.p-5
        .row.justify-content-center.mb-5
          .col-lg-10
            p.mb-0 De acuerdo con Carolina Samsing, “Una cosa es analizar la teoría y la práctica de la experiencia del cliente multicanal, y otra cosa totalmente diferente es verla en acción de la mano de empresas brillantes que ya la implementan en sus estrategias”.
        .row.justify-content-center.mb-5
          .col-lg-6.bg-white
            .p-4
              p.text-center.mb-0 A continuación, el top 12 de las empresas más reconocidas:
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 Empresas con estrategias Omnicanalidad.
            #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
              .carousel-indicators
                button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='8' aria-label='Slide 9')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='9' aria-label='Slide 10')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='10' aria-label='Slide 11')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='11' aria-label='Slide 12')
              .carousel-inner.mb-5
                .carousel-item.active
                  figure
                    img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img4.jpg', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img7.jpg', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img8.png', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img9.png', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img11.jpg', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img12.jpg', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
                .carousel-item
                  figure
                    img(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')
                    figcaption.bg-color6 Nota: Samsing, 2021.
              button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
                span.carousel-control-prev-icon(aria-hidden='true')
                span.visually-hidden Previous
              button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
                span.carousel-control-next-icon(aria-hidden='true')
                span.visually-hidden Next
            p Para complementar el concepto de omnicanalidad, lo invitamos a visitar el video Omnicanalidad & Logística en concepto logístico, el cual se encuentra en el material complementario.
    .row.mb-3(data-aos="fade-right")
      .col-lg-6.bg-color7
        .p-3
          .row.align-items-center
            .col-2
            .col-auto
              h3.text-center Beneficios de la omnicanalidad
    p.mb-5 Para desarrollar estrategias de omnicanalidad, es importante manejar diferentes herramientas tecnológicas y coordinar el manejo de la información que será enviada logrando una relación permanente cliente-marca. Seguidamente, los principales beneficios que se obtienen con la omnicanalidad son:
    .row.mb-5
      .col-md-6.col-lg.tarjeta.bg-color8.p-4
        .row.justify-content-center.mb-3(data-aos="fade-right")
          .col-4
            img(src='@/assets/curso/tema2/img3.svg' alt='AvatarTop')(data-aos="fade-right")
        h5 #[i Branding]
        p La marca se da a conocer por los diferentes canales de comunicación.
      .col-md-6.col-lg.tarjeta.bg-color9.p-4
        .row.justify-content-center.mb-3(data-aos="fade-right")
          .col-4
            img(src='@/assets/curso/tema2/img4.svg' alt='AvatarTop')
        p.mb-0 #[b Productividad]
        p Permite el control de las acciones y movimientos de la empresa hacia los servicios que presta a los consumidores.
      .col-md-6.col-lg.tarjeta.bg-color10.p-4
        .row.justify-content-center.mb-3(data-aos="fade-right")
          .col-4
            img(src='@/assets/curso/tema2/img5.svg' alt='AvatarTop')
        p.mb-0 #[b Mayores conversiones]
        p El cliente puede definir si quiere compras en la tienda física, <em>e-commerce</em> o redes sociales.
      .col-md-6.col-lg.tarjeta.bg-color11.p-4
        .row.justify-content-center.mb-3(data-aos="fade-right")
          .col-4
            img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
        p.mb-0 #[b Recopilación de información]
        p Tener los datos de los clientes permite realizar seguimiento a sus preferencias de compras.
    p.text-center.mb-5 En la siguiente imagen se pueden observar los consejos a tener en cuenta en el momento que es utilizada la omnicanalidad.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4]. Consejos para la Omnicanalidad
        figure.mb-5
          img(src='@/assets/curso/tema2/img7.svg', style="width: 1050px").m-auto
        p.mb-5 Es así como el proceso para integrar diferentes canales, tanto físicos como digitales, genera una experiencia no fragmentada de compra a los consumidores y esto permite que la experiencia del cliente empiece en una plataforma y continúe en otros canales sin que se pierda la comunicación anterior. Por lo siguiente podemos nombrar los canales que son más utilizados en la omnicanalidad:
        TabsB.color-acento-botones
          .py-4.py-md-5(titulo="Redes sociales" :icono="require('@/assets/curso/tema2/img8.svg')")
            .row.justify-content-center
              .col-10
                figure.mb-5
                  img(src='@/assets/curso/tema2/img14.png', style="width: 1050px").m-auto
                p.mb-0 Permite conectividad 24/7, interacción en el momento real con el cliente, obtener información y almacenar datos importantes para la empresa.
          .py-4.py-md-5(titulo="Compras en línea" :icono="require('@/assets/curso/tema2/img9.svg')")
             .row.justify-content-center
              .col-10
                figure.mb-5
                  img(src='@/assets/curso/tema2/img15.png', style="width: 1050px").m-auto
                p.mb-0 Permite crear experiencias casi personalizadas, definir preferencias y gustos de los consumidores llegando a gran número de segmentos que están permanentemente conectados en internet.
          .py-4.py-md-5(titulo="Autoservicio digital" :icono="require('@/assets/curso/tema2/img10.svg')")
             .row.justify-content-center
              .col-10
                figure.mb-5
                  img(src='@/assets/curso/tema2/img16.png', style="width: 1050px").m-auto
                p.mb-0 En la era digital, la inteligencia artificial juega un papel muy importante para este tipo de compras porque permite utilizar una red de preguntas. Utilizar #[i chatbots] o un agente virtual para que les brinde la información requerida de productos o servicios.
          .py-4.py-md-5(titulo="Teléfonos inteligentes" :icono="require('@/assets/curso/tema2/img11.svg')")
             .row.justify-content-center
              .col-10
                figure.mb-5
                  img(src='@/assets/curso/tema2/img17.png', style="width: 1050px").m-auto
                p.mb-0 Le permiten al cliente obtener información rápida del portafolio de productos o servicios que ofrece la empresa, su horario de atención, productos disponibles, listas de precios y formas de pago el cual  se puede realizar por mensajes, fotografías, videos, códigos QR. De esta manera el cliente tiene un acceso fácil a la información.

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
