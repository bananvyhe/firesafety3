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
            <div v-show="switcher">hoverslide: {{hoverslide}}<br>addhide: {{addhide}}<br>hideind: {{hideind}}  
            </div>
            <div class ="infoBlock">
              <transition  name='slide-left' appear>
                <div class="titlefirst" v-show="slideAnimRestart" >{{item.title}}</div> 
              </transition>
              <transition  name='fade-in' appear>
                <div class="titlesecond" v-show="slideAnimRestart">{{item.text}}</div>
              </transition>
            </div>
            <br>
           </div>
      </el-carousel-item>
    </el-carousel>
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

  export default {
    data: function () {
      return {
        hoverslide: false,
        interval: 5000,
        slideAnimRestart: '',
        animfade: 'fade',
        switcher: false,
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
      hideind: function() {
        if (this.visota.value <= 130){
          return this.hider = 'none';
        }else{
          return this.hider = '';
        }
      },
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
        }, vm.interval * 0.8);
        }
      } 
    },
 
    methods: {
      change: function(){
        var vm = this;
        setTimeout(function(){
          vm.slideAnimRestart = true;
        },this.interval * 0.1);
        console.log('slide listed and begin timeout fade-in animation');
        setTimeout(function(){
          if (vm.hoverslide == '0') {
            vm.slideAnimRestart = false; 
          }
        }, vm.interval * 0.8);
      }
    } 
  }

</script>

<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
 
.slide-left-enter-active {
  animation: slide-left 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.slide-left-leave-active {
  animation: slide-out-left 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both; 
  animation-delay: 0.8s;
}
 
.fade-in-enter-active {
  animation: fade-in 1.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation-delay: 0.8s;
}



.fade-in-leave-active {
  animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse;
}
 
@keyframes slide-left {
  0% {
    transform: translateZ(-1400px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateX(0);
    opacity: 1;
  }
}
 
@keyframes slide-out-left {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-1000px);
    opacity: 0;
  }
}

 
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}



  .mainFormat {
    display: flex;
    align-items: center;
  }
  .infoBlock {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .titlefirst {
    padding-left: 15%;  
  }
  .titlesecond {
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
</style>