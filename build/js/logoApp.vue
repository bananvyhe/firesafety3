<template>
  <div class="mainLogoPanel">
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
@import "../../app/assets/stylesheets/postcss/variables";
  .mainLogoPanel { 
    $color-6: #b9d6f2;
    lost-flex-container: row;
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
    .logo { 
      lost-column: 1/2 2 0 flex; 
      div {
        height: 120px;
        background: svg-load('../../app/assets/images/logo-04-01-01.svg');
        background-position: right 2px;
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
    @media (--only-small-screen) {
      lost-column: 3/8 2 0 flex; 
      .logo {
        div {
        height: 70px;
        background-position: right 1px;
        }
      }
      .brandname {
        padding-bottom: 2px;  
        div {
          height: 30px;
          width: 170px;
          margin-left: -0.2em;
        }   
      }
    }
    @media (--only-big-screen) {
      lost-column: 3/8 2 0 flex; 
      .logo {
        div {
          height: 180px;
        }
      }
      .brandname {
        div {
          height: 45px;
          width: 240px;
          margin-left: -0.8em;
        } 
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