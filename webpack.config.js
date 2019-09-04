const path = require('path');

module.exports = {
  entry: './public/javascripts/src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts/dist'),
    filename: 'bundle.js'
  }
};