import React from 'react'
import { KeyboardDatePicker } from '@material-ui/pickers'
import GridItem from '../../../../components/Grid/GridItem.jsx'
import FormControl from '@material-ui/core/FormControl'
import styles from './DatePicker.module.scss'
import FormHelperText from '@material-ui/core/FormHelperText'

function DatePicker ({ onChange, value, sm, field: { name }, errors, layout }) {
  const dateFormat = 'yyyy-MM-dd'

  const getSM = () => {
    if (layout === 'vertical') return 12
    if (sm) return sm
    return 7
  }

  const handleChange = (date, value) => {
    if (date instanceof Date && !isNaN(date)) onChange({ target: { name, value } })
  }

  return (
    <GridItem className={styles.container} sm={getSM()} xs={12}>
      <FormControl fullWidth>
        <KeyboardDatePicker
          className={styles.datePicker}
          format={dateFormat}
          onChange={handleChange}
          value={value || new Date()}
        />
        {errors && <FormHelperText className="text-danger">{errors[0]}</FormHelperText>}
      </FormControl>
    </GridItem>
  )
}

export default DatePicker
