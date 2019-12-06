import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'

export default function File({ helpText, error, classes = {}, id, field, value, onChange }) {
  return (
    <div>
      <input name={field.name} onChange={onChange} type="file" />
      {error && <FormHelperText className={classes.labelRootError}>{helpText}</FormHelperText>}
      {field.bottomComponent && value && <field.bottomComponent id={id} value={value} />}
    </div>
  )
}
