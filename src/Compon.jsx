import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'

const Component = ({ text }) => {
  return <div className={styles.con}>
    <h3>{text}</h3>
  </div>
}

Component.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Component
