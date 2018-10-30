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
    // return isActive ? this.props.classes.selected : this.props.classes.notselected
    // console.log('THIS IS ACTIVE', isActive,this.props.foodCat,this, event.target)
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
    // const { classes } = this.props;


    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Tabs
            // value={this.props.stepperValue}\
            value={this.props.stepperValue}
            onChange={this.callTimeValue}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            scrollable
          >
            {/* what is the value that this is gonna send? The value will be the command to set the relevant modals to open. */}
            <Tab value='Days' label={this.props.currentDay} className = {this.getStyle('Days')} />
            <Tab value='Time' label={this.props.currentTimePresent} className={classes.wrapper} className={classes.labelContainer} className={classes.fullWidth} className = {this.getStyle('Time')}/>
            {/* <Tab value = 'Now' label="Now" />
            <Tab value = 'Custom' label="Custom" /> */}
          </Tabs>
        </AppBar>
        {/* {value === 'Now' && <TabContainer>Now</TabContainer>}
        {value === 'Custom' && <TabContainer>Custom</TabContainer>} */}
        {/* <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Item One</TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews> */}
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);