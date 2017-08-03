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

new _vue2.default({
  el: '#app',
  render: function render(h) {
    return h(_app2.default);
  }
});
//# sourceMappingURL=app.js.map
