'use strict'

var debug = require('debug')('app:seed')
var ref = require('../utils/firebase')
var data = require('./data')

ref
  .set(data)
  .then(() => debug('seed complete'))
  .then(() => process.exit(0))
  .catch(console.log)
