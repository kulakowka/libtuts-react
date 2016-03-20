import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './about.styl'
import helpers from '../../utils/helpers'
import Section from '../section/section'

function AboutProject (props) {
  console.log('AboutProject', props)
  const slug = props.slug

  if (!slug) return <p>Loading...</p>

  const url = helpers.projectUrl(slug)
  const shieldSrc = helpers.projectShieldUrl(slug)
  let {
    name,
    description,
    homepage,
    repository
  } = props

  let languages = helpers.tagsByCommas(helpers.toArray(props.languages), renderLanguage)
  let keywords = helpers.tagsByCommas(props.keywords, renderKeyword)

  return (
    <div className={styles.about} key={slug}>
      <h1>{name}</h1>

      {description
        ? <p className={styles.description}>{description}</p>
        : null
      }

      <div className={styles.shields}>
        <Link to={url}>
          <img src={shieldSrc} alt='Tutorials'/>
        </Link>
        {' '}
      </div>

      <Section>
        <dl className={styles.meta}>
          {homepage ? <span>
            <dt>Homepage:</dt>
            <dd><a href={homepage} target='_blank'>{homepage}</a></dd>
          </span> : null}

          {repository ? <span>
            <dt>Repository:</dt>
            <dd><a href={repository} target='_blank'>{repository}</a></dd>
          </span> : null}

          {languages.length
            ? <span><dt>Languages:</dt><dd>{languages}</dd></span>
            : null}

          {keywords.length
            ? <span><dt>Keywords:</dt><dd>{keywords}</dd></span>
            : null}
        </dl>
      </Section>
    </div>
  )
}

// AboutProject.propTypes = {
//   title: PropTypes.string.isRequired,
//   source: PropTypes.string,
//   author: PropTypes.string.isRequired,
//   createdAt: PropTypes.number.isRequired,
//   domain: PropTypes.string,
//   commentsCount: PropTypes.number
// }

export default AboutProject

function renderLanguage (language) {
  return (
    <Link to={helpers.languageUrl(language.slug)} key={language.slug}>
      {language.name}
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
