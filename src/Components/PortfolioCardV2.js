/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'
import SpeedIcon from '@material-ui/icons/Speed'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import projectImg from '../Assets/portfolioProjectImg.jpg'
import NeumorphismBox from './NeumorphismBoxIcon'
import CenterGrid from './CenterGrid'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  cardActions: {
    backgroundColor: '#372857',
    color: '#ffffff'
  },
  expand: {
    transform: 'rotate(0deg)',
    color: '#ffffff',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}))

export default function PortfolioCardV2() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardHeader title="Shrimp and Chorizo Paella" />
            <CardMedia
              className={classes.media}
              image={projectImg}
              title="Paella dish"
            />

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </Typography>
                <h5>Technology used :</h5>
                <ul>
                  <li>React</li>
                  <li>React-router</li>
                  <li>Redux</li>
                  <li>Sass</li>
                  {/* <li>Node Js</li> */}
                  {/* <li>Express Js</li> */}
                  {/* <li>Mongo db</li> */}
                </ul>
              </CardContent>
            </Collapse>

            <CardActions className={classes.cardActions} disableSpacing>
              <CenterGrid
                child={
                  <div>
                    <NeumorphismBox
                      width={40}
                      height={25}
                      child={<LanguageIcon />}
                    />
                    <NeumorphismBox
                      width={40}
                      height={25}
                      child={<SpeedIcon />}
                    />
                    <NeumorphismBox
                      width={40}
                      height={25}
                      child={<GitHubIcon />}
                    />
                    <NeumorphismBox
                      width={40}
                      height={25}
                      child={<PhoneIphoneIcon />}
                    />
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </div>
                }
              />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
