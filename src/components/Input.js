import React, { Component } from 'react';
import FocusInput from './FocusInput';

class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {};
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <div>
          <label>Name: </label>
          <input type="text" ref={this.inputRef} />
        </div>
        {/* <div>
          <label>Age: </label>
          <input type="text" />
        </div> */}
      </div>
    );
  }
}

export default Input;
