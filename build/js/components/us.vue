<template>
	<div class="aboutus">
		<div class="title">НЕМНОГО О НАС:</h2></div>
		<div>
			<p>
				Компания «Лидер» — признанный эксперт в области проектирования, разработки, внедрения, обслуживания и ремонта оборудования систем безопасности. Деятельность предприятия по монтажу, техническому обслуживанию, и ремонту средств обеспечения пожарной безопасности зданий и сооружении лицензирована Министерством Российской Федерации по делам гражданской обороны, чроезвычайным ситуациям и ликвидиции последствий стихийных бедствий за №66-Б/00124 от 23 июня 2009 года.
			</p>	
		</div>
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
.aboutus {
	.title {
		 padding-bottom: 0.2em;
	}
	p {
		 
		 
		text-indent: 1.33em;
	}
	color: $advantageFontColor;
	padding-top: 1em;
	padding-bottom: 2em;
	 
	display: flex;
	flex-direction: column;
}

</style>
