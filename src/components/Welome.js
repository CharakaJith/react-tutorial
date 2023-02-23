import React, { Component } from 'react';

// this is a class component
class Welocme extends Component {
  render() {
    // destructuring props
    const { name } = this.props;

    return <h1>Welcome {name}</h1>;
  }
}

export default Welocme;
