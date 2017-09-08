<template>
  <el-carousel height="50vh" indicator-position="outside">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}<br>{{status}}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    data: function () {
      return {
        status: 'Critical'
      }
    }
  }
</script>

<style scoped>
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