<template>
	<div class="footer">
		<div class="writeUsSlot">
			<writeus></writeus>
		</div>
		<div class="map">2</div>
		<div class="us">3</div>
	</div>
</template>
<script>
import writeUs from './components/writeUs.vue';
	export default {
		components: {
			writeus: writeUs
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
	height: 500px;

	.writeUsSlot, .map, .us {
		background-color: #dad;
		lost-column: 1/3 3 1em;
		display: flex;
		justify-content: center;
	}
}
</style>