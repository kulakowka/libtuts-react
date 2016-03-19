import socketCluster from 'socketcluster-client'
import React, { Component } from 'react'
// import reactMixin from 'react-mixin'

export var socket = socketCluster.connect({
  hostname: 'localhost',
  port: 8000
})

socket.on('error', onError)
socket.on('connect', onConnect)

// export var FeedMixin = {

//   // Public methods

//   connect (name) {
//     console.log('connect', this)
//     this.__subscriptions = {}
//     this.__handlers = {}
//     this.__subscriptions[name] = true
//     this.state = {
//       [name]: new Map()
//     }
//   },

//   getArray (name, sort) {
//     sort = sort || 'id'
//     let items = []
//     if (this.state && this.state[name]) this.state[name].forEach((item) => items.push(item))

//     items.sort((a, b) => {
//       if (a[sort] > b[sort]) return -1
//       if (a[sort] < b[sort]) return 1
//       return 0
//     })

//     return items
//   },

//   // Mixed methods

//   componentDidMount () {
//     console.log('componentDidMount', this)
//     console.log(this.__subscriptions)
//     Object.keys(this.__subscriptions).forEach((name) => {
//       // add handlers
//       this.__on(name)
//     })
//   },

//   componentWillUnmount () {
//     console.log('componentWillUnmount', this)
//     Object.keys(this.__handlers).forEach((name) => {
//       // remove handlers
//       this.__off(name)
//     })
//   },

//   // Private methods and propertiees

//   __on (name) {
//     let onUpdate = this.__onUpdate.bind(this, name)
//     let onWatch = this.__onWatch.bind(this, name)
//     var changes = socket.subscribe(name + ':changes')

//     changes.on('subscribeFail', subscribeFailed)
//     changes.watch(onWatch)
//     socket.on(name + ':update', onUpdate)
//     socket.emit(name + ':find', {page: 1})

//     this.__handlers[name] = {
//       changes,
//       onUpdate,
//       onWatch,
//       subscribeFailed
//     }
//   },

//   __off (name) {
//     this.__handlers[name].changes.unwatch(this.__handlers[name].onWatch)
//     socket.off(name + ':update', this.__handlers[name].onUpdate)
//     socket.off('subscribeFail', this.__handlers[name].onSubscribeFail)
//     socket.unsubscribe(name + ':changes')
//     delete this.__handlers[name]
//   },

//   __onSet (name, data, done) {
//     // console.log('__onSet', name, data)
//     let items = this.state[name]
//     items.set(data.id, data)
//     this.setState({ [name]: items }, done)
//   },

//   __onDelete (name, data, done) {
//     // console.log('__onDelete', name, data)
//     let items = this.state[name]
//     items.delete(data.id)
//     this.setState({ [name]: items }, done)
//   },

//   __onUpdate (name, data, done) {
//     // console.log('__onUpdate', name, data)
//     let items = new Map()

//     data.forEach((item) => {
//       items.set(item.id, item)
//     })

//     this.setState({
//       [name]: items
//     }, done)
//   },

//   __onWatch (name, data) {
//     // console.log('__onWatch', name, data)
//     if (data.isSaved) {
//       if (data.oldValue && data.oldValue.id !== data.value.id) {
//         this.__onDelete(name, data.oldValue)
//       }
//       this.__onSet(name, data.value)
//     } else {
//       this.__onDelete(name, data.value)
//     }
//   }
// }

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

// livelist

export class LiveList extends Component {
  constructor (props, context) {
    super(props, context)

    this.onUpdate = this.__onUpdate.bind(this)
    this.onWatch = this.__onWatch.bind(this)

    this.state = {
      data: new Map()
    }
  }

  componentDidMount () {
    let name = this.props.name

    var changes = socket.subscribe(name + ':changes')

    changes.watch(this.onWatch)
    // changes.on('subscribeFail', subscribeFailed)

    socket.on(name + ':update', this.onUpdate)

    socket.emit(name + ':find', {page: 1})

    this.changes = changes
  }

  componentWillUnmount () {
    let name = this.props.name

    socket.unsubscribe(name + ':changes')

    this.changes.unwatch(this.onWatch)

    // socket.off('subscribeFail', subscribeFailed)
    socket.off(name + ':update', this.onUpdate)
  }

  render () {
    let props = this.props
    let name = props.name
    let data = this.__getArray('createdAt')
    let Component = props.component
    let newProps = {[name]: data}

    return <Component {...newProps} />
  }

  // Private methods and propertiees

  __getArray (sort) {
    sort = sort || 'id'

    let items = []

    // console.log('__getArray data:', this.state.data)

    this.state.data.forEach((item) => items.push(item))

    items.sort((a, b) => {
      if (a[sort] > b[sort]) return -1
      if (a[sort] < b[sort]) return 1
      return 0
    })

    // console.log('__getArray items:', items)

    return items
  }

  __onSet (item, done) {
    let data = this.state.data

    data.set(item.id, item)

    this.setState({ data }, done)
  }

  __onDelete (item, done) {
    let data = this.state.data

    data.delete(item.id)

    this.setState({ data }, done)
  }

  __onUpdate (items, done) {
    let data = new Map()

    items.forEach((item) => {
      data.set(item.id, item)
    })

    this.setState({ data }, done)
  }

  __onWatch (data) {
    if (data.isSaved) {
      if (data.oldValue && data.oldValue.id !== data.value.id) {
        this.__onDelete(data.oldValue)
      }
      this.__onSet(data.value)
    } else {
      this.__onDelete(data.value)
    }
  }
}

export class LiveItem extends Component {
  constructor (props, context) {
    super(props, context)

    this.onUpdate = this.__onUpdate.bind(this)

    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    let props = this.props
    let id = props.id
    let name = props.name

    var changes = socket.subscribe(name + ':' + id + ':update')

    changes.watch(this.onUpdate)

    socket.emit(name + ':findOne', { id })

    socket.on(name + ':' + id + ':update', this.onUpdate)

    this.changes = changes
  }

  componentWillUnmount () {
    let props = this.props
    let id = props.id
    let name = props.name

    socket.unsubscribe(name + ':' + id + ':update')

    this.changes.unwatch(this.onUpdate)

    socket.off(name + ':' + id + ':update', this.onUpdate)
  }

  render () {
    let props = this.props
    let Component = props.component
    let data = this.state.data

    return <Component {...data} />
  }

  __onUpdate (data, done) {
    console.log('__onUpdate', data)
    this.setState({ data }, done)
  }
}
