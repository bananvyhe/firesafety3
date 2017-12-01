<template>
	<div class="sectionTitle">
		<div class="titleBg">
			<div class="title">
				<nobr>{{title.toUpperCase()}}</nobr>
				<div class="lines">
					<div class="one"></div>
					<div class="two"></div>
					<div class="three"></div>
				</div>
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
	padding-top: 0px;
	 width: 100%;
	div {
		border-bottom: 1px solid color($advGreyBorder blackness(20%));
	}
	.one {
		height: 6px;
		padding-top: 0px;
		margin-left: 10%;
		margin-right: 10%; 
	}
	.two {height: 7px;
		padding-top: 0px;
		margin-left: 25%;
		margin-right: 25%; 
	}
	.three {height: 7px;
		padding-top: 0px;
		margin-left: 40%;
		margin-right: 40%; 
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
	.title {
		margin-top: -20px;
	}
}
</style>
