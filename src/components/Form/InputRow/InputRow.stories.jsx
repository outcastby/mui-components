import React from 'react'
import InputRow from './InputRow'

export default {
  title: 'Form|InputRow',
  parameters: {
    component: InputRow,
  },
}
const Input = () => <input />

export const base = () => <InputRow field={{ label: 'My Label' }} hasLabel Input={Input} layout="horizontal" />
