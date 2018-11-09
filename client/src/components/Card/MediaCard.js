import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 250
  },
  media: {
    height: 200
  }
}

const actionWidth = {
  width: '100%'
}

function MediaCard(props) {
  const { classes } = props
  var urladd1 = props.currentTab.address1.split(' ').join('+');
  var urladd2 = props.currentTab.address2.split(' ').join('+');
  var urladd3 = props.currentTab.address3.split(' ').join('+');

  //If the third address includes the city/state data, change the url2 data to this...
  if (props.currentTab.address3.includes(',')) {
    urladd2 = props.currentTab.address3.split(' ').join('+');
  }


  let mapsLink = `https://www.google.com/maps/place/${urladd1}+${urladd2}`
  return (
    <Card className={classes.card}>
      {/* <CardActionArea
        disableTypography
        style = {actionWidth}
      > */}
      <CardMedia
        className={classes.media}
        image={props.currentTab.image}

      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2' style={{ fontSize: 30 }}>
          {props.currentTab.name}
        </Typography>
        {console.log('Media Card props below')}
        {console.log(props)}
        <Typography component='p' style={{ fontSize: 17 }}>
          <a style={{ color: 'black' }} href={mapsLink}>
            {props.currentTab.address1}
            <br />
            {props.currentTab.address2}
            <br />
            {props.currentTab.address3}
          </a>

          {/* <br /> */}
          <a style={{ color: 'black' }} href={props.currentTab.url}>Rating : {props.currentTab.rating} · {props.currentTab.reviewCount} reviews</a>
          {/* Reviews : {props.currentTab.reviewCount} */}

        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MediaCard)
