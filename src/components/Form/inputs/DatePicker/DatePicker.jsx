import React from 'react'
import Datetime from 'react-datetime'
import GridItem from '../../../../components/Grid/GridItem.jsx'
import FormControl from '@material-ui/core/FormControl'
import styles from './DatePicker.module.scss'
import FormHelperText from '@material-ui/core/FormHelperText'

function DatePicker({ onChange, value, sm, field: { name }, error, helpText, layout }) {
  const dateFormat = 'YYYY-MM-DD'

  const getSM = () => {
    if (layout === 'vertical') return 12
    if (sm) return sm
    return 7
  }

  const onDateChange = (e) => {
    if (e._isAMomentObject) {
      onChange({ target: { name, value: e.format(dateFormat) } })
    }
  }

  return (
    <GridItem className={styles.container} sm={getSM()} xs={12}>
      <FormControl fullWidth>
        <Datetime
          className={styles.datePicker}
          dateFormat={dateFormat}
          defaultValue={value}
          inputProps={{ value }}
          onChange={onDateChange}
          timeFormat={false}
        />
        {error && <FormHelperText className="text-danger">{helpText}</FormHelperText>}
      </FormControl>
    </GridItem>
  )
}

export default DatePicker
