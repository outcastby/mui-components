import React from 'react'

import Grid from '@material-ui/core/Grid'

function GridContainer ({ ...props }) {
  const { classes = {}, children, className, ...rest } = props
  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  )
}

export default GridContainer
