<template >
  <div class="sliderapp" 
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
                <transition name='slide' appear>
                  <div 
                    :key='index' 
                    class="titlefirst" 
                    v-show="slideAnimRestart"
                    @click="slideAnimRestart = false">{{item.title}}
                  </div> 
                </transition>
                <transition name='fade' :duration="4000" appear> 
                  <div 
                    :key='item.title' 
                    class="titlesecond" 
                    v-show="slideAnimRestart2"
                    @click="slideAnimRestart2 = false">{{item.text}}
                  </div>
                </transition>
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
       <br>hideind: {{hideind}}
    </div>
  </div>
</template>
 
<script>

  let vis = {value: '30'};
  function resize() {
    if (window.matchMedia('only screen and (max-width: 600px)').matches) {
      console.log('under 600 pixels');
      vis.value = '130';
    } else if (window.matchMedia('only screen and (min-width: 601px) and ' + '(max-width: 1423px)').matches) {
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
        firsttitledelay: 0.8,
        secondtitledelay: 0.65,
        divHeight: divHeight,
        hoverslide: false,
        interval: 10000,
        slideAnimRestart: '',
        slideAnimRestart2: '',
        animfade: 'fade',
        switcher: false,
        visota: vis,
        hider: '',
        items: [
          { title: 'Комплексные системы безопасности для вашей недвижимости', text: 'Монтаж, обслуживание, проектирование, ремонт, испытание, обучение.', class: 'onediv' },
          { title: 'Пожарная безопасность', text: 'Разработка, установка, обслуживание, ремонт, обучение, испытание и пусконал­­адка.', class: 'twodiv' },
          { title: 'Видеонаблюдение', text: 'Монтаж, обслуживание, проектирование, ремонт.', class: 'threediv' },
          { title: 'Системы контроля и управления доступом', text: 'Монтаж, обслуживание, проектирование, ремонт.', class: 'fourdiv' },
          { title: 'Деятельность лицензирована', text: 'Деятельность лицензирована Министерством Российской Федерации по делам гражданской обороны, чрезвычайным ситуациям и ликвидации последствий стихийных бедствий за №66-Б/00124 от 23 июня 2009 года ', class: 'fivediv' }  
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
            }
          }, vm.interval * this.firsttitledelay);
          setTimeout(function(){
            if (vm.hoverslide == '0') {
              vm.slideAnimRestart2 = false;   
            }
          }, vm.interval * this.secondtitledelay);  
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
        },this.interval * 0.1);
        setTimeout(function(){
          vm.slideAnimRestart2 = true;
        },this.interval * 0.1);
        
        console.log('slide listed and begin timeout fade-in animation');
        //при ложном ховерслайд, запускать таймаут начала анимации фейд-аут
        setTimeout(function(){
          if (vm.hoverslide == '0') {
            vm.slideAnimRestart = false;
          }
        }, vm.interval * this.firsttitledelay);
        setTimeout(function(){
          if (vm.hoverslide == '0') {
            vm.slideAnimRestart2 = false; 
          }
        }, vm.interval * this.secondtitledelay);
      }
    } 
  }

</script>

<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
  .switcher {
    padding-left: 10em;
  }
  .slide-enter-active {
  animation: slide-in-blurred-left 0.25s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }
  @keyframes slide-in-blurred-left {
    0% {
      transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      transform-origin: 100% 50%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateX(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }
  .slide-leave-active {
    animation: slide-out-blurred-right 0.25s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
  }
  @keyframes slide-out-blurred-right {
    0% {
      transform: translateX(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1000px) scaleX(2) scaleY(0.2);
      transform-origin: 0% 50%;
      filter: blur(40px);
      opacity: 0;
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    animation: fade 3.2s;
  }
  .fade-leave-active {
    transition: opacity 1.8s;
    opacity: 0;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .mainFormat {
    display: flex;
  }
  .infoBlock {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-self: center;
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
    color: $color-1;padding-left: 10%;
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
</style>