import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

// @material-ui/icons
import ExpandMore from '@material-ui/icons/ExpandMore'

import accordionStyle from './accordionStyle.jsx'

class Accordion extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    active: -1,
  }

  constructor(props) {
    super(props)
    this.state = {
      active: props.active,
    }
  }

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      active: expanded ? panel : -1,
    })
  }

  render() {
    const { collapses, classes } = this.props
    return (
      <div className={classes.root}>
        {collapses.map((prop, key) => {
          return (
            <ExpansionPanel
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded,
              }}
              expanded={this.state.active === key}
              key={key}
              onChange={this.handleChange(key)}
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
}

export default withStyles(accordionStyle)(Accordion)
