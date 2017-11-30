<template>
	<div class="sectionTitle">
		<div class="titleBg"><div><nobr>{{title.toUpperCase()}}</nobr></div>
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
	.sectionTitle {
		padding-top: 0.3em;
		position: relative;
		display: flex;
		justify-content: center;
	}
	.titlebackline {
		z-index: 2;
		background-color: #b3ddad;
		height: 0.6em;
		width: 100%;
		position: absolute;
		align-self: center;
	}
	.titleBg { width: 50;
    height: 0;border-top: 1.2em solid #fff;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent; 
		color: $titleColor;
		position: relative;
		z-index: 7;
		padding-right: 2%;
		padding-left: 2%;
		padding-top: 0.2em; 
		div {
			margin-top: -1.6em;
		}
	}
</style>
