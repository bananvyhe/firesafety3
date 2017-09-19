<template>
  <el-carousel :height="visota + 'vh'" indicator-position="outside">
    <el-carousel-item v-for="item in items">
        <onediv :class="item.class" ><h3>{{item.title}}<br>{{item.text}}</h3></onediv>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
   
  var mq = window.matchMedia('all and (max-width: 700px)');
  if(mq.matches) {
      // the width of browser is more then 700px
      var visota = 20;
  } else {
      // the width of browser is less then 700px
      var visota = 60;
  }
  export default {

    data: function () {
      return {
        visota: visota,
        items: [
          { title: 'Посадить дерево1', text: 'какой-нибудь текст1', class: 'onediv' },
          { title: 'Посадить дерево2', text: 'какой-нибудь текст2', class: 'twodiv' },
          { title: 'Посадить дерево3', text: 'какой-нибудь текст3', class: 'threediv' },
          { title: 'Посадить дерево4', text: 'какой-нибудь текст4', class: 'fourdiv' },
          { title: 'Посадить дерево4', text: 'какой-нибудь текст5', class: 'fivediv' }  
        ]
      }
    }
    
  }
  
</script>

<style scoped>
  h3 {

  }
  .onediv, .twodiv, .threediv, .fourdiv, .fivediv {
    height: 100%;
    background-repeat:no-repeat;
    background-size: cover;
   
  }
  .onediv {
     background-position: right bottom;
    filter: blur(4px);
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