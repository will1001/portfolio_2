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
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles({
  BgBox: BgBoxprops => ({
    backgroundColor: BgBoxprops.backgroundColor,
    color: BgBoxprops.color,
    minHeight: '100vh',
    fontFamily: 'Montserrat'
  }),
  asdf: {
    height: 150,
    width: 300,
    backgroundColor: '#aac45e',
    position: 'absolute',
    top: BgBoxprops => BgBoxprops.top,
    opacity: '50%',
    display: 'none'
  },
  abc: {
    cursor: 'pointer'
  },
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
  },
  showhologramProject: {
    display: 'block'
  }
})
const topbed = [
  {
    top: 113,
    right: 300
  },
  {
    top: 350,
    right: 0
  },
  {
    top: 350,
    right: 500
  }
]
const Asdf = topbed.map(a =>
  styled('div')({
    height: 150,
    width: 300,
    backgroundColor: '#aac45e',
    position: 'absolute',
    top: a.top,
    right: a.right,
    opacity: '50%'
  })
)

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
    color: stylesSetup.fontColor,
    top: 89
  }

  const classes = useStyles(BgBoxprops)

  const [holloProjectisOpen, setHolloProjectisOpen] = React.useState(false)
  const [zoomOut, setzoomOut] = React.useState('zoomOut')

  // prevent zoomOut effect when first render
  React.useEffect(() => {
    setzoomOut('zoomOut0')
  }, [])

  const openHollowProject = () => {
    setHolloProjectisOpen(!holloProjectisOpen)
    setzoomOut('zoomOut')
  }
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
          <div className={classes.abc}>
            <BgIllustration
              onClick={openHollowProject}
              className="BgIllustrationAnimation"
            />
          </div>
          {Asdf.map(Aaa => (
            <Aaa
              className={holloProjectisOpen ? 'zoomIn' : zoomOut}
              // style={{ display: holloProjectisOpen ? 'block' : 'none' }}
              key={uuidv4()}
            ></Aaa>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
