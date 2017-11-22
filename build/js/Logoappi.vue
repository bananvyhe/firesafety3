<template>
	<div>
		<div  v-show="switcher" class="logoappi" >
			<h3>Лого:</h3><hr>
		  logoinf: {{logoinf}}<br>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['logoinf'],
    data: function () {
      return {
          switcher: true 
      }
    }
  }
</script>
<style scoped>
.logoappi {
  z-index: 30;
  position: fixed;
  top: 400px;
  right: 300px;
  padding: 8px;
  background-color: #fff;
  opacity: 0.9;
  font-size: 0.8em;
}


</style>