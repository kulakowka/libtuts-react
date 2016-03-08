'use strict'

var debug = require('debug')('app:worker:queue:tutorials')
var ref = require('../../utils/firebase')
var Queue = require('firebase-queue')
var marked = require('marked')

/**
 * Ссылки на ресурсы которые нам потребуются
 */
var queueRef = ref.child('queue/tutorials')
var specsRef = ref.child('queue/tutorials/specs')
var tutorialsRef = ref.child('Tutorials')

// Зададим спеки
specsRef.set({
  publish_tutorial: {
    in_progress_state: 'publish_tutorial_in_progress',
    finished_state: 'publish_tutorial_finished',
    error_state: 'publish_tutorial_failed',
    retries: 3
  },
  publish_tutorial_done: {
    start_state: 'publish_tutorial_finished',
    in_progress_state: 'publish_tutorial_done_in_progress'
  }
})

/**
 * Очередь для санитайза туториалов
 */
var publishTutorialQueue = new Queue(queueRef, {'specId': 'publish_tutorial'},
  (data, progress, resolve, reject) => {
    const key = tutorialsRef.push().key()

    data = processTutorial(data)

    tutorialsRef
    .child(key)
    .set(data)
    .then(() => {
      resolve({key})
    })
    .catch(reject)
    console.log('publish_tutorial', data)
  }
)

/**
 * Очередь для рассылки туториалов в нужные места
 */
var publishTutorialDoneQueue = new Queue(queueRef, {'specId': 'publish_tutorial_done'},
  (data, progress, resolve, reject) => {
    resolve(data)
    console.log('publish_tutorial_done', data)
  }
)

/**
 * Безопасное завершение работы скрипта
 */
process.on('SIGINT', () => {
  Promise.all([
    publishTutorialQueue.shutdown(),
    publishTutorialDoneQueue.shutdown()
  ]).then(() => process.exit(0))
})

function processTutorial (data) {
  if (data.content) data.contentHtml = marked(data.content)

  const time = new Date().getTime()

  data.createdAt = time
  data.updatedAt = time

  return data
}
