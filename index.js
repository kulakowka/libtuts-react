require('babel-core/register')
require('babel-polyfill')

var hook = require('css-modules-require-hook')
var stylus = require('stylus')

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: ['.styl'],
  preprocessCss: function (css, filename) {
    return stylus(css)
      .set('filename', filename)
      .render()
  }
})

require('./server/server')
