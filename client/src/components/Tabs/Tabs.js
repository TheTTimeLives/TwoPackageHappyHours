import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    zIndex: "2",
    display: "flex",
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    
      top: 'auto',
    bottom: 96,
    // display:'none'
    // [theme.breakpoints.up('xs')]: {
    //   height: 35,
    //   bottom: 75,
    // },
    [theme.breakpoints.down('sm')]: {
      height: 35,
      bottom: 75,

    },
  },
  selected: {
    backgroundColor: 'white'
  },
  notselected: {
    backgroundColor: '#e0e0e0'
  },
  indicator: {
    backgroundColor: 'yellow',
  },
});

class ScrollableTabsButtonAuto extends React.Component {
    state = {
      catState: this.props.restaurant,
      value: "All"
    }

    callFoodCat = (event, value) => {
      this.setState({ value });
      this.setState({ value });
      console.log('TARGET BELOW');
      console.log(value);
      // send callback
      // console.log(event.target.i);
      console.log(event.target.attributes.getNamedItem('value'));
      this.props.sendFoodCat(value)
    }

    getStyle = (myValue) => {
      // return isActive ? this.props.classes.selected : this.props.classes.notselected
      // console.log('THIS IS ACTIVE', isActive,this.props.foodCat,this, event.target)
      console.log('LOOK HERE',this.props.foodCat)

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



    return (
      <div className={classes.root}>
    {console.log("THIS IS REST CAT")}
    {/* {console.log(this.props.tabValue)} */}
    {console.log(this.state.value)}
    {console.log(this.props)}


        <AppBar position="fixed" color="default" className = {classes.appBar}>
          <Tabs
            value={value}
            onChange={this.callFoodCat}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="on"
            // classes = {classes.selected}
            // classes={{
            //   indicator: classes.indicator
            // }}>

            
            
          >
            <Tab  className = {this.getStyle('All')} value = 'All' label="All" />
            <Tab  className = {this.getStyle('American (New)')} value = 'American (New)' label="American" />
            <Tab  className = {this.getStyle('Barbeque')} value = 'Barbeque' label="BBQ" />
            <Tab  className = {this.getStyle('Burgers')} value = 'Burgers' label="Burgers" />
            <Tab  className = {this.getStyle('Cafes')} value = 'Cafes' label="Cafes" />
            <Tab  className = {this.getStyle('Chinese')} value = 'Chinese' label="Chinese" />
            <Tab  className = {this.getStyle('French')} value = 'French' label="French" />
            <Tab  className = {this.getStyle('Italian')} value = 'Italian' label="Italian" />
            <Tab  className = {this.getStyle('Mediterranean')} value = 'Mediterranean' label="Mediterranean" />
            <Tab  className = {this.getStyle('Tex-Mex')} value = 'Tex-Mex' label="Mexican" />
            <Tab  className = {this.getStyle('Swedish')} value = 'Swedish' label="Swedish" />
            <Tab  className = {this.getStyle('Thai')} value = 'Thai' label="Thai" />
            <Tab  className = {this.getStyle('Vietnamese')} value = 'Vietnamese' label="Vietnamese" />
          </Tabs>
        </AppBar>
        {/* {value === "American (New)" && <TabContainer>American</TabContainer>}
        {value === "Chinese" && <TabContainer>Chinese</TabContainer>}
        {value === "Tex-Mex" && <TabContainer>Tex-Mex</TabContainer>}
        {value === "French" && <TabContainer>French</TabContainer>}
        {value === "Swedish" && <TabContainer>Swedish</TabContainer>}
        {value === "Mediterranean" && <TabContainer>Mediterranean</TabContainer>}
        {value === "Italian" && <TabContainer>Italian</TabContainer>} */}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);