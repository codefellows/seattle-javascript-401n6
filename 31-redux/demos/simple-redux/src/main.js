import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

let root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<App />, root);
