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
	lost-utility: clearfix;
	background-color: $color-5;
	padding-bottom: 3em;
	padding-top: 2em;
	@media (--only-medium-screen) {
		padding-top: 0em;
	}
	@media (--only-small-screen) {
		padding-top: 0em;
	}	
	padding-left: 4em;
	padding-right: 4em;
	@media (--only-big-screen) {
		.writeUsSlot, .us {
			padding-top: 1em;
		}
	}	
	
	.writeUsSlot, .mapSlot, .us {
		 
		display: flex;
		justify-content: center;
	}
}
</style>