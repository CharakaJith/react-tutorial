import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentref = React.createRef();

    this.state = {};
  }

  handleFocus = () => {
    this.componentref.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentref} />
        <button onClick={this.handleFocus}>Focus input</button>
      </div>
    );
  }
}

export default FocusInput;
