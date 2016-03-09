'use strict'

var debug = require('debug')('app:seed')
var ref = require('../utils/firebase')
// var data = require('./data')
var Seeder = require('./fake')

// Create seeder instance
let seeder = new Seeder({ref})

// Define 50 fake users for creation
seeder
  .createFakeUsers(10)
  .createFakeLanguages(10)
  .createFakeProjects(10)
  .createFakeTutorials(3)
  .start() // Start seeder
  .then(() => debug('seed complete'))
  .then(() => process.exit(0))
  .catch(console.log)
