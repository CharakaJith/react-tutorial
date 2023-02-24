import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
    const { name } = this.props;

    console.log('----- Pure Component -----');
    return (
      <div>
        <h1>Pure Component {name}</h1>
      </div>
    );
  }
}

export default PureComp;
