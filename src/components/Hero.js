import React from 'react';

function Hero({ name }) {
  if (name === 'CJ') {
    throw new Error('invalid name');
  }

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default Hero;
