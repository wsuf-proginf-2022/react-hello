import React from 'react';

// const Dog = (props) => {
//   return React.createElement('div', null, [
//     React.createElement('h1', null, props.name),
//     React.createElement('h2', null, props.breed),
//     React.createElement('h2', null, props.color)
//   ]);
// };

const Dog = (props) => {
  console.log(props);
  return (
    <div className='dog'>
      <h1>{props.name}</h1>
      <h2>{props.breed}</h2>
      <h2>{props.color}</h2>
    </div>
  );
};

export default Dog;
