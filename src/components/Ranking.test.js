import React from 'react';
import ReactDOM from 'react-dom';
import Ranking from './Ranking';

const players = [
  {
    "_id":"54908024bf00e1ce19a2a36e",
    "name":"Fernando Fragoso",
    "phone":"8848-2529",
    "points":110,
    "__v":0,
    "matches":[]
  }
];


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ranking players={players} />, div);
  ReactDOM.unmountComponentAtNode(div);
});