/* eslint-disable space-before-function-paren */
// import React, { useState, useEffect } from 'react'
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PortfolioCard from '.././Components/PortfolioCard'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '100%',
    height: '400px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}))

export default function PortfolioGalery() {
  //   const [inProp, setInProp] = useState(false)
  const stylesSetup = useSelector(state => state.StylesParameter.stylesSetup[0])
  const classes = useStyles()
  const theme = useTheme()
  //   const BgBoxprops = {
  //     backgroundColor: stylesSetup.primaryColor,
  //     color: stylesSetup.fontColor
  //   }
  //   const classes = useStyles(BgBoxprops)

  return (
    <>
      <Navbar
        iconMenu={<ArrowBackIcon />}
        navbarStyles={{ backgroundColor: stylesSetup.primaryColor }}
        link="/"
      />
      <div
        style={{ padding: 55, backgroundColor: '#f5f5f5', minHeight: '100%' }}
      >
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </>
  )
}
