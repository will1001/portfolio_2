/* eslint-disable space-before-function-paren */
// import React, { useState, useEffect } from 'react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PortfolioCard from '.././Components/PortfolioCard'

export default function PortfolioGalery() {
  const stylesSetup = useSelector(state => state.StylesParameter.stylesSetup[0])
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
