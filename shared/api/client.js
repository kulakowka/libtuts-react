import socketCluster from 'socketcluster-client'

export var socket = socketCluster.connect({
  hostname: 'localhost',
  port: 8000
})

socket.on('error', onError)
socket.on('connect', onConnect)

export var FeedMixin = {

  // Public methods

  on (name) {
    socket.emit(name + ':find', {page: 1})

    let onUpdateHandler = this.__onUpdate.bind(this, name)
    this.__handlers.onUpdate = onUpdateHandler
    socket.on(name + ':update', onUpdateHandler)

    var changes = socket.subscribe(name + ':changes')

    this.__handlers.onSubscribeFail = subscribeFailed
    changes.on('subscribeFail', subscribeFailed)

    let onWatchHandler = this.__onWatch.bind(this, name)
    this.__handlers.onWatch = onWatchHandler
    changes.watch(onWatchHandler)

    this.__handlers.changes = changes
  },

  off (name) {
    socket.off(name + ':update', this.__handlers.onUpdate)
    socket.unsubscribe(name + ':changes')
    socket.off('subscribeFail', this.__handlers.onSubscribeFail)
    this.__handlers.changes.unwatch(this.__handlers.onWatch)
  },

  getArray (name, sort) {
    sort = sort || 'id'
    let items = []
    this.state[name].forEach((item) => items.push(item))

    items.sort((a, b) => {
      if (a[sort] > b[sort]) return -1
      if (a[sort] < b[sort]) return 1
      return 0
    })

    return items
  },

  // Private methods and propertiees

  __handlers: {},

  __onSet (name, item) {
    let items = this.state[name]
    items.set(item.id, item)
    this.setState({ [name]: items })
  },

  __onDelete (name, item) {
    let items = this.state[name]
    items.delete(item.id)
    this.setState({ [name]: items })
  },

  __onUpdate (name, data, done) {
    let items = new Map()

    data.forEach((item) => {
      items.set(item.id, item)
    })

    this.setState({
      [name]: items
    })

    done()
  },

  __onWatch (name, data) {
    if (data.isSaved) {
      if (data.oldValue && data.oldValue.id !== data.value.id) {
        this.__onDelete(name, data.oldValue)
      }
      this.__onSet(name, data.value)
    } else {
      this.__onDelete(name, data.value)
    }
  }
}

function onConnect (status) {
  if (status.isAuthenticated) {
    console.log('CONNECTED: is Authenticated', status)
  } else {
    console.log('CONNECTED: is Guest', status)
  }
}

function onError (err) {
  console.log('Socket error - ', err)
}

function subscribeFailed (err) {
  console.log('Failed to subscribe to the "user/changes" channel due to error: ' + err)
}
