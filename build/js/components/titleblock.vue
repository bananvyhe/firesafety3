<template>
	<div class="sectionTitle">
		<div class="titleBg">
			<div class="title">
				<nobr>{{title.toUpperCase()}}</nobr>
			</div>
<!-- 			<div class="lines">
				<div class="one"></div>
				<div class="two"></div>
				<div class="three"></div>
			</div> -->
		</div>
<!-- 		<div class="titlebackline"></div> -->
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
	display: flex;
	color: color($whitesmoke blackness(15%));
	text-align: center;
	flex-direction: column;
	padding-top: 0em;
	width: 100%;
	align-items: center;
	 
	div {

		border-bottom: 2px solid color($greenbg saturation(+5%) w(-3%));
	}
	.one {
		height: 2px;
		padding-top: 0px;
		width: 100%;
	}
	.two {height: 6px;
		padding-top: 0px;
		width: 40%;
	}
	.three {height: 6px;
		padding-top: 0px;
		width: 10%;
	}
}
.sectionTitle {
	padding-top: 1em; 
	position: relative;
	display: flex;
	justify-content: center;
}
.titlebackline {
	z-index: 2;
	background-color: $greenbg; height: 0.2em;
	 
	width: 100%;
	position: absolute;
	align-self: center;
}
.titleBg {
	/*width: 50;
  height: 0;
  border-top: 20px solid #fff;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent; */
	color: $titleColor;
	position: relative;
	z-index: 7;
	padding-right: 2vw;
	padding-left: 2vw;
	background-color: #fff;
	.title {
		margin-top: 0em;
	}
}
</style>
