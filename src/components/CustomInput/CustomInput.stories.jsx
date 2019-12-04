import React from 'react'
import CustomInput from './CustomInput'

export default {
  title: 'Base|Custom Input',
  parameters: {
    component: CustomInput,
    componentSubtitle: 'Custom Input',
  },
}

export const withLabel = () => <CustomInput labelText="Name" />
export const withHelpText = () => <CustomInput helpText="Look at that..." labelText="Name" />
export const withError = () => <CustomInput error labelText="Name" />
export const withSuccess = () => <CustomInput labelText="Name" success value="Atanych" />
