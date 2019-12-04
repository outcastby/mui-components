import React, { useEffect } from 'react'
import Icon from '@material-ui/core/Icon'
import styles from './InfoPopover.module.scss'
import Popover from '@material-ui/core/Popover'
import cs from 'classnames'
import { Remarkable } from 'remarkable'

const md = new Remarkable()

export default function InfoPopover({ body, iconClass }) {
  if (!body) return null

  useEffect(() => {
    if (body.includes('.md')) {
      fetch(body)
        .then((res) => res.text())
        .then(setFormattedBody)
    }
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [formattedBody, setFormattedBody] = React.useState(body)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
    event.preventDefault()
    event.stopPropagation()
  }

  const handlePopoverClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)

  return (
    <>
      <Icon
        aria-haspopup="true"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        className={cs(styles.icon, iconClass)}
        onClick={handlePopoverOpen}
      >
        info
      </Icon>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        id="mouse-over-popover"
        onClose={handlePopoverClose}
        open={open}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <div className="m20" dangerouslySetInnerHTML={{ __html: md.render(formattedBody) }} />
      </Popover>
    </>
  )
}
