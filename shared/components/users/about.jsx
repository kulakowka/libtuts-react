import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './about.styl'
import Section from '../section/section'

function AboutUser (props) {
  const {
    username,
    fullName,
    homepage,
    about
  } = props

  return (
    <div className={styles.aboutUser} key={username}>
      <h1>{fullName}</h1>

      {about
        ? <p className={styles.about}>{about}</p>
        : null
      }

      {homepage ? <Section>
        <dl className={styles.meta}>
          <span><dt>Homepage:</dt><dd><Link to={homepage}>{homepage}</Link></dd></span>
        </dl>
      </Section> : null}

    </div>
  )
}

// AboutUser.propTypes = {
//   user: PropTypes.object.isRequired
// }

export default AboutUser
