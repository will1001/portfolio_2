/* eslint-disable space-before-function-paren */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
    //   marginLeft: '50%'
    }
  },
  listText: {
    [theme.breakpoints.down('sm')]: {
    //   display: 'none'
    }
  }
}))

export default function ListItemIconButton(props) {
  const classes = useStyles()

  return (
    <>
      <ListItem
        classes={{ root: classes.root }}
        button
        onClick={() => window.open(props.link)}
      >
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
        <ListItemText
          classes={{ root: classes.listText }}
          primary={props.title}
        />
      </ListItem>
    </>
  )
}

ListItemIconButton.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string
}
