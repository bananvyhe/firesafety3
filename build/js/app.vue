<template>
  <el-carousel height="50vh" indicator-position="outside">
    <el-carousel-item v-for="item in items" :key="item" >
        <onediv class="onediv"><h3>{{item.title}}<br>{{item.text}}</h3></onediv>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    data: function () {
      return {
      items: [
        { title: 'Посадить дерево1', text: 'какой-нибудь текст1' },
        { title: 'Посадить дерево2', text: 'какой-нибудь текст2' },
        { title: 'Посадить дерево3', text: 'какой-нибудь текст3' },
        { title: 'Посадить дерево4', text: 'какой-нибудь текст4' },
        { title: 'Посадить дерево4', text: 'какой-нибудь текст5' }  
      ]
      }
    }
  }
</script>

<style scoped>
  .onediv {
    background-color: #fdf;
    height: 100%;
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