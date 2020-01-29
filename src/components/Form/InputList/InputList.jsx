import React from 'react'
import Icon from '@material-ui/core/Icon'
import GridItem from '../../../components/Grid/GridItem'
import Button from '../../../components/CustomButtons/Button'
import InfoPopover from '../../../components/InfoPopover'
import styles from '../InputRow/InputRow.module.scss'
import FormLabel from '@material-ui/core/FormLabel'
import Accordion from '../../../components/Accordion/Accordion.jsx'
import GridContainer from '../../../components/Grid/GridContainer'
import cs from 'classnames'

const InputList = (props) => {
  const { hasLabel, values, field, onAdd, onRemove, renderRow, errors } = props
  return (
    <GridContainer>
      <GridItem sm={3} xs={12}>
        {hasLabel && (
          <>
            <InfoPopover body={field.info} iconClass={styles.infoIcon} />
            <FormLabel className={styles.labelHorizontal}>{field.label}</FormLabel>
          </>
        )}
      </GridItem>
      <GridItem className="mt20" sm={7} xs={12}>
        <Button color="white" justIcon onClick={onAdd} round style={{ float: 'right' }}>
          <Icon>add</Icon>
        </Button>
      </GridItem>
      {!values.length && (
        <>
          <GridItem sm={3} xs={12} />
          <GridItem sm={7} xs={12}>
            <div className="mt10 mb10">No Elements</div>
          </GridItem>
        </>
      )}
      <GridItem sm={3} xs={12} />
      <GridItem sm={7} xs={12}>
        <Accordion
          collapses={values.map((item, j) => {
            return {
              title: (
                <GridContainer key={item.__uuid || j}>
                  <GridItem sm={10} xs={12}>
                    <div className={cs('ml10', { [styles.labelRootError]: errors && errors[j] })}>
                      {`#${j} ${item.type ? item.type : ''}`}
                    </div>
                  </GridItem>
                </GridContainer>
              ),
              content: (
                <GridContainer className="mt10" key={item.__uuid || j}>
                  {renderRow(field, j, { grid: { input: 9, right: 0, label: 3 } })}
                  <GridItem sm={12} xs={12}>
                    <Button color="white" justIcon onClick={() => onRemove(item)} round style={{ float: 'right' }}>
                      <Icon>delete</Icon>
                    </Button>
                  </GridItem>
                </GridContainer>
              ),
            }
          })}
        />
      </GridItem>
    </GridContainer>
  )
}

export default InputList
