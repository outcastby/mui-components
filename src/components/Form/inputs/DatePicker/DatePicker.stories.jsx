import React from 'react'
import DatePicker from './DatePicker'

export default {
  title: 'Form|Inputs/DatePicker',
  parameters: {
    component: DatePicker,
  },
}
const field = { label: 'My DatePicker' }
export const base = () => <DatePicker classes={{}} error field={field} />
