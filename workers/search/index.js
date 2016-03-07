'use strict'

const debug = require('debug')('app:worker:search')
const firebase = require('../../utils/firebase')
const Elastic = require('./elasticsearch')

// listen for changes to Firebase data
const tutorialsRef = firebase.child('Tutorials')
tutorialsRef.on('child_added', Elastic.createIndex)
tutorialsRef.on('child_changed', Elastic.createOrUpdateIndex)
tutorialsRef.on('child_removed', Elastic.removeIndex)

// Search Queue

// listen for requests at https://<INSTANCE>.firebaseio.com/search/request
var queue = firebase.child('search')

queue.child('request').on('child_added', processRequest)

function processRequest (snap) {
  snap.ref().remove() // удаляет запрос из базы firebase как только мы его получили

  var data = snap.val()

  // Query ElasticSearch
  Elastic.client.search({
    index: 'libtuts',
    type: 'tutorials',
    body: {
      query: data.query
    }
  }).then((body) => {
    queue.child('response/' + snap.key()).set({
      tutorials: body.hits.hits.reduce((tutorials, hit) => {
        tutorials[hit._id] = hit._source
        return tutorials
      }, {}),
      total: body.hits.total
    })
  }).catch((error) => {
    console.log(error)
  })
}
