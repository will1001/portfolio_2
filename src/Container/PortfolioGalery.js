/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
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

export default function PortfolioGalery() {
  const stylesSetup = useSelector(state => state.StylesParameter.stylesSetup[0])
  const BgBoxprops = {
    backgroundColor: stylesSetup.primaryColor,
    color: stylesSetup.fontColor
  }
  const classes = useStyles(BgBoxprops)

  return (
    <>
      <Navbar
        iconMenu={<ArrowBackIcon />}
        navbarStyles={{ backgroundColor: stylesSetup.primaryColor }}
        link=""
      />
    </>
  )
}
