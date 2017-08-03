'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(document.createElement('app'));
  var app = new _vue2.default({
    el: '#app',
    data: function data() {
      return {
        message: "Welcome to Pixeltech!"
      };
    }
  });

  console.log(app);
});
//# sourceMappingURL=app.js.map
