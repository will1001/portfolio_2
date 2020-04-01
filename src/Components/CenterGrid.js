/* eslint-disable space-before-function-paren */
import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

export default function CenterGrid(props) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      {props.child}
    </Grid>
  )
}

CenterGrid.propTypes = {
  child: PropTypes.element
}
