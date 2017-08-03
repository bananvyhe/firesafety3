const path = require('path');

module.exports = {
  entry: './build/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};