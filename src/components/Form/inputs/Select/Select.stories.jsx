import React from 'react'
import Select from './Select'

export default {
  title: 'Form|Inputs/Select',
  parameters: {
    component: Select,
  },
}
const field = { label: 'My Label', name: 'cities', allowEmpty: true }
const opts = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
]

export const withValue = () => <Select field={field} options={opts} value="one" />
export const multiple = () => <Select field={{ ...field, multiple: true }} options={opts} value={['one', 'three']} />
export const allowEmpty = () => <Select field={field} options={opts} />
