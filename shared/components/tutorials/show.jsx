import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './show.styl'
import helpers from '../../utils/helpers'
import moment from 'moment'
import Button from '../button/button'
import Section from '../section/section'

function Tutorial (props) {
  const id = props.id

  if (!id) return <p>Loading...</p>

  let {
    title,
    content,
    source,
    domain,
    createdAt,
    updatedAt,
    author
  } = props

  let languages = helpers.tagsByCommas(props.languages, renderLanguage)
  let projects = helpers.tagsByCommas(props.projects, renderProject)
  let keywords = helpers.tagsByCommas(props.keywords, renderKeyword)

  const getContent = () => ({__html: content})

  return (
    <article className={styles.tutorial} key={id}>
      <div className={styles.edit}>
        <Button to={helpers.tutorialEditUrl(id)}>Edit tutorial</Button>
      </div>

      <h1>{title}</h1>

      {content
        ? <Section><div className={styles.content} dangerouslySetInnerHTML={getContent()}/></Section>
        : null}

      <Section>
        <dl className={styles.meta}>
          {source ? <span>
            <dt>Source URL:</dt>
            <dd><a href={source} target='_blank'>{source}</a></dd>
          </span> : null}

          {domain ? <span>
            <dt>Domain:</dt>
            <dd><Link to={helpers.domainUrl(domain)}>{domain}</Link></dd>
          </span> : null}

          <dt>Created at:</dt>
          <dd>{moment(createdAt).fromNow()}</dd>

          <dt>Updated at:</dt>
          <dd>{moment(updatedAt).fromNow()}</dd>

          <dt>Created by:</dt>
          <dd>
            <Link to={helpers.userUrl(author.username)}>{author.fullName}</Link>
          </dd>

          {languages.length
            ? <span><dt>Languages:</dt><dd>{languages}</dd></span>
            : null}

          {projects.length
            ? <span><dt>Projects:</dt><dd>{projects}</dd></span>
            : null}

          {keywords.length
            ? <span><dt>Keywords:</dt><dd>{keywords}</dd></span>
            : null}

        </dl>
      </Section>
    </article>
  )
}

// AboutLanguage.propTypes = {
//   title: PropTypes.string.isRequired,
//   source: PropTypes.string,
//   author: PropTypes.string.isRequired,
//   createdAt: PropTypes.number.isRequired,
//   domain: PropTypes.string,
//   commentsCount: PropTypes.number
// }

export default Tutorial

function renderLanguage (language) {
  return (
    <Link to={helpers.languageUrl(language.slug)} key={language.slug}>
      {language.name}
    </Link>
  )
}

function renderProject (project) {
  return (
    <Link to={helpers.projectUrl(project.slug)} key={project.slug}>
      {project.name}
    </Link>
  )
}

function renderKeyword (keyword, index) {
  return (
    <Link to={helpers.keywordUrl(keyword)} key={index}>
      {keyword}
    </Link>
  )
}
