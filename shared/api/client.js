import socketCluster from 'socketcluster-client'
import React, { Component, PropTypes } from 'react'

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

// livelist

// <LiveList name='tutorials' component={Tutorials} />
export class LiveList extends Component {
  constructor (props, context) {
    super(props, context)

    this.onUpdate = (item) => {
      let data = this.state.data
      data.set(item.id, item)
      this.setState({ data })
    }

    this.receiveItems = (items, next) => {
      let name = this.props.name
      let data = new Map()
      let channels = new Map()

      items.forEach((item) => {
        let channel = socket.subscribe(name + '/' + item.id)
        channel.watch(this.onUpdate)
        channels.set(item.id, channel)
        data.set(item.id, item)
      })

      this.setState({ data, channels }, next)
    }

    this.state = {
      data: new Map(),
      channels: new Map()
    }
  }

  componentDidMount () {
    let name = this.props.name
    let params = this.props.params

    socket.emit('get ' + name, params)
    socket.on('receive ' + name, this.receiveItems)
  }

  componentWillUnmount () {
    let name = this.props.name

    socket.off('receive ' + name, this.receiveItems)

    this.state.channels.forEach((channel) => {
      channel.destroy()
    })
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
  params: PropTypes.object,
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}

// /////////// LiveItem ///////////////// //

// <LiveItem name='tutorial' params={params} component={Tutorial} />
export class LiveItem extends Component {
  constructor (props, context) {
    super(props, context)

    this.onUpdate = (data) => {
      this.setState({ data })
    }

    this.receiveItem = (data, next) => {
      let name = this.props.name
      let channels = new Map()
      console.log('subscribe', name + 's/' + data.id)
      let channel = socket.subscribe(name + 's/' + data.id)
      channel.watch(this.onUpdate)
      channels.set(data.id, channel)
      this.setState({ data, channels }, next)
    }

    this.state = {
      data: {},
      channels: new Map()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params !== this.props.params) {
      let params = nextProps.params
      let name = nextProps.name

      socket.emit('get ' + name, params)
    }
  }

  componentDidMount () {
    let params = this.props.params
    let name = this.props.name

    socket.emit('get ' + name, params)
    socket.on('receive ' + name, this.receiveItem)
  }

  componentWillUnmount () {
    let name = this.props.name

    socket.off('receive ' + name, this.receiveItem)

    this.state.channels.forEach((channel) => {
      console.log('destroy', channel.name)
      channel.destroy()
    })
  }

  render () {
    let props = this.props
    let Component = props.component
    let data = this.state.data

    return <Component {...props} data={data} />
  }
}

LiveItem.propTypes = {
  params: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}
