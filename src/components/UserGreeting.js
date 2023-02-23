import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // ----- short circuit approach  -----
    return (
      this.state.isLoggedIn && (
        <div>
          <h1>Welcome Cj</h1>
        </div>
      )
    );

    // ----- Ternary conditional approach -----
    // return (
    //   <div>
    //     {this.state.isLoggedIn ? <h1>Welsome CJ</h1> : <h1>Welcome Guest</h1>}
    //   </div>
    // );

    // ----- Element variable approach -----
    // let message;

    // if (this.state.isLoggedIn) {
    //   message = <h1>Welcome CJ</h1>;
    // } else {
    //   message = <h1>Welcome Guest</h1>;
    // }

    // return <div>{message}</div>;

    // ----- Normal if-else approach -----
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>
    //         <h1>Welcom CJ</h1>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>
    //         <h1>Welcom guest</h1>
    //       </div>
    //     </div>
    //   );
    // }
  }
}

export default UserGreeting;
