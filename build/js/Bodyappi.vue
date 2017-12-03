<template>
	<div>
	<!-- 	<div  v-show="switcher" class="bodyappi" >
			<h3>body:</h3><hr>
		    scrollTop: {{scrollTop}}<br>
        scrollBottom: {{scrollBottom}}<br>
        <div class="smalltext">animate: {{animate}}</div><br>
		</div> -->
	</div>
</template>
<script>
	export default {
		props: ['scrollTop', 'scrollBottom', 'animate'],
    data: function () {
      return {
        switcher: false
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
  width: 300px;
  padding: 8px;
  background-color: #fff;
  opacity: 0.9;
  font-size: 0.8em;
}
.smalltext {
  z-index: 30;
  line-height: 1.2em;
  font-size: 0.6em;
}
</style>