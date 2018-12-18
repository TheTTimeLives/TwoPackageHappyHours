import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  // root: {
  //   backgroundColor: theme.palette.background.paper,
  //   width: "auto",
  //   bottom: 0,
  //   height: 100
  // },
  appBar: {
    top: 'auto',
    bottom: 0,
    // [theme.breakpoints.up('xs')]: {
    //   height: 40,
    // },
    [theme.breakpoints.down('sm')]: {
      height: 40,
    },

  },
  tabs: {
    // textColorPrimary: {
    //   color: 'red'
    // }
    // fontSize: 10,
    height: '1px'

  },
  wrapper: {
    height: '1px'
  },
  labelContainer: {
    height: '1px'
  },
  labelContainer: {
    height: '1px'
  },
  fullWidth: {
    height: '1px'

  },
  selected: {
    backgroundColor: 'white',
    fontSize: 18,

  },
  notselected: {
    backgroundColor: '#f4f4f4',
    fontSize: 18,

  },

});



class FullWidthTabs extends React.Component {
  state = {
    value: 'Days'
  }


  callTimeValue = (event, value) => {
    var returnObj = {}
    this.setState({
      value: value
    })

    console.log("time value below");
    console.log(value);

    console.log(event.target.attributes.getNamedItem('value'));
    this.props.sendTimeValue(value)
    this.props.setStepperValue(value)
  }

  getStyle = (myValue) => {

    console.log('LOOK HERE',myValue, this.state.value, this.props.classes)

    if (myValue == this.state.value){
      return this.props.classes.selected
    }
    else{
      return this.props.classes.notselected
    }
  }


  render() {
    const { classes, theme } = this.props;

    if (this.props.stepperFdValue == 'All'){
      return (
        <div className={classes.root}>
          <AppBar position="fixed" color="default" className={classes.appBar}>
            <Tabs
              value={this.props.stepperValue}
              onChange={this.callTimeValue}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
              scrollable
            >
              <Tab value='Days' label={this.props.currentDay} className = {this.getStyle('Days')} disabled/>
              <Tab value='Time' label={this.props.currentTimePresent} className={classes.wrapper} className={classes.labelContainer} className={classes.fullWidth} className = {this.getStyle('Time')} disabled/>
            </Tabs>
          </AppBar>
        </div>
      );
    }
    else{
      return (
        <div className={classes.root}>
          <AppBar position="fixed" color="default" className={classes.appBar}>
            <Tabs
              value={this.props.stepperValue}
              onChange={this.callTimeValue}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
              scrollable
            >
              <Tab value='Days' label={this.props.currentDay} className = {this.getStyle('Days')} />
              <Tab value='Time' label={this.props.currentTimePresent} className={classes.wrapper} className={classes.labelContainer} className={classes.fullWidth} className = {this.getStyle('Time')}/>
            </Tabs>
          </AppBar>
        </div>
      );
    }


   
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);