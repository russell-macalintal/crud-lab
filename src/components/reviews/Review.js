import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, remove } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => remove(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
