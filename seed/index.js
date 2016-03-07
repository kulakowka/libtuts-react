'use strict'

const debug = require('debug')('app:seed:all')
const ref = require('../utils/firebase')
const data = require('./data')

ref
  .set(data)
  .then(() => debug('seed complete'))
  .then(() => process.exit(0))
  .catch(console.log)
