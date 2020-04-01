// eslint-disable-next-line space-before-function-paren
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
// import useMediaQuery from '@material-ui/core/useMediaQuery'

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
  }),
  button: {
    [theme.breakpoints.down('md')]: {
      padding: 10
    },
    [theme.breakpoints.down('sm')]: {
      padding: 1
    }
  }
}))

// eslint-disable-next-line space-before-function-paren
export default function NeumorphismBoxIcon(props) {
  // const theme = useTheme()
  // const xs = useMediaQuery(theme.breakpoints.down('xs'))
  // const sm = useMediaQuery(theme.breakpoints.only('sm'))
  // let width
  // let height

  // if (xs) {
  //   width = props.width - 5
  //   height = props.height - 5
  // }
  // if (sm) {
  //   width = props.width - 15
  //   height = props.height - 15
  // } else {
  //   width = props.width
  //   height = props.height
  // }

  const width = props.width
  const height = props.height

  const padding = (width - height) / 2
  const boxShadow1 = width / 10
  const boxShadow2 = (width / 10) * 2

  const Stylesprops = {
    width: width,
    height: height,
    padding: padding,
    boxShadow1: boxShadow1,
    boxShadow2: boxShadow2,
    hover: props.hover
  }

  const classes = useStyles(Stylesprops)

  return (
    <>
      <IconButton classes={{ root: classes.button }} color="inherit">
        <div className={classes.root}>
          <props.child classes={{ root: classes.icon }} />
        </div>
      </IconButton>
    </>
  )
}

NeumorphismBoxIcon.propTypes = {
  child: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  hover: PropTypes.object
}
