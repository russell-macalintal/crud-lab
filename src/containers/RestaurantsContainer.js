import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        {console.log(this.props.restaurants)}
        <RestaurantInput add={this.props.add}/>
        <Restaurants restaurants={this.props.restaurants} remove={this.props.remove}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (restaurant) => dispatch({type: 'ADD_RESTAURANT', restaurant: restaurant}),
    remove: (restaurantId) => dispatch({type: 'REMOVE_RESTAURANT', restaurantId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
