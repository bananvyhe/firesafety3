<template>
	<div>
		    <div  id="techinfo1" class="techinfo" >
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
		    	telpanelSliderHeight: {{telpanelSliderHeight}} 
    </div>
	</div>
</template>
<script>
	export default {
		props: ['switcher', 'menuwidth', 'availableSpace', 'vlinks', 'numHide', 'numVis', 'compstylem', 'toggle', 'toggle2', 'kostil', 'stick', 'fixedwidth', 'telpanelSliderHeight', 'fixedClass'],
    data: function () {
      return {
          
      }
    }
  }
</script>
<style scoped>
	.techinfo {
  z-index: 30;
  position: fixed;
  top: 400px;
  left: 20px;
  padding: 8px;
  background-color: #fff;
  opacity: 0.9;
}


</style>