import React, { Component } from 'react';
// import Restaurant from './Restaurant';
// import { connect } from 'react-redux';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({
      text: ''
    })
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Restaurant Name" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     add: (restaurant) => dispatch({type: 'ADD_RESTAURANT', restaurant: restaurant})
//   }
// }

// export default connect(null, mapDispatchToProps)(RestaurantInput);

export default RestaurantInput;