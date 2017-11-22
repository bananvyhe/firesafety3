<template>
	<div>
		<div  v-show="switcher" class="bodyappi" >
			<h3>body:</h3><hr>
		    scrollTop: {{scrollTop}}<br>
        scrollBottom: {{scrollBottom}}<br>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['scrollTop', 'scrollBottom'],
    data: function () {
      return {
          switcher: true,
           
      }
    }
  }
</script>
<style scoped>
.bodyappi {
  z-index: 30;
  position: fixed;
  top: 480px;
  right: 300px;
  padding: 8px;
  background-color: #fff;
  opacity: 0.9;
  font-size: 0.8em;
}


</style>