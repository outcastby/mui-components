import React from 'react'
// import Icon from '@material-ui/core/Icon'
import styles from './InfoPopover.module.scss'
import Popover from '@material-ui/core/Popover'
import cs from 'classnames'
import { Remarkable } from 'remarkable'
import InfoIcon from '@material-ui/icons/Info'

const md = new Remarkable()

export default class InfoPopover extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null,
      formattedBody: props.body,
    }
    if (props.body && props.body.includes('.md')) {
      fetch(props.body)
        .then((res) => res.text())
        // eslint-disable-next-line react/no-unused-state
        .then((body) => this.setState({ formattedBody: body }))
    }
  }

  handlePopoverOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handlePopoverClose = () => this.setState({ anchorEl: null })

  isOpen = () => Boolean(this.state.anchorEl)

  render () {
    const { iconClass, body } = this.props
    const { anchorEl, formattedBody } = this.state
    if (!body) return null

    return (
      <div onClick={(e) => e.stopPropagation()}>
        <InfoIcon
          aria-haspopup="true"
          aria-owns={this.isOpen() ? 'mouse-over-popover' : undefined}
          className={cs(styles.icon, iconClass)}
          onClick={this.handlePopoverOpen}
        />
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          id="mouse-over-popover"
          onClose={this.handlePopoverClose}
          open={this.isOpen()}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <div className="m20" dangerouslySetInnerHTML={{ __html: md.render(formattedBody) }} />
        </Popover>
      </div>
    )
  }
}
