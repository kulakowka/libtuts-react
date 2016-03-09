'use strict'

var debug = require('debug')('app:seed')
var ref = require('../utils/firebase')
// var data = require('./data')
var Seeder = require('./fake')
var async = require('async')

// Create seeder instance
let seeder = new Seeder({ref})

// Generate fake data
async.series([
  seeder.createInfoPages(),
  seeder.createFakeUsers(30),
  seeder.createRealLanguages(),
  seeder.createFakeProjects(40),
  seeder.createFakeTutorials(50),
  seeder.createFakeComments(100)
], (err, results) => {
  if (err) return debug(err.message, err)

  // Start seeder
  seeder
  .start()
  .then(() => debug('seed complete'))
  .then(() => process.exit(0))
  .catch(console.log)
})
