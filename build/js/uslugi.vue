<template>
	<div class="products">
		<div class="sectionTitle"><div class="titleBg"><nobr>ВИДЫ КОНТРОЛЯ:</nobr></div><div class="titlebackline"></div></div>
		<div class="itemsBox">
			<div class="item" v-for="(product, index) in products" :key='index'>
				<div class="productImage" :class="product.style" > 
				</div>
				<div class="productTitle">
					{{product.name.toUpperCase()}}
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
		    	{name: 'Пожарная безопасность', style: 'productImage1'},
		    	{name: 'Видеонаблюдение', style: 'productImage2'},
		    	{name: 'Контроль доступа', style: 'productImage3'},
		    	{name: 'Охранная сигнализация', style: 'productImage4'}
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
	.titlebackline {
		z-index: 2;
		background-color: #b3ddad;
		height: 0.5em;
		width: 100%;
		position: absolute;
		align-self: center;
	}
	.titleBg {
		color: $titleColor;
		position: relative;
		z-index: 7;
		padding-right: 7%;
		padding-left: 7%;
		background-color: #fff;
		padding-top: 0.2em; 
	}
	.itemsBox { 
		padding-top: 1em;
		padding-left: 5%;
		padding-right: 5%;
		.item {
		padding-top: 5%;
		margin-bottom: 5%;
		position: relative;
		display: flex;
		height: 15vw;
		lost-column: 1/4;  
    background: svg-load('../../app/assets/images/shield.svg');
    background-size: 85%;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
	    .productImage {
	    	bottom: 3%;
				z-index: 2;
				lost-column: 1/4;  
				background-size: 85%; 
				background-repeat: no-repeat;
				background-position: center;
				position: absolute;
				height: 100%;
				width: 100%;
			}
			.productImage1 {
				background-image:url('../../app/assets/images/us1.gif');
			}
			.productImage2 {
				background-image:url('../../app/assets/images/us2.png');
			}
			.productImage3 {
				background-image:url('../../app/assets/images/us3.gif');
			}
			.productImage4 {
				background-image:url('../../app/assets/images/us4.gif');
			}
			.productTitle {
	    	z-index: 12;  
				align-self: flex-end;
				text-align: center;

				color: $blueTitle;
				width: 100%;
				padding: 10px;
			}
	 	}
	}

</style>