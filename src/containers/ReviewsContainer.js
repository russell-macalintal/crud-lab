import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} add={this.props.add}/>
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)} remove={this.props.remove}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: review => dispatch({type: 'ADD_REVIEW', review: review}),
    remove: reviewId => dispatch({type: 'REMOVE_REVIEW', reviewId: reviewId})
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
