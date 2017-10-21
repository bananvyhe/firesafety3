<template>
  <el-carousel v-bind="{height: visota.value + 'vh'}">
    <el-carousel-item v-for="(item, index) in items" :key='index'>
        <onediv :class="item.class" >
          <h3>{{item.title}}
            <br>{{item.text}}
            <br>
          </h3>{{visota.value}}
          <br>
          <input type="text" v-model="item.title">
          <br>
          <input type="text" v-model="visota.value">
        </onediv>
    </el-carousel-item>
  </el-carousel>
</template>



<script>

  let vis = {value: '30'};
  function resize() {
    if (window.matchMedia('only screen and (max-width: 600px)').matches) {
        console.log('under 600 pixels');
        vis.value = '14';                    
    } else if (window.matchMedia('only screen and (min-width: 601px) and ' + '(max-width: 1024px)').matches) {
        console.log('between 601 and 1024 pixels');
        vis.value = '28';                      
    } else {
        console.log('higher than 1024 pixels');
        vis.value = '40';                     
    }
  }

  window.addEventListener('resize', resize, false);
  resize();

  export default {
    data: function () {
      return {
        visota: vis,
        items: [
          { title: 'Комплексные системы безопасности для вашей недвижимости', text: 'Монтаж, обслуживание, проектирование, ремонт, испытание, обучение', class: 'onediv' },
          { title: 'Посадить дерево2', text: 'какой-нибудь текст2', class: 'twodiv' },
          { title: 'Посадить дерево3', text: 'какой-нибудь текст3', class: 'threediv' },
          { title: 'Посадить дерево4', text: 'какой-нибудь текст4', class: 'fourdiv' },
          { title: 'Посадить дерево5', text: 'какой-нибудь текст5', class: 'fivediv' }  
        ] 
      }
    }
  }
</script>

<style scoped>
  .changev {
  
  }
  .onediv, .twodiv, .threediv, .fourdiv, .fivediv {
    height: 100%;
    background-repeat:no-repeat;
    background-size: cover;
    
   
  }
  .onediv {
     background-position: right bottom;
    /*filter: blur(4px);*/
    background-image: url(../../app/assets/images/1.jpg);
  }
  .twodiv {
     background-position: right bottom;
    background-image: url(../../app/assets/images/2.jpg);
  }
  .threediv {
    background-position: center bottom;
    background-image: url(../../app/assets/images/3.jpg);
  }
  .fourdiv {
    background-position: right bottom;
    background-image: url(../../app/assets/images/4.jpg);
  } 
  .fivediv {
    background-position: right bottom;
    background-image: url(../../app/assets/images/5.jpg);
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