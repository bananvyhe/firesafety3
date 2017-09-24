<template>
  <div>
    <div>
      
    </div>
  </div>
</template>

<style scoped>
  div { position: relative;
    z-index: 2;
    $bgsizeB: 25vh;
    $bgsize: 20vh;
    $bgsizeS: 10vh;
    @custom-media --only-small-screen (width >= 0px) and (width <= 600px);
    @custom-media --only-big-screen (width >= 1024px);

    @media (--only-small-screen) {
      div {
        margin-top: -60px; 
        background-size: $bgsizeS auto; 
        height: calc(1.1 * $bgsizeS);  
      }
    }

    @media (--only-big-screen) {
      div {
        margin-top: -100px; 
        background-size: $bgsizeB auto; 
        height: calc(1.1 * $bgsizeB);  
      }
    }

    div {
      lost-column: 1/4 2; 
      margin-top: -80px;
      background: svg-load('../../app/assets/images/logo-01-01.svg' );
      background-size: $bgsize auto;
      background-position:center;
      background-repeat: no-repeat;
      height: calc(1.1 * $bgsize); 
    }

}
</style>