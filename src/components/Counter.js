import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     counter: this.state.counter + 1,
    //   },
    //   () => {
    //     console.log(`count: ${this.state.counter}`);
    //   }
    // );

    this.setState((prevState, props) => ({
      counter: prevState.counter + 1,
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    // destructuring states
    const { counter } = this.state;

    return (
      <div>
        <h1>count: {counter}</h1>
        <button onClick={() => this.incrementFive()}>Count</button>
      </div>
    );
  }
}

export default Counter;
