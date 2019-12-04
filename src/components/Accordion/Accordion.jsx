import React, { useState } from 'react'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

// @material-ui/icons
import ExpandMore from '@material-ui/icons/ExpandMore'

import accordionStyle from './accordionStyle.jsx'

function Accordion({ active: act, classes, collapses }) {
  const [active, setActive] = useState(act)

  const handleChange = (panel) => (event, expanded) => {
    setActive({
      active: expanded ? panel : -1,
    })
  }

  return (
    <div className={classes.root}>
      {collapses.map((prop, key) => {
        return (
          <ExpansionPanel
            classes={{
              root: classes.expansionPanel,
              expanded: classes.expansionPanelExpanded,
            }}
            expanded={active === key}
            key={key}
            onChange={handleChange(key)}
          >
            <ExpansionPanelSummary
              classes={{
                root: classes.expansionPanelSummary,
                expanded: classes.expansionPanelSummaryExpaned,
                content: classes.expansionPanelSummaryContent,
                expandIcon: classes.expansionPanelSummaryExpandIcon,
              }}
              expandIcon={<ExpandMore />}
            >
              <h4 className={classes.title}>{prop.title}</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>{prop.content}</ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </div>
  )
}

Accordion.defaultProps = {
  active: -1,
}

Accordion.propTypes = {
  // index of the default active collapse
  active: PropTypes.number,
  classes: PropTypes.object.isRequired,
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      content: PropTypes.node,
    })
  ).isRequired,
}

export default withStyles(accordionStyle)(Accordion)
