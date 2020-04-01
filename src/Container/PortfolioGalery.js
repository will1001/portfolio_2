/* eslint-disable space-before-function-paren */
// import React, { useState, useEffect } from 'react'
import React, { useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PortfolioCard from '.././Components/PortfolioCard'
import PortfolioCardV2 from '.././Components/PortfolioCardV2'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 55,
    backgroundColor: '#f5f5f5',
    minHeight: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: 5
    }
  }
}))

export default function PortfolioGalery() {
  const stylesSetup = useSelector(state => state.StylesParameter.stylesSetup[0])
  const theme = useTheme()
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar
        iconMenu={<ArrowBackIcon />}
        navbarStyles={{ backgroundColor: stylesSetup.primaryColor }}
        link="/"
      />
      <div className={classes.root}>
        {matches ? <PortfolioCardV2 /> : <PortfolioCard />}
        {matches ? <PortfolioCardV2 /> : <PortfolioCard />}
        {matches ? <PortfolioCardV2 /> : <PortfolioCard />}
      </div>
    </>
  )
}
