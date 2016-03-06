import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './about.styl'

function AboutUser (props) {
  const id = props.user['.key']
  const {name, homepage, about} = props.user

  return (
    <div className={styles.aboutUser} key={id}>
      <h1>{name}</h1>

      {about
        ? <p className={styles.about}>{about}</p>
        : null
      }

      <section>
        <dl className={styles.meta}>
          {homepage
            ? <span><dt>Homepage:</dt><dd><Link to={homepage}>{homepage}</Link></dd></span>
            : null
          }
        </dl>
      </section>
    </div>
  )
}

AboutUser.propTypes = {
  user: PropTypes.object.isRequired
}

export default AboutUser
