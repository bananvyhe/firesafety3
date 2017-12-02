<template>
	<div class="footer">
		<div class="writeUsSlot">
			<writeus></writeus>
		</div>
		<div class="mapSlot">
			<mapa></mapa>
		</div>
		<div class="us">3</div>
	</div>
</template>
<script>
import writeUs from './components/writeUs.vue';
import mapa from './components/map.vue';
	export default {
		components: {
			writeus: writeUs,
			mapa: mapa
		},
		data: function () {
		  return {
		  	
		  }
	  }
  }
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.footer {display: flex;
	 

	.writeUsSlot, .mapSlot, .us {
		padding-top: 3em; 
		lost-column: 1/3 3 1em;
		display: flex;
		justify-content: center;
	}
}
</style>