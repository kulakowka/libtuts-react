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

    let onUpdate = this.__onUpdate.bind(this, name)
    let onWatch = this.__onWatch.bind(this, name)

    var changes = socket.subscribe(name + ':changes')

    changes.on('subscribeFail', subscribeFailed)
    changes.watch(onWatch)

    socket.on(name + ':update', onUpdate)

    this.__handlers[name] = {
      changes,
      onUpdate,
      onWatch,
      subscribeFailed
    }
    // console.log('on ' + name, this)
  },

  off (name) {
    socket.off(name + ':update', this.__handlers[name].onUpdate)
    socket.unsubscribe(name + ':changes')
    socket.off('subscribeFail', this.__handlers[name].onSubscribeFail)
    this.__handlers[name].changes.unwatch(this.__handlers[name].onWatch)
    delete this.__handlers[name]
    // console.log('off ' + name, this)
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

  __onSet (name, data) {
    console.log('__onSet', name, data)
    let items = this.state[name]
    items.set(data.id, data)
    this.setState({ [name]: items })
  },

  __onDelete (name, data) {
    console.log('__onDelete', name, data)
    let items = this.state[name]
    items.delete(data.id)
    this.setState({ [name]: items })
  },

  __onUpdate (name, data, done) {
    console.log('__onUpdate', name, data)
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
    console.log('__onWatch', name, data)
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
