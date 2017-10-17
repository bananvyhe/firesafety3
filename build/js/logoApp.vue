<template>
  <div class="main">
    <div class="logoContainer">
       
      <div class="logo">
        <div></div>
      </div>

      <div class="brandname">
        <div></div>
      </div>
    </div>

    <div class="audit">
      <br>
    </div> 
  </div>
</template>

<style scoped>
  
  .main {
    $color-6: #b9d6f2;
    lost-flex-container: row;
    background-color: $color-6;
    background: url('../../app/assets/images/main_06.jpg' );
    background-repeat: no-repeat;
    background-color: $color-6;
  }
   
  .logoContainer { 
    $bgsizeB: 15rem;
    $bgsize: 12rem;
    $bgsizeSS:3.4em;
    $bgsizeS: 5em;
    $bgsizeX: 9rem;
    $bgsizeVB: 28rem;
    lost-flex-container: row;
    lost-column: 3/7 2 0 flex; 
    z-index: 2;
    align-items: flex-end;
    
    @custom-media --only-small-screen (width >= 0px) and (width <= 600px);
    @custom-media --only-big-screen (width >= 1024px);

    @media (--only-small-screen) {
      lost-column: 3/8 2 0 flex; 
       .logo {
        lost-column: 1/2 2 0 flex;
        div {
          height: 90px;
        }
      }
      .brandname {
        padding-bottom: 0px;
        lost-column: 1/2 2 0 flex;
        div {
          height: 30px;
          width: 170px;
        }   
      }
    }

    @media (--only-big-screen) {
      lost-column: 3/8 2 0 flex; 
      .logo {
        lost-column: 3/8 2 0 flex; 
        div {
          height: 190px;
        }
      }
      .brandname {
        padding-bottom: 2px;
        lost-column: 5/8 2 0 flex; 
        div {
          height: 45px;
          width: 240px;
        } 
      } 
    }

    .logo { 
      lost-column: 1/2 2 0 flex; 
      div {
        height: 180px;
        background: svg-load('../../app/assets/images/logo-04-01-01.svg' );
        background-position: right bottom;
        background-repeat: no-repeat;
      }
    }

    .brandname {
      lost-column: 1/2 2 0 flex;
      padding-bottom: 4px;
      div {
        background: svg-load('../../app/assets/images/leader.svg' );
        background-repeat: no-repeat;
        height: 40px;
        width: 160px;
        margin-left: -0.4em;
      } 
    }
  }

  .audit {
    @custom-media --only-small-screen (width >= 0px) and (width <= 600px);
    @custom-media --only-big-screen (width >= 1024px);
    @media (--only-big-screen) {
      lost-column: 5/8 2 0 flex; 
      .logo {
      }
    }
    @media (--only-small-screen) {
      lost-column: 5/8 2 0 flex; 
      height: $bgsizeSS;   
    }
    lost-column: 4/7 2 0 flex;
  } 

</style>