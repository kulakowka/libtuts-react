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
  seeder.createFakeLanguages(30),
  seeder.createFakeProjects(30),
  seeder.createFakeTutorials(100),
  seeder.createFakeComments(500)
], (err, results) => {
  if (err) return debug(err.message, err)

  // Start seeder
  seeder
  .start()
  .then(() => debug('seed complete'))
  .then(() => process.exit(0))
  .catch(console.log)
})
