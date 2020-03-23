import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment'
import Icon from '@material-ui/core/Icon'
import CustomInput from '../../../components/CustomInput/CustomInput.jsx'
import Close from '@material-ui/icons/Close'
import GridItem from '../../../components/Grid/GridItem.jsx'

function Text ({ success, errors, onChange, value, sm, layout, field: { name, type, icon, label, defaultValue } }) {
  // TODO (atanych): unify that
  const getSM = () => {
    if (layout === 'vertical') return 12
    if (sm) return sm
    return 7
  }

  const getValue = (value) => {
    if (value === 0 || value) return value
    if (defaultValue) return defaultValue
    return ''
  }

  return (
    <GridItem sm={getSM()} xs={12}>
      <CustomInput
        error={!!errors}
        formControlProps={{ fullWidth: true }}
        helpText={errors && errors[0]}
        inputProps={{
          onChange: onChange,
          type,
          endAdornment: <EndAdornment error={!!errors} icon={icon} />,
        }}
        labelText={layout === 'vertical' ? label : null}
        name={name}
        success={success}
        value={getValue(value)}
      />
    </GridItem>
  )
}

const EndAdornment = ({ icon, error }) => {
  if (icon) {
    return (
      <InputAdornment position="end">
        <Icon>{icon}</Icon>
      </InputAdornment>
    )
  }

  if (error) {
    return (
      <InputAdornment position="end">
        <Close className="text-danger" />
      </InputAdornment>
    )
  }

  return null
}

export default Text
