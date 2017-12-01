<template>
	<div class="sectionTitle">
		<div class="titleBg">
			<div><nobr>{{title.toUpperCase()}}</nobr></div>
			<div class="lines">
				<div class="one">________________</div>
				<div class="two">________</div>
				<div class="three">____</div>
			</div>
		</div>
		<div class="titlebackline"></div>
	</div>
</template>
<script>
	export default {
		props: ['title'],
    data: function () {
      return {
        switcher: false,
      }
    }
  }
</script>
<style scoped>
@import "../../../app/assets/stylesheets/postcss/variables";
	.lines {
		color: color($advGreyBorder blackness(15%));
		text-align: center;
		padding-top: 35px;
		height: 50px;
		.one {
			padding-top: 0px;
		}
		.two {
			padding-top: 11px;
		}
		.three {
			padding-top: 11px;
		}
	}
	.sectionTitle {
 		padding-top: 15px;
		position: relative;
		display: flex;
		justify-content: center;
	}
	.titlebackline {
		z-index: 2;
		background-color: $advGreyBorder;
		height: 8px;
		width: 100%;
		position: absolute;
		align-self: center;
	}
	.titleBg {
		width: 50;
    height: 0;
    border-top: 20px solid #fff;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent; 
		color: $titleColor;
		position: relative;
		z-index: 7;
		padding-right: 1%;
		padding-left: 1%;
		 
		div {
			margin-top: -24px;
		}
	}
</style>
