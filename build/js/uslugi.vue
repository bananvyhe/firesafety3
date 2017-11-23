<template>
	<div class="products">
		<div class="sectionTitle"><div class="titleBg">способы контроля:</div><div class="titlebackline"></div></div>
		<div class="itemsBox">
			<div class="item">
			</div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data: function () {
		  return {
		    switcher: false,
		  }
	  }
  }
</script>
<style scoped>
	@import "../../app/assets/stylesheets/postcss/variables";
	.products {

	}
	.sectionTitle {
		position: relative;
		display: flex;
		justify-content: center;
	}
	.titleBg {
		padding-bottom: 0.25em;
		position: relative;
		z-index: 7;
		padding-right: 25px;
		padding-left: 25px;
		background-color: #fff;
		line-height: 1.8em;
	}
	.itemsBox { 
		padding-left: 10%;
		padding-right: 10%;
	}
	.item {
		height: 15em;
		lost-column: 1/3;  
    background: svg-load('../../app/assets/images/shield.svg');
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
	}
	.titlebackline {
		z-index: 2;
		background-color: #b3ddad;
		height: 0.7em;
		width: 100%;
		position: absolute;
		align-self: center;
	}
</style>