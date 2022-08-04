<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span(style="color:#FFFFFF") 5
      h1 Propuesta comercial
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.bg-color23
        p.mb-0 Es el documento que recibe un cliente del vendedor con el que realiza la presentación de la empresa, se referencia la información relevante del producto y se definen las características y condiciones (en caso de que aplique) que tiene la compañía para la venta de sus bienes/servicios.
    p.mb-5 Las propuestas comerciales son muy utilizadas en ventas mayoristas y en ventas empresariales/ institucionales, ya que en ventas al cliente final o al detal (por unidades), el proceso es un poco más informal dado que no suele mediar una propuesta, pues el vendedor presenta su portafolio esperando una aceptación rápida por parte del cliente.
    .row.justify-content-center.bg-color24.mb-5
      .col-lg-10
        .p-4
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img1.png', style="width: 450px").m-auto(data-aos="fade-right")
            .col-lg-7(data-aos="fade-left")
              p La propuesta comercial es importante por varias razones:
              p.mb-0 #[span.txt-color1 ●] Formaliza el proceso comercial, es decir, muestra estructura por parte de la empresa y el vendedor.      
              p.mb-0 #[span.txt-color1 ●] Sirve de soporte para cada una de las partes (empresa-cliente) en el momento de tener inquietudes respecto a lo ofrecido/ adquirido y permite ser una herramienta de comparación entre alternativas por parte del cliente.
    p.mb-5 El responsable de realizar la propuesta comercial es el vendedor, no obstante, en algunas empresas muy organizadas cuentan con plantillas #[i (templates)] o proforma que se crean para estandarizar y facilitar la labor comercial.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hjNS3NwWYWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)(data-aos="fade-right")
    .row.justify-content-center.mb-5
      .col-lg-8.bg-color8
        .p-4
          p.mb-0.text-center Los elementos sugeridos para una propuesta comercial, se muestran en el siguiente recurso.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/img2.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="13%" y="20%" numero="01")
            p.mb-0 Incluir la ciudad, fecha, nombre y cargo de la persona a la cual va dirigida la propuesta comercial.
          .tarjeta.color-acento-botones.p-3(x="31%" y="80%" numero="02")
            p.mb-0 Es importante hacer mención a la empresa, experiencia, casos exitosos, clientes actuales.
          .tarjeta.color-acento-botones.p-3(x="50%" y="20%" numero="03")
            p.mb-0 Se deben referenciar las características del producto, el precio, tiempos de entrega y forma de pago, detallar con el uso de planos, topologías, flujos, imágenes o aquello que permita un mejor entendimiento del bien. De ser posible, exponer varias opciones para que el cliente pueda analizar varios escenarios con miras a la adquisición del producto.
          .tarjeta.color-acento-botones.p-3(x="69%" y="80%" numero="04")
            p.mb-0 Siempre se debe referenciar la vigencia por la cual se sostienen las condiciones indicadas, usualmente se especifican en días calendario. Ejemplo: propuesta válida por 60 días.
          .tarjeta.color-acento-botones.p-3(x="87%" y="20%" numero="05")
            p.mb-0 Especificar nombres y apellidos completos, cargo, número telefónico de contacto y e-mail corporativo (es decir, no el personal, sino el de la empresa).
    p La propuesta debe quedar firmada; así mismo, es recomendable numerar las páginas, incorporar el logo de la empresa como encabezado, revisar muy bien la ortografía. En una #[span.txt-color1 comunicación comercial] el principal objetivo es producir una reacción positiva y tener acercamiento del cliente final a la empresa para motivar la decisión de compra.
    p.mb-5 A continuación, se relacionan las recomendaciones para tener en cuenta al momento de diseñar la propuesta.
    .row
      .col-lg-7
        SlyderF(columnas="col-12")
          .tarjeta.px-4.pb-4
            .row
              .col-12
                .row.justify-content-center
                  .col-5
                    .fig-position
                      img(src='@/assets/curso/tema5/img4.svg', style="width: 70px").m-auto
                .row
                  .col-12.bg-color25
                    .px-3.pb-4.pt-5
                      p.mb-0 #[span.txt-color1 Diseño y presentación:] la parte visual es importante, por lo cual es recomendable que la propuesta de servicios se entregue en una carpeta con el logotipo de la empresa y que esté impresa en papel membretado; además, todos los archivos adjuntos, ya sean gráficos, imágenes u hojas de cálculo, deben tener una buena resolución y ser legibles. 
          .tarjeta.px-4.pb-4
            .row
              .col-12
                .row.justify-content-center
                  .col-5
                    .fig-position
                      img(src='@/assets/curso/tema5/img5.svg', style="width: 70px").m-auto
                .row
                  .col-12.bg-color25
                    .px-4.pb-4.pt-5
                      p.mb-0 #[span.txt-color1 Índice de contenidos:] incluya el índice de contenidos, esto es fundamental para estructurar la información y le permitirá al cliente localizar fácilmente la información dentro de la propuesta.
          .tarjeta.px-4.pb-4
            .row
              .col-12
                .row.justify-content-center
                  .col-auto
                    .fig-position
                      img(src='@/assets/curso/tema5/img6.svg', style="width: 70px").m-auto
                .row
                  .col.bg-color25
                    .px-3.pb-4.pt-5
                      p.mb-0 #[span.txt-color1 Redacción:] se debe utilizar un lenguaje sencillo y comprensible para que todos los implicados en el negocio puedan entenderlo con claridad; destacar los beneficios del producto o servicio en negrita puede ser una gran ayuda para que el prospecto se centre en ellos. El uso de gráficos en esta parte hará que la lectura sea más fácil y agradable.
          .tarjeta.px-4.pb-4
            .row
              .col-12
                .row.justify-content-center
                  .col-auto
                    .fig-position
                      img(src='@/assets/curso/tema5/img7.svg', style="width: 70px").m-auto
                .row
                  .col.bg-color25
                    .px-4.pb-4.pt-5
                      p.mb-0 #[span.txt-color1 Valor del producto:] esto es uno de los factores que más interesan al cliente potencial a la hora de tomar una decisión, por eso no se limite al exponer el valor y las formas de pago. Explicar con detalle, quizá con un gráfico o una hoja de cálculo, lo que incluye el precio.
          .tarjeta.px-4.pb-4
            .row
              .col-12
                .row.justify-content-center
                  .col-auto
                    .fig-position
                      img(src='@/assets/curso/tema5/img8.svg', style="width: 70px").m-auto
                .row
                  .col.bg-color25
                    .px-4.pb-4.pt-5
                      p.mb-0 #[span.txt-color1 Calendario:] estipular fechas de entrega de lo acordado es fundamental para que el cliente potencial confíe, por lo cual no se debe prometer algo que no se va a cumplir. Entregar un cronograma de trabajo bien diseñado dará seriedad y mayor credibilidad.
          .tarjeta.px-4.pb-4
            .row
              .col-12
                .row.justify-content-center
                  .col-auto
                    .fig-position
                      img(src='@/assets/curso/tema5/img9.svg', style="width: 70px").m-auto
                .row
                  .col.bg-color25
                    .px-4.pb-4.pt-5
                      p.mb-0 #[span.txt-color1 Opciones:] presentar más de una opción permitirá que el cliente se sienta libre de elegir la que más le convenga, este tipo de tácticas pueden ayudar a ofrecer productos y servicios de diferentes gamas y demostrar la capacidad de cubrir cualquier escenario.
      .col-lg-5
        figure.bg-color16
          img(src='@/assets/curso/tema5/img3.svg', style="width: 450px").m-auto(data-aos="fade-left")
      
</template>

<script>
export default {
  name: 'Tema5',
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
