import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './about.styl'
import helpers from '../../../utils/helpers'
import Section from '../section/section'

function AboutProject (props) {
  const id = props.project['.key']

  if (!id) return <p>Loading...</p>

  const url = helpers.projectUrl(id)
  const shieldSrc = helpers.projectShieldUrl(id)
  let {
    name,
    description,
    languages,
    homepage,
    repository,
    keywords
  } = props.project
  languages = helpers.toArray(languages)

  return (
    <div className={styles.about} key={id}>
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

          {languages.length ? <span>
            <dt>Languages:</dt>
            <dd>
              {helpers.tagsByCommas(languages, (language, i) => <Link to={helpers.languageUrl(language.key)} key={i}>{language.value}</Link>)}
            </dd>
          </span> : null}

          {keywords.length ? <span>
            <dt>Keywords:</dt>
            <dd>
              {helpers.tagsByCommas(keywords, (keyword, i) => <Link to={helpers.keywordUrl(keyword)} key={i}>{keyword}</Link>)}
            </dd>
          </span> : null}
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
