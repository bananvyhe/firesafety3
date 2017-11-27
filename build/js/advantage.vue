<template>
	<div class="advantage">
		<div class="title">
			НАШИ ПРЕИМУЩЕСТВА:
		</div>
		<div class="itemsBox">
			<div class="item" v-for="(advantage, index) in advantages" :key='index'>
				<div class="productImage" :class="advantage.style" > 
				</div>
				<div class="productTitle">
					{{advantage.desc}}
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
		    advantages: [
		    	{title: 'опыт', desc: '8 лет проектирования, монтажа и обслуживания более 200 объектов на более чем 500 000 кв. метрах', style: 'descImage1'},
		    	{title: 'ответственность', desc: 'На все обслуживаемые системы гарантируем прохождение пожарной инспекции с первого раза и без штрафов', style: 'descImage2'},
		    	{title: 'гарантия', desc: 'Гарантия на работы до 3 лет', style: 'descImage3'},
		    	{title: 'лицензия', desc: 'Деятельность лицензирована МЧС РФ за №66-Б.00124 от 23 июня 2009 года', style: 'descImage4'},
		    	{title: 'оперативность', desc: 'Расчет сметы от 1 дня', style: 'descImage4'},
		    	{title: 'сервисное обслуживание', desc: 'Сервисная поддержка', style: 'descImage4'}
		    ]
		  }
	  }
  }
</script>
<style scoped>
	@import "../../app/assets/stylesheets/postcss/variables";
	.advantage {
		padding-top: 1em;
		padding-bottom: 2em;
		background-color: $advantageBg;
		color: $advantageFontColor;
		.title {
			text-align: center;
			padding: 1em;
		}
	}
	
</style>