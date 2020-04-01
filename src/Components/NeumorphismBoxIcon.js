// eslint-disable-next-line space-before-function-paren
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  root: Stylesprops => ({
    borderRadius: 10,
    background: '#372857',
    boxShadow: `${Stylesprops.boxShadow1}px ${Stylesprops.boxShadow1}px ${
      Stylesprops.boxShadow2
    }px #2f224a , ${-Stylesprops.boxShadow1}px ${-Stylesprops.boxShadow1}px ${
      Stylesprops.boxShadow2
    }px #3f2e64`,
    width: Stylesprops.width,
    height: Stylesprops.height,
    padding: `${Stylesprops.padding}px 0px`,
    '&:hover': Stylesprops.hover
  })
}))

// eslint-disable-next-line space-before-function-paren
export default function NeumorphismBoxIcon(props) {
  const padding = (props.width - props.height) / 2
  const boxShadow1 = props.width / 10
  const boxShadow2 = (props.width / 10) * 2

  const Stylesprops = {
    width: props.width,
    height: props.height,
    padding: padding,
    boxShadow1: boxShadow1,
    boxShadow2: boxShadow2,
    hover: props.hover
  }

  const classes = useStyles(Stylesprops)

  return (
    <>
      <IconButton color="inherit">
        <div className={classes.root}>{props.child}</div>
      </IconButton>
    </>
  )
}

NeumorphismBoxIcon.propTypes = {
  child: PropTypes.element,
  width: PropTypes.number,
  height: PropTypes.number,
  hover: PropTypes.object
}
