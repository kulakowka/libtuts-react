var elasticsearch = require('elasticsearch')
var config = require('config')
// Очень странный баг,
// но почему то просто присвоить config.get('elasticsearch') не получается.
// вываливает ошибку
var options = Object.assign({}, config.get('elasticsearch'))

var client = new elasticsearch.Client(options)

module.exports = client
