import React, {Component} from 'react'
import styles from './styles.scss'

console.log('styles',    styles)
export default class extends Component {
  render() {
    return <div className={styles.con}>
      <h2>!!!!!Welcome to React components</h2>
    </div>
  }
}
