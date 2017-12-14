<template>
	<div class="mapa">
		<div>+7 (343)382-24-61</div>
		<div class="adressfooter"> ООО "ЛИДЕР", Россия, г. Екатеринбург, ул. Старых Большевиков д.54, 620135 </div>
		<div>lider-1-00@mail.ru</div>
		<div><iframe src="https://yandex.ru/map-widget/v1/-/CBaGMOelOC" frameborder="0"></iframe></div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	 
      }
    }
  }
</script>
<style scoped>
@import "../../../app/assets/stylesheets/postcss/variables";

.mapa {
	.adressfooter {
		margin-left: 1em;
		margin-right: 1em;
	}
	width: 100%; 
	div {
		 
	}
	color: $advantageFontColor; 
	text-align: center;
	iframe {
		padding-top: 1em;
		width: 100%; 
		height: 350px;
	}
	 
	 
	 
 
 
}

</style>
