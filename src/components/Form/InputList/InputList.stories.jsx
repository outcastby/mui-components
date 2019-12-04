import React from 'react'
import InputList from './InputList'

export default {
  title: 'Form|InputList',
  parameters: {
    component: InputList,
  },
}

const Input = () => <input />
export const base = () => (
  <InputList field={{ label: 'My Label' }} hasLabel Input={Input} layout="horizontal" values={[]} />
)
