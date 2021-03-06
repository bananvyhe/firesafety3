'use strict';

var _index = require('element-ui/lib/theme-default/index.css');

var _index2 = _interopRequireDefault(_index);

var _lib = require('element-ui/lib');

var _lib2 = _interopRequireDefault(_lib);

require('../../theme/index.css');

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _sliderapp = require('./sliderapp.vue');

var _sliderapp2 = _interopRequireDefault(_sliderapp);

var _telpanel = require('./telpanel.vue');

var _telpanel2 = _interopRequireDefault(_telpanel);

var _logoApp = require('./logoApp.vue');

var _logoApp2 = _interopRequireDefault(_logoApp);

var _mainmenuapp = require('./mainmenuapp.vue');

var _mainmenuapp2 = _interopRequireDefault(_mainmenuapp);

var _backTop = require('./back-top.vue');

var _backTop2 = _interopRequireDefault(_backTop);

var _bodyApp = require('./bodyApp.vue');

var _bodyApp2 = _interopRequireDefault(_bodyApp);

var _MenuInfo = require('./MenuInfo.vue');

var _MenuInfo2 = _interopRequireDefault(_MenuInfo);

var _Logoappi = require('./Logoappi.vue');

var _Logoappi2 = _interopRequireDefault(_Logoappi);

var _Bodyappi = require('./Bodyappi.vue');

var _Bodyappi2 = _interopRequireDefault(_Bodyappi);

var _footer = require('./footer.vue');

var _footer2 = _interopRequireDefault(_footer);

var _vueTurbolinks = require('vue-turbolinks');

var _vueTurbolinks2 = _interopRequireDefault(_vueTurbolinks);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Turbolinks = require("turbolinks");
Turbolinks.start();

_vue2.default.component('menuinfo', _MenuInfo2.default);

_vue2.default.component('logoappi', _Logoappi2.default);

_vue2.default.component('bodyappi', _Bodyappi2.default);


_vue2.default.use(_vueResource2.default);
_vue2.default.use(_lib2.default);

_vue2.default.directive('tack', {
  bind: function bind(el, binding, vnode) {
    el.style.position = 'absolute';
    // el.style.top = binding.value + 'px'  
  }
});
_vue2.default.directive('focus', {
  // Когда привязанный элемент вставлен в DOM...
  inserted: function inserted(el) {
    // Переключаем фокус на элемент
    el.focus();
  }
});
// Регистрируем глобальную директиву с названием v-scroll
_vue2.default.directive('scroll', {
  // Когда привязанный элемент вставляется в DOM............
  inserted: function inserted(el, binding) {
    var f = function f(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', _.throttle(f, 300));
      }
    };
    window.addEventListener('scroll', _.throttle(f, 300));
  }
});
document.addEventListener('turbolinks:load', function () {
  _vue2.default.component('onediv', {
    template: '<div><slot></slot></div>'
  });
  new _vue2.default({
    el: '#VmBackTop',
    render: function render(h) {
      return h(_backTop2.default);
    }
  });
  new _vue2.default({
    el: '#sliderapp',
    render: function render(h) {
      return h(_sliderapp2.default);
    }
  });
  new _vue2.default({
    el: '#telpanel',
    render: function render(h) {
      return h(_telpanel2.default);
    }
  });
  new _vue2.default({
    el: '#logoApp',
    render: function render(h) {
      return h(_logoApp2.default);
    }
  });
  new _vue2.default({
    el: '#mainmenuapp',
    render: function render(h) {
      return h(_mainmenuapp2.default);
    }
  });
  new _vue2.default({
    el: '#bodyApp',
    render: function render(h) {
      return h(_bodyApp2.default);
    }
  });
  new _vue2.default({
    el: '#footer',
    render: function render(h) {
      return h(_footer2.default);
    }
  });
});
var _ = require('lodash');

// window.addEventListener("scroll", function(){
//    console.log('scrolling');
// });
//---------------------------------------

        // window.sr = ScrollReveal();
        // sr.reveal('.grid-item', {
        //   reset: true,
        //   duration: 600,
        //   distance: '150px',
        //   origin: 'bottom',
        //   rotate: { x: 0, y: 0, z: 0 },
        //   scale: 0.95,
        //   mobile: true,
        //   viewFactor: 0.025,
        //   viewOffset: { top: 30, right: 0, bottom: 30, left: 0 },

        // });
       //  sr.reveal('#JQSecuence', { 
       //    reset: true,
       //    afterReveal  : function (domEl) {
       //      $('#JQSecuence .grid-itemL').each(function(i) {
       //        var num = (i % 4) + 1;
       //        var neely = 700 * parseInt(i);
       //        $(this).delay(neely).queue(function () {
       //          $(this).addClass('slide-in-elliptic-left-fwd');
       //        });
       //      });

       //      $('#JQSecuence .grid-itemR').each(function(i) {
       //        var num = (i % 4) + 1;
       //        var neely = 700 * parseInt(i)+350;
       //        $(this).delay(neely).queue(function () {
       //          $(this).addClass('slide-in-elliptic-right-fwd');
       //        });
       //      });
       //    }
       //  }); 
       
 

    
       // 
//# sourceMappingURL=app.js.map
