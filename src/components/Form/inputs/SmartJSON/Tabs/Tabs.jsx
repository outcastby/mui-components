import Tab from '@material-ui/core/Tab'
import BaseTabs from '@material-ui/core/Tabs'
import React from 'react'
import InfoPopover from '../../../../../components/InfoPopover'

export default function Tabs({ activeTab, fields, onChangeTab, className }) {
  return (
    <BaseTabs
      centered
      className={className}
      indicatorColor="primary"
      onChange={(_e, index) => onChangeTab(index)}
      textColor="primary"
      value={activeTab}
    >
      {fields.map((f) => (
        <Tab key={f.name} label={<TabLabel {...f} />} />
      ))}
    </BaseTabs>
  )
}

const TabLabel = ({ info, tab }) => {
  return (
    <div className="align-middle">
      <span>{tab}</span>
      <InfoPopover body={info} />
    </div>
  )
}
