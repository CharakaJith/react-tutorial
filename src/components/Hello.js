import React from 'react';

const Hello = () => {
  // this uses JSX
  //   return (
  //     <div className: 'sampleClass'>
  //       <h1>Hello Charaka</h1>
  //     </div>
  //   );

  // this does not use JSX
  return React.createElement(
    'div',
    { id: 'sampleId', className: 'sampleClass' },
    React.createElement('h1', null, 'Hello Gunasinghe')

    // JSX will keep the code elegant, simple and readable
  );
};

export default Hello;
