import Vue from 'vue'  
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Sliderapp from './sliderapp.vue' 
import Telpanel from './telpanel.vue' 
import LogoApp from './logoApp.vue'
import Mainmenuapp from './mainmenuapp.vue'
import VmBackTop from './back-top.vue'
import BodyApp from './bodyApp.vue' 
import MenuInfo from './MenuInfo.vue'
Vue.component('menuinfo', MenuInfo)
import Logoappi from './Logoappi.vue'  
Vue.component('logoappi', Logoappi)
import Bodyappi from './Bodyappi.vue'  
Vue.component('bodyappi', Bodyappi)
Vue.use(ElementUI)

Vue.directive('tack', {
 bind(el, binding, vnode) {
    el.style.position = 'absolute'
    // el.style.top = binding.value + 'px'  
  }
});
Vue.directive('focus', {
  // Когда привязанный элемент вставлен в DOM...
  inserted: function (el) {
    // Переключаем фокус на элемент
    el.focus()
  }
});
// Регистрируем глобальную директиву с названием v-scroll
Vue.directive('scroll', {
  // Когда привязанный элемент вставляется в DOM......
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', _.throttle(f, 300));
      }
    };
    window.addEventListener('scroll', _.throttle(f, 300));
  },
});
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
  new Vue({
    el: '#bodyApp',
    render: h => h(BodyApp)
  })
})   