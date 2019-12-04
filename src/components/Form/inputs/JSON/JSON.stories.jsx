import React from 'react'

import JSON from './JSON'

export default {
  title: 'Form|Inputs/JSON',
  parameters: {
    component: JSON,
  },
}
const field = {}
// eslint-disable-next-line
export const base = () => <JSON field={field} value={[1, 2, 3]} />
