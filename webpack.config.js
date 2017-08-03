const path = require('path');

module.exports = {
  entry: './build/js/app.js',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'app/assets/javascripts')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
};