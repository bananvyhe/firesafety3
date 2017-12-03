<template>
  <div class=" box-shadow-preview">
    <div class="ember">
      <div class="centered">
        <h1>Аудит пожарной безопасности бесплатно*!</h1>
        <div>
          * При заказе одной из услуг по монтажу или обслуживанию систем безопастности
        </div>
        <el-button type="primary" @click="submitForm('ruleForm')">Отправить</el-button>
      </div>
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
/*.light { 
  box-shadow:
   0 1px 150px rgba(255, 255, 255, .2),
   -23px 0 20px -23px rgba(255, 211, 211, .1),
   23px 0 250px -23px rgba(255, 255, 255, .1),
   0 0 20px rgba(255, 211, 211, .1) inset;
}*/
.ember {
 /* -webkit-filter: saturate(160%);*/
	height: 350px;
	background-image: url('../../app/assets/images/amber.jpg');
  border-bottom: 8px solid $onyx;
  box-shadow: inset 0px 0px 50px 50px rgba(0,0,0,0.5);
  color: $advantageFontColor;
  @util clearfix;
  text-align: center;
  display: flex;
  justify-content: center;
  .centered {
    filter: drop-shadow(0 0 3px rgba(0,0,0,1));  
    align-self: center;
    div {
      padding-bottom: 10px;
    }
  }
}
.box-shadow-preview{ 
    position: relative; 
    background-color: #FFFFFF; 
    border-radius: 40px; 
    box-shadow: 
      0 1px 250px rgba(255, 255, 255, .2),
      -23px 0 20px -23px rgba(255, 211, 211, .1),
      23px 0 250px -23px rgba(255, 255, 255, .1),
      0 0 20px rgba(255, 211, 211, .1)  inset;
} 
/*.box-shadow-preview:before{ 
    content: ""; 
    z-index: -1; 
    position: absolute; 
    width: 95%; 
    top: 50px; 
    right: 0px; 
    bottom: 50px; 
    left: 2px; 
    border-radius: 26px; 
    transform: rotate(0deg) skew(0deg); 
    box-shadow: 0px 0px 250px -28px rgba(255, 255, 255, .4); 
}*/
</style>