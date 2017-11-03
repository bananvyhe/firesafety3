import Vue from 'vue'  
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Sliderapp from './sliderapp.vue' 
import Telpanel from './telpanel.vue' 
import LogoApp from './logoApp.vue'
import Mainmenuapp from './mainmenuapp.vue'
import VmBackTop from './back-top.vue'

Vue.use(ElementUI)
   
document.addEventListener('DOMContentLoaded', () => {
  
  Vue.component('onediv', {
      template: '<div><slot></slot></div>'
  }); 

  new Vue({
    el: '#VmBackTop',
    render: h => h(VmBackTop)
  })
   
  new Vue({
    el: '#sliderapp',
    render: h => h(Sliderapp)
  })

  new Vue({
    el: '#telpanel',
    render: h => h(Telpanel)
  })
 
  new Vue({
    el: '#logoApp',
    render: h => h(LogoApp)
  })
  new Vue({
    el: '#mainmenuapp',
    render: h => h(Mainmenuapp)
  })
})   