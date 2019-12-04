import React from 'react'
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'

import FormLabel from '@material-ui/core/FormLabel/FormLabel'
import PropTypes from 'prop-types'
import styles from './InputRow.module.scss'
import InfoPopover from '../../../components/InfoPopover'

const InputRow = (props) => {
  const {
    Input,
    hasLabel,
    grid,
    field: { label, info },
    layout,
  } = props

  return (
    <GridContainer>
      {layout === 'horizontal' && (
        <GridItem sm={grid.label || 3} xs={12}>
          {hasLabel && (
            <>
              <InfoPopover body={info} iconClass={styles.infoIcon} />
              <FormLabel className={styles.labelHorizontal}>{label}</FormLabel>
            </>
          )}
        </GridItem>
      )}
      <Input {...props} sm={grid.input || 7} />
      {grid.right !== 0 && <GridItem sm={grid.right} xs={12} />}
    </GridContainer>
  )
}

InputRow.propTypes = {
  actionType: PropTypes.oneOf(['edit', 'new']).isRequired,
  /**
   If config is not passed directly, usead configuration through Config.get(['jsExt', ...])
   */
  config: PropTypes.object,
  error: PropTypes.bool,
  field: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  }).isRequired,
  grid: PropTypes.object,
  helpText: PropTypes.string,
  id: PropTypes.number,
  /**
   Input representation.
   */
  layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  onChange: PropTypes.func.isRequired,
  success: PropTypes.bool,
  value: PropTypes.any.isRequired,
}

InputRow.defaultProps = {
  config: {},
  error: false,
  grid: {},
  helpText: null,
  id: null,
  success: false,
}

export default InputRow
