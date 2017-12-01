<template>
  <div class="light">
    <div class="ember">
    
    </div>  
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      
    }
  }
}
</script>

<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.light { 
    box-shadow:
   0 1px 250px rgba(255, 255, 255, .2),
   -23px 0 20px -23px rgba(255, 211, 211, .1),
   23px 0 250px -23px rgba(255, 255, 255, .1),
   0 0 20px rgba(255, 211, 211, .1) inset;
}
.ember {
  /*-webkit-filter: saturate(160%);*/
	height: 300px;
	background-image: url('../../app/assets/images/amber.jpg');
  border-bottom: 8px solid $onyx;
  box-shadow: inset 0px 0px 100px 50px rgba(0,0,0,0.8);

   
}
</style>