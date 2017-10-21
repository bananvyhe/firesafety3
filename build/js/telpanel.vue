<template>
  <div class="telpanel">
    <transition name="fade" appear>
      <div class="tel">
        +7 (343)382-24-61
      </div>    
    </transition>
    <div class="adress">
      ООО "ЛИДЕР", Россия, г. Екатеринбург, ул. Старых Большевиков, д.54, 620135
    </div>
    <div class="mail">
      lider-1-00@mail.ru
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
  display: flex;
  justify-content: center;
  div {
    padding: 1.8em; 
    @media (--only-big-screen) {
      padding: 2.8em; 
    }
    padding: 0.8em; 
    align-self: center;
  }
  @media (--only-small-screen) {
    .adress {
      display: none;
    }
  }
  @media (--only-big-screen) {
      height: 2.2em;
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