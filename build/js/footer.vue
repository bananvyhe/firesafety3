<template>
	<div class="footer">
		<div class="writeUsSlot">
			<writeus></writeus>
		</div>
		<div class="mapSlot">
			<mapa></mapa>
		</div>
		<div class="us">
			<us></us>
		</div>
	</div>
</template>
<script>
import writeUs from './components/writeUs.vue';
import mapa from './components/map.vue';
import us from './components/us.vue';
	export default {
		components: {
			writeus: writeUs,
			mapa: mapa,
			us: us
		},
		data: function () {
		  return {
		  	
		  }
	  }
  }
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.footer {
	background-color: $color-5;
	display: flex;
	.writeUsSlot, .mapSlot, .us {
		padding-top: 2em; 
		lost-column: 1/3 3 1em;
		display: flex;
		justify-content: center;
	}
}
</style>