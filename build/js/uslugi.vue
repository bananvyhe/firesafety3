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
		margin-top: 6px;	 
    border-top-left-radius: 1em;
    background-color: #fff;
  	padding-bottom: 3em;
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
			.productTitle {
				text-align: center;
	      color: $blueTitle;
	      width: 100%;
	      padding-top: 9em;
			}
	 	}
	}

</style>