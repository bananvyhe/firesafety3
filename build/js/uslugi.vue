<template>
	<div class="products">
		<titleblock
			:title="title"
		></titleblock>
		<div class="itemsBox">
			<div class="item" v-for="(product, index) in products" :key='index'>
				<div class="productImage" :class="product.style" > 
				</div>
				<div class="productTitle">
					{{product.name.toUpperCase()}}
				</div>
				<div class="shadow"></div>
			</div>
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
		  	title: 'Виды контроля:',
		    switcher: false,
		    products: [
		    	{name: 'Пожарная безопасность', style: 'icon-us1'},
		    	{name: 'Видеонаблюдение', style: 'icon-us2'},
		    	{name: 'Контроль доступа', style: 'icon-us3'},
		    	{name: 'Охранная сигнализация', style: 'icon-us4'}
		    ]
		  }
	  }
  }
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
 	.products {
		border-top-left-radius: 1em;
    background-color: $ghostwhite;
  	padding-bottom: 3em;
	}
	.itemsBox { 
		.item {
			z-index: 2;
			position: relative;
			background: svg-load('../../app/assets/images/shield.svg');
	    background-size: 11em;
	    background-position: center;
	    background-repeat: no-repeat;
			@each $icon in (us1, us2, us3, us4) {
			  .icon-$(icon) {
			    background-image: url('../../app/assets/images/$(icon).gif');
			  }
			}
			.icon-us1 {
				background-size: 12em;
			}
			.productImage {
	      bottom: 0.5em;
	      z-index: 2;
	      background-size: 180px; 
	      background-repeat: no-repeat;
	      background-position: center;
	      position: absolute;
	      height: 100%;
	      width: 100%;
    	}
			.productTitle { ;
				text-align: center;
	      color: $blueTitle;
	      width: 100%;
	      padding-top: 10em;
			}
	 	}
	}

</style>