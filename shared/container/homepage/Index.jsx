import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Tutorials from '../../components/tutorials/list'
import Projects from '../../components/projects/list'
import Languages from '../../components/languages/list'
import { FeedMixin } from '../../api/client'

class HomepageContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      tutorials: new Map(),
      projects: new Map(),
      languages: new Map()
    }
  }

  componentDidMount () {
    this.on('tutorials')
    this.on('projects')
    this.on('languages')
  }

  componentWillUnmount () {
    this.off('tutorials')
    this.off('projects')
    this.off('languages')
  }

  render () {
    let tutorials = this.getArray('tutorials', 'createdAt')
    let projects = this.getArray('projects', 'createdAt')
    let languages = this.getArray('languages', 'createdAt')

    return (
      <Row>
        <Col size={2}>
          {projects.length
            ? <Projects projects={projects}/>
            : <p>loading...</p>}
        </Col>
        <Col size={5}>
          {tutorials.length
            ? <Tutorials tutorials={tutorials}/>
            : <p>loading...</p>}
        </Col>
        <Col size={3}>
          {languages.length
            ? <Languages languages={languages}/>
            : <p>loading...</p>}
        </Col>
      </Row>
    )
  }
}

reactMixin(HomepageContainer.prototype, FeedMixin)

HomepageContainer.contextTypes = {
  router: React.PropTypes.object
}

export default HomepageContainer
