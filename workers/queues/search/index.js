'use strict'

var ref = require('../../utils/firebase')
var client = require('../../utils/elasticsearch')
var SearchWorker = require('firebase-elasticsearch-search-worker')

var tutorialsSearchWorker = new SearchWorker({
  ref: ref.child('search/tutorials'),
  client
})

tutorialsSearchWorker.start()
