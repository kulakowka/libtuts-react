'use strict'

/**
 * Для запуска этого воркера необходимо:
 *
 * 1. Убедиться что запущен elasticsearch
 *    или вручную запустить его на локальной
 *    тачке с помощью команды:
 *
 *    elasticsearch
 *
 * 2. Запустить скрипт воркера с помощью команды:
 *
 *    npm run worker:indexer
 *
 */

var client = require('../utils/elasticsearch')
var ref = require('../utils/firebase')
var Indexer = require('firebase-elasticsearch-indexer')

// Create Indexer for Tutorials
var tutorialsIndexer = new Indexer({
  ref: ref.child('tutorials'),
  index: 'libtuts',
  type: 'tutorials',
  client
})

// Create Indexer for Languages
var languagesIndexer = new Indexer({
  ref: ref.child('languages'),
  index: 'libtuts',
  type: 'languages',
  client
})

// Create Indexer for Projects
var projectsIndexer = new Indexer({
  ref: ref.child('projects'),
  index: 'libtuts',
  type: 'projects',
  client
})

// Start indexing
tutorialsIndexer.start()
languagesIndexer.start()
projectsIndexer.start()

// // Search Queue

// // listen for requests at https://<INSTANCE>.firebaseio.com/search/request
// var queue = firebase.child('search')

// queue.child('request').on('child_added', processRequest)

// function processRequest (snap) {
//   snap.ref().remove() // удаляет запрос из базы firebase как только мы его получили

//   var data = snap.val()

//   // Query ElasticSearch
//   Elastic.client.search({
//     index: 'libtuts',
//     type: 'tutorials',
//     body: {
//       query: data.query
//     }
//   }).then((body) => {
//     queue.child('response/' + snap.key()).set({
//       tutorials: body.hits.hits.reduce((tutorials, hit) => {
//         tutorials[hit._id] = hit._source
//         return tutorials
//       }, {}),
//       total: body.hits.total
//     })
//   }).catch((error) => {
//     console.log(error)
//   })
// }
