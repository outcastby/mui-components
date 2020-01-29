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
   If config is not passed directly, used configuration through Config.get(['jsExt', ...])
   */
  config: PropTypes.object,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  field: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  }).isRequired,
  grid: PropTypes.object,
  id: PropTypes.number,
  /**
   Input representation.
   */
  layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  onChange: PropTypes.func.isRequired,
  success: PropTypes.bool,
  value: PropTypes.any,
}

InputRow.defaultProps = {
  config: {},
  errors: null,
  grid: {},
  id: null,
  success: false,
  value: null,
}

export default InputRow
