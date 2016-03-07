import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './show.styl'
import helpers from '../../../utils/helpers'
import moment from 'moment'
import Button from '../button/button'
import Section from '../section/section'

function Tutorial (props) {
  const id = props.tutorial['.key']

  if (!id) return <p>Loading...</p>

  let {
    title,
    contentHtml,
    source,
    domain,
    createdAt,
    updatedAt,
    author,
    languages,
    projects,
    keywords
  } = props.tutorial

  languages = helpers.toArray(languages)
  projects = helpers.toArray(projects)

  const content = () => ({__html: contentHtml})

  return (
    <article className={styles.tutorial} key={id}>
      <div className={styles.edit}>
        <Button to={helpers.tutorialEditUrl(id)}>Edit tutorial</Button>
      </div>

      <h1>{title}</h1>

      {!contentHtml ? null : (
        <Section>
          <div className={styles.content} dangerouslySetInnerHTML={content()}/>
        </Section>
      )}

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
            <Link to={helpers.userUrl(author)}>{author}</Link>
          </dd>

          {languages.length ? <span>
            <dt>Languages:</dt>
            <dd>
              {helpers.tagsByCommas(languages, (language, i) =>
                <Link to={helpers.languageUrl(language.key)} key={i}>
                  {language.value}
                </Link>)}
            </dd>
          </span> : null}

          {projects.length ? <span>
            <dt>Projects:</dt>
            <dd>
              {helpers.tagsByCommas(projects, (project, i) =>
                <Link to={helpers.projectUrl(project.key)} key={i}>
                  {project.value}
                </Link>)}
            </dd>
          </span> : null}

          {keywords.length ? <span>
            <dt>Keywords:</dt>
            <dd>
              {helpers.tagsByCommas(keywords, (keyword, i) =>
                <Link to={helpers.keywordUrl(keyword)} key={i}>
                  {keyword}
                </Link>)}
            </dd>
          </span> : null}

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
