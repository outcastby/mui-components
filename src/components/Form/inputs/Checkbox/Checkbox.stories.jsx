import React from 'react'
import Checkbox from './Checkbox'

export default {
  title: 'Form|Inputs/Checkbox',
  parameters: {
    component: Checkbox,
  },
}
const field = { label: 'My Checkbox' }
export const base = () => <Checkbox classes={{}} error field={field} />
