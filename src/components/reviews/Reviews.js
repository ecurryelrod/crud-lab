import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log(this.props.reviews)
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviews = restaurantReviews.map(review => <Review key={review.id} review={review} delete={this.props.delete} />)
    // debugger
    return (
      <ul>{reviews}</ul>
    );
  }
};

export default Reviews;