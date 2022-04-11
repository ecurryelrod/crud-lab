import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  render() {
    const { restaurant } = this.props;
    // debugger
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(restaurant)}> x </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
