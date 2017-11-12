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
    border-bottom: 5px solid #c2ddea;
    $color-6: #b9d6f2;
    lost-flex-container: row;
    background-color: $color-5;
  }
  @media (--only-small-screen) {
    .mainLogoPanel {
      border-bottom: 2px solid #c2ddea;
    }
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
    z-index: 4;
    align-items: flex-end;
    .logo {
      lost-column: 3/8 2 0 flex; 
      div {
        margin-bottom: -24px;
        height: 110px;
        background: svg-load('../../app/assets/images/shieldLogo.svg');
        background-position: right 4px;
        background-repeat: no-repeat;
      }
    }
    .brandname {
      lost-column: 5/8 2 0 flex;
       
      div {
        background: svg-load('../../app/assets/images/lider1.svg' );
        background-repeat: no-repeat;
        background-position: contain; 
        margin: 4px;
        height: 40px;
        width: 160px;
        margin-left: 0.1em;
      } 
    }
    @media (--only-small-screen) {
      lost-column: 3/8 2 0 flex; 
      .logo { lost-column: 1/2 2 0 flex; 
        div {
          background: svg-load('../../app/assets/images/shieldLogo.svg');
          height: 72px;
          margin-bottom: -14px;
          background-position: right; 
          background-repeat: no-repeat;
           
          margin-left: 0.5em;
        }
      }
      .brandname {
        lost-column: 1/2 2 0 flex;
        padding-bottom: 0px;  
        div {
          height: 30px;
          width: 170px;
          margin-left: 0.2em; 
        }   
      }
    }
    @media (--only-big-screen) {
      lost-column: 3/8 2 0 flex; 
      .logo {
        div {
          height: 140px;
          margin-bottom: -40px;
        }
      }
      .brandname {
        div {
          height: 42px;
          width: 120px;
          margin-left: 0.2em;
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