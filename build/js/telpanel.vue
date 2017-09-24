<template>
  <telpanel>
    <div class="tel">
      +7 (343)382-24-61
    </div>
    <div class="adress">
      ООО "ЛИДЕР", Россия, г. Екатеринбург, ул. Старых Большевиков д.54, 620135
    </div>
    <div class="mail">
      lider-1-00@mail.ru
    </div>
  </telpanel>
</template>

<script>
setTimeout(function(){
      $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
}, 1300);

export default {
  data: function () {
    return {
      
    }
  }
}
</script>

<style scoped>
telpanel {
  height: 3vh;
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
  visibility: hidden;
} 

.adress {
  lost-column: 1/2 3 3% flex;
}

.mail {
  lost-column: 1/4 3 3% flex;
}
  
</style>