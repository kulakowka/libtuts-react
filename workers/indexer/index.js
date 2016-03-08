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
  index: 'search',
  type: 'tutorials',
  client
})

// Create Indexer for Languages
var languagesIndexer = new Indexer({
  ref: ref.child('languages'),
  index: 'search',
  type: 'languages',
  client
})

// Create Indexer for Projects
var projectsIndexer = new Indexer({
  ref: ref.child('projects'),
  index: 'search',
  type: 'projects',
  client
})

// Start indexing
tutorialsIndexer.start()
languagesIndexer.start()
projectsIndexer.start()
