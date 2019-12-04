import React from 'react'
import Text from './Text'

export default {
  title: 'Form|Inputs/Text',
  parameters: {
    component: Text,
  },
}
const field = {}
export const withError = () => <Text error field={field} />
export const withSuccessAndHelpText = () => <Text field={field} helpText="Some useful info..." success />
