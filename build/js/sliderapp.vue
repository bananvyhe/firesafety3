<template >
  <div 
    @mouseleave = "hoverslide = false"
    @mouseenter = "hoverslide = true">
    <el-carousel 
      v-bind:interval="interval" 
      @change="change" 
      v-bind="{height: visota.value + 'px', 
      'indicator-position': hider}">
      <el-carousel-item  class="sliderText" v-for="(item, index) in items" :key='index'>
          <div :class="item.class" class="mainFormat">
            
            <div class ="infoBlock">
               
                <transition-group  name='slide' tag="ul">
                  <li 
                    :key='index' 
                    class="titlefirst" 
                    v-show="slideAnimRestart"
                    @click="slideAnimRestart = false">{{item.title}}

                  </li> 
                 
                  <li 
                    :key='item.title' 
                    class="titlesecond" 
                    v-show="slideAnimRestart2"
                    @click="slideAnimRestart2 = false">{{item.text}}
                  </li>
                </transition-group>
              
            </div>
            <br>
           </div>
      </el-carousel-item>
    </el-carousel>
    <div 
      v-show="switcher" class="switcher">
      hoverslide: {{hoverslide}}
      <br>addhide: {{addhide}}
      <br>slideAnimRestart: {{slideAnimRestart}} 
      <br>slideAnimRestart2: {{slideAnimRestart2}}
      <button 
        v-on:click="slideAnimRestart2 = false">
        sdasdsd
      </button>  
    </div>
  </div>
</template>
 
<script>

  let vis = {value: '30'};
  function resize() {
    if (window.matchMedia('only screen and (max-width: 600px)').matches) {
      console.log('under 600 pixels');
      vis.value = '130';
    } else if (window.matchMedia('only screen and (min-width: 601px) and ' + '(max-width: 1024px)').matches) {
      console.log('between 601 and 1024 pixels');
      vis.value = '220';                      
    } else {
      console.log('higher than 1024 pixels');
      vis.value = '300'; 
    }
  }

  window.addEventListener('resize', resize, false);
  resize();
  let divHeight = {value:  ''};
  export default {
    data: function () {
      return {
        divHeight: divHeight,
        hoverslide: false,
        interval: 3000,
        slideAnimRestart: '',
        slideAnimRestart2: '',
        animfade: 'fade',
        switcher: true,
        visota: vis,
        hider: '',
        items: [
          { title: 'Комплексные системы безопасности для вашей недвижимости', text: 'Монтаж, обслуживание, проектирование, ремонт, испытание, обучение.', class: 'onediv' },
          { title: 'Пожарная безопасность', text: 'Разработка, установка, обслуживание, ремонт, обучение, испытание и пусконал­­адка.', class: 'twodiv' },
          { title: 'Видеонаблюдение', text: 'Монтаж, обслуживание, проектирование, ремонт.', class: 'threediv' },
          { title: 'Системы контроля и управления доступом', text: 'Монтаж, обслуживание, проектирование, ремонт.', class: 'fourdiv' },
          { title: 'Деятельность лицензирована', text: 'Деятельность лицензирована Министерством Российской Федерации по делам гражданской обороны, чрезвычайным ситуациям и ликвидации посмледствий стихийных бедствий за №66-Б/00124 от 23 июня 2009 года ', class: 'fivediv' }  
        ] 
      }
    },
    computed: {
      //отключение индикации слайдов при маленьких разрешениях
      hideind: function() {
        if (this.visota.value <= 130){
          return this.hider = 'none';
        }else{
          return this.hider = '';
        }
      },
      //при ложном ховерслайд, запускать таймаут начала анимации фейд-аут
      addhide: function(){
        var vm = this;
        if (vm.hoverslide) {
          console.log('freeze animation');
        }else{
          console.log('begin timer fade-out');
          setTimeout(function(){
          if (vm.hoverslide == '0') {
            vm.slideAnimRestart = false;
            vm.slideAnimRestart2 = false;  
          }
        }, vm.interval * 0.8);
        }
      } 
    },
    //реакция, после смены слайда
    methods: {
      change: function(){
        var vm = this;
         //запуск таймаута анимации фейд-ин
        setTimeout(function(){
          vm.slideAnimRestart = true;
          vm.slideAnimRestart2 = true;
        },this.interval * 0.2);

        console.log('slide listed and begin timeout fade-in animation');
        //при ложном ховерслайд, запускать таймаут начала анимации фейд-аут
        setTimeout(function(){
          if (vm.hoverslide == '0') {
            vm.slideAnimRestart = false;
          }
        }, vm.interval * 0.8);
        setTimeout(function(){
          if (vm.hoverslide == '0') {
            vm.slideAnimRestart2 = false; 
          }
        }, vm.interval * 0.6);
        
      }
    } 
  }

