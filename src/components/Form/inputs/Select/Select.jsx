import React from 'react'
import _ from 'lodash'
import FormControl from '@material-ui/core/FormControl'
import MUISelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import GridItem from '../../../../components/Grid/GridItem.jsx'
import styles from './Select.module.scss'

const Select = ({ layout, sm, onChange, value, field: { name, multiple, allowEmpty, label }, options }) => {
  const getSM = () => {
    if (sm) return sm
    return layout === 'vertical' ? 12 : 7
  }

  const normalizedName = _.isArray(name) ? name.join(',') : name

  return (
    <GridItem sm={getSM()} xs={12}>
      <FormControl className={styles.selectFormControl} fullWidth>
        {(value || allowEmpty) && (
          <MUISelect inputProps={{ name: normalizedName }} multiple={multiple} onChange={onChange} value={value}>
            <MenuItem disabled>{`Choose ${label}`}</MenuItem>
            {options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </MUISelect>
        )}
      </FormControl>
    </GridItem>
  )
}

export default Select
