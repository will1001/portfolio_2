/* eslint-disable react/no-unescaped-entities */
/* eslint-disable space-before-function-paren */
import React from 'react'
import PortfolioSection from '../Components/PortfolioSection'
import AboutSection from '../Components/AboutSection'
import Footer from '../Components/Footer'

export default function LandingPage() {
  return (
    <>
      <AboutSection />

      <div className="PortfolioSection">
        <PortfolioSection />
      </div>

      <Footer />
    </>
  )
}
