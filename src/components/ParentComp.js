import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'CJ',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'CJ',
      });
    }, 2000);
  }

  render() {
    console.log('----- Parent Component -----');
    return (
      <div>
        <h1>Parent Component</h1>
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
