import React from 'react';

function Person(props) {
  const { person } = props;

  return (
    <div>
      <h1>
        Hello {person.personName} age of {person.age}! your id is {person.id}.
      </h1>
    </div>
  );
}

export default Person;
