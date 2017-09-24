import Vue from 'vue'  
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue' 
import Telpanel from './telpanel.vue' 
import LogoApp from './logoApp.vue'


Vue.use(ElementUI)
 
document.addEventListener('DOMContentLoaded', () => {
  
  Vue.component('onediv', {
      template: '<div><slot></slot></div>'
  }) 
  
  new Vue({
    el: '#app',
    render: h => h(App)
  })

  new Vue({
    el: '#telpanel',
    render: h => h(Telpanel)
  })
 
  new Vue({
    el: '#logoApp',
    render: h => h(LogoApp)
  })
})   