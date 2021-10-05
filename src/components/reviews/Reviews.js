import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    return (
      this.props.reviews.map( review => <Review key={review.id} review={review} remove={this.props.remove}/>)
    )
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;