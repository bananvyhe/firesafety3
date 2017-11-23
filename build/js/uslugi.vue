<template>
	<div class="products">
		<div class="sectionTitle"><div class="titleBg">способы контроля:</div><div class="titlebackline"></div></div>
		<div class="itemsBox">
			<div class="item">1</div>
			<div class="item">2</div>
			<div class="item">3</div>
			<div class="item">4</div>
			<div class="item">5</div>
			<div class="item">6</div>
			<div class="item">7</div>
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
	.itemBox {

	}
	.item {

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