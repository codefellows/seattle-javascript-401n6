import React from 'react';
import ReactDOM from 'react-dom';
import movie from './spaghetti.mp4';
import './style.css';

const App = () => {
  return <div className="App">
    <h1>Easy-to-prepare Spaghetti</h1>
    <video controls="true" autoplay="true" src={movie}></video>
  </div>
};

ReactDOM.render(<App />, document.getElementById('root'));
