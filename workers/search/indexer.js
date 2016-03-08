'use strict'

const debug = require('debug')('app:worker:search:indexer')

/**
 * Индексатор Firebase коллекций.
 * Подписывается на добавлени/изменение/удаление записей и индексирует их эластиксерчем
 */
class Indexer {
  constructor (options) {
    Object.assign(this, options)
  }

  // Запустить индексер
  start () {
    debug('start indexer %s/%s', this.index, this.type)
    this.ref.on('child_added', this.createIndex.bind(this))
    this.ref.on('child_changed', this.createOrUpdateIndex.bind(this))
    this.ref.on('child_removed', this.deleteIndex.bind(this))
  }

  // Остановить индексер
  stop () {
    debug('stop indexer %s/%s', this.index, this.type)
    this.ref.off()
  }

  // Создать индекс
  // - Если такой индекс уже есть, то ничего не делаем
  createIndex (snap) {
    return this.client.exists({
      index: this.index,
      type: this.type,
      id: snap.key()
    })
    .then((exists) => exists ? this.createOrUpdateIndex(snap) : null)
    .catch((err) => debug(err.message, err))
  }

  // Создать индекс или обновить
  createOrUpdateIndex (snap) {
    debug('index %s/%s/%s', this.index, this.type, snap.key())
    return this.client.index({
      index: this.index,
      type: this.type,
      id: snap.key(),
      body: snap.val()
    })
    .catch((err) => debug(err.message, err))
  }

  // Удалить индекс
  deleteIndex (snap) {
    debug('delete %s/%s/%s', this.index, this.type, snap.key())
    return this.client.delete({
      index: this.index,
      type: this.type,
      id: snap.key()
    })
    .catch((err) => debug(err.message, err))
  }
}

module.exports = Indexer
