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

    this.receiveItems = (items, next) => {
      let data = new Map()
      items.forEach((item) => {
        data.set(item.id, item)
      })
      this.setState({ data }, next)
    }

    this.state = {
      data: new Map()
    }
  }

  componentDidMount () {
    let name = this.props.name

    socket.emit('get ' + name, { last: 0 })
    socket.on('receive ' + name, this.receiveItems)
  }

  componentWillUnmount () {
    let name = this.props.name

    socket.off('receive ' + name, this.receiveItems)
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

// /////////// LiveItem ///////////////// //

export class LiveItem extends Component {
  constructor (props, context) {
    super(props, context)

    this.receiveItem = (data, next) => {
      // console.log('receiveItem', data)
      this.setState({ data }, next)
    }

    this.state = {
      data: {}
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

    console.log('componentDidMount', this.props)

    socket.emit('get ' + name, params)
    socket.on('receive ' + name, this.receiveItem)
  }

  componentWillUnmount () {
    let name = this.props.name

    socket.off('receive ' + name, this.receiveItem)
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
