/* eslint-disable space-before-function-paren */
import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'

export default function ListItemIconButton(props) {
  return (
    <>
      <ListItem button onClick={() => window.open(props.link)}>
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItem>
    </>
  )
}

ListItemIconButton.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string
}
