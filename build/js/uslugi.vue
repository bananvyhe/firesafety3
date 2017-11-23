<template>
	<div class="products">
		<div class="sectionTitle"><div class="titleBg">виды контроля:</div><div class="titlebackline"></div></div>
		<div class="itemsBox">

			<div class="item" v-for="(product, index) in products" :key='index'>
				<div class="productImage">
					{{product.img}}
				</div>
				<div class="productTitle">
					{{product.name}}
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		data: function () {
		  return {
		    switcher: false,
		    products: [
		    	{name: 'Пожарная безопасность', img: 'us1.jpg'},
		    	{name: 'Видеонаблюдение', img: 'us2.jpg'},
		    	{name: 'Контроль доступа',  img: 'us3.jpg'},
		    	{name: 'Охранная сигнализация',  img: 'us4.jpg'}
		    ]
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
		display: flex;
		height: 15vw;
		lost-column: 1/4;  
    background: svg-load('../../app/assets/images/shield.svg');
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat; background-color: #dad;
    .productTitle {
			align-self: flex-end;
			background-color: #ada;
			text-align: center;
			color: $blueTitle;
			width: 100%;
			padding: 10px;
		}
		.productImage {
			background-color: #ada;
			position: absolute;
		}
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