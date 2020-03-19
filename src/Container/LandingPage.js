/* eslint-disable react/no-unescaped-entities */
/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as BgIllustration } from '../Assets/illustration.svg'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Navbar from '../Components/Navbar'
import './LandingPage.css'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  BgBox: BgBoxprops => ({
    backgroundColor: BgBoxprops.backgroundColor,
    color: BgBoxprops.color,
    minHeight: '100vh',
    fontFamily: 'Montserrat'
  }),
  bodyContent: {
    paddingLeft: 27,
    fontFamily: 'Rubik',
    '& h1': {
      fontSize: 65
    },
    '& h6': {
      fontSize: 21,
      letterSpacing: 3,
      fontWeight: 'lighter'
    },
    '& p': {
      lineHeight: '25px'
    }
  }
})

const PortfolioButton = styled(Button)({
  backgroundColor: '#ff2fcb',
  color: '#ffffff',
  borderRadius: 25,
  padding: '5px 23px',
  textTransform: 'none',
  background:
    'linear-gradient(-135deg, rgba(0,235,255,1) 0%, rgba(255,47,204,1) 100%)'
})

export default function LandingPage() {
  const stylesSetup = useSelector(state => state.StylesParameter.stylesSetup[0])
  const BgBoxprops = {
    backgroundColor: stylesSetup.primaryColor,
    color: stylesSetup.fontColor
  }
  const classes = useStyles(BgBoxprops)

  return (
    <Box className={classes.BgBox}>
      <Navbar
        iconMenu={<MenuIcon />}
        navbarStyles={{ boxShadow: 'none', backgroundColor: 'transparent' }}
        link="/navbarMenu"
      />
      <Grid container className={classes.bodyContent}>
        <Grid item xs={4}>
          <h6>Front-End Developer</h6>
          <h1>Wili Rahmat Muhamad</h1>
          <p>
            Hiii , i'm a freelance front-end developer based in Indonesian.Click
            the button below to check my portfolio.
          </p>
          <Link to="/portfolioGalery" style={{ textDecoration: 'none' }}>
            <PortfolioButton>My Portfolio</PortfolioButton>
          </Link>
        </Grid>
        <Grid item xs={8}>
          <BgIllustration className="BgIllustrationAnimation" />
        </Grid>
      </Grid>
    </Box>
  )
}
