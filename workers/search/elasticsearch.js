'use strict'

const debug = require('debug')('app:worker:search:elasticsearch')
const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  // log: 'trace'
})

const Elastic = {
  client,

  createIndex (snap) {
    return client.exists({
      index: 'libtuts',
      type: 'tutorials',
      id: snap.key()
    }).then((exists) => {
      if (!exists) return Elastic.createOrUpdateIndex(snap)
      console.log('createIndex.response: index for "%s" already exist', snap.val().title)
    }).catch((err) => {
      console.log('createIndex.error: ', err)
    })
  },

  createOrUpdateIndex (snap) {
    return client.index({
      index: 'libtuts',
      type: 'tutorials',
      id: snap.key(),
      body: snap.val()
    }).then((response) => {
      console.log('createOrUpdateIndex.response: ', response)
    }).catch((err) => {
      console.log('createOrUpdateIndex.error: ', err)
    })
  },

  removeIndex (snap) {
    return client.delete({
      index: 'libtuts',
      type: 'tutorials',
      id: snap.key()
    }).then((response) => {
      // console.log('client.delete.response: ', response)
    }).catch((err) => {
      console.log('removeIndex.error: ', err)
    })
  }
}

module.exports = Elastic
