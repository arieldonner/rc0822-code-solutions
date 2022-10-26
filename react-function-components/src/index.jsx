import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  return <button>Click Me!</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <CustomButton />;
root.render(element);