</script>

<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
  .switcher {
    padding-left: 20em;
  }
  .slide-enter {
    opacity: 0; 
  }
  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    transition: opacity .5s; position: absolute;
  }
  .slide-move {
    transition: transform .5s;   
  }
  .slide-leave-to {
    opacity: 0;
  }
  .slide-enter-active, .slide-leave-active {
  transition: all 1s;
}

  @keyframes slide-out {
   from {
    transform: translateY(0px);
    }
    to {
    transform: translateY(20px);
    }
  }

  .mainFormat {
    display: flex;
  }
  .infoBlock {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 50%;
    align-self: center;
  }
  .titlefirst { display: inline-block;
    background-color: #dad;
    padding-left: 15%;  
  }
  .titlesecond {
    background-color: #ada;
    padding-top: 0.2em;
    padding-left: 15%;
  }
  .onediv, .twodiv, .threediv, .fourdiv, .fivediv {
    height: 100%;
    background-repeat:no-repeat;
    background-size: cover;
  }
  .onediv {
    background-position: right center;
    /*filter: blur(4px);*/
    background-image: url(../../app/assets/images/1.jpg);
    padding-left: 5%;
  }
  .twodiv {
    background-position: right bottom;
    background-image: url(../../app/assets/images/5.jpg);
    padding-left: 15%;
  }
  .threediv {
    background-position: center bottom;
    background-image: url(../../app/assets/images/3.jpg);
    color: $color-1;
    padding-left: 5%;
  }
  .fourdiv {
    background-position: right bottom;
    background-image: url(../../app/assets/images/2.jpg);
    padding-left: 20%;
    color: $color-1;
    .infoBlock {
      text-shadow: 
        -0   -1px 1px #353535,
         0   -1px 1px #353535,
        -0    1px 1px #353535,
         0    1px 1px #353535,
        -1px -0   1px #353535,
         1px -0   1px #353535,
        -1px  0   1px #353535,
         1px  0   1px #353535,
        -1px -1px 1px #353535,
         1px -1px 1px #353535,
        -1px  1px 1px #353535,
         1px  1px 1px #353535,
        -1px -1px 1px #353535,
         1px -1px 1px #353535,
        -1px  1px 1px #353535,
         1px  1px 1px #353535;
    }
  } 
  .fivediv {
    background-position: right bottom;
    background-image: url(../../app/assets/images/4.jpg);
    color: $color-1;
    .infoBlock {
      color: #000;
      text-shadow: 
        -0   -1px 0   #FFFFFF,
         0   -1px 0   #FFFFFF,
        -0    1px 0   #FFFFFF,
         0    1px 0   #FFFFFF,
        -1px -0   0   #FFFFFF,
         1px -0   0   #FFFFFF,
        -1px  0   0   #FFFFFF,
         1px  0   0   #FFFFFF,
        -1px -1px 0   #FFFFFF,
         1px -1px 0   #FFFFFF,
        -1px  1px 0   #FFFFFF,
         1px  1px 0   #FFFFFF,
        -1px -1px 0   #FFFFFF,
         1px -1px 0   #FFFFFF,
        -1px  1px 0   #FFFFFF,
         1px  1px 0   #FFFFFF;
    }
  }   
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 2em;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 
 
 /* @keyframes slide-out {
    0% {
      transform: translateY(0px); 
      opacity: 1;
    }
    10% {
      filter: blur(0);
    }
    100% {
       transform: translateY(100px); 
      filter: blur(40px);
      opacity: 0;
    }
  }*/

  .fade-move {
    transition: transform 0.5s;
  }
   
   
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

</style>