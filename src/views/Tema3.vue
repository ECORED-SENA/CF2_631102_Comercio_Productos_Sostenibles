<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color:#FFFFFF") 3
      h1 #[i Social Media Marketing]
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El social media marketing es la acción de crear contenido para promocionar un negocio y productos en varias redes sociales como Facebook, Instagram y Twitter. El material creado debe ser único y adaptarse a la plataforma en la que se comparte para ayudar a impulsar las conversiones y aumentar el conocimiento de marca (Santos, 2020).
    .row.bg-color12
      .col-12.px-5
        .row.mb-3
          .col-lg-6.bg-color7
            .p-3
              .row.align-items-center
                .col-2
                .col-auto
                  p #[b Redes Sociales]
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        p.mb-5 En la actualidad es una de las estrategias de marketing digital más usadas a nivel mundial obteniendo resultados positivos en corto tiempo con una inversión mínima, pues logra llegar a un gran número de posibles clientes potenciales de forma masiva, pero siempre teniendo en cuenta los gustos y preferencias de estos.
        .row.align-items-center.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img1.svg', style="width: 350px").m-auto
          .col-lg-8
            .p-4.bg-white
              p.mb-0 Para lograr el buen resultado del que se habló anteriormente, es necesario tener muy claro a qué público se quiere llegar, cuáles son las características y necesidades del prototipo de cliente ideal para establecer la red más apropiada en la que se logre la interacción entre el cliente y la marca.
        p.text-center.mb-5 #[b A continuación, se relacionan las estadísticas y aspectos más importantes de algunas de las redes sociales:]
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 2]
      p.mb-0 #[i Estadísticas y aspectos importantes de las redes sociales]
    .tabla-a.color-acento-botones
      table
        caption Nota. Tomada de Santos (2020)
        thead
          tr
            th
            th
              p.mb-0.text-white Facebook
            th
              p.mb-0.text-white Twitter
            th
              p.mb-0.text-white Instagram
            th
              p.mb-0.text-white Youtube
            th
              p.mb-0.text-white Snapchat
        tbody
          tr
            td(style="background-color: #FFFAE7")
              p.mb-0 #[b Usuarios]
            td 2.449 millones
            td(style="background-color: #FFE0F0") 340 millones
            td 1.000 millones
            td(style="background-color: #FFE0F0") 2.000 millones
            td 381 millones
          tr
            td(style="background-color: #FFFAE7")
              p.mb-0 #[b Audiencia]
            td
            td(style="background-color: #FFE0F0")
            td
            td(style="background-color: #FFE0F0")
            td
          tr
            td(style="background-color: #FFFAE7")
              p.mb-0 #[b Impacto]
            td
            td(style="background-color: #FFE0F0")
            td
            td(style="background-color: #FFE0F0")
            td
          tr
            td(style="background-color: #FFFAE7")
              p.mb-0 #[b Ideal]
            td
            td(style="background-color: #FFE0F0")
            td
            td(style="background-color: #FFE0F0")
            td
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Beneficios del #[i social media marketing]
    p.mb-5 En el siguiente video se profundizarán los beneficios del uso de redes sociales:
    .tarjeta.color-terciario.p-4.p-md-5
      .row.justify-content-around.align-items-center
        .col-md.col-lg-6.mb-4.mb-md-0
          .titulo-segundo.color-acento-contenido
            h3 Beneficios del #[i social media marketing]
          p ¡El #[i social media marketing] contiene los siguientes beneficios para aumentar tus ventas, conozcámoslos!
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
        .col-8.col-sm-6.col-md-4
          img(src="@/assets/curso/tema3/img3.svg")
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Pasos para implementar una estrategia de #[i social media marketing]
    p.mb-5 A continuación, se hará un resumen del paso a paso que se debe tener en cuenta para que la estrategia de social media marketing tenga éxito:
    .row.bg-color13
      .col-12.px-5
        PasosA.color-primario(tipo="n")
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              p #[b Identificar el prototipo de cliente ideal]
              p Primero se debe tener muy claro cuáles son las características y cualidades del cliente ideal, para abordar de manera adecuada sus necesidades e intereses.
              p #[b Por ejemplo], si la empresa vende tenis deportivos de moda, debemos saber que el público objetivo está clasificado en jóvenes de una edad entre los 15 a los 30 años, que tengan preferencia por la moda y la ropa deportiva. Al tener identificadas las características similares de los clientes ideales, se deben crear contenidos atractivos acorde a sus intereses.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img2.png', style="width: 280px").m-auto
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img3.png', style="width: 280px").m-auto
            .col-lg-7
              p #[b Elegir las redes sociales]
              p Primero se debe tener muy claro cuáles son las características y cualidades del cliente ideal, para abordar de manera adecuada sus necesidades e intereses.
              p Para realizar esta selección se debe tener bien identificado el prototipo de cliente ideal, pues de ahí se podrá tomar información necesaria para determinar en qué tipo de red pasan mayor tiempo.
              p Sigamos con el ejemplo anterior, los jóvenes entre los 15 y 30 años con preferencia por la moda y la ropa deportiva, por lo general usan con frecuencia redes como Instagram, Facebook y Twitter.
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              p #[b Crear contenido atractivo]
              p El contenido que se publica en las redes sociales debe causar el interés de la audiencia, las publicaciones deben contener imágenes impactantes, videos en vivo que muestren experiencias buenas con los productos, consejos útiles, que llamen la atención del público y sea compartido miles de veces.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img4.png', style="width: 280px").m-auto
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img5.png', style="width: 280px").m-auto
            .col-lg-7
              p #[b Escoger un horario ideal para las publicaciones]
              p Es importante determinar las horas de mayor audiencia o interacción en las redes sociales, para ello es necesario publicar contenido de calidad y estar pendientes de los picos de mayor receptividad que serán aquellas horas en las que hubo mayor cantidad de comentarios y me gusta.
              p De esta manera, podremos tener un aproximado de las horas ideales para realizar la publicación, se debe tener un equilibrio entre el número de publicaciones, no es recomendable publicar muy poco, podría pasar que lo olviden los seguidores y, de igual manera, pasaría si se publica demasiado se tornaría molesto para tus seguidores.
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              p #[b Analizar y evaluar los resultados]
              p Una vez puesta en marcha la estrategia publicitaria se debe analizar si la estrategia fue la adecuada para alcanzar los objetivos trazados inicialmente, por lo que es necesario hacer un seguimiento a través de una serie de herramientas de monitoreo que ofrecen las redes sociales, las cuales nos muestran los resultados bien sean positivos o negativos.
              p #[b Algunas de las herramientas de monitoreo o medición son:]
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #529AD9")
                  | Nivel de participación.
                li 
                  i.fas.fa-check(style="color: #529AD9")
                  | Me gusta.
                li 
                  i.fas.fa-check(style="color: #529AD9")
                  | Seguidores.
                li 
                  i.fas.fa-check(style="color: #529AD9")
                  | Recursos compartidos.
                li 
                  i.fas.fa-check(style="color: #529AD9")
                  | Vistas de video.
                li 
                  i.fas.fa-check(style="color: #529AD9")
                  | Visitas al perfil.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img6.png', style="width: 280px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
