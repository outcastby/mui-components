import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'
import { fp } from '@outcast.by/js-ext'
import CustomInput from '../../../CustomInput/CustomInput.jsx'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import GridItem from '../../../Grid/GridItem'
import GridContainer from '../../../Grid/GridContainer'
import styles from './Range.module.scss'

export default function Range ({ errors, classes = {}, value: [start, end], value, onChange, field: { name } }) {
  const handleChange = ({ target }) => onChange({ target: { value: fp.setIn(value, target.name, target.value), name } })

  return (
    <GridItem className={styles.container} sm={7} xs={12}>
      <GridContainer>
        <GridItem sm={5} xs={12}>
          <CustomInput
            formControlProps={{ fullWidth: true }}
            inputProps={{ onChange: handleChange }}
            name="0"
            value={start}
          />
        </GridItem>
        <GridItem sm={2} xs={12}>
          <div className={styles.iconContainer}>
            <MoreHorizIcon className={styles.icon} />
          </div>
        </GridItem>
        <GridItem sm={5} xs={12}>
          <CustomInput
            formControlProps={{ fullWidth: true }}
            inputProps={{ onChange: handleChange }}
            name="1"
            value={end}
          />
        </GridItem>
      </GridContainer>
      {errors && <FormHelperText className={classes.labelRootError}>{errors[0]}</FormHelperText>}
    </GridItem>
  )
}
