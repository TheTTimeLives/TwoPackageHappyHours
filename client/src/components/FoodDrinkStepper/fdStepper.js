import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ props }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  //   dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
  },
  appBar: {
    top: 'auto',
    bottom: 48,
    // [theme.breakpoints.up('xs')]: {
    //   height: 35,
    //   bottom: 40,

    // },
    [theme.breakpoints.down('sm')]: {
      // height: 'initial',
      // bottom: 'initial',
      height: 35,
      bottom: 40,

    },
    
    
  },
tabs: {
  fontSize: 15,
  // [theme.breakpoints.up('xs')]: {
  //   fontSize: 30
  // },
  // [theme.breakpoints.up('sm')]: {
  //   fontSize: 1
  // },
  


},
selected: {
  backgroundColor: 'white',
  fontSize: 15,
},
notselected: {
  backgroundColor: '#e0e0e0',
  fontSize: 15,
},
});

class FullWidthTabs extends React.Component {
  state = {
    value: 'hasFood'
  }
    // handleChange = (event, value) => {
    //   this.setState({ value });
    // };

  //   handleChangeIndex = index => {
  //     this.setState({ value: index });
  //   };

  callDealBoolean = (event, value) => {
    //running this breaks our code?
    // this.setState({ value });
    this.setState({ value: value });


    var returnObj = {}

    console.log("FDSTEPPER BELOW")
    console.log(value)

    console.log(event.target.attributes.getNamedItem('value'));
    this.props.sendDealBoolean(value)
    this.props.setStepperFdValue(value)
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
    const { classes } = this.props;
    const { value } = this.state;

    if (this.props.stepperFdValue == "All"){
      return (
        <div className={classes.root}>
          <AppBar position="fixed" color="default" className = {classes.appBar}>
            <Tabs
              value={this.props.stepperFdValue}
              onChange={this.callDealBoolean}
              indicatorColor="primary"
              textColor="primary"
              // scrollable
              // scrollButtons="on"
              fullWidth
             
            >
              {/* <Tab className = {this.getStyle('All')} value='All' label="All" /> */}
              <Tab  value='hasFood' label="Food" className = {this.getStyle('hasFood')} disabled/>
              <Tab  value='hasBoth' label="Both" className = {this.getStyle('hasBoth')} disabled/>
              <Tab  value='hasDrink' label="Drinks" className = {this.getStyle('hasDrink')} disabled/>
              {/* <Tab value='hasFood' label='hasFood'  disabled/>
              <Tab value='hasDrink' label='hasDrink'   disabled/> */}
  
            </Tabs>
          </AppBar>
  
        </div>
      );
    }
    else{
      return (
        <div className={classes.root}>
          <AppBar position="fixed" color="default" className = {classes.appBar}>
            <Tabs
              value={this.props.stepperFdValue}
              onChange={this.callDealBoolean}
              indicatorColor="primary"
              textColor="primary"
              // scrollable
              // scrollButtons="on"
              fullWidth
             
            >
              {/* <Tab className = {this.getStyle('All')} value='All' label="All" /> */}
              <Tab  value='hasFood' label="Food" className = {this.getStyle('hasFood')}/>
              <Tab  value='hasBoth' label="Both" className = {this.getStyle('hasBoth')}/>
              <Tab  value='hasDrink' label="Drinks" className = {this.getStyle('hasDrink')}/>
              {/* <Tab value='hasFood' label='hasFood' disabled/>
              <Tab value='hasDrink' label='hasDrink'   disabled/> */}
  
            </Tabs>
          </AppBar>
  
        </div>
      );

    }

    
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  //   theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);