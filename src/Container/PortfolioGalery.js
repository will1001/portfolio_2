/* eslint-disable space-before-function-paren */
// import React, { useState, useEffect } from 'react'
import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

// const useStyles = makeStyles({
//   BgBox: BgBoxprops => ({
//     backgroundColor: BgBoxprops.backgroundColor,
//     color: BgBoxprops.color,
//     minHeight: '100vh',
//     fontFamily: 'Montserrat'
//   })
// })

// const duration = 1000

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0
// }

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 0 },
//   exited: { opacity: 0 }
// }

export default function PortfolioGalery() {
  //   const [inProp, setInProp] = useState(false)
  const stylesSetup = useSelector(state => state.StylesParameter.stylesSetup[0])
  //   const BgBoxprops = {
  //     backgroundColor: stylesSetup.primaryColor,
  //     color: stylesSetup.fontColor
  //   }
  //   const classes = useStyles(BgBoxprops)
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setInProp(true)
  //     }, 100)
  //     return () => clearTimeout(timer)
  //   }, [])

  return (
    <>
      {/* <Transition in={inProp} timeout={500}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <Navbar
              iconMenu={<ArrowBackIcon />}
              navbarStyles={{ backgroundColor: stylesSetup.primaryColor }}
              link="/"
            />
          </div>
        )}
      </Transition> */}
      <Navbar
        iconMenu={<ArrowBackIcon />}
        navbarStyles={{ backgroundColor: stylesSetup.primaryColor }}
        link="/"
      />
    </>
  )
}
