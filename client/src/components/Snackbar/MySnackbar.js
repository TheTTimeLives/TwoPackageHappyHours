import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';



const styles = {
    root: {
        background: 'green',
        borderRadius: 0
    }
};

class MySnackbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Snackbar
                open={this.props.open}
                anchorOrigin={this.props.anchorOrigin}
                onClose={this.props.onClose}
                ContentProps={{
                    classes: {
                        root: classes.root
                    }
                }}
                message={<span>{this.props.snackText}</span>}
            />
        );
    }
}

export default withStyles(styles)(MySnackbar);