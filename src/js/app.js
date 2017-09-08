import Vue from 'vue'  
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue' 
import App1 from './app1.vue' 

Vue.use(ElementUI)

document.addEventListener('DOMContentLoaded', () => {
   
  new Vue({
    el: '#app',
    render: h => h(App)
  })
  

  new Vue({
    el: '#app1',
    render: h => h(App1)
  })
})   