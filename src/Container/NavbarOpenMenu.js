import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../Components/Navbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles({
  BgBox: BgBoxprops => ({
    backgroundColor: BgBoxprops.backgroundColor,
    color: BgBoxprops.color,
    minHeight: '100vh',
    fontFamily: 'Montserrat'
  })
})

export default function NavbarOpenMenu () {
  const stylesSetup = useSelector(state => state.StylesParameter.stylesSetup[0])
  const BgBoxprops = {
    backgroundColor: stylesSetup.primaryColor,
    color: stylesSetup.fontColor
  }
  const classes = useStyles(BgBoxprops)

  return (
    <Box className={classes.BgBox}>
      <Navbar
        iconMenu={<ArrowBackIcon />}
        navbarStyles={{ boxShadow: 'none', backgroundColor: 'transparent' }}
        link="/"
      />
      <ul>
        <li>asdfgh</li>
        <li>asdfgh</li>
        <li>asdfgh</li>
        <li>asdfgh</li>
        <li>asdfgh</li>
      </ul>
    </Box>
  )
}
