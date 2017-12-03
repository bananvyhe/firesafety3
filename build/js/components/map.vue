<template>
	<div class="mapa">
		<div>+7 (343)382-24-61</div>
		<div>ООО "ЛИДЕР", Россия, г. Екатеринбург, ул. Старых Большевиков д.54, 620135</div>
		<div>lider-1-00@mail.ru</div>
		<div><iframe src="https://yandex.ru/map-widget/v1/-/CBaGMVHuHC" frameborder="0"></iframe></div>
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
.mapa {color: $advantageFontColor; 
	text-align: center;
	iframe {
		padding-top: 1em;
		 width: 100%; 
		 height: 350px;
	}
	padding-bottom: 2em;
	padding-right: 1em;
	padding-left: 1em;
	display: flex;
	flex-direction: column;
	div {
		width: 100%;
		 }
	 
}

</style>
