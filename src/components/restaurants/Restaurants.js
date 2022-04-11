import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    console.log(this.props.restaurants)
    const restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete} />)
    return(
      <ul>{restaurants}</ul>
    );
  }
};

export default Restaurants;