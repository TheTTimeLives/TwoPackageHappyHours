import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { withRouter } from 'react-router-dom';



import { STATES } from 'mongoose';
const AnyReactComponent = ({ address1, address2, address3, restaurantName, hasFood, hasDrink, image, url, rating, review_count, id, onClick, thumbnail, style }) => <div myid={id}>{<img z-index='1' src={require('../Images/2xthumbnailline.png')} id={id} data-address1={address1} data-address2={address2} data-address3={address3} data-restaurantname={restaurantName} data-hasfood={hasFood} data-hasdrink={hasDrink} data-image={image} data-url={url} data-rating={rating} data-review_count={review_count} onClick={onClick} />}</div>;
const AnyReactComponentGrey = ({ address1, address2, address3, restaurantName, hasFood, hasDrink, image, url, rating, review_count, id, onClick, thumbnail, style }) => <div myid={id}>{<img z-index='20' src={require('../Images/2xthumbnailgreyline.png')} id={id} data-address1={address1} data-address2={address2} data-address3={address3} data-restaurantname={restaurantName} data-hasfood={hasFood} data-hasdrink={hasDrink} data-image={image} data-url={url} data-rating={rating} data-review_count={review_count} onClick={onClick} />}</div>;

const button = ({ text }) => <div>{<button onClick={this.myFilter}><img src={require('../Images/1xLocation.png')} /></button>}</div>;

const styles = theme => ({
  index: {
    zIndex: 5
  }
});

const mapCredentials =  { key: 'AIzaSyA46ttkQXjotLXDI1xpNOCkUz5GCRRrQTI' }

class SimpleMap extends Component {
  //the top of our lifecycle, and a state always has to be declared here
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     center: {
  //       lat: 28.5383355,
  //       lng: -81.37923649999999
  //     },
  //     latitude: '',
  //     longitude: '',
  //     categories: [],
  //     Restaurants: props.Restaurants,
  //     //have to fix this because it won't allow our state to update
  //   }
  // }

  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 28.5383355,
        lng: -81.37923649999999
      },
      zoom: 11,
      categories: [],
      Restaurants: props.Restaurants,
    }
  }

  // the second level of our lifecycle, a static prop that just exists. FOR SOME REASON, THE MAP HOC NEEDS A STATIC PROP, WHICH MAKES LIFE DIFFICULT.
  // static defaultProps = {
  //   center: {
  //     lat: 28.5383355,
  //     lng: -81.37923649999999
  //   },
  //   zoom: 11
  // };

  // static getDerivedStateFromProps = (props, state) => {
  //   this.setState({
  //     Restaurants: props.Restaurants,
  //   })
  // }

  checkGeolocation = () => {
    // console.log('Geolocation called');
    if (!navigator.geolocation) {
      console.log('Geolocation unsupported!')
      return
    }

    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Geolocation supported. Show position called');
      if (!position.coords) {
        console.log('Coords not found')
        return
      }

      this.setState({
        coords: position.coords,
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        Restaurants: this.props.Restaurants,
      })
    })
  }

  componentDidMount() {
    this.checkGeolocation()
  }



  handleRestaurantClick = (restaurant, event) => {

    const [address1 = '', address2 = '', address3 = ''] = restaurant.address

    const card = {
      id: restaurant._id,
      name: restaurant.restaurantName,
      alias: restaurant.restaurantAlias,
      hasFood: restaurant.hasFood,
      hasDrink: restaurant.hasDrink,
      image: restaurant.image,
      url: restaurant.url,
      rating: restaurant.rating,
      reviewCount: restaurant.review_count,
      address1,
      address2,
      address3
    }

    this.props.filterRestaurants(card)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps
    })
  }


  render() {

    const { classes } = this.props;

    // debugger;
    const {center, zoom} = this.state


    return (
      // Important! Always set the container height explicitly
      //API Key is bootstrapURLKeys

      <div style={{ height: '100vh', width: '100%' }}>

        
    <GoogleMapReact
          bootstrapURLKeys={mapCredentials}
          defaultCenter={center}
          center={center}
          defaultZoom={zoom}
        >

          {console.log('The A Component was rendered')}
          {this.state.Restaurants.map(restaurant => {

            console.log('A restaurant being logged', restaurant.deals);
            if (restaurant.deals == undefined || restaurant.deals.length < 1) {
              console.log('This restaurant is empty', restaurant.deals);

              return <AnyReactComponentGrey
                restaurant={restaurant}
                key={restaurant._id}
                lat={restaurant.coordinates.latitude}
                lng={restaurant.coordinates.longitude}
                onClick={this.handleRestaurantClick.bind(this, restaurant)}
                className={classes.index}
                style={{ zIndex: '1' }}


              />
            }

            // console.log('restaurant', restaurant)
            return <AnyReactComponent
              restaurant={restaurant}
              key={restaurant._id}
              lat={restaurant.coordinates.latitude}
              lng={restaurant.coordinates.longitude}
              onClick={this.handleRestaurantClick.bind(this, restaurant)}
              style={{ zIndex: '10' }}

            />

          })}

          </GoogleMapReact>

      
      </div>
          );
        }
      }
SimpleMap.propTypes = {
            classes: PropTypes.object.isRequired,
          theme: PropTypes.object.isRequired,
        };
        
export default withStyles(styles, {withTheme: true })(SimpleMap);
          // export default withRouter(SimpleMap);
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
