import React from 'react'
import GridContainer from './GridContainer'
import GridItem from './GridItem'

export default {
  title: 'Base|GridContainer',
  parameters: {
    component: GridContainer,
  },
}
export const base = () => (
  <GridContainer classes={{}}>
    <GridItem>1</GridItem>
    <GridItem>2</GridItem>
    <GridItem>3</GridItem>
  </GridContainer>
)
