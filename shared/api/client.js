import socketCluster from 'socketcluster-client'

export var socket = socketCluster.connect({
  hostname: 'localhost',
  port: 8000
})

socket.on('error', onError)
socket.on('connect', onConnect)

export var FeedMixin = {
  // constructor (props, context) {
  //   super(props, context)
  // },

  connectToFeed (name) {
    this._name = name
  },

  getArray () {
    let map = this.state && this.state.items || new Map()
    let items = []
    map.forEach((item) => {
      items.push(item)
    })
    // items.reverse()
    items.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1
      }
      if (a.createdAt < b.createdAt) {
        return 1
      }
      // a должно быть равным b
      return 0
    })
    return items
  },

  componentDidMount () {
    // console.log('componentDidMount', this.options)

    socket.emit('get' + this._name, {page: 1})
    socket.on('receive' + this._name, (data, done) => {
      let items = new Map()
      data.forEach((item) => items.set(item.id, item))
      this.setState({ items }, done)
    })
    var changes = socket.subscribe('changes' + this._name)
    changes.on('subscribeFail', subscribeFailed)
    changes.watch((data) => {
      console.log()
      let items = this.state.items
      if (data.oldValue && data.isSaved) {
        if (data.oldValue.id === data.value.id) {
          items.set(data.value.id, data.value)
        } else {
          items.delete(data.oldValue.id)
          items.set(data.value.id, data.value)
        }
      } else if (data.isSaved) {
        items.set(data.value.id, data.value)
      } else {
        items.delete(data.value.id)
      }
      this.setState({items})
    })
    // super.componentDidMount(...arguments)
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
  // alert('Чатик больше не работает! Что-то сломалось!!!11!!111!')
  console.log('Socket error - ', err)
}

export function subscribeFailed (err) {
  console.log('Failed to subscribe to the "user/changes" channel due to error: ' + err)
}
