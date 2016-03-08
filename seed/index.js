'use strict'

const debug = require('debug')('app:seed')
const ref = require('../workers/utils/firebase')
const data = require('./data')

ref
  .set(data)
  .then(() => debug('seed complete'))
  .then(() => process.exit(0))
  .catch(console.log)
