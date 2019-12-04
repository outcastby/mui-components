import React from 'react'
import Accordion from './Accordion'
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'

export default {
  title: 'Base|Accordion',
  parameters: {
    component: Accordion,
    componentSubtitle: 'Accordion',
  },
}

const items = [
  { title: 'One', body: <h2>One</h2> },
  { title: 'Two', body: <h2>Two</h2> },
]
export const base = () => (
  <Accordion
    active={1}
    collapses={items.map((item, j) => {
      return {
        title: (
          <GridContainer key={item.__uuid || j}>
            <GridItem sm={12} xs={12}>
              {item.title}
            </GridItem>
          </GridContainer>
        ),
        content: (
          <GridContainer className="mt10" key={item.__uuid || j}>
            <GridItem sm={12} xs={12}>
              {item.body}
            </GridItem>
          </GridContainer>
        ),
      }
    })}
  />
)
