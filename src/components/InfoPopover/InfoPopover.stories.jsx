import React from 'react'
import InfoPopover from './InfoPopover'

export default {
  title: 'Base|InfoPopover',
  parameters: {
    component: InfoPopover,
  },
}
export const base = () => <InfoPopover body={'# Header\n```a = b + 1```'} />
