import socketCluster from 'socketcluster-client'
import React, { Component } from 'react'
// import reactMixin from 'react-mixin'

export var socket = socketCluster.connect({
  hostname: 'localhost',
  port: 8000
})

socket.on('error', onError)
socket.on('connect', onConnect)

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
    changes.on('subscribeFail', subscribeFailed)

    socket.on(name + ':update', this.onUpdate)

    socket.emit(name + ':find', {page: 1})

    this.changes = changes
  }

  componentWillUnmount () {
    let name = this.props.name

    socket.unsubscribe(name + ':changes')

    this.changes.unwatch(this.onWatch)

    socket.off('subscribeFail', subscribeFailed)
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

  componentWillReceiveProps (nextProps) {
    if (nextProps.id !== this.props.id) {
      this.__off(this.props.id, () => {
        this.__on(nextProps.id)
      })
    }
  }

  componentDidMount () {
    this.__on(this.props.id)
  }

  componentWillUnmount () {
    this.__off(this.props.id)
  }

  render () {
    let props = this.props
    let Component = props.component
    let data = this.state.data

    return <Component {...data} />
  }

  __on (id, cb) {
    let props = this.props
    let name = props.name
    var changes = socket.subscribe(name + ':' + id + ':update')
    changes.on('subscribeFail', subscribeFailed)
    changes.watch(this.onUpdate)
    socket.emit(name + ':findOne', { id })
    socket.on(name + ':' + id + ':update', this.onUpdate)

    this.changes = changes

    cb && cb()
  }

  __off (id, cb) {
    let props = this.props
    let name = props.name
    socket.unsubscribe(name + ':' + id + ':update')
    this.changes.unwatch(this.onWatch)
    socket.off('subscribeFail', subscribeFailed)
    socket.off(name + ':' + id + ':update', this.onUpdate)

    cb && cb()
  }

  __onUpdate (data, done) {
    this.setState({ data }, done)
  }
}
