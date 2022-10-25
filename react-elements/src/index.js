import React from 'react';
import * as ReactDOM from 'react-dom';

const h1React = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
console.log('React.createElement:', h1React);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(h1React);
