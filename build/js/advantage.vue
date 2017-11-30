<template>
	<div class="advantage">		 
		<div class="title">
			НАШИ ПРЕИМУЩЕСТВА:
		</div>
		<div class="itemBox">
			<div class="itemAdv" v-for="(advantage, index) in advantages" :key='index'>
				<div class="container">
					<div class="productImage"> 
						<div :class="advantage.style" class="descImage"></div>
					</div>
				</div>
				
				<div class="productDesc">
					<p>{{advantage.desc}}</p>
				</div>
				<div class="button">
					<p> &nbsp;  {{advantage.title.toUpperCase()}}</p>
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
		    	{title: 'опыт', desc: '8 лет проектирования, монтажа и обслуживания более 200 объектов на более чем 500 000 кв. метрах', style: 'icon-tools'},
		    	{title: 'ответственность', desc: 'На все обслуживаемые системы гарантируем прохождение пожарной инспекции с первого раза и без штрафов', style: 'icon-fire-extinguisher'},
		    	{title: 'гарантия', desc: 'Гарантия на работы до 3 лет', style: 'icon-gear'},
		    	{title: 'лицензия', desc: 'Деятельность лицензирована МЧС РФ за №66-Б.00124 от 23 июня 2009 года', style: 'icon-flame'},
		    	{title: 'оперативность', desc: 'Расчет сметы от 1 дня', style: 'icon-file-text-o'},
		    	{title: 'сервисное обслуживание', desc: 'Сервисная поддержка', style: 'icon-jersey'}
		    ]
		  }
	  }
  }
</script>
<style scoped>
	@import "../../app/assets/stylesheets/postcss/variables";
	.advantage {
		padding-top: 1.5em;
		padding-bottom: 2em;
		border-bottom: 5px solid $color-1;
		background-color: $advantageBg;
		color: $advantageFontColor;
		.title {
			text-align: center;
		}
		.itemBox { 
			background-color: $advantageBg; 
			padding-top: 2em;
			padding-bottom: 1em;
			padding-left: 1em;
			padding-right: 1em;
			lost-utility: clearfix;
			.itemAdv {
				.container {
					display: flex;
					justify-content: center;
					padding: 1em;
					.productImage {
						background-color: $greyInd; 
						padding: 1em;
						display: flex;
						justify-content: center;
						align-items: center;
						width: 60px;
						height: 60px;
						border-radius: 50%;
						@each $icon in (tools, fire-extinguisher, gear, flame, file-text-o, jersey) {
						  .icon-$(icon) {
						    background-image: url('../../app/assets/images/$(icon).svg');
						  }
						}
						.descImage {
							background-repeat: no-repeat;
							background-position: center;
							width: 95%;
							height: 95%;
						}
					}
				}
				.button {
					display: flex;
					justify-content: center; 
					padding-bottom: 1em;
					align-items: center;
					position: relative;
					&::before {
		        content: attr(count);
		        width: 18px;
		        height: 18px;
		        text-align: center;
		        background-color: $greenInd;
		        color: #fff;
		        font-size: 0.8em;
		        border-radius: 50%;
		        border: 0px solid #fff;
		        font-weight: bold;
		    	}					
				}
			}
		}
	}
	
</style>