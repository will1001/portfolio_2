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
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import Grid from '@material-ui/core/Grid'
import CenterGrid from './CenterGrid'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: 25
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '100%',
    height: '100%',
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
  },
  dividerHorizontal: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))

export default function PortfolioCard() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4} className={classes.cover}>
          <CardMedia
            className={classes.cover}
            image={projectImg}
            title="Preview Project"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={3}>
          <Divider className={classes.dividerHorizontal} />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <ListItem
                button
                onClick={() =>
                  window.open('https://will1001.github.io/portfolio_2/#/')
                }
              >
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Live Websites" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  window.open(
                    'https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwill1001.github.io%2Fportfolio_2%2F%23%2F&tab=desktop'
                  )
                }
              >
                <ListItemIcon>
                  <SpeedIcon />
                </ListItemIcon>
                <ListItemText primary="Website Performance" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  window.open('https://github.com/will1001/portfolio_2')
                }
              >
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="Source Code" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  window.open(
                    'http://iloveadaptive.com/url/https%3A%2F%2Fwill1001.github.io%2Fportfolio_2%2F'
                  )
                }
              >
                <ListItemIcon>
                  <PhoneIphoneIcon />
                </ListItemIcon>
                <ListItemText primary="Responsive View" />
              </ListItem>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}
