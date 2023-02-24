import React, { Component } from 'react';

class RegularComp extends Component {
  render() {
    const { name } = this.props;

    console.log('----- Regular Component -----');
    return (
      <div>
        <h1>Regular Component {name}</h1>
      </div>
    );
  }
}

export default RegularComp;
