import BaseTab from '@material-ui/core/Tab'
import BaseTabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import InfoPopover from '../../../../../components/InfoPopover'

const Tabs = ({ activeTab, fields, onChangeTab, className }) => {
  return (
    <StyledTabs centered className={className} onChange={(_e, index) => onChangeTab(index)} value={activeTab}>
      {fields.map((f) => (
        <StyledTab key={f.name} label={<TabLabel {...f} />} />
      ))}
    </StyledTabs>
  )
}

const StyledTabs = withStyles({
  indicator: {
    backgroundColor: '#9c27b0',
  },
})(BaseTabs)

const StyledTab = withStyles({
  root: {
    '&:hover': {
      color: '#9c27b0',
      opacity: 1,
    },
    '&$selected': {
      color: '#9c27b0',
    },
    '&:focus': {
      color: '#9c27b0',
    },
  },
  selected: {},
})((props) => <BaseTab disableRipple {...props} />)

const TabLabel = ({ info, tab }) => {
  return (
    <div className="align-middle">
      <span className="test-class">{tab}</span>
      <InfoPopover body={info} />
    </div>
  )
}

export default Tabs
