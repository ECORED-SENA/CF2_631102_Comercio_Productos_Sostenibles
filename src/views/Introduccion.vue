<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span(style="color:#FFFFFF")
          i.fas.fa-info
      h1 Introducción
    p.mb-5 En este componente de formación se abordarán los conceptos para realizar el mercadeo y venta de productos, desarrollando los elementos clave de producto, precio, plaza y la comunicación como la forma en la que se da a conocer la marca y sus productos, además se tratará el tema de la propuesta comercial la cual constituye el medio formal para presentar al cliente interesado las características y condiciones que se establecen para realizar la venta. Se invita a revisar el siguiente video para iniciar el desarrollo de este componente formativo.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MtH-jCpPxe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
