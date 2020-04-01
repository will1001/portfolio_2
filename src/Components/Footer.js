/* eslint-disable space-before-function-paren */
import React from 'react'
import CenterGrid from './CenterGrid'
import { makeStyles } from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import GitHubIcon from '@material-ui/icons/GitHub'
import Grid from '@material-ui/core/Grid'
import NeumorphismBoxIcon from './NeumorphismBoxIcon'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#372857',
    color: '#ffffff',
    padding: 15
  },
  iconBox: {
    display: 'inline-block',
    '&:hover': {
      transform: 'scale(1.3)',
      transition: '500ms',
      cursor: 'pointer',
      color: '#afa9bb'
    }
  }
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="flex-end">
        <div>
          <div className={classes.iconBox}>
            <NeumorphismBoxIcon width={40} height={25} child={LinkedInIcon} />
          </div>
          <div className={classes.iconBox}>
            <NeumorphismBoxIcon width={40} height={25} child={MailIcon} />
          </div>
          <div className={classes.iconBox}>
            <NeumorphismBoxIcon width={40} height={25} child={GitHubIcon} />
          </div>
        </div>
      </Grid>

      <CenterGrid
        child={
          <>
            <a
              style={{ textDecoration: 'none', color: '#fff' }}
              href="http://www.freepik.com"
            >
              &copy; 2020 Designed by Freepik
            </a>
          </>
        }
      />
    </div>
  )
}
