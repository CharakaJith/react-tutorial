import React from 'react';
import Person from './Person';

function NameList() {
  const names = ['A', 'B', 'C', 'D', 'A'];
  //   const NameList = names.map((name) => <h1>{name}</h1>);

  const people = [
    {
      id: 1,
      personName: 'a',
      age: 18,
    },
    {
      id: 2,
      personName: 'B',
      age: 19,
    },
    {
      id: 3,
      personName: 'C',
      age: 22,
    },
    {
      id: 4,
      personName: 'D',
      age: 32,
    },
  ];
  //   const personList = people.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));
  const nameList = names.map((name, index) => (
    <h1 key={index}>
      {index}: {name}
    </h1>
  ));

  return (
    // ----- Static approach -----
    // <div>
    //   <h1>{names[0]}</h1>
    //   <h1>{names[1]}</h1>
    //   <h1>{names[2]}</h1>
    //   <h1>{names[3]}</h1>
    // </div>

    // ----- Dynamic approach -----
    // <div>
    //   {names.map((name) => (
    //     <h1>{name}</h1>
    //   ))}
    // </div>

    // ----- Dynamic approach simplified -----
    // <div>{NameList}</div>
    // <div>{personList}</div>
    <div>{nameList}</div>
  );
}

export default NameList;
