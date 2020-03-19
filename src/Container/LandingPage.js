/* eslint-disable react/no-unescaped-entities */
/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { ReactComponent as BgIllustration } from '../Assets/illustration.svg'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Navbar from '../Components/Navbar'
import "./LandingPage.css";

const useStyles = makeStyles({
  BgBox: BgBoxprops => ({
    backgroundColor: BgBoxprops.backgroundColor,
    color: BgBoxprops.color,
    minHeight: '100vh',
    paddingTop: '30px',
    fontFamily: 'Montserrat'
  }),
  bodyContent: {
    padding: '20px 46px',
    fontFamily: 'Rubik',
    // lineHeight: '7px',
    '& img': {
      height: 600
      // animation: 'mymove 5s infinite',
      // '@keyframes mymove': {
      //   from: { opacity: 1 },
      //   to: { opacity: 0 }
      // }
    },
    '& h1': {
      fontSize: 55
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


const coba = styled(BgIllustration)({
  display: "block",
  margin: "auto",
  width: "25em",
  height: "25em"
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
      <Navbar />
      <Grid container className={classes.bodyContent}>
        <Grid item xs={4}>
          <h6>Front-End Developer</h6>
          <h1>Wili Rahmat Muhamad</h1>
          <p>
            Hiii , i'm a freelance front-end developer based in Indonesian,okay
            that's all, just click the button below to check my portfolio.
          </p>
          <PortfolioButton>My Portfolio</PortfolioButton>
        </Grid>
        <Grid item xs={8}>
          <BgIllustration className="gbr" />
          <coba>
            
          </coba>

        </Grid>
      </Grid>
    </Box>
  )
}
