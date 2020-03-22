/* eslint-disable space-before-function-paren */
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  listMenuContainer: {
    width: 'fit-content',
    height: '20px',
    marginRight: theme.spacing(6)
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat'
  },
  listMenu: {
    marginRight: theme.spacing(5),
    fontFamily: 'Montserrat',
    '&:hover': {
      cursor: 'pointer',
      color: '#8B68FF'
    },
    fontSize: 17
  }
}))

export default function Navbar(props) {
  const classes = useStyles()
  return (
    <AppBar position="static" style={props.navbarStyles}>
      <Toolbar className={classes.toolbar}>
        <Link style={{ color: '#ffffff' }} to={props.link}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {props.iconMenu}
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  iconMenu: PropTypes.element.isRequired,
  navbarStyles: PropTypes.object,
  link: PropTypes.string
}
