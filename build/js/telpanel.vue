<template>
  <div class="telpanel">
    <transition name="fade" appear>
      <div class="tel">
       <nobr>+7(343)382-24-61</nobr>
      </div>    
    </transition>
    <div class="adress">
      ООО "ЛИДЕР", 620135, Россия, г. Екатеринбург, ул. Старых Большевиков, д.54
    </div>
    <div class="mail">
      <nobr>lider-1-00@mail.ru</nobr>
    </div>
  </div>
</template>

<script>
// setTimeout(function(){
//       $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
// }, 1300);

export default {
  data: function () {
    return {
      
    }
  }
}
</script>

<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.telpanel {
  border-bottom: 3px solid #c2ddea;
  display: flex;
  justify-content: space-around;
  div {
    align-self: center;
  }
  @media (--only-big-screen) {
    height: 2.2em;
  }
}
@media (--telpanel-small-screen) {
  .telpanel {
    justify-content: center;  
  }
  .adress {
    display: none;
  }
  .tel {
    padding-right: 7%;
  }
  .mail {
    padding-left: 7%;
  }
}
.tel {
} 
.adress {
}
.mail {
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>