import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    
  },
  input: {
    display: 'none',
  },
  rootActive: {
    position: 'fixed',
    // backgroundColor: 'primary',
    bottom: 150,
    left: 59,
    borderRadius: 0,
    zindex: 500,
    // position: 'fixed',
    width: 156,
    [theme.breakpoints.down('sm')]: {
    //   // height: 'initial',
    //   // bottom: 'initial',
    //   height: 35,
      bottom: 110,

    },
  }
});

function ContainedButtons(props) {
  const { classes } = props;

  if (props.stepperFdValue == 'All'){
    return (
      <div>
        <Button variant="contained" className={classes.button} className = {classes.rootActive}  onClick = {() => props.setStepperFdValue('hasFood')}>
          ALL RESTAURANTS
        </Button>
      </div>
    );
  }
  else{
    return (
      <div>
        <Button variant="contained" className={classes.button} className = {classes.rootActive} color = 'primary' onClick = {() => props.setStepperFdValue('All')}>
          ALL DEALS
        </Button>
      </div>
    );
  }
  
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);