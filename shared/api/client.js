import socketCluster from 'socketcluster-client'
import React, { Component, PropTypes } from 'react'
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

// <LiveList name='tutorials' component={Tutorials} />
export class LiveList extends Component {
  constructor (props, context) {
    super(props, context)

    this.onItems = (items, next) => {
      console.log('onItems', items)

      let data = new Map()
      items.forEach((item) => {
        data.set(item.id, item)
      })
      this.setState({ data }, next)
    }

    this.onSet = (item, next) => {
      console.log('onSet', item)

      let data = this.state.data
      data.set(item.id, item)
      this.setState({ data }, next)
    }

    this.onDelete = (item, next) => {
      console.log('onDelete', item)

      let data = this.state.data
      data.delete(item.id)
      this.setState({ data }, next)
    }

    this.state = {
      data: new Map()
    }
  }

  componentDidMount () {
    let name = this.props.name

    // console.log('componentDidMount', name, this)

    // socket.on(name, this.onItems)

    socket.on(name + ':set', this.onSet)
    socket.on(name + ':delete', this.onDelete)

    socket.emit(name + ':start', this.props)
  }

  componentWillUnmount () {
    let name = this.props.name

    // console.log('componentWillUnmount', name, this)

    // socket.off(name, this.onItems)
    socket.emit(name + ':stop', this.props)

    socket.off(name + ':set', this.onSet)
    socket.off(name + ':delete', this.onDelete)
  }

  render () {
    let props = this.props
    let data = this.__getArray('createdAt')
    let Component = props.component

    return <Component {...props} data={data} />
  }

  // Private methods and propertiees

  __getArray (sort) {
    sort = sort || 'id'

    let items = []

    this.state.data.forEach((item) => items.push(item))

    items.sort((a, b) => {
      if (a[sort] > b[sort]) return -1
      if (a[sort] < b[sort]) return 1
      return 0
    })

    return items
  }
}

LiveList.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
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

LiveItem.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}
