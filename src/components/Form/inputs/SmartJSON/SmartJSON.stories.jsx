import React from 'react'
import SmartJSON from './SmartJSON'

export default {
  title: 'Form|Inputs/SmartJSON',
  parameters: {
    component: SmartJSON,
  },
}
const field = {
  fields: [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'type',
      label: 'Type',
      info: '# Mock Info Header',
      type: 'select',
      values: [
        { value: 'milestone', label: 'Milestone' },
        { value: '', label: 'Empty' },
      ],
      allowEmpty: true,
    },
  ],
}

const FakeRow = () => <div>InputRow</div>
export const base = () => (
  <SmartJSON config={{ InputRow: FakeRow }} field={field} value={{ name: 'Vasiliy', type: '' }} />
)
