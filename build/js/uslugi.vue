<template>
	<div class="products">
		<div class="sectionTitle">
			<div class="titleBg"><nobr>ВИДЫ КОНТРОЛЯ:</nobr>
			</div>
			<div class="titlebackline"></div>
		</div>
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
		margin-top: 6px;	 
    border-top-left-radius: 1em;
	}
	.sectionTitle {
		padding-top: 0.3em;
		position: relative;
		display: flex;
		justify-content: center;
	}
	.titlebackline {
		z-index: 2;
		background-color: #b3ddad;
		height: 0.7em;
		width: 100%;
		position: absolute;
		align-self: center;
	}
	.titleBg { 
		color: $titleColor;
		position: relative;
		z-index: 7;
		padding-right: 4%;
		padding-left: 4%;
		background-color: #fff;
		padding-top: 0.2em; 
	}
	.itemsBox { 
		.item {
			position: relative;
			background: svg-load('../../app/assets/images/shield.svg');
	    background-size: 13em;
	    background-position: center;
	    background-repeat: no-repeat;
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
	 	}
	}

</style>