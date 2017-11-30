<template>
	<div class="trusty">		 
		<titleblock
			:title="title"
		></titleblock>
		<div class="itemBox">
			<div class="itemTru" v-for="(client, index) in clients" :key='index'>
				<div class="productImage"> 
					<div :class="client.style" class="clientImage"></div>
				</div>
				<div class="productDesc">
					<p>{{client.desc}}</p>
				</div>
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
		  	title: 'Нам доверяют',
		  	clients: [
		    	{name: 'часовой молл "6624.ru"', style: 'icon-client1'},
		    	{name: 'ТК "Омега"', style: 'icon-client2'},
		    	{name: 'Гипермаркет Дом', style: 'icon-client3'},
		    	{name: 'Дом культуры им. Лаврова', style: 'icon-client4'},
		    	{name: 'ТРЦ "Экомолл Гранат"', style: 'icon-client5'},
		    	{name: 'Деловой центр "Маршал"', style: 'icon-client6'}
		    ]
		  }
	  }
  }
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.trusty {
	background-color: #fff;
	padding-bottom: 2em;
	.itemBox { 
		lost-utility: clearfix;
		padding-left: 8%;
		padding-right: 8%;
		padding-top: 4em;
		.itemTru {
			background-color: #ada;
			height: 200px;
			.productImage {
				.clientImage {
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					height: 200px;
				}
			}
		}
	}
	@media (--only-medium-screen) {
    .itemBox {
      padding-left: 10%;
			padding-right: 10%;
			padding-top: 3em;
    }
  }
  @media (--only-small-screen) {
    .itemBox {
      padding-left: 12%;
			padding-right: 12%;
			padding-top: 2em;
    }
  }
}

@each $icon in (client1, client2, client3, client4, client5, client6) {
  .icon-$(icon) {
    background-image: url('../../app/assets/images/$(icon).jpg');
  }
}

</style>