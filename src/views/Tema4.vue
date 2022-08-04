<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span(style="color:#FFFFFF") 4
      h1 Comunicación comercial
    p Es una herramienta donde se apropian los elementos y conceptos básicos del proceso comunicativo de carácter social, para adaptarlos al entorno del mercadeo y las ventas. Los buenos vendedores cada vez se capacitan más y se especializan, entendiendo que para lograr el objetivo: la transacción, deben tenerse en cuenta muchos elementos y uno clave es justamente la comunicación comercial.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Características de la comunicación
    .row.bg-color14.mb-5
      .col-12.px-5
        p Para entender cuáles son las características de la comunicación comercial, es necesario recordar antes cuáles son los principales elementos que intervienen en el proceso comunicacional social, es decir, tener presente que el proceso de venta se da a través de dos seres humanos, donde cada uno es un mundo arraigado a sus principios y comportamientos. 
        p.mb-5 Dado lo anterior, los elementos que intervienen en el proceso de comunicación son:
        .row.justify-content-center
          .col-lg-6
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/img2.svg', alt='Texto que describa la imagen')
              .tarjeta.color-cuarto.p-3(x="50.9%" y="5.6%" numero="")
                p.mb-0 #[b Mensaje]
                p.mb-0 Es lo que se quiere comunicar, es la información que se desea transmitir. En términos comerciales es la presentación del portafolio y la aplicación del argumentario de venta.
              .tarjeta.color-cuarto.p-3(x="50.9%" y="25.6%" numero="")
                p.mb-0 #[b Código]
                p.mb-0 Son los elementos, estilos e incluso reglas que facilitan la comunicación entre el emisor y el receptor ya que son comunes entre ambos.
              .tarjeta.color-cuarto.p-3(x="6.5%" y="90.8%" numero="")
                p.mb-0 #[b Emisor]
                p.mb-0 Es la persona, empresa o entidad que emite el mensaje. Usualmente, es la que inicia la comunicación. En términos comerciales, representa a la empresa (el vendedor).
              .tarjeta.color-cuarto.p-3(x="50.9%" y="90.8%" numero="")
                p.mb-0 #[b Canal]
                p.mb-0 Es el medio a través del cual se emite el mensaje. Los canales pueden variar dependiendo los medios disponibles y el tipo de receptor.
              .tarjeta.color-cuarto.p-3(x="84.4%" y="90.8%" numero="")
                p.mb-0 #[b Receptor]
                p.mb-0 Es la persona o entidad a la que está dirigida la comunicación. Si se hiciera relación al alcance comercial, hace referencia al cliente.
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure.bg-color16
          img(src='@/assets/curso/tema4/img1.png', style="width: 450px").m-auto
      .col-lg-8
        .bg-color15
          .p-4
            .row.justify-content-end
              .col-lg-11
                p.mb-0 Un agente de ventas que trabaja en un Contact Center contacta a un cliente potencial para ofrecerle un seguro. En este caso, el vendedor, es el emisor, el cliente representa el receptor, el canal es el teléfono, el contenido es la propuesta comercial que le presenta y el código son las palabras y tecnicismos que utiliza para transmitir la información de una forma comprensible.
    p.mb-5 A continuación, se referencia una forma de entender las características de la comunicación comercial:
    .row
      .col-md-6.col-lg.tarjeta.bg-color17.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-8
            img(src='@/assets/curso/tema4/img3.svg' alt='AvatarTop')
        p En un proceso de comunicación comercial, el emisor es el vendedor y el #[b receptor es el cliente potencial].
      .col-md-6.col-lg.tarjeta.bg-color18.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-8
            img(src='@/assets/curso/tema4/img4.svg' alt='AvatarTop')
        p Debe tenerse presente que es tan importante la #[b comunicación verbal] como la #[b comunicación no verbal].
      .col-md-6.col-lg.tarjeta.bg-color19.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-8
            img(src='@/assets/curso/tema4/img5.svg' alt='AvatarTop')
        p El lenguaje que emite el emisor debe basarse en #[b códigos entendibles para el receptor]. Se debe prestar especial atención a los tecnicismos.
      .col-md-6.col-lg.tarjeta.bg-color20.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-8
            img(src='@/assets/curso/tema4/img6.svg' alt='AvatarTop')
        p Aplicar la #[b empatía], permitirá tener un mejor resultado, ponerse en el lugar del otro, es un buen principio para entablar una comunicación comercial.
      .col-md-6.col-lg.tarjeta.bg-color21.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-8
            img(src='@/assets/curso/tema4/img7.svg' alt='AvatarTop')
        p Una buena comunicación comercial debe permitir llegar al #[b cierre de la venta].
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Aplicabilidad
    p.mb-5 La comunicación comercial tiene aplicabilidad en todos los momentos de la venta, dado que mientras exista la relación del cliente con la empresa siempre habrá oportunidad de contacto; es por ello que se debe tener presente que durante todo el ciclo de venta se aplica el proceso comunicativo. A continuación, se presentan ejemplos en cada una de las etapas de este ciclo:
    .row.bg-color22.justify-content-center
      .col-10.px-5
        PasosA.color-primario(tipo="n")
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              p #[b Preventa]
              p La comunicación comercial se da desde el momento en que el vendedor está generando contacto con el cliente prospecto, allí el tacto, el respeto y asertividad son claves.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img8.svg', style="width: 280px").m-auto
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img9.svg', style="width: 280px").m-auto
            .col-lg-7
              p #[b Venta]
              p La comunicación comercial se tiene cuando el cliente manifiesta las inquietudes, inseguridad y validaciones a través de cualquier medio (oral o escrito), el rol de un buen vendedor, es entender y canalizar sus dudas de la mejor manera posible.
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              p #[b Posventa]
              p Tiene sentido una buena comunicación, para preservar la relación entre el cliente y la empresa. En esta etapa del ciclo, la responsabilidad no cae solo en el vendedor, sino también en todos los colaboradores de la compañía.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img10.svg', style="width: 280px").m-auto
      
</template>

<script>
export default {
  name: 'Tema4',
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
