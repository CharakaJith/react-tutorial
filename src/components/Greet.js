import React from 'react';

// this is a functional component
// function Greet() {
//   return <h1>Hello Jith</h1>;
// }

// this is a functional component
const Greet = (props) => {
  // destructuring props
  const { name, age } = props;

  return (
    <h1>
      Hello {name}! Age: {age ? age : 'unknown'}
    </h1>
  );
};

export default Greet;
