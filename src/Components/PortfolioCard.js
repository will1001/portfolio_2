/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import projectImg from '../Assets/portfolioProjectImg.jpg'
import Divider from '@material-ui/core/Divider'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'
import SpeedIcon from '@material-ui/icons/Speed'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import Grid from '@material-ui/core/Grid'
import CenterGrid from './CenterGrid'
import ListItemIconButton from './ListItemIconButton'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: 25
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.only('md')]: {
      // height: '39vh'
      marginRight: 25
    },
    [theme.breakpoints.only('sm')]: {
      height: '39vh'
    },
    [theme.breakpoints.down('xs')]: {
      height: 190
    }
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

export default function PortfolioCard() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={classes.cover}>
          <CardMedia
            className={classes.cover}
            image={projectImg}
            title="Preview Project"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CenterGrid
            child={
              <div>
                <CardHeader
                  title="TShirt Shop"
                  subheader="Category : e-commerce,shop,tshirt"
                />
                <h5>Stack / Technology used :</h5>
                <ul>
                  <li>React</li>
                  <li>React-router</li>
                  <li>Redux</li>
                  <li>Sass</li>
                  <li>Node Js</li>
                  <li>Express Js</li>
                  <li>Mongo db</li>
                </ul>
              </div>
            }
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={12} sm={5} md={3}>
          <CardContent className={classes.content}>
            <ListItemIconButton
              title="Live Websites"
              link="https://will1001.github.io/portfolio_2/#/"
              icon={LanguageIcon}
            />
            <ListItemIconButton
              title="Website Performance"
              link="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwill1001.github.io%2Fportfolio_2%2F%23%2F&tab=desktop"
              icon={SpeedIcon}
            />
            <ListItemIconButton
              title="Source Code"
              link="https://github.com/will1001/portfolio_2"
              icon={GitHubIcon}
            />
            <ListItemIconButton
              title="Responsive View"
              link="http://iloveadaptive.com/url/https%3A%2F%2Fwill1001.github.io%2Fportfolio_2%2F"
              icon={PhoneIphoneIcon}
            />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}
