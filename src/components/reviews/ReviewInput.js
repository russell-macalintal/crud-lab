import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const review = Object.assign({}, this.state, {restaurantId: this.props.restaurantId});
    this.props.add(review);
    this.setState({
      text: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder="Review Content Here" value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
