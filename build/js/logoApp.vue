<template>
  <div class="main">
    <div class="logoContainer">
      <div class="logo">
      </div>
      <div class="brandname">
      </div>
    </div>
    <div class="audit">
      sefsef<br><br>45453456
    </div> 
  </div>
</template>

<style scoped>
  .main {
    lost-flex-container: row;
  }
   
  .logoContainer {  
    lost-flex-container: row;
    position: relative;
    lost-column: 2/4 2 0 flex; 
    z-index: 2;
    $bgsizeB: 25vh;
    $bgsize: 20vh;
    $bgsizeS: 10vh;
    @custom-media --only-small-screen (width >= 0px) and (width <= 600px);
    @custom-media --only-big-screen (width >= 1024px);

    @media (--only-small-screen) {
      .logo {
        margin-top: -60px; 
        background-size: $bgsizeS auto; 
        height: calc(1.1 * $bgsizeS);  
      }
    }

    @media (--only-big-screen) {
      .logo {
        margin-top: -100px; 
        background-size: $bgsizeB auto; 
        height: calc(1.1 * $bgsizeB);  
      }
    }

    .logo {
      lost-column: 1/2 2 0 flex; 
      margin-top: -85px;
      background: svg-load('../../app/assets/images/logo-01-01.svg' );
      background-size: $bgsize auto;
      background-position:center;
      background-repeat: no-repeat;
      height: calc(1.1 * $bgsize); 
    }
    .brandname { 
      lost-column: 1/2 2 0 flex;
      background: svg-load('../../app/assets/images/leader.svg' );
      background-size: $bgsize auto;
      background-position:center;
      background-repeat: no-repeat;
      height: calc(0.3 * $bgsize); 
    }
  }

  .audit {
    lost-column: 2/4 2 0 flex;
  } 

</style>