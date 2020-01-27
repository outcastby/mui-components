import React, { Fragment } from 'react'
import GridItem from '../../../../components/Grid/GridItem.jsx'
import Tabs from './Tabs'
import GridContainer from '../../../../components/Grid/GridContainer'
import Accordion from '../../../../components/Accordion/Accordion'
import styles from './SmartJSON.module.scss'
import cs from 'classnames'

export default function SmartJSON (props) {
  const {
    value,
    grid = {},
    activeField,
    setActiveField,
    field: { view, fields, collapsed },
    errors,
  } = props

  return (
    <>
      <GridItem sm={grid.right === 0 ? 9 : 7} xs={12}>
        {view === 'tabs' && (
          <Tabs activeTab={activeField} className="mt20" fields={fields} onChangeTab={setActiveField} />
        )}
        {collapsed && (
          <div className="mt20">
            <Accordion
              collapses={[
                {
                  title: (
                    <GridContainer>
                      <GridItem sm={10} xs={12}>
                        <div className={cs('ml10', { [styles.labelRootError]: errors })}>{value && value.type}</div>
                      </GridItem>
                    </GridContainer>
                  ),
                  content: <Content {...props} activeField={activeField} />,
                },
              ]}
            />
          </div>
        )}
      </GridItem>
      {!collapsed && <Content {...props} activeField={activeField} />}
    </>
  )
}

const Content = (props) => {
  const {
    grid,
    activeField,
    renderRow,
    field: { collapsed, view, fields },
  } = props
  const getGrid = () => (collapsed ? { input: 9, right: 0, label: 3 } : grid)

  return [
    fields.map((field, index) => {
      if (view === 'tabs' && index !== activeField) return null
      return <Fragment key={field.name}>{renderRow(field, { grid: getGrid() })}</Fragment>
    }),
  ]
}
