<template>
  <div class="bodyApp">
  	<div class="grid-item" :class="{inview: checkView(0)}">
  		<uslugi></uslugi>
  	</div>
		<div class="grid-item" :class="{inview: checkView(1)}">
			<advantage></advantage>
	  </div>
		<div class="grid-item" :class="{inview: checkView(2)}">
			<ember></ember>
	  </div>
		<div class="grid-item" :class="{inview: checkView(3)}">
			<trusty></trusty>
	  </div>	  	 	
	  <bodyappi 
	  	:scrollTop="scrollTop"
	  	:scrollBottom="scrollBottom"
	  	:animate="animate"
	  	></bodyappi>      
  </div>
</template>
<script>
import Uslugi from './uslugi.vue';
import advantage from './advantage.vue';
import ember from './ember.vue';
import trusty from './trusty.vue';
export default {
	components: {
		uslugi: Uslugi,
		advantage: advantage,
		ember: ember,
		trusty: trusty
	},
  data: function () {
    return {
      scrollTop: '',
      scrollBottom: '',
      animate: ''
    }
  },
  mounted(){
  	this.scrollTop = window.scrollY;
    this.scrollBottom = window.scrollY + window.innerHeight;
    window.addEventListener('scroll', _.throttle(this.scrollHandler, 300))
    this.animate = document.querySelectorAll(".grid-item")
  },
  methods: {
  	checkView(e){
      if(this.animate){
        let element = this.animate[e];
        let elTop = element.offsetTop;
        let elBottom = element.offsetTop + element.scrollHeight;
        if(this.scrollBottom > (elTop + 70) && (elBottom - 50) > this.scrollTop){
          let images = Array.prototype.slice.call(element.getElementsByTagName('img'));
          images.forEach(img => {
            if(img.getAttribute('data-src')){
              img.src = img.getAttribute('data-src');
              img.setAttribute('data-src', '')
            }
          })
          return true;
        } else {
          return false;
        }
      }
    },
  	scrollHandler(){
      this.scrollBottom = window.scrollY + window.innerHeight;
      this.scrollTop = window.scrollY;
    }
  }
}
</script>

<style>
@import "../../app/assets/stylesheets/postcss/variables";
.bodyApp {
	 
}
.grid-item {
	transition: 0.5s ease-in-out;
	opacity: 0;
}
.inview {
	opacity: 1;
}
</style>