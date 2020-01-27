import React from 'react'
import MUICheckbox from '@material-ui/core/Checkbox'
import GridItem from '../../../../components/Grid/GridItem.jsx'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Check from '@material-ui/icons/Check'
import styles from './Checkbox.module.scss'

function Checkbox ({ onChange, value, field: { name, label } }) {
  return (
    <GridItem sm={7} xs={12}>
      <FormControlLabel
        control={
          <MUICheckbox
            checked={!!value}
            checkedIcon={<Check className={styles.checkedIcon} />}
            classes={{
              checked: styles.checked,
              root: styles.checkRoot,
            }}
            color="default"
            icon={<Check className={styles.uncheckedIcon} />}
            name={name}
            onClick={onChange}
            tabIndex={-1}
          />
        }
        label={label}
      />
    </GridItem>
  )
}

export default Checkbox
