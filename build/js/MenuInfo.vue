<template>
	<div>
		<div  v-show="switcher"   id="techinfo1" class="techinfo">
    	<h3>menu:</h3><hr>
    	menuwidth: {{menuwidth}}<br>
    	av space: {{availableSpace}}<br>
    	vlink: {{vlinks}}<br>
    	menuitemsHide: {{numHide}}<br>
    	menuitemsVis: {{numVis}}<br>
    	compstylem: {{compstylem}} <br>
    	toggle: {{toggle}} <br>
    	toggle2: {{toggle2}} <br>
    	kostil: {{kostil}}<br>
    	stick: {{stick}}<br>
    	fixedClass: {{fixedClass}}<br>
    	telpanelSliderHeight: {{telpanelSliderHeight}}<br>
      scrollTop: {{scrollTop}}<br>
      scrollBottom: {{scrollBottom}} 
    </div>
	</div>
</template>
<script>
	export default {
		props: ['menuwidth', 'availableSpace', 'vlinks', 'numHide', 'numVis', 'compstylem', 'toggle', 'toggle2', 'kostil', 'stick', 'fixedwidth', 'telpanelSliderHeight', 'fixedClass', 'scrollTop', 'scrollBottom'],
    data: function () {
      return {
          switcher: true 
      }
    }
  }
</script>
<style scoped>
	.techinfo {
  z-index: 30;
  position: fixed;
  width: 250px;
  top: 400px;
  right: 20px;
  padding: 8px;
  background-color: #fff;
  opacity: 0.9;
}


</style>