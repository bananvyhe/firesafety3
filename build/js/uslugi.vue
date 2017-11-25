<template>
	<div class="products">
		<div class="sectionTitle"><div class="titleBg">ВИДЫ КОНТРОЛЯ:</div><div class="titlebackline"></div></div>
		<div class="itemsBox">

			<div class="item" v-for="(product, index) in products" :key='index'>
				<div class="productImage" > 
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
		    	{name: 'Пожарная безопасность', img: 'assets/images/us1.gif'},
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
	.sectionTitle { background-color: #dad;
		position: relative;
		display: flex;
		justify-content: center;
	}
	.titleBg {
		color: $titleColor;
		padding-bottom: 0.25em;
		position: relative;
		z-index: 7;
		padding-right: 25px;
		padding-left: 25px;
		background-color: #fff;
		line-height: 1.8em;
	}
	.titlebackline {
		z-index: 2;
		background-color: #b3ddad;
		height: 0.7em;
		width: 100%;
		position: absolute;
		align-self: center;
	}
	.itemsBox { 
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
				background-image:url('../../app/assets/images/us1.gif');
				background-repeat: no-repeat;
				background-position: center;
				position: absolute;
				height: 100%;
				width: 100%;
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