import React from 'react'
import Form from './Form'
import FormComponents from '../Form'

export default {
  title: 'Form|Form',
  parameters: {
    component: Form,
  },
}
const settings = {
  layout: 'horizontal',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
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

console.log('FormComponents', FormComponents)
export const base = () => (
  <Form
    config={FormComponents}
    entity={{ name: 'Vasiliy', type: '' }}
    errors={{}}
    onChange={() => console.log('onChange')}
    onSubmit={() => console.log('onSubmit')}
    settings={settings}
    state={{ name: 'Vasiliy', type: '' }}
    type="new"
  />
)
