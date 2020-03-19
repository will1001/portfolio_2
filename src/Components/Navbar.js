/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

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

const MenuDivider = styled(Divider)({
  backgroundColor: '#ffffff',
  marginRight: '3em'
})

export default function Navbar() {
  const classes = useStyles()
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Grid
          container
          alignItems="center"
          className={classes.listMenuContainer}
        >
          <Typography variant="h6" className={classes.listMenu}>
            Home
          </Typography>
          <MenuDivider orientation="vertical" />
          <Typography variant="h6" className={classes.listMenu}>
            About Us
          </Typography>
          <MenuDivider orientation="vertical" />
          <Typography variant="h6" className={classes.listMenu}>
            Product
          </Typography>
          <MenuDivider orientation="vertical" />
          <Typography variant="h6" className={classes.listMenu}>
            Contact Us
          </Typography>
        </Grid>
      </Toolbar>
    </>
  )
}
