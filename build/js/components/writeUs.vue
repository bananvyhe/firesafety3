<template>
	<div class="writeUs">
		<div class="title">НАПИШИТЕ НАМ</div>
		<div class="form">123</div> 
		<div class="form">прикрепить фаел</div>
		<div class="form">отправить</div> 
	</div>
</template>
<script>
	export default {
		data: function () {
		  return {
		  	
		  }
	  }
  }
</script>
<style scoped>
@import "../../../app/assets/stylesheets/postcss/variables";
.writeUs {
	display: flex;
	flex-direction: column;
	.title {
		padding-top: 2em;
	}
	div {
		background-color: #ada;
	}
}
</style>