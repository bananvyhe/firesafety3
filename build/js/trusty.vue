<template>
	<div class="trusty">		 
			<titleblock
				:title="title"
			></titleblock>
			<div class="itemBox">
				
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
		  	title: 'Нам доверяют',
		  	products: [
		    	{name: 'часовой молл "6624.ru"', style: 'productImage1'},
		    	{name: 'ТК "Омега"', style: 'productImage2'},
		    	{name: 'Гипермаркет Дом', style: 'productImage3'},
		    	{name: 'Дом культуры им. Лаврова', style: 'productImage4'},
		    	{name: 'ТРЦ "Экомолл Гранат"', style: 'productImage4'},
		    	{name: 'Деловой центр "Маршал"', style: 'productImage4'}
		    ]
		  }
	  }
  }
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.trusty {
	background-color: #fff;
	height: 600px;
	padding-top: 1em;
	padding-bottom: 2em;
	.title {
		text-align: center;
		padding: 1em;
	}
}
 
</style>