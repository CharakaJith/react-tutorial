import React from 'react';

function FunctionClick() {
  function clickHandler() {
    console.log('function button clicked');
  }

  return (
    <div>
      <button onClick={clickHandler}>Function Click</button>
    </div>
  );
}

export default FunctionClick;
