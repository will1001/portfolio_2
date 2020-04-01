/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { red } from '@material-ui/core/colors'
import PortfolioCardV2 from './PortfolioCardV2'
import CenterGrid from './CenterGrid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#dee3e2',
    padding: '0px 10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  neomorphic: {
    borderRadius: 10,
    background: '#dee3e2',
    boxShadow: '20px 20px 40px #bdc1c0, -20px -20px 40px #ffffff',
    width: 200,
    height: 50,
    margin: 35,
    fontFamily: 'Rubik',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  divider: {
    width: 100,
    height: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 15
  },
  sectionTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontFamily: 'Rubik'
  }
}))

export default function PortfolioSection() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <CenterGrid
        child={
          <>
            <h1 className={classes.sectionTitle}>PORTFOLIO</h1>
            <Divider className={classes.divider} />
          </>
        }
      />

      <Grid container>
        <Grid item xs={12} sm={4}>
          <PortfolioCardV2 />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PortfolioCardV2 />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PortfolioCardV2 />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CenterGrid
            child={
              <Link to="/portfolioGalery" style={{ textDecoration: 'none' }}>
                <Button
                  classes={{ root: classes.neomorphic }}
                  color="inherit"
                  variant="contained"
                >
                  More
                </Button>
              </Link>
            }
          />
        </Grid>
      </Grid>
    </Box>
  )
}
