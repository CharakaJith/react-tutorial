import React, { Component } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.callbackRef = null;

    this.setCallbackRef = (element) => {
      this.callbackRef = element;
    };

    this.state = {};
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    if (this.callbackRef) {
      this.callbackRef.focus();
    }
  }

  submitHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <div>
          <label>Name: </label>
          <input type="text" ref={this.inputRef} />
        </div>
        <div>
          <label>Age: </label>
          <input type="text" ref={this.setCallbackRef} />
        </div>
        <div>
          <button type="submit" onClick={this.submitHandler}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default RefsDemo;
