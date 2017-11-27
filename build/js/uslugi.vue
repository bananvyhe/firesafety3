<template>
	<div class="products">
		<div class="sectionTitle">
			<div class="titleBg"><div><nobr>ВИДЫ КОНТРОЛЯ:</nobr></div>
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
		height: 0.6em;
		width: 100%;
		position: absolute;
		align-self: center;
	}
	.titleBg { width: 50;
    height: 0;border-top: 1.2em solid #fff;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent; 
		color: $titleColor;
		position: relative;
		z-index: 7;
		padding-right: 2%;
		padding-left: 2%;
		padding-top: 0.2em; 
		div {
			margin-top: -1.6em;
		}
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