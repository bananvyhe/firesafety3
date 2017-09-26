<template>
  <telpanel>
  <transition name="fade" appear>
    <div class="tel">
      +7 (343)382-24-61
    </div>    
  </transition>
    <div class="adress">
      ООО "ЛИДЕР", Россия, г. Екатеринбург, ул. Старых Большевиков д.54, 620135
    </div>
    <div class="mail">
      lider-1-00@mail.ru
    </div>
  </telpanel>
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
telpanel {
  height: 4vh;
  font-family: "PTSansNar"; 
  font-style: regular;
  font-weight: 400;
  justify-content: center;
  lost-flex-container: row;
  lost-column: 1/1 1 1% flex;

  div {
    text-align: center;
    align-self: center;
  }

  @util border-bottom-radius(0.6em);
}

.tel {
  lost-column: 1/4 3 3% flex;
} 

.adress {
  lost-column: 1/2 3 3% flex;
}

.mail {
  lost-column: 1/4 3 3% flex;
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