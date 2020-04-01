/* eslint-disable react/no-unescaped-entities */
/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { ReactComponent as BgIllustration } from '../Assets/illustration.svg'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Navbar from './Navbar'
import './AboutSection.css'
import MenuIcon from '@material-ui/icons/Menu'
import { v4 as uuidv4 } from 'uuid'
import CenterGrid from './CenterGrid'
import { Link as Lk, animateScroll as scroll } from 'react-scroll'

const useStyles = makeStyles(theme => ({
  BgBox: BgBoxprops => ({
    backgroundColor: BgBoxprops.backgroundColor,
    color: BgBoxprops.color,
    minHeight: '100%',
    fontFamily: 'Montserrat',
    padding: 10
  }),
  BgIllustrationAnimation: {
    animation: 'BgIllustrationAnimation infinite 2000ms linear',
    height: 600,
    [theme.breakpoints.down('xs')]: {
      height: 215
    },
    [theme.breakpoints.only('sm')]: {
      height: 385
    }
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
    },
    [theme.breakpoints.down('sm')]: {
      '& h1': {
        fontSize: 40
      }
    }
  },
  showhologramProject: {
    display: 'block'
  }
}))

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

const HoloBox = topbed.map(a =>
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

export default function AboutSection() {
  const stylesSetup = useSelector(state => state.StylesParameter.stylesSetup[0])

  const BgBoxprops = {
    backgroundColor: stylesSetup.primaryColor,
    color: stylesSetup.fontColor,
    top: 89
  }

  const classes = useStyles(BgBoxprops)

  const [holloProjectIsOpen, setholloProjectIsOpen] = React.useState(false)
  const [zoomOut, setzoomOut] = React.useState('zoomOut')

  const scrollToNextSection = () => {
    scroll.scrollToTop()
  }

  // prevent zoomOut effect when first render
  React.useEffect(() => {
    setzoomOut('zoomOut0')
  }, [])

  const openHollowProject = () => {
    setholloProjectIsOpen(!holloProjectIsOpen)
    setzoomOut('zoomOut')
  }
  return (
    <Box className={classes.BgBox}>
      <Navbar
        // iconMenu={<MenuIcon />}
        navbarStyles={{ boxShadow: 'none', backgroundColor: 'transparent' }}
        link="/navbarMenu"
      />
      <Grid container className={classes.bodyContent}>
        <Grid item xs={12} sm={4}>
          <h6>React JS Developer</h6>
          <h1>Wili Rahmat Muhamad</h1>
          <p>
            Hiii , i'm a freelance React JS developer based in Indonesian.Click
            the button below to check my portfolio.
          </p>
          {/* <Link to="/portfolioGalery" style={{ textDecoration: 'none' }}> */}
          <Lk
            to="PortfolioSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <PortfolioButton onClick={scrollToNextSection}>
              My Portfolio
            </PortfolioButton>
          </Lk>

          {/* </Link> */}
        </Grid>
        <Grid item xs={12} sm={8}>
          <CenterGrid
            child={
              <>
                <div>
                  <BgIllustration
                    onClick={openHollowProject}
                    className={classes.BgIllustrationAnimation}
                  />
                </div>
                {HoloBox.map(Item => (
                  <Item
                    className={holloProjectIsOpen ? 'zoomIn' : zoomOut}
                    key={uuidv4()}
                  ></Item>
                ))}
              </>
            }
          />
        </Grid>
      </Grid>
    </Box>
  )
}
