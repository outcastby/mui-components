import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment'
import Icon from '@material-ui/core/Icon'
import CustomInput from '../../../components/CustomInput/CustomInput.jsx'
import Close from '@material-ui/icons/Close'
import GridItem from '../../../components/Grid/GridItem.jsx'

function Text({
                success,
                error,
                helpText,
                onChange,
                value,
                sm,
                layout,
                field: { name, type, icon, label, defaultValue },
              }) {
  // TODO (atanych): unify that
  const getSM = () => {
    if (layout === 'vertical') return 12
    if (sm) return sm
    return 7
  }

  return (
    <GridItem xs={12} sm={getSM()}>
      <CustomInput
        labelText={layout === 'vertical' ? label : null}
        value={value || defaultValue}
        name={name}
        helpText={helpText}
        success={success}
        error={error}
        formControlProps={{ fullWidth: true }}
        inputProps={{
          onChange: onChange,
          type,
          endAdornment: <EndAdornment icon={icon} error={error} />,
        }}
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
