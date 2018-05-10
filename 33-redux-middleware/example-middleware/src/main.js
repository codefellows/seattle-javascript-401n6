import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

let root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<App />, root);
