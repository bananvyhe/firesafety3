<template>
	<div class="footer">
		<div>1</div>
		<div>2</div>
		<div>3</div>
	</div>
</template>
<script>
import titleblock from './components/titleblock.vue';
	export default {
		components: {
			titleblock: titleblock
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
	div {
		background-color: #dad;
		lost-column: 1/3;
	}
}
</style>