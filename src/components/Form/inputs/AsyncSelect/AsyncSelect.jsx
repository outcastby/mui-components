import React from 'react'
import cs from 'classnames'
import Select from 'react-select/async'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import CancelIcon from '@material-ui/icons/Cancel'
import { useStyles } from './AsyncSelectStyle'
import GridItem from '../../../../components/Grid/GridItem.jsx'

const NoOptionsMessage = ({ children, innerProps, selectProps: { classes } }) => (
  <Typography className={classes.noOptionsMessage} color="textSecondary" {...innerProps}>
    {children}
  </Typography>
)

// eslint-disable-next-line react/no-multi-comp
const inputComponent = ({ inputRef, ...props }) => <div ref={inputRef} {...props} />

// eslint-disable-next-line react/no-multi-comp
const Control = ({ children, innerProps, innerRef, selectProps: { classes, TextFieldProps } }) => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: classes.input,
        ref: innerRef,
        children,
        ...innerProps,
      },
    }}
    {...TextFieldProps}
  />
)

// eslint-disable-next-line react/no-multi-comp
const Option = ({ innerRef, isFocused, innerProps, children }) => (
  <MenuItem
    component="div"
    ref={innerRef}
    selected={isFocused}
    style={{
      fontWeight: isFocused ? 500 : 400,
    }}
    {...innerProps}
  >
    {children}
  </MenuItem>
)

// eslint-disable-next-line react/no-multi-comp
const Placeholder = ({ selectProps, innerProps = {}, children }) => (
  <Typography className={selectProps.classes.placeholder} color="textSecondary" {...innerProps}>
    {children}
  </Typography>
)

// eslint-disable-next-line react/no-multi-comp
const SingleValue = ({ selectProps: { classes }, innerProps, children }) => (
  <Typography className={classes.singleValue} {...innerProps}>
    {children}
  </Typography>
)

// eslint-disable-next-line react/no-multi-comp
const ValueContainer = ({ selectProps: { classes }, children }) => (
  <div className={classes.valueContainer}>{children}</div>
)

// eslint-disable-next-line react/no-multi-comp, react/jsx-handler-names
const MultiValue = ({ isFocused, removeProps, children, selectProps: { classes } }) => (
  <Chip
    className={cs(classes.chip, { [classes.chipFocused]: isFocused })}
    deleteIcon={<CancelIcon {...removeProps} />}
    label={children}
    onDelete={removeProps.onClick} // eslint-disable-line react/jsx-handler-names
    tabIndex={-1}
  />
)

// eslint-disable-next-line react/no-multi-comp
const Menu = ({ children, innerProps, selectProps: { classes } }) => (
  <Paper className={classes.paper} square {...innerProps}>
    {children}
  </Paper>
)

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
}

// eslint-disable-next-line react/no-multi-comp
export default function AsyncSelect({ field: { name, loadOptions }, onChange, value, internalLabel }) {
  const classes = useStyles()
  const theme = useTheme()

  const handleChange = (value, { name }) => {
    onChange({ target: { value, name } })
  }

  const selectStyles = {
    input: (base) => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  }

  return (
    <GridItem sm={internalLabel ? 12 : 7} xs={12}>
      <Select
        cacheOptions
        classes={classes}
        components={components}
        defaultOptions
        isMulti
        loadOptions={loadOptions}
        name={name}
        onChange={handleChange}
        placeholder={`Select ${name}`}
        styles={selectStyles}
        value={value}
      />
    </GridItem>
  )
}
