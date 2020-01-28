import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'

export default function File ({ errors, classes = {}, id, field, value, onChange }) {
  return (
    <div>
      <input name={field.name} onChange={onChange} type="file" />
      {errors && <FormHelperText className={classes.labelRootError}>{errors[0]}</FormHelperText>}
      {field.bottomComponent && value && <field.bottomComponent id={id} value={value} />}
    </div>
  )
}
