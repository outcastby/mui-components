import React from 'react'
import Button from './Button'

export default {
  title: 'Base|Button',
  parameters: {
    component: Button,
  },
}
export const primary = () => <Button color="primary">Primary</Button>
export const rose = () => <Button color="rose">Rose</Button>
export const success = () => <Button color="success">Success</Button>
export const pinterest = () => <Button color="pinterest">Pinterest</Button>
