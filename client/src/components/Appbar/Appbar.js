import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '../Drawer/Drawer'
import Typekit from 'react-typekit';

const styles = (theme) => ({
  // root: {
  //   [theme.breakpoints.down('sm')]: {
  //     minHeight: 30,
  //   top: 3,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   display: 'flex',
  //   position: 'relative',
  //   alignItems: 'center',
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //   }
  // },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    // [theme.breakpoints.up('xs')]: {
    // //   top: 'auto',
    // // bottom: 96,
    // // display:'none'
    // height: 30
    // },
    [theme.breakpoints.down('xs')]: {
    //   top: 'auto',
    // bottom: 96,
    height: 30,
    // height: 'initial',
    // display:'initial'

    }
  },
  typo: {
    [theme.breakpoints.down('xs')]: {
      bottom: 1.5,
      fontSize: 15,
      position: 'relative',
      bottom: 7.5

      }
    
  },
  h6: {
    [theme.breakpoints.down('xs')]: {
    fontSize: 15,
    flexGrow: 1,
    position: 'relative',
    bottom: 5,
    fontFamily: 'rig-solid-bold-reverse, sans-serif'
    // align: 'right'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 40,
      flexGrow: 1,
      position: 'relative',
      top: 5,
      // fontSize: 15,
      fontFamily: 'rig-solid-bold-reverse, sans-serif'
      // align: 'right'
      }
  }
  
})

function ButtonAppBar (props) {
  const { classes, drawerVisible, currentTab, toggleDrawerVisibility, deals } = props

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar class={classes.root}>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"> */}
          {/* <MenuIcon/> */}
          <Drawer handleOpen= {props.handleOpen} currentUserId={props.currentUserId} getUp={props.getUp} getDown={props.getDown} deals={deals} open={props.open} getModalState={props.getModalState} drawerVisible={drawerVisible} currentTab={currentTab} toggleDrawerVisibility={toggleDrawerVisibility} />
          {/* </IconButton> */}
          <Typography disableTypography  variant='h6'  color='inherit'  class = {classes.h6} className={classes.grow}>
            ORLANDRINKS
          </Typography>
          <Typekit kitId = 'vxf8xke' />

          {/* IMPLEMENT LOGOUT */}
          {
            !props.loggedIn
              ? <Button className={classes.typo} onClick={() => props.getLoggingInState(true)}  color='inherit'>Login</Button>
              : <Button className={classes.typo} onClick={() => props.getLoggingInState(true)}  color='inherit'>{props.currentUserName}</Button>

            // props.currentUserName
          }
          {/* <Button onClick = {() => props.getLoggingInState(true)} color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
