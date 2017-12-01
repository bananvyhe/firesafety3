<template>
  <div class="ember">
    
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
.ember {
  /*-webkit-filter: saturate(160%);*/
	height: 300px;
	background-image: url('../../app/assets/images/amber.jpg');
  border-bottom: 8px solid $onyx;
  box-shadow: inset 0px 0px 100px 50px rgba(0,0,0,0.8);

  /*==================================================
 * Effect 8
 * ===============================================*/
.effect8
  {
      position:relative;
      box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
  .effect8:before, .effect8:after
  {
    content:"";
      position:absolute; 
      z-index:-1;
      box-shadow:0 0 20px rgba(0,0,0,0.8);
      top:10px;
      bottom:10px;
      left:0;
      right:0;
      border-radius:100px / 10px;
  } 
  .effect8:after
  {
      right:10px; 
      left:auto; 
      transform:skew(8deg) rotate(3deg);
  }
}
</style>