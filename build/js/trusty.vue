<template>
	<div class="trusty">		 
			<titleblock
				:title="title"
			></titleblock>
			<div class="itemBox">
				
			</div>
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
		  	title: 'Нам доверяют'
		  }
	  }
  }
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.trusty {
	background-color: #fff;
	height: 600px;
	padding-top: 1em;
	padding-bottom: 2em;
	.title {
		text-align: center;
		padding: 1em;
	}
}
</style>