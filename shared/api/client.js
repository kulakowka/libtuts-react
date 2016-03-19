import socketCluster from 'socketcluster-client'

export var socket = socketCluster.connect({
  hostname: 'localhost',
  port: 8000
})

socket.on('error', onError)
socket.on('connect', onConnect)

export var FeedMixin = {
  connectToFeed (name) {
    this._name = name
    this._itemsName = name.toLowerCase()
  },

  getArray () {
    let map = this.state && this.state[this._itemsName] || new Map()
    let items = []

    map.forEach((item) => {
      items.push(item)
    })

    // items.reverse()

    items.sort(function (a, b) {
      if (a.createdAt > b.createdAt) return -1
      if (a.createdAt < b.createdAt) return 1
      return 0
    })
    return items
  },

  componentDidMount () {
    socket.emit(this._name + ':find', {page: 1})

    socket.on(this._name + ':update', (data, done) => {
      let items = new Map()

      data.forEach((item) => items.set(item.id, item))

      this.setState({
        [this._itemsName]: items
      }, done)
    })

    var changes = socket.subscribe(this._name + ':changes')

    changes.on('subscribeFail', subscribeFailed)

    changes.watch((data) => {
      let items = this.state[this._itemsName]

      if (data.isSaved) {
        if (data.oldValue && data.oldValue.id !== data.value.id) {
          items.delete(data.oldValue.id)
        }
        items.set(data.value.id, data.value)
      } else {
        items.delete(data.value.id)
      }

      this.setState({ [this._itemsName]: items })
    })
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
