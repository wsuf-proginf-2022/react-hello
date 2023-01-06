import React from 'react';
import { createRoot } from 'react-dom/client';
import Dog from './Dog';

// const App = () => {
//   return React.createElement('div', { id: 'hello' }, [
//     React.createElement(Dog, { name: 'Rex', breed: 'bulldog', color: 'brown' }),
//     React.createElement(Dog, {
//       name: 'Spot',
//       breed: 'labrador',
//       color: 'black'
//     })
//   ]);
// };

// expression: minden ami az egyenlőségjel jobb oldalán lehet (pl. függvény, változó, objektum, stb.)

const App = () => {
  // jsx
  return (
    <div id='hello' style={{ textAlign: 'center' }}>
      <h1>My Dogs</h1>
      <Dog name='Rex' breed='bulldog' color='brown' valami='cica' />
      <Dog name='Spot' breed='labrador' color='black' />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
