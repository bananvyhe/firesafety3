'use strict';

var _index = require('element-ui/lib/theme-default/index.css');

var _index2 = _interopRequireDefault(_index);

var _lib = require('element-ui/lib');

var _lib2 = _interopRequireDefault(_lib);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _app = require('./app.vue');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_lib2.default);
document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(document.createElement('app'));
  new _vue2.default().$mount('#app');

  console.log(app);
});
//# sourceMappingURL=app.js.map
